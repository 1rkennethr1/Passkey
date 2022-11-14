import { Box, Button } from "@mui/material";
import { useState, useRef } from "react";
import { isTemplateLiteralTypeNode } from "typescript";

//Functionality
export default function ColorSequence() {
    const [btnBgColor, setBtnBgColor] = useState("")

    const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.currentTarget.style.backgroundColor = btnBgColor
        // console.log(e.currentTarget.style.backgroundColor = btnBgColor)
    }

    const colorClickHandler = (e: React.MouseEvent) => {
        setBtnBgColor(e.currentTarget.id)
    }

    const colors = [
        "#8d29aa", 
        "#de3bd6", 
        "#d52650", 
        "#ead125", 
        "#e3803b", 
        "#4965ca", 
        "#49c5e1", 
        "#b4dd4b", 
        "#44aa50"
    ];
    
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    
    const ref = useRef(colors)

    return (
        <div>
            <div>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    gridTemplateRows: 'repeat(1,1fr)',
                    justifyContent: "center",
                }}>{ref.current.map((item, i) => (
                    <Box sx={{
                        background: item,
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "0",
                    }}></Box>
                ))}
                </Box>
            </div>
            <br />
            <Box sx={{
                display: 'grid',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '.7rem',
                gridTemplateColumns: 'repeat(3,0fr)',
            }}>
                {Array.from(Array(9)).map((_, index) => (
                    <Button onClick={buttonClickHandler} variant="contained" size="large" sx={{
                        width: "10rem",
                        height: "5rem",
                    }}></Button>
                ))}
                <br />
            </Box>

        </div>
    )
}