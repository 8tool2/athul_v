import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../../assets/assets/hero-img.png';
import sun from '../../assets/assets/sun.svg';
import moon from '../../assets/assets/moon.svg';
import twitterIconLight from '../../assets/assets/twitter-light.svg';
import twitterIconDark from '../../assets/assets/twitter-dark.svg';
import githubIconLight from '../../assets/assets/github-light.svg';
import githubIconDark from '../../assets/assets/github-dark.svg';
import linkedinIconLight from '../../assets/assets/linkedin-light.svg';
import linkedinIconDark from '../../assets/assets/linkedin-dark.svg';
import CV from '../../assets/assets/cv.pdf';
import { useTheme } from '../../common/themecontext/ThemeContext'; // Import useTheme hook

function Hero() {
  const { theme, toggleTheme } = useTheme(); // Access toggleTheme function through useTheme hook
  const themeIcon = theme == 'light' ? sun:moon;
  const twitterIcon = theme == 'light' ? twitterIconLight:twitterIconDark;
  const githubIcon = theme == 'light' ? githubIconLight:githubIconDark;
  const linkedinIcon = theme == 'light' ? linkedinIconLight:linkedinIconDark;


  return (
    <section id="Hero">
      <div className={styles.colorModeContainer}>
        <img 
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Athul" 
        /> 
        <img 
          className={styles.colorMode}
          src={themeIcon}
          onClick={toggleTheme} // Call toggleTheme function on click
          alt="Color theme icon" 
        />  
        <h1>Athul V</h1>
        <h2>Front End Developer</h2>
        <span>
          <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon"/>
          </a>
          <a href='https://github.com/' target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub icon"/>
          </a>
          <a href='https://linkedin.com/' target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn icon"/>
          </a>
        </span>
        <p>
          Welcome to my React portfolio! Here, you'll find a collection of my projects and experiences as a front end developer. 
          I specialize in creating responsive, dynamic web applications using the latest technologies. 
          Explore my work to see how I bring ideas to life with code, and feel free to connect with me through the links provided.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
