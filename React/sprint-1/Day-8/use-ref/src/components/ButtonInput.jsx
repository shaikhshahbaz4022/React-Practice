import { useRef } from "react"

function Mybutton() {
    let MyRef = useRef([])
    console.log(MyRef);
    return (
        <div>
            <input
                style={{ width: "20px" }}
                id="1"
                ref={(elem) => MyRef.current[0] = elem}
            />

            <input
                style={{ width: "20px" }}
                id="2"
                ref={(elem) => MyRef.current[1] = elem}
            />

            <input
                style={{ width: "20px" }}
                id="3"
                ref={(elem) => MyRef.current[2] = elem}
            />

            <input
                style={{ width: "20px" }}
                id="4"
                ref={(elem) => MyRef.current[3] = elem}
            />

        </div>
    )
}
export default Mybutton