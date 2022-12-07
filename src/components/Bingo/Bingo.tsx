import {
    Button,
    TextField,
    Box
} from "@mui/material";
import React from "react";
import Buttons from "../Buttons";

const Bingo = () =>{
    let str = ''
    const inputStr = ['123','456','789','159','258','357']
    const onCLickHandler = (event:React.MouseEvent) =>{
        str += event.currentTarget.textContent
        console.log(str)
        inputStr.forEach(e =>{
            const pattern = `^(?=.*${e[0]})(?=.*${e[1]})(?=.*${e[2]}).*$`
            const regExp = new RegExp(pattern, 'm')
            console.log(regExp)
            if(regExp.test(str)){
                alert('Bingo!');
                str=''
            }
        })
    }
    return(
        <Box sx={{
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '25vw',
                gap: '.3rem'
            }}>
                    {/* <Buttons onClickHandler={onCLickHandler}/> */}
            </Box>
        </Box>
    )
}

export default Bingo