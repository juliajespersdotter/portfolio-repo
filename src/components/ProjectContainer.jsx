import React from 'react'

const ProjectContainer = () => {
	return (
		<section id='projects' className='section-padding'>
			<h2>Projects</h2>
			<div className='projects projects-wrapper'>
				<article className='project'>
					<img
						className='project-image'
						src='./assets/images/almi-page.png'
						alt=''
					/>

					<div className='desc-wrapper desc-height'>
						<div className='text-wrapper'>
							<h3>ALMI ONEPAGER DESIGN</h3>

							<div className='tools-wrapper'>
								<span className='button-gradient'>HTML</span>
								<span className='button-gradient'>UX/UI</span>
								<span className='button-gradient'>CSS</span>
								<span className='button-gradient'>
									BOOTSTRAP
								</span>
							</div>
							<p>
								An exercise in design using tools such as Adobe
								UX, Illustrator and Photoshop to create
								wireframes and illustrations for this responsive
								onepager demonstrating a hypothetical service.
							</p>
						</div>

						<div className='button-wrapper'>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://priceless-jang-40750f.netlify.app/'
									target='_blank'
								>
									Visit page
								</a>
							</button>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://github.com/juliajespersdotter/almi'
									target='_blank'
								>
									Visit repo
								</a>
							</button>
						</div>
					</div>
				</article>
				<article className='project'>
					<img
						className='project-image'
						src='./assets/images/oddhill.png'
						alt=''
					/>

					<div className='desc-wrapper desc-height'>
						<div className='text-wrapper'>
							<h3>ODD HILL CLONE</h3>

							<div className='tools-wrapper'>
								<span className='button-gradient'>HTML</span>
								<span className='button-gradient'>CSS</span>
							</div>

							<p>
								A clone of{' '}
								<a id='text-link' href='www.oddhill.se'>
									Odd Hill's
								</a>{' '}
								front page made with HTML and CSS to practice
								mimicking other designs and making it
								responsive.
							</p>
						</div>

						<div className='button-wrapper'>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://determined-wescoff-2dff9f.netlify.app/'
									target='_blank'
								>
									Visit page
								</a>
							</button>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://github.com/juliajespersdotter/odd-hill-clone'
									target='_blank'
								>
									Visit repo
								</a>
							</button>
						</div>
					</div>
				</article>
			</div>

			<button className='button-gradient' id='long-button'>
				<a href='assets/html/projects.html'>SEE ALL PROJECTS</a>
			</button>
		</section>
	)
}

export default ProjectContainer
