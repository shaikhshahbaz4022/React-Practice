import { useEffect, useState } from "react"

function Timer() {
    let [count, setCount] = useState(10)

    useEffect(() => {
        let timerId = setInterval(() => {
            console.log("Inside set-TimeOut");
            setCount((prevCount) => {

                if (prevCount === 1) {
                    clearInterval(timerId)
                    return 0
                }

                return prevCount - 1

            }
            )
        }, 1000);

        let clearFun = () => {
            clearInterval(timerId)
        }
        return clearFun

    }, [])

    return (

        <div>


            <p>{count}</p>

        </div>
    )
}
export default Timer