import { Box, Button, createTheme, Grid, TextField, ThemeProvider } from "@mui/material";
import { green } from "@mui/material/colors";
//Material UI Change of Color
const theme = createTheme({
    palette: {
        primary: green
    }
})
//Functionality
export default function PMatch() {
    let iPin = ''
    let combination: any
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        combination = event
    }
    const onCLickHandler = (event: React.MouseEvent) => {
        iPin += event.currentTarget.textContent;
    }
    const onCheckButtonClick = () => {
        if (iPin === combination.target.value) {
            alert("Congratulations! Successfully Unlocked!")
            combination.target.value = ''
        }
        else
            alert(`Try Again! Passkey is ${combination.target.value}. Combo inputted is ${iPin}.`)
        iPin = ''
    }
    return (
        <div>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: 'column',
                Height: "100vh"
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '15vw',
                    gap: '.7rem'
                }}>
                    <TextField type="number" label="PIN Code" variant="outlined" onChange={onChangeHandler} />
                    <Grid container spacing={0} gap=".25rem" sx={{
                        justifyContent: "center",
                        width: "100%"
                    }}>
                        {Array.from(Array(9)).map((_, index) => (
                            <Button onClick={onCLickHandler} variant="contained" sx={{
                                width: "auto",
                                height: 64,
                                borderRadius: 0,
                                border: "1px solid",
                                borderColor: "primary.main",
                                "& .MuiButton-startIcon": { margin: 0 }
                            }}>{index + 1}</Button>
                        ))}
                    </Grid>
                    <ThemeProvider theme={theme}>
                        <Button onClick={onCheckButtonClick} id="btnChecker" variant="contained" sx={{
                            width: "50%",
                            height: 45,
                            display: "flex",
                            alignSelf: "center",
                            color: '#fff'
                        }}>CHECK</Button>
                    </ThemeProvider>
                    <br />
                </Box>
            </Box>
        </div>
    )
}