import {useState} from "react";

export default function SignUp() {
	const [username, setUsername] = useState<string | null>(null)
	const [email, setEmail] = useState<string | null>(null)
	const [password, setPassword] = useState<string | null>(null)
	const [confirmPassword, setConfirmPassword] = useState<string | null>(null)

	/**
	 * @name confirmPasswordValidation
	 * @description this function compares the specific values of confirmPassword with password value
	 * @return boolean
	 * */
	function confirmPasswordValidation(confirmPassword : any) {
		return confirmPassword === password
	}

	/**
	 * @name emailValidation
	 * @description function for email validation
	 * @return boolean
	 * */
	function emailValidation(email : any) {
		return /\S+@\S+\.\S+/.test(email);
	}

	return <>
		<section className="login">
			<h1 className="login--wrapper--text">
				SignUp
			</h1>
			<form className="login--form" method="post">
				<input type="input" placeholder="Username" onChange={ (e) => {
						setUsername(e.target.value)
					}
				}/>
				<input type="email" placeholder="Email"
					onChange={ (e ) => {
							if (!emailValidation(e.target.value)) {
								e.target.style.boxShadow = "0 0 20px rgb(225, 0, 0)"
							}
							else {
								setEmail(e.target.value)
								e.target.style.boxShadow = "0 0 20px rgb(0, 225, 0)"
							}
						}
					}
				/>
				<input type="password" placeholder="Password" onChange={ (e) => {
						setPassword(e.target.value)
					}
				}/>
				<input type="password" placeholder="Confirm password"
					onChange={ (e) => {
							if (!confirmPasswordValidation(e.target.value)) {
								e.target.style.boxShadow = "0 0 20px rgb(225, 0, 0)"
							}
							else {
								setConfirmPassword(e.target.value)
								e.target.style.boxShadow = "0 0 20px rgb(0, 225, 0)"
							}
						}
					}
				/>
				<input type="submit" value="Confirm" className="login--form--submit"/>
				<p className="login--form--sign-up">
					have account? <a href='/login'>sign in</a>
				</p>
			</form>
		</section>
	</>
}