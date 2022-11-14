import { Box, Button } from "@mui/material";
import { useState, useRef } from "react";

export default function ColorSequence() {

//Functionality
    //useState
    const [btnBgColor, setBtnBgColor] = useState<Array<String>>([])

    //Checker
    const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        let array = btnBgColor

        if (ref.current[btnBgColor.length] === e.currentTarget.id) {
            e.currentTarget.style.background = e.currentTarget.id
            e.currentTarget.classList.add('hover')
            array.push(e.currentTarget.id)
            setBtnBgColor(array)

            if (ref.current.length === btnBgColor.length) {
                alert("Good job!")
                window.location.reload();
            }
        }
        else {
            document.querySelectorAll('button').forEach(e => {
                e.removeAttribute('style')
            })
            setBtnBgColor([])
        }
        console.log(array)
        console.log(ref.current)
        console.log(btnBgColor)
    }
    //Colors Available
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
    //For the Boxes
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    const ref = useRef(colors)
    //For the buttons
    const colors2 = [...colors]
    for (let i = colors2.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors2[i], colors2[j]] = [colors2[j], colors2[i]];
    }
    const ref2 = useRef(colors2)

    return (
        <div>
            <div>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    gridTemplateRows: 'repeat(1,1fr)',
                    justifyContent: "center",
                }}>{ref.current.map((item, i) => (
                    <Box id={item} key={i} sx={{
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
                {ref2.current.map(e => (
                    <Button onClick={buttonClickHandler} variant="contained" size="large" id={e} key={e} sx={{
                        width: "10rem",
                        height: "5rem",
                        background: "#4d948b"
                    }}></Button>
                ))}
                <br />
            </Box>

        </div>
    )
}