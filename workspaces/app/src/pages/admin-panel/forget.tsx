export default function Forget() {
	return <>
		<section className="login">
			<h1 className="login--wrapper--text">
				Recovery
			</h1>
			<form className="login--form">
				<h2 className="login--form--heading">
					Forgot password?
				</h2>
				<input type="input"  className="login--form--input" placeholder="Enter your email"/>
				<input type="submit" className="login--form--submit" value="Reset Password"/>
				<p className="login--form--back">
					back to <a href="/login">login</a>
				</p>
			</form>
		</section>
	</>
}