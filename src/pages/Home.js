import React from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Abbas Kherani</h2>
        <div className='prompt'> 
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>FrontEnd</h2>
            <span>ReactJS, Redux, HTML, CSS, React Native, NPM, 
              BootStrap, MaterialUI, TailwindCSS, StyledComponents</span>
          </li>
          <li className='item'>
            <h2>BackEnd</h2>
            <span>NodeJS, ExpressJS, GraphQL, MySQL, MongoDB</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home