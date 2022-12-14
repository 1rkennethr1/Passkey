import { Box, Button, Link, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const MoraTwitter = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [register, setRegister] = useState({
        username: "",
        password: "",
    });

    const [isLogin, setIsLogin] = useState(false);
    const [isNotCreated, setIsNotCreated] = useState(false);
    const [post, setPost] = useState("");
    const [loggedUser, setLogged] = useState<any>();
    const [posts, setPosts] = useState<any>();
    const [replyPost, setReply] = useState({
        id: "",
        reply: "",
    });
    const changeHandler = (e: any) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });
    };
    const changeHandler1 = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const replyHandler = (e: any) => {
        const { name, value } = e.target;
        setReply({ ...replyPost, [name]: value });
    };
    const createUser = () => {
        axios("http://hyeumine.com/forumCreateUser.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            data: {
                username: register.username,
                password: register.password,
            },
        })
            .then((res) => console.log(res))
            .finally(() => {
                setIsNotCreated(false);
                setRegister({ username: "", password: "" });
            });
    };
    const login = async () => {
        await axios("http://hyeumine.com/forumLogin.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            data: {
                username: user.username,
                password: user.password,
            },
        })
            .then((res) => {
                console.log(res.data);
                setLogged(res.data.user);
            })
            .finally(() => setIsLogin(true));
    };
    useEffect(() => {
        axios("http://hyeumine.com/forumGetPosts.php").then((e) => {
            setPosts(e.data);
            console.log(e.data);
        });
    }, []);
    const createPost = () => {
        axios("http://hyeumine.com/forumNewPost.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            data: {
                id: loggedUser?.id,
                post: post,
            },
        });
    };
    const reply = () => {
        axios("http://hyeumine.com/forumReplyPost.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            data: {
                user_id: loggedUser?.id,
                post_id: replyPost?.id,
                reply: replyPost?.reply,
            },
        });
    };

    return (
        <div>
            {!isLogin && (
                <div>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        height: "100vh",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100vw",
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '15vw',
                            gap: '.7rem'
                        }}>
                            <div>
                                <h1 style={{ color: '#1DA1F2' }}>{isNotCreated ? "Create User" : "Please Login"}</h1>
                                {isNotCreated ? (
                                    //REGISTER
                                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        <TextField id="username" label="Username" name="username" value={register.username} variant="filled" onChange={changeHandler} />
                                        <   TextField id="password" label="Password" name="password" variant="filled" type={"password"} value={register.password} onChange={changeHandler} />
                                    </div>
                                ) : (
                                    //LOGIN
                                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        <TextField label="Username" name="username" value={user.username} onChange={changeHandler1} />
                                        <TextField label="Password" type={"password"} value={user.password} name="password" onChange={changeHandler1} />
                                    </div>
                                )}
                                {/* REGISTER / LOGIN BUTTON */}
                                <br></br>
                                <Button size ="large" variant="contained" onClick={isNotCreated ? createUser : login}>{isNotCreated ? "Create User" : "Login"}
                                </Button>
                                <div>
                                    <p onClick={() => setIsNotCreated(!isNotCreated)} style={{ color: "#2b6cb0", cursor: "pointer", fontSize: "14px"}}>
                                        {isNotCreated ? "Login" : "Sign-Up"}
                                    </p>
                                </div>
                            </div>
                        </Box>
                    </Box>
                </div>
            )}
            {isLogin && loggedUser && (
                <div style={{ display: "flex", gap: "20rem" }}>
                    <Box sx={{
                        display: "flex",
                        gap: "20px",
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                            <h1 style={{ color: '#1DA1F2' }}> Welcome {user.username}{"!"}</h1>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <p>Create Post</p>
                                <TextField value={post} onChange={(e) => setPost(e.target.value)} />
                                <Button onClick={createPost} variant="contained">
                                    Create Post
                                </Button>
                            </div>
                            <div>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                    marginTop: "20px",
                                }}>
                                    <p className="mb-4">Reply</p>
                                    <TextField
                                        label="Post ID"
                                        value={replyPost.id}
                                        type="number"
                                        name="id"
                                        onChange={replyHandler}
                                    />
                                    <TextField
                                        label="Reply"
                                        value={replyPost.reply}
                                        name="reply"
                                        onChange={replyHandler}
                                    />
                                    <Button onClick={reply} variant="contained">
                                        Reply Post
                                    </Button>
                                </Box>
                            </div>
                        </Box>
                    </Box>
                    <div>
                        <Box sx={{
                            width: "30rem",
                            border: "1px solid #cecece76",
                            borderRadius: "10px",
                            padding: "10px",
                        }}>
                            <h1 style={{ color: '#1DA1F2' }}>All Posts</h1>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px",
                                overflowY: "scroll",
                                height: "30rem",
                            }}>
                                {posts.map((post: any) => {
                                    return (
                                        <div
                                            key={post.id}
                                            style={{
                                                padding: "1rem",
                                                borderRadius: "6px",
                                                boxShadow: "2px 2px 6px #000000e",
                                            }}
                                        >
                                            <p style={{ marginBottom: "4px", fontWeight: "700" }}>
                                                User: {post.user}
                                            </p>

                                            <p style={{ fontSize: "18px", lineHeight: "28px" }}>
                                                Post ID: {post.id}
                                                <br></br>
                                                Post: "{post.post}"
                                            </p>
                                            {post.reply?.length > 0 && (
                                                <h4 style={{ marginTop: "20px", marginBottom: "5px" }}>
                                                    Replies:{" "}
                                                </h4>
                                            )}
                                            <div>
                                                {post.reply?.map((e: any, i: number) => {
                                                    return (
                                                        <div
                                                            key={i}
                                                            style={{
                                                                marginBottom: "8px",
                                                                fontSize: "16px",
                                                                lineHeight: "20px",
                                                            }}
                                                        >
                                                            <p style={{ fontWeight: 600, color: "#333" }}>
                                                                {e.user}
                                                            </p>
                                                            <p>{e.reply}</p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </Box>
                        </Box>
                    </div>
                </div>
            )}

        </div>
    )
};

export default MoraTwitter;

