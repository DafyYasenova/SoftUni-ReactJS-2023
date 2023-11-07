import { useState } from "react"

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: '',
    art: false,
    music: false,
    swimming: false,
    shopping: false,
    cinema: false,
}
export default function ControlledFormCurrentWay() {

    const [formState, setFormState] = useState(formInitialState);

    const changeHandler = (e) => {

        let value = e.target.value;

        switch (e.target.type) {
            case 'number': value = Number(e.target.value); break;
            case 'checkbox': value = e.target.checked; break;
            default:
                value = e.target.value;
                break;
        }
        setFormState(state => ({
            ...state,
            [e.target.name]: value,

        }))
    }

    const resetHandler = () => {
        setFormState(formInitialState);
    }

    const submitHandler = () => {
        console.log(formState)
        resetHandler()
    }

    // const onCheckboxHandler = (e) =>{
    //     setFormState(state => ({
    //         ...state,
    //         [e.target.name]: e.target.checked
    //     }))
    // }
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
                    <select name="gender" id="gender" onChange={changeHandler} value={formState.gender}>
                        <option value="f" >F</option>
                        <option value="m" >M</option>
                    </select>
                </div>

                <div>
                    <h3>Hobbies</h3>
                    <label htmlFor="art">Art</label>
                    <input type="checkbox" name="art" id="art" checked={formState.art} onChange={changeHandler} />

                    <label htmlFor="music">Music</label>
                    <input type="checkbox" name="music" id="music" checked={formState.music} onChange={changeHandler} />

                    <label htmlFor="cinema">Cinema</label>
                    <input type="checkbox" name="cinema" id="cinema" checked={formState.cinema} onChange={changeHandler} />
                    <label htmlFor="swimming">Swimming</label>
                    <input type="checkbox" name="swimming" id="swimming" checked={formState.swimming} onChange={changeHandler} />
                    <label htmlFor="shopping">Shopping</label>
                    <input type="checkbox" name="shopping" id="shopping" checked={formState.shopping} onChange={changeHandler} />
                    {/* <input type="checkbox" name="shopping" id="shopping" checked={formState.shopping} onChange={onCheckboxHandler}/> */}
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