import { useState } from "react";
import classes from "./NewUserForm.module.css";


// should useState be here? Probably not. Probably it should be in the page 

export default function NewUserForm() {
    const [firstName, setFirstName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault()
    // handle submit for form 
}

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
            <span>First name:</span>
                <input 
                required
                type="text" 
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                />
        </label>
        <label>
            <span>Surname:</span>
                <input 
                required
                type="text" 
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
                />
        </label>
        <label>
            <span>Email:</span>
                <input 
                required
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
        </label>
        <button className={classes["btn-primary"]}
        disabled={isLoading}>
            {isLoading && <span>Signing up...</span>}
            {!isLoading && <span>Sign up</span>}
        </button>
    </form>
    </>
  )
}
