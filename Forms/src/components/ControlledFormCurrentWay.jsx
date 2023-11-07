import { useState } from "react"

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: 'm'
}
export default function ControlledFormCurrentWay() {

    const [formState, setFormState] = useState(formInitialState);

    const changeHandler = (e) => {

        setFormState(state => ({
            ...state,
            [e.target.name]: e.target.value,
          
        }))


    }

    const resetHandler = () => {
        setFormState(formInitialState);
    }

    const submitHandler = () => {
        console.log(formState)
        resetHandler()
    }

    return (
        <>
            <h1>Controlled form</h1>

            <form >
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" value={formState.username} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={formState.password} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input type="number" name="age" id="age" value={formState.age} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" onChange={changeHandler}>
                        <option value="f" selected={formState.gender === 'f'}>F</option>
                        <option value="m" selected={formState.gender === 'm'}>M</option>
                    </select>
                </div>
                <div>
                    {/* <input type="submit" value="Register" /> */}
                    <button type="button" onClick={submitHandler}>Register</button>
                    <button type="button" onClick={resetHandler}>Reset</button>
                </div>
            </form>
        </>
    )
}