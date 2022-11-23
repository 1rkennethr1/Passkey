import {Button, Box} from '@mui/material'

type btnProps = {
    onClickHandler: (event:React.MouseEvent<HTMLButtonElement>) => void
    colorArray: Array<string>
}

export default function Buttons(props:btnProps){
    const Buttons = props.colorArray.map(e =>{
        return (
            <Button
                id={e}
                key={e}
                variant="contained"
                onClick={event => props.onClickHandler(event)}
                sx={{
                    backgroundColor: '#4d948b',
                    fontSize:'.7em',
                    width:'12rem',
                    height: '6rem',
                }}
            >
            </Button>
        )
    })
    return(
        <Box
            sx={{
                display:'grid',
                gridTemplateColumns:"repeat(3,1fr)",
                gap: '.4rem'
            }}
        >
            {Buttons}
        </Box>
    )
}