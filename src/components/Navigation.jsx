import React from 'react'

const Navigation = () => {
	return (
		<header>
			<nav>
				<div className='links-wrapper'>
					<a href='/'>Home</a>

					<div className='right-flexed'>
						<a
							className='nav-links'
							href='./docs/CV.pdf'
							target='_blank'
						>
							CV
						</a>
						<a className='nav-links' href='/projects'>
							Projects
						</a>
						<button className='button-gradient'>
							<a
								href='mailto:julia.jespersdotter@gmail.com'
								target='_blank'
							>
								Contact
							</a>
						</button>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navigation
