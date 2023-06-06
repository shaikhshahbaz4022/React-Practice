import { useEffect, useRef, useState } from "react"

function Timer() {
    let [count, setCount] = useState(10)
    let TimerRef = useRef(null)

    useEffect(() => {
        const Cleanup = () => {
           StopFunc()
        }
        return Cleanup
    }, [])



    function TimerFunc() {
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
    }
    return (
        <div>
            <h2>Timer : {count}</h2>
            <button onClick={TimerFunc}>START</button>
            <button onClick={StopFunc}> STOP</button>
        </div>
    )
}
export default Timer