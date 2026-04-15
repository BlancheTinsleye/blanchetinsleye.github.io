// import { react, usestate } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import '../aboutmesection/AboutMeSection'
import AboutMe from '../aboutmesection/AboutMeSection';

const Home = () => {
    return (
        <>
            <h1>
                Home
            </h1>

            <AboutMe />

            <Link to="/workexperience">Work Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/drawingstrad">Drawings (Traditional)</Link>
            <Link to="/drawingsdigi">Drawings (Digital)</Link>
        </>
    )
}

export default Home;