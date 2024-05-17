import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../../assets/assets/hero-img.png';
import themeIcon from '../../assets/assets/sun.svg';
import twitterIcon from '../../assets/assets/twitter-light.svg';
import githubIcon from '../../assets/assets/github-light.svg';
import linkedinIcon from '../../assets/assets/linkedin-light.svg';

function Hero() {
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
          alt="Color theme icon" 
        />  
        <h1>Athul V</h1>
        <h2>Front end developer</h2>
        <span>
          <a href = 'https:twitter.com/' target = "_blank">
            <img src= {twitterIcon} alt="twitter icon"/>
          </a>
          <a href = 'https:github.com/' target = "_blank">
            <img src= {githubIcon} alt="twitter icon"/>
          </a>
          <a href = 'https:linkedin.com/' target = "_blank">
            <img src= {linkedinicon} alt="twitter icon"/>
          </a>
        </span>

      </div>
    </section>
  );
}

export default Hero;
