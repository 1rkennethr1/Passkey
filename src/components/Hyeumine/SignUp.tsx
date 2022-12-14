import { Box, Button, Link, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const SignUp = () => {
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
                <h1> Create User</h1>
                <TextField id="username"  label="User Name" variant="filled" />
                <TextField id="password" label="Password" variant="filled" />
                <Button variant="contained">Sign Up</Button>
                <br />
            </Box>
        </Box>
    </div>
    )
};

export default SignUp;