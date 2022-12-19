import { Box, Button, Card, TextField } from "@mui/material";
import { fontSize } from "@mui/system";
import { useEffect, useState } from "react";
import { useRest } from "./useREST"

const MyNotes = () => {
    const [newUser, newNote, sendRequest, data, loading, error, user] = useRest();
    const [hyuser, setUser] = useState<any>(
        // @ts-ignore
        JSON.parse(localStorage.getItem("hyeumine-user")) || [] 
    );
    const [note, setNote] = useState<string>("");
    const [mynotes, setMynotes] = useState<any[][]>([]); 

    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://hyeumine.com/mynotes.php?id=" + hyuser.id, 
        });
        if (data) {
            setMynotes(data.notes);
        }
    }, [data]);

    if (!hyuser.id) {
        return (
            <Box
                sx={{
                    display: "flex",
                    height: "100vh",
                    width: "100vw",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                className="">
                <Button
                    variant="contained" size="large" sx={{
                        width: "10  rem",
                        height: "4rem",
                        background: "#4d948b",
                        fontSize: "20px"
                    }}
                    onClick={() => {
                        newUser({
                            id: -1,
                            firstname: "Romel Kenneth", // change this
                            lastname: "Recabo", // change this
                        });
                        setUser(user);
                    }}>
                    Create A New User
                </Button>
            </Box>
        );
    } 

    return (
        <div className="">
            {hyuser.id && (
                <div>
                    <div>
                        {hyuser && (
                            <div
                                style={{ fontWeight: "bold", fontSize: "2rem", paddingTop: "10rem"}}
                                className="">
                                [{hyuser.id}] {hyuser.firstname} {hyuser.lastname}
                            </div>
                        )}
                    </div>
                    <div>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1.5rem",
                        height: "60vh",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100vw",
                    }} className="">

                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            overflowY: data ? (data?.notes.length > 0 ? "scroll" : "") : "",
                            height: "25rem",
                        }}>
                            {data && mynotes.map((e) => {
                                return (
                                    <Card sx={{ 
                                        p: ".5rem",
                                        backgroundColor: "#4d948b"
        
                                    }}className="">
                                        {e[0]} {e[1]}
                                    </Card>
                                );
                            })}
                        </Box>
                        <p>Create New Note</p>
                        <TextField
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            label = "Enter Note"
                            variant = "outlined"
                            multiline
                            rows={7}
                            color = "success"
                            sx={{
                                input: { color: 'white' },
                            }}
                        />
                        <Button
                            onClick={() => {
                                newNote(
                                    {
                                        id: hyuser.id,
                                        note: note,
                                    },
                                    hyuser.id
                                );
                                sendRequest({
                                    method: "GET",
                                    url: "http://hyeumine.com/mynotes.php?id=" + hyuser.id, 
                                });
                                setNote("");
                            }}
                            variant="contained" size="large" sx={{
                                width: "8rem",
                                height: "3rem",
                                background: "#4d948b"
                            }}>
                            Submit
                        </Button>
                    </Box>
                </div>
                </div>
            )}
        </div>
    );
};

export default MyNotes;
