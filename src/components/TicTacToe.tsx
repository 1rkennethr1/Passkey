import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";

export default function TicTacToe() {
    const [buttons, setButtons] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
        Math.round(Math.random() * 1) === 1 ? "X" : "O"
    );
    const [winner, setWinner] = useState(null);
    // function setButtonValue(index){
    //     const newData = buttons.map((val, i) =>{
    //         if (i === index){
    //             return currentPlayer;
    //         }
    //         return val;
    //     });
    //     setButtons(newData);
    //     setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    // }
    return (
        <div>
            {/* <div>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    gridTemplateRows: 'repeat(1,1fr)',
                    justifyContent: "center",
                }}>{Array(9).fill(null).map((_, i) => (
                    <Box key={i} sx={{
                        background: "#FFFFF",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "0",
                    }}></Box>
                ))}
                </Box>
            </div>
            <br /> */}
            <Box sx={{
                display: 'grid',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '.7rem',
                gridTemplateColumns: 'repeat(3,0fr)',
            }}>{Array(9).fill(null).map(e => (
                    <Button onClick={() => setButtons(e)} variant="contained" size="large" id={e} key={e} sx={{
                        width: "6rem",
                        height: "6rem",
                        background: "#4d948b"
                    }}></Button>
                ))}
                <br />
            </Box>

        </div>
    )
}
