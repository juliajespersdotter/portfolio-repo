import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import './assets/scss/globals.scss'
import ProjectsPage from './pages/ProjectsPage'

function App() {
	return (
		<div id='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
			<Routes>
				<Route path='/projects' element={<ProjectsPage />} />
			</Routes>
		</div>
	)
}

export default App
