import { useEffect, useRef, useState } from "react"


export default function Patuti(){

    const patutiMoves = [
        ['idle-1.png','idle-2.png'],
        ['right-1.png','right-2.png','right-3.png','right-4.png','right-5.png'],
        ['left-1.png','left-2.png','left-3.png','left-4.png','left-5.png'],
        ['jump-1.png','jump-2.png','jump-3.png','jump-4.png','jump-5.png','jump-6.png','jump-7.png']
    ]

    const imgRef = useRef<HTMLImageElement>(null)

    const [currentMove, setCurrentMove] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    const patuti = useRef({
        x: 300,
        y: 250,
        prevX: 300,
        prevY: 250
    })

    useEffect(()=>{
        const interval = setInterval(()=>{
            doMove();
        },50);
        return () => clearInterval(interval);
    },[currentIndex]);

    useEffect(()=>{
        const keylistener = (e:KeyboardEvent) =>{
            if(e.key=='d'){
                setCurrentMove(1)
                setCurrentIndex(0)
            }
            else if(e.key=='a'){
                setCurrentMove(2)
                setCurrentIndex(0)
            }
            else if(e.code==='Space'){
                setCurrentMove(3)
                setCurrentIndex(0)
            }
            console.log(e.key)
        }
        document.addEventListener("keyup",keylistener);

        return () =>{
            document.removeEventListener("keyup",keylistener);
        }
    },[])

    const doMove = () =>{
        if(currentMove!=0 && currentIndex==patutiMoves[currentMove].length-1)
        {
            setCurrentMove(0)
            setCurrentIndex(0)
        }
        if(currentMove==1 && currentIndex>1){
            patuti.current.x = patuti.current.x + imgRef!.current!.offsetWidth * .25;
        }
        else if(currentMove==2 && currentIndex>1){
            patuti.current.x = patuti.current.x - imgRef!.current!.offsetWidth * .25;
        }
        else if(currentMove==3){
            if(currentIndex==1){
                patuti.current.y = patuti.current.prevY + (imgRef!.current!.offsetHeight * .08)
            }
            else if(currentIndex==2){
                patuti.current.y = patuti.current.prevY - (imgRef!.current!.offsetHeight * .5)
            }
            else if(currentIndex==3){
                patuti.current.y = patuti.current.prevY - (imgRef!.current!.offsetHeight * 1.1)
            }
            else if(currentIndex==4){
                patuti.current.y = patuti.current.prevY - (imgRef!.current!.offsetHeight * 1.1)
            }
            else if(currentIndex==5){
                patuti.current.y = patuti.current.prevY + (imgRef!.current!.offsetHeight * .1)
            }
            else if(currentIndex==6){
                patuti.current.y = patuti.current.prevY
            }
        }
        setCurrentIndex((currentIndex+1) % patutiMoves[currentMove].length);
    }

    return (
        <img ref={imgRef} style={{position:'absolute',top:patuti.current.y+'px',left:patuti.current.x+'px'}} src={"/moves/"+patutiMoves[currentMove][currentIndex]}/>
    )
}