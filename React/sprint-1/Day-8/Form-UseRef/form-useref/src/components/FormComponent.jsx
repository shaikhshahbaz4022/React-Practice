import { useState } from "react"


function FormComponent() {

    let initialState = {
        username: "",
        country: "",
        ismarried: false
    }
    let [formState, setformState] = useState(initialState)


    const HandleSubmit = (e) => {
        e.preventDefault()
    }

    const HandleChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setformState({
            ...formState,
            [e.target.name]: e.target.value

        }
        )
    }
    // console.log(formState);
    return (

        <div>
            <form onSubmit={HandleSubmit}>
                <input name="username"
                    onChange={HandleChange}
                    value={formState.username}
                    placeholder="Add Username"

                />
                <select name="country"
                    value={formState.country}
                    onChange={HandleChange}>
                    <option value="">SELECT COUNTRY</option>
                    <option value="india">India</option>
                    <option value="china">China</option>
                    <option value="nepal">Nepal</option>
                </select>

                <br />
                <br />
                <br />






            </form>
        </div>
    )
}
export default FormComponent