import Nav from "../components/Header";
import NewUserForm from "../components/NewUserForm";

export default function Signup() {
  return (
    <>
        <div className="title">
            Sign Up
        </div>
        <NewUserForm/>
        <Nav/>
    </>
  )
}
