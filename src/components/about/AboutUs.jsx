import React from "react";
import style from '../About/AboutUs.css'
import mongoDB from '../../images/mongodb.svg'
import reactJs from "../../images/react.svg";
import javascript from "../../images/javascript.svg";
import git from "../../images/git.svg";
import redux from "../../images/redux.svg";
import GitHubIcon from '../../images/github.svg'
import LinkedInIcon from '../../images/linkedin.svg'
import materialui from "../../images/materialui.svg";
import express from "../../images/express.svg";
import nodejs from "../../images/nodejs.svg";
import css from "../../images/css.svg";
import npm from "../../images/npm.svg";
import postman from "../../images/postman.svg";
export const AboutUs = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <span>EQUIPO DE DESARROLLO</span>
      </header>
      <div className={style.text1}>
        <p>
          Somos un equipo de 7 desarrolladores Full Stack.
          Para nuestra ultima etapa del bootcamp decidimos realizar un e-commerce donde la idea principal es el comercio de vinos.
        </p>
        <p>Te invitamos a que te pongas en contacto con nosotros:</p>
      </div>

      <div className={style.text2}>
        {/* ----LOGOS TECH ---- */}
        <p>En este proyecto utilizamos los siguientes tecnologias:</p>
        <img className={style.techIcons} src={javascript} />
        <img className={style.techIcons} src={mongoDB} />
        <img className={style.techIcons} src={nodejs} />
        <img className={style.techIcons} src={express} />
        <img className={style.techIcons} src={reactJs} />
        <img className={style.techIcons} src={redux} />
        <img className={style.techIcons} src={materialui} />
        <img className={style.techIcons} src={css} />
        <img className={style.techIcons} src={git} />
        <img className={style.techIcons} src={npm} />
        <img className={style.techIcons} src={postman} />
      </div>
      <div className={style.cardContainer}>
        <div className={style.cardClient}>
          <div className={style.userPicture}>
            <img
              src="https://avatars.githubusercontent.com/u/95378920?v=4"
              alt="Person"
              className={style.cardImage}
            />
          </div>
          <p className={style.nameClient}>
            {" "}
            Camilo Arriagada Vallejos
            <span>Full Stack Developer</span>
          </p>
          <div className={style.socialMedia}>
            <a href="https://github.com/c4miloarriagada" target="_blank">
              <img className={style.svg} src={GitHubIcon} />
              <span className={style.tooltipSocial}>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/camilo-arriagada-vallejos-9754b9229/"
              target="_blank"
            >
              <img className={style.svg} src={LinkedInIcon} />
              <span className={style.tooltipSocial}>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className={style.cardClient}>
          <div className={style.userPicture}>
            <img
              src="https://avatars.githubusercontent.com/u/95639496?v=4"
              alt="Person"
              className={style.cardImage}
            />
          </div>
          <p className={style.nameClient}>
            {" "}
            Marco Alejandro Lopez
            <span>Full Stack Developer</span>
          </p>
          <div className={style.socialMedia}>
            <a href="https://github.com/MarcoLopezf" target="_blank">
              <img className={style.svg} src={GitHubIcon} />
              <span className={style.tooltipSocial}>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/marco-lopez-farias-a54487231/"
              target="_blank"
            >
              <img className={style.svg} src={LinkedInIcon} />
              <span className={style.tooltipSocial}>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className={style.cardClient}>
          <div className={style.userPicture}>
            <img
              src="https://avatars.githubusercontent.com/u/97261206?v=4"
              alt="Person"
              className={style.cardImage}
            />
          </div>
          <p className={style.nameClient}>
            {" "}
            Roman Garcia
            <span>Full Stack Developer</span>
          </p>
          <div className={style.socialMedia}>
            <a href="https://github.com/RomaGarcia" target="_blank">
              <img className={style.svg} src={GitHubIcon} />
              <span className={style.tooltipSocial}>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/roman-garcia-6a3b97236/"
              target="_blank"
            >
              <img className={style.svg} src={LinkedInIcon} />
              <span className={style.tooltipSocial}>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className={style.cardClient}>
          <div className={style.userPicture}>
            <img
              src="https://avatars.githubusercontent.com/u/86882630?v=4"
              alt="Person"
              className={style.cardImage}
            />
          </div>
          <p className={style.nameClient}>
            {" "}
            Maira Pajaro
            <span>Full Stack Developer</span>
          </p>
          <div className={style.socialMedia}>
            <a href="https://github.com/MaiBP" target="_blank">
              <img className={style.svg} src={GitHubIcon} />
              <span className={style.tooltipSocial}>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/maira-pajaro-93b274189/"
              target="_blank"
            >
              <img className={style.svg} src={LinkedInIcon} />
              <span className={style.tooltipSocial}>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className={style.cardClient}>
          <div className={style.userPicture}>
            <img
              src="https://avatars.githubusercontent.com/u/97547435?v=4"
              alt="Person"
              className={style.cardImage}
            />
          </div>
          <p className={style.nameClient}>
            {" "}
            Martín Nícolas Russo
            <span>Full Stack Developer</span>
          </p>
          <div className={style.socialMedia}>
            <a href="https://github.com/MartinNicolasRusso" target="_blank">
              <img className={style.svg} src={GitHubIcon} />
              <span className={style.tooltipSocial}>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/martin-nicolas-russo-8325b022a/"
              target="_blank"
            >
              <img className={style.svg} src={LinkedInIcon} />
              <span className={style.tooltipSocial}>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className={style.cardClient}>
          <div className={style.userPicture}>
            <img
              src="https://media-exp2.licdn.com/dms/image/C4D03AQHP8ZDPxVAKug/profile-displayphoto-shrink_800_800/0/1655246675248?e=1660780800&v=beta&t=HfMqv7PGrtNcaUE7w6V-MPajRZTEUTCae219yj6t9tY"
              alt="Person"
              className={style.cardImage}
            />
          </div>
          <p className={style.nameClient}>
            {" "}
            Gonzalo Hernandez
            <span>Full Stack Developer</span>
          </p>
          <div className={style.socialMedia}>
            <a href="https://github.com/gxwgonza" target="_blank">
              <img className={style.svg} src={GitHubIcon} />
              <span className={style.tooltipSocial}>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/gonzalo-hernandez-8161b9237/"
              target="_blank"
            >
              <img className={style.svg} src={LinkedInIcon} />
              <span className={style.tooltipSocial}>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className={style.cardClient}>
          <div className={style.userPicture}>
            <img
              src="https://media-exp2.licdn.com/dms/image/D4E35AQGJrTPCrMOIjA/profile-framedphoto-shrink_800_800/0/1647553678039?e=1655823600&v=beta&t=lGCLyB16rBTVQxpz3U05ZmfwTA_oej4ISyMk0TFX2WU"
              alt="Person"
              className={style.cardImage}
            />
          </div>
          <p className={style.nameClient}>
            {" "}
            Agustín Ibáñez
            <span>Full Stack Developer</span>
          </p>
          <div className={style.socialMedia}>
            <a href="https://github.com/Agustin2214" target="_blank">
              <img className={style.svg} src={GitHubIcon} />
              <span className={style.tooltipSocial}>GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/agustinibz/" target="_blank">
              <img className={style.svg} src={LinkedInIcon} />
              <span className={style.tooltipSocial}>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



