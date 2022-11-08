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
    let str = ''
    let inputStr: any
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputStr = event
    }
    const onCLickHandler = (event: React.MouseEvent) => {
        str += event.currentTarget.textContent;
    }
    const onCheckButtonClick = () => {
        if (str === inputStr.target.value) {
            alert("Nice One! You've successfully unlocked the vault.")
            inputStr.target.value = ''
        }
        else
            alert(`Try Again! Passkey is ${inputStr.target.value}. Combo inputted is ${str}.`)
        str = ''
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