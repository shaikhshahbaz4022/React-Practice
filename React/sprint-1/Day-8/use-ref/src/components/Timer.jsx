import { useEffect, useRef, useState } from "react"

function Timer() {


    let [count, setCount] = useState(10)
    let TimerRef = useRef(null)
    //  console.log(TimerRef.current);
    useEffect(() => {
        const Cleanup = () => {
            StopFunc()
        }
        return Cleanup
    }, [])

    const TimeFormatter = (curentTime) => {
        let seconds = curentTime % 60
        let minutes = Math.floor((curentTime / 60) % 60)
        let hour = Math.floor(curentTime / 3600)
        return `${zeroAdd(hour)} : ${zeroAdd(minutes)} : ${zeroAdd(seconds)}`
    }
    const zeroAdd = (num) => {
        return num <= 9 ? `0${num}` : num
    }
    function TimerFunc() {
        if (TimerRef.current !== null) {
            return
        }
        TimerRef.current = setInterval(() => {
            setCount((previouscount) => {
                if (previouscount <= 1) {
                    clearInterval(TimerRef.current)
                }
                return previouscount - 1
            })
        }, 1000);



    }
   
    const StopFunc = () => {
        clearInterval(TimerRef.current)
        TimerRef.current = null
    }
    const Resetfunc = () => {
        StopFunc()
        setCount(10)
    }
    return (
        <div>
            
            <h2>Timer : {TimeFormatter(count)}</h2>
            <button onClick={TimerFunc}>START</button>
            <button onClick={StopFunc}> STOP</button>
            <button onClick={Resetfunc}>RESET</button>
        </div>
    )
}
export default Timer