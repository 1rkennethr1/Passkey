import { Box, Button, Card, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useRest } from "./useREST"

const MyNotes = () => {
    const [newUser, newNote, sendRequest, data, loading, error, user] = useRest();
    const [hyuser, setUser] = useState<any>(
        // @ts-ignore
        JSON.parse(localStorage.getItem("hyeumine-user")) || [] // kwaon ang naka set na user sa local storage para di na mo balik ug create para chuy ba lobton ka ron
    );
    const [note, setNote] = useState<string>(""); // paras input nga note
    const [mynotes, setMynotes] = useState<any[][]>([]); // ga set ug mynotes nga state para mugwapo ko
    useEffect(() => {
        sendRequest({
            method: "GET",
            url: "http://hyeumine.com/mynotes.php?id=" + hyuser.id, //imong id,
        });
        if (data) {
            setMynotes(data.notes);
        }
    }, [data]);

    if (!hyuser.id) {
        // if walay user then create a new user amawa o
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
                    variant="contained"
                    onClick={() => {
                        newUser({
                            id: -1,
                            firstname: "Romel Kenneth", // change this
                            lastname: "Recabo", // change this
                        });
                        setUser(user);
                    }}>
                    Create A User
                </Button>
            </Box>
        );
    } // pang usba ni diri mga yawa

    return (
        <div className="">
            {hyuser.id && (
                <div>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        height: "100vh",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100vw",
                    }}
                        className="">
                        {hyuser && (
                            <div
                                style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                                className="">
                                [{hyuser.id}] {hyuser.firstname} {hyuser.lastname}
                            </div>
                        )}
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            overflowY: data ? (data?.notes.length > 0 ? "scroll" : "") : "",
                            height: "20rem",
                        }}>
                            {data && mynotes.map((e) => {
                                    return (
                                        <Card sx={{ p: "2rem" }} className="">
                                            {e[0]} {e[1]}
                                        </Card>
                                    );
                                })}
                        </Box>
                        <p>Create new note</p>
                        <TextField
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            label="Note"
                            variant="outlined"
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
                                    url: "http://hyeumine.com/mynotes.php?id=" + hyuser.id, //imong id,
                                });
                                setNote("");
                            }}
                            variant="contained">
                            Submit
                        </Button>
                    </Box>
                </div>
            )}
        </div>
    );
};

export default MyNotes;
