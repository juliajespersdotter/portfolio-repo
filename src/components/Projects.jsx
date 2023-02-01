import React from 'react'

const Projects = () => {
	return (
		<section id='projects' className='section-padding'>
			<h2>Projects</h2>
			<div className='projects-wrapper-page'>
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

				<article className='project project-page'>
					<img
						className='project-image'
						src='../images/screens/battleship.png'
						alt=''
					/>
					<div className='desc-wrapper'>
						<div className='text-wrapper'>
							<h3>Battleship Game</h3>

							<div className='tools-wrapper'>
								<span className='button-gradient'>REACT</span>
								<span className='button-gradient'>
									SOCKETIO
								</span>
								<span className='button-gradient'>NODE</span>
							</div>

							<p>
								The classic battleship game created using
								socket.io for multiplayer functionality, game
								rooms and users. Players take turns attacking
								the other player's board until one player sinks
								the other's ships.
							</p>
						</div>
						<div className='button-wrapper'>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://fed21-battleships-client.netlify.app/'
									target='_blank'
								>
									Visit page
								</a>
							</button>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://github.com/juliajespersdotter/battleship-client'
									target='_blank'
								>
									Visit repo
								</a>
							</button>
						</div>
					</div>
				</article>

				<article className='project project-page'>
					<img
						className='project-image'
						src='../images/screens/socketslayers.png'
						alt=''
					/>
					<div className='desc-wrapper'>
						<div className='text-wrapper'>
							<h3>Socket Slayers</h3>

							<div className='tools-wrapper'>
								<span className='button-gradient'>MYSQL</span>
								<span className='button-gradient'>
									JAVASCRIPT
								</span>
								<span className='button-gradient'>EXPRESS</span>
								<span className='button-gradient'>NODE</span>
							</div>

							<p>
								A simple 2-player realtime game where the goal
								is to click on a virus as quickly as possible to
								exterminate it, and points will be awarded to
								the player with the most rapid reaction time.
							</p>
						</div>
						<div className='button-wrapper'>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://github.com/juliajespersdotter/fed21-rest-api'
									target='_blank'
								>
									Visit repo
								</a>
							</button>
						</div>
					</div>
				</article>

				<article className='project project-page'>
					<div className='desc-wrapper'>
						<div className='text-wrapper'>
							<h3>REST API</h3>

							<div className='tools-wrapper'>
								<span className='button-gradient'>MYSQL</span>
								<span className='button-gradient'>
									JAVASCRIPT
								</span>
								<span className='button-gradient'>EXPRESS</span>
								<span className='button-gradient'>NODE</span>
							</div>

							<p>
								An exercise in RESTfulness,
								Model-View-Controller architecure and fullstack
								deployment. The API is connected to a database
								where the client can create, read, remove,
								update and manage photos and albums belonging to
								them. Hosted on heroku and tested with postman.
							</p>
						</div>
						<div className='button-wrapper'>
							<button className='button-gradient link-button'>
								<a
									className='link-button'
									href='https://github.com/juliajespersdotter/fed21-rest-api'
									target='_blank'
								>
									Visit repo
								</a>
							</button>
						</div>
					</div>
				</article>
			</div>
		</section>
	)
}

export default Projects
