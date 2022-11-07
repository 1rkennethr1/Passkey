import { Button, Input } from "@mui/material";

type PMatchProps = {
    value: string;
    handleClick: () => void;
}

const clickHandler = (event:React.MouseEvent, num:number) => {
    console.log(event+" -- "+num);
}

const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
}

export default function PMatch(props:PMatchProps) {

    return (
        <div style={{
            border: "solid 1px #f00",
            color: "#00f"
        }}><h1>Enter PIN to Validate!</h1>
        <br/>
        <Input onChange={changeHandler}/><br/>
        <Button onClick={ (e) => {clickHandler(e,101)} } variant="contained">Button First</Button><br/>
        </div>
    )
}