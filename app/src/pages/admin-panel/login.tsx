import {useNavigate} from "react-router-dom";
import {useState} from "react";

const users = [{
	username : "admin",
	password : "admin",
	id: "0"
}]

export default function Login() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	/*const [authenticated, setAuthenticated] = useState(
		localStorage.getItem(localStorage.getItem("authenticated") || "false")
	);*/
	const handleSubmit = () => {
		const account = users.find((user) => user.username === username);
		if (account && account.password === password) {
			/*localStorage.setItem("authenticated", "true");*/
			navigate("/admin")
		}
	};
	return <>
		<section className="login">
			<h1 className="login--wrapper--text">
				SignIn
			</h1>
			<form className="login--form" onSubmit={handleSubmit} method="post">
				<input type="input" placeholder="Username" onChange={ (e) => setUsername(e.target.value) }/>
				<input type="password" placeholder="Password" onChange={ (e) => setPassword(e.target.value) }/>
				<input type="submit" value="Confirm" className="login--form--submit"/>
				<p className="login--form--sign-up">
					no register? <a href='/register'>sign up</a>
				</p>
			</form>
		</section>
	</>
}