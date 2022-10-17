import {animated, useSpring} from 'react-spring'
import amin from '../../public/admin-panel/icons/abst_animated.svg'

export default function Error() {
	const textAnimation = useSpring({
		from : { opacity : 0 },
		to : { opacity : 1 },
		delay : 300
	})
	return <>
		<section className="error">
			<div className="error--container">
				<img className="animation" src={amin} alt=""/>
				<animated.h1 className="error--container--title"
					style={{ ...textAnimation }}
				>404</animated.h1>
				<animated.p className="error--container--description"
					style={{ ...textAnimation }}
				>
					Page <span>not found</span>
				</animated.p>
			</div>
		</section>
	</>
}