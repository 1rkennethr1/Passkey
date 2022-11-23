import { Box, Button, createTheme, Grid, TextField, ThemeProvider } from "@mui/material";
import { green } from "@mui/material/colors";
import { borderColor } from "@mui/system";
import { useRef, useState } from "react";
//Material UI Change of Color
const theme = createTheme({
    palette: {
        primary: green
    }
})
//Functionality
export default function PMatch() {
    const BNumbers = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ]
    function randomer (){
        for (let a = BNumbers, i = a.length; i--; ) {
            const random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
            return random
        }
    }
    const [rolling, setRolling] = useState<boolean>(false);
    const rollHandler = () => {
        setRolling(!rolling);
    };

    const LNumbers = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ]

    const ref = useRef(LNumbers)

    return (   
        <div>
            <div>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    gridTemplateRows: 'repeat(1,1fr)',
                    justifyContent: "center",
                }}>{ref.current.map((item, i) => (
                    <Box id={item} key={i} padding={1} sx={{
                        width: "2.5rem",
                        height: "2.5rem",
                        border: "1px solid",
                        borderColor: "#000",
                        backgroundColor: "white",
                        
                    }}>{item}</Box>
                ))}
                </Box>
                <br/>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    gridTemplateRows: 'repeat(1,1fr)',
                    justifyContent: "center",
                }}>{ref.current.map((item, i) => (
                    <Box id={item} key={i} padding={1} sx={{
                        width: "2.5rem",
                        height: "2.5rem",
                        border: "1px solid",
                        borderColor: "#000",
                        backgroundColor: "white",
                        
                    }}>0</Box>
                ))}
                </Box>
            </div>
            <br />
            <div>
                <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: 'column',
                Height: "100vh"
                }}>
                <Grid container spacing={0} gap=".25rem" sx={{
                        display: 'grid',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '.7rem',
                        gridTemplateColumns: 'repeat(3,0fr)',
                    }}>
                {Array.from(Array(9)).map((_, index) => (
                            <Box sx={{
                                background: "#B3B3B3",
                                width: 128,
                                height: 128,
                                borderRadius: 1,
                                // border: "1px solid",
                                // borderColor: "primary.main",
                                // "& .MuiButton-startIcon": { margin: 0 }
                            }}>{randomer()}</Box>
                        ))}
                    
                </Grid>
                <br />
                <Button onClick={rollHandler} variant="contained" sx={{
                            width: 200,
                            height: 50,
                            display: "grid",
                            alignSelf: "center",
                            color: '#fff'}}>{rolling ? "Stop Roll": "Start Roll"}</Button>
                </Box>
            </div>
            
        </div>
    )
}