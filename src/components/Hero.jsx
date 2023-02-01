import React from 'react'

const Hero = () => {
	return (
		<div id='hero' className='section-padding'>
			<div id='hero-text'>
				<h3 className='title'>FRONT END DEVELOPER</h3>
				<h1>Hi, I'm Julia Jespersdotter</h1>
				<p>
					I'm a front end developer student based in Malmö open to
					internship opportunities to expand my skillset.
				</p>
				<button className='button-gradient'>
					<a
						href='mailto:julia.jespersdotter@gmail.com'
						target='_blank'
					>
						Contact me
					</a>
				</button>
			</div>

			<div className='img-wrapper'>
				<img id='me' src='./images/juliajespersdotter.jpeg' alt='' />
			</div>
		</div>
	)
}
export default Hero
