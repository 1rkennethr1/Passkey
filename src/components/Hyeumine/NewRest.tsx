import { Box, Button, Link, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const MyNotes = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [loggedUser, setLogged] = useState<any>();
    const [posts, setPosts] = useState<any>();
    const [isLogin, setIsLogin] = useState(false);
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
    const changeHandler1 = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    
    return(
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
                <h1 style={{color:'#1DA1F2'}}> Please Log-In</h1>
                <TextField
                                label="Username"
                                name="username"
                                value={user.username}
                                onChange={changeHandler1}
                            />
                            <TextField
                                label="Password"
                                type={"password"}
                                value={user.password}
                                name="password"
                                onChange={changeHandler1}
                            />
                <Button variant="contained" onClick={login}>LOGIN</Button>
                <Link sx={{
                    marginRight: '10rem'
                }}href="./components/Hyeumine/SignUp">Sign-Up</Link>
            </Box>
        </Box>
    </div>
    )
};

export default MyNotes;

function setUser(arg0: any) {
    throw new Error("Function not implemented.");
}
