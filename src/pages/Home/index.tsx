import React from 'react';

import codeImg from '../../assets/code.png';
import profileImg from '../../assets/perfil.jpeg';

import linkedinImg from '../../assets/linkedin.png';
import twitterImg from '../../assets/twitter.png';
import instagramImg from '../../assets/instagram.png';

import '../../styles/home.scss'

function Home() {
  return(
    <>
      <header>
        <div className="logo">Jessica Castro <img src={codeImg} alt="Code"></img></div>
      </header>

      <div className="container">
        <div id="about">
          <div className="about-header">
            <div>
              <h1><strong>Olá,</strong> me chamo Jessica Castro!</h1>
              <h2>Sou uma Desenvolvedora e Instrutora Assistente de Full Stack!</h2>

              <p>Tenho 25 anos, trabalho na Globoplay como <strong>Desenvolvedora</strong> e atuo na Digital House como <strong>Instrutora Assistente de Full Stack</strong>! 
              Sou apaixonada por tecnologia e estou sempre estudando coisas novas. Nas horas livres gosto de jogar vídeo-game e futsal.</p>
            </div>

            <img src={profileImg} alt="Jessica Castro" />
          </div>
        </div>

        <hr />

        <div id="contact">
        <a href="https://linkedin.com/in/jessicacastros">
            <img src={linkedinImg} alt="Linkedin de Jessica Castro" />
          </a>

          <a href="https://linkedin.com/in/jessicacastros">
            <img src={twitterImg} alt="Linkedin de Jessica Castro" />
          </a>

          <a href="https://linkedin.com/in/jessicacastros">
            <img src={instagramImg} alt="Linkedin de Jessica Castro" />
          </a>
        </div>
      </div>
    </>
  );
}

export { Home }