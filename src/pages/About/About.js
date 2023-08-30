//CSS
import styles from './About.module.css'

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Mini <span>Blog</span></h2>
        <p>Este mini-blog foi desenvolvido por mim, Leonardo. Sou um desenvolvedor front-end fascinado por desenvolver e planejar projetos como este.
           O meu objetivo com o mini-blog era praticar e aprimorar meus conhecimentos. Aqui é possível criar e postar diversos tipos de conteúdos.
        </p>
        <p>
          Caso queira saber mais sobre mim você pode acessar o meu site clicando no botão abaixo.
        </p>
        <a href="https://leonardo-oliveira.vercel.app" className="btn">
          Saiba mais...
        </a>
    </div>
  );
};

export default About;