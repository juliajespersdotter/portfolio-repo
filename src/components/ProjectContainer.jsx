import React from 'react'

const ProjectContainer = () => {
	return (
		<section id='projects' className='section-padding'>
			<h2>Projects</h2>
			<div className='projects projects-wrapper'>
				<article className='project project-page height'>
					<img
						className='project-image'
						src='../images/screens/landingscreen.png'
						alt=''
					/>

					<div className='desc-wrapper desc-height'>
						<div className='text-wrapper'>
							<h3>PROGLOG</h3>

							<div className='tools-wrapper'>
								<span className='button-gradient'>REACT</span>
								<span className='button-gradient'>MYSQL</span>
								<span className='button-gradient'>NODE</span>
								<span className='button-gradient'>OAUTH</span>
								<span className='button-gradient'>
									SEQUELIZE
								</span>
							</div>

							<p>
								ProgLog is the web app for organized gamers to
								store games in lists, review games, rate and
								favourite them to keep track of what games they
								have played, are currently playing or just to
								store their favourite games in an organized
								manner.
							</p>
						</div>

						<div className='button-wrapper'>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://proglog.netlify.app'
									target='_blank'
								>
									Visit page
								</a>
							</button>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://github.com/juliajespersdotter/proglog-client'
									target='_blank'
								>
									Visit repo
								</a>
							</button>
						</div>
					</div>
				</article>

				<article className='project project-page height'>
					<img
						className='project-image'
						src='../images/screens/JMDB.png'
						alt=''
					/>

					<div className='desc-wrapper desc-height'>
						<div className='text-wrapper'>
							<h3>JMDB</h3>

							<div className='tools-wrapper'>
								<span className='button-gradient'>REACT</span>
								<span className='button-gradient'>
									BOOTSTRAP
								</span>
							</div>

							<p>
								Julias movie database, a movie website starring
								all the latest, popular and top rated movies
								including a search function and rating data for
								each film. The film data was populated using
								TMDB API.
							</p>
						</div>

						<div className='button-wrapper'>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://tmdb-jmdb.netlify.app/'
									target='_blank'
								>
									Visit page
								</a>
							</button>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://github.com/juliajespersdotter/moviedb-jmdb'
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
				<a href='/projects'>SEE ALL PROJECTS</a>
			</button>
		</section>
	)
}

export default ProjectContainer
