import { Box, Button, createTheme, Grid, TextField, ThemeProvider } from "@mui/material";
import { green } from "@mui/material/colors";
import { useEffect, useRef, useState } from "react";
//Material UI Change of Color
const theme = createTheme({
    palette: {
        primary: green
    }
})
//Functionality
export default function RandomRoll() {
    const iBox: number[] = Array.from(Array(9).keys());
    const iBoxArray = [...iBox].map((e) => e + 1);
    const [box, setBoxes] = useState<number[]>(iBoxArray);

    const [roll, setRoll] = useState<number[]>(box.map(() => 0));
    const [rolling, setRolling] = useState<boolean | null>(null);

    const [index, setIndex] = useState<number>(
		Math.floor(Math.random() * iBoxArray.length)
	);

    const rollHandler = () => {
		setRolling(!rolling);
		if (!rolling) {
			setIndex((index) => index + 1);
		} else {
		}
	};

    const random = () => {
		return Math.floor(Math.random() * box.length) % iBoxArray.length;
	};
    useEffect(() => {
		if (rolling && rolling != null) {
			let newObj = iBoxArray.map((e, i) => (i === index ? 0 : e));
                setBoxes(newObj);
            setTimeout(() => {
				setBoxes(iBoxArray);
				while (index === random()) {
					random();
				}
				setIndex(random());
			}, 150);
		} else if (!rolling && rolling != null) {
			let newObj = iBoxArray.map((e, i) => (i === index ? 0 : e));
			console.log(newObj);
			const ind = newObj.findIndex((e) => e === 0);

			const newRoll = roll.map((e, i) => {
				if (i === ind) {
					return e + 1;
				} else return e;
			});
			setRoll(newRoll);
			setBoxes(newObj);
		}
	}, [index]);

    return (   
        <div>
            <div>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    gridTemplateRows: 'repeat(1,1fr)',
                    justifyContent: "center",
                }}>{iBox.map((e) => (
                    <Box padding={1} sx={{
                        width: "2.5rem",
                        height: "2.5rem",
                        border: "1px solid",
                        borderColor: "#000",
                        backgroundColor: "white",
                        
                    }}>{e+1}</Box>
                ))}
                </Box>
                <br/>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    gridTemplateRows: 'repeat(1,1fr)',
                    justifyContent: "center",
                }}>{roll.map((e) => (
                    <Box padding={1} sx={{
                        width: "2.5rem",
                        height: "2.5rem",
                        border: "1px solid",
                        borderColor: "#000",
                        backgroundColor: "white",
                        
                    }}>{e}</Box>
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
                {box.map((e) => (
                            <Box sx={{
                                background: "#B3B3B3",
                                width: 128,
                                height: 128,
                                borderRadius: 1,
                            }}>{e}</Box>
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