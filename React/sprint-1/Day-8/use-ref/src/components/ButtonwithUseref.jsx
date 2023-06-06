import { useRef } from "react"

function ButtonWithUseRef() {
    let BtnRef = useRef(null)
    function FocusUsingBtn() {
        BtnRef.current.focus()
    }
    console.log(BtnRef);
    return (
        <div >
            <br />
            <input ref={BtnRef} />
            <br />
            <br />
            <button onClick={FocusUsingBtn}>FOCUS ON BUTTON</button>

        </div>
    )
}
export default ButtonWithUseRef