import React from 'react'

const Footer = () => {
	return (
		<footer>
			<div className='social-links'>
				<div className='link-wrapper'>
					<a
						href='mailto:julia.jespersdotter@gmail.com'
						target='_blank'
					>
						<i className='fas fa-envelope'></i>
					</a>
					<a
						href='mailto:julia.jespersdotter@gmail.com'
						target='_blank'
					>
						GMAIL
					</a>
				</div>
				<div className='link-wrapper'>
					<a
						href='https://www.linkedin.com/in/julia-jespersdotter-hogman/'
						target='_blank'
					>
						<i className='fab fa-linkedin'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/julia-jespersdotter-hogman/'
						target='_blank'
					>
						LINKEDIN
					</a>
				</div>
				<div className='link-wrapper'>
					<a
						href='https://github.com/juliajespersdotter'
						target='_blank'
					>
						<i className='fab fa-github'></i>
					</a>
					<a
						href='https://github.com/juliajespersdotter'
						target='_blank'
					>
						GITHUB
					</a>
				</div>
			</div>

			<p>WEB DEVELOPER 2023</p>
		</footer>
	)
}

export default Footer
