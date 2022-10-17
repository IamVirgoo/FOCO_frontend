import {useState} from "react";
export default function Header() {
	return <>
		<header className="header">
			<div className="header--container">
				<div className="header--container--navigation">
					<a className="header--container--navigation--link" href="#about"
					/*onClick={
						() => {
							window.location.href = '/#about'
						}
					}*/
					>About Project</a>
					<a className="header--container--navigation--link" href="#scope">Scope of Work</a>
					<a className="header--container--navigation--link" href="#architecture">Project Architecture</a>
				</div>
				<a className="header--container--button" target="_blank" href="/login">Get Started</a>
			</div>
		</header>
		<div className="line"></div>
	</>
}