import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import ProjectContainer from '../components/ProjectContainer'
import Skills from '../components/Skills'

const HomePage = () => {
	return (
		<div className='container'>
			<Hero />
			<About />
			<ProjectContainer />
			<Skills />
		</div>
	)
}

export default HomePage
