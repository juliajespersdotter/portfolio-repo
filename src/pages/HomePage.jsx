import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import ProjectContainer from '../components/ProjectContainer'

const HomePage = () => {
	return (
		<div className='container'>
			<Hero />
			<About />
			<ProjectContainer />
		</div>
	)
}

export default HomePage
