export default function Footer() {
	return <>
		<div className="line"></div>
		<footer className="footer">
			<div className="container">
				<div className="footer--body">
					<div className="footer--body--logo-wrapper">
						<h2 className="footer--body--logo-wrapper--logo">
							Logo
						</h2>
					</div>
					<div className="footer--body--navigation">
						<a className="footer--body--navigation--link" href='/#'>
							Home
						</a>
						<a className="footer--body--navigation--link" href='#about'>
							About Project
						</a>
						<a className="footer--body--navigation--link" href='#architecture'>
							Project Architecture
						</a>
						<a className="footer--body--navigation--btn" href="/login" target='_blank'>
							Try It
						</a>
					</div>
				</div>
				<div className="footer--lower">
					<h3 className="footer--lower--heading">
						<span className="pale">Created by</span> <span className="light">Flumine</span>
					</h3>
					<p className="footer--lower--info">
						<span>more info about us</span> <a href="">here</a>
					</p>
				</div>
			</div>
		</footer>
	</>
}