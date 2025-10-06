import React, { useState, useEffect } from 'react';

import './home.css';
import { Github, Linkedin, Mail } from 'lucide-react';

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <ul className="nav">
          <li className="left-item"><a>&lt;Matheus/&gt;</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>

      {/* Corpo */}
      <div className="corpo">
        <img src="" alt="" />
        <span className='h1-span'>&lt;<span className='h1-prin'>Matheus Santos/</span>&gt;</span>

        <p>
          <span style={{ color: "#569CD6" }}>const </span>
          <span style={{ color: "#9CDCFE" }}>developer </span>
          <span style={{ color: "#DCDCAA" }}>= </span>
          <span style={{ color: "#ffff00ff" }}>"Full Stack Engineer"</span>;
        </p>

        <p>// Seja Bem-vindo ☘</p>

        <p>
          <span style={{ color: "#695fd5ff" }}>skills: </span>
          <span style={{ color: "#409c5d" }}> &#91;"React", </span>
          <span style={{ color: "#409c5d" }}>"Node.js", </span>
          <span style={{ color: "#409c5d" }}>"TypeScript",</span>
          <span style={{ color: "#409c5d" }}> "Python"&#93; </span>;
        </p>

        <div className="button-container">
          <button className="btn-primary">Ver Projetos</button>
          <button className="btn-secondary">Entre em Contato</button>
        </div>

        <div className="social-buttons">
          <a href="https://github.com/matheussvdev" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/matheus-santos-vieira-60457b309" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:matheussv.dev@gmail.com" className="email-button">
            <Mail size={20} />
          </a>
        </div>

        {/* Mouse */}
        <div className="mouse" >
          <div className="wheel" ></div>
        </div>
      </div>

      {/* Sobre mim */}
      <div className="sobremim" id="sobre" >
        <span  className='p-sobre'>&lt;<span className='p-span'>Sobre/</span>&gt;</span>


        <div className="conteudo">
          <div className="descricao">
            <p>
              Sou Matheus, 19 anos, moro em Barueri-SP. Sou formado em Técnico em Informática e atualmente estou graduando em Análise e Desenvolvimento de Sistemas pela Universidade Cruzeiro do Sul virtual. Atuo como Auxiliar Técnico de TI na Selbetti, com experiência em suporte, reparos de hardware (notebooks e CPUs), atendimento a chamados de garantia e instalação de imagens em ambientes corporativos. <br /> <br />
              Meu interesse por desenvolvimento de software começou antes mesmo da formação técnica. De forma autodidata, dei os primeiros passos na programação, o que despertou meu interesse pela área e me motivou a ingressar no curso Técnico em Informática. Durante a formação, aprofundei meus conhecimentos e desenvolvi diversos projetos, tanto pessoais quanto acadêmicos, envolvendo front-end, back-end e banco de dados. Atualmente, sigo me especializando por meio da graduação em Análise e Desenvolvimento de Sistemas, buscando constantemente evoluir como profissional de tecnologia.
            </p>
          </div>

          <div className="habili">
            <div className="card">
              <div className="icon">💻</div>
              <h3>Clean Code</h3>
              <p>Escrevendo código limpo, escalável e bem documentado.</p>
            </div>
            <div className="card">
              <div className="icon">🧠</div>
              <h3>Problem Solving</h3>
              <p>Transformando problemas complexos em soluções simples e elegantes.</p>
            </div>
            <div className="card">
              <div className="icon">🤝</div>
              <h3>Team Player</h3>
              <p>Trabalho colaborativo com comunicação eficiente.</p>
            </div>
            <div className="card">
              <div className="icon">⚡</div>
              <h3>Performance</h3>
              <p>Otimização de aplicações para velocidade e confiabilidade.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Projetos */}
      <div className='projetos' id='projetos'>
        <span className='p-projetos'>&lt;<span className='p-span-projetos'>Projetos/</span>&gt;</span>
        <p className="subtitulo">// <span>Projetos pessoais e experimentais</span></p>

        <div className="cards2">
          <div className="card2">
            <img src="https://img.freepik.com/fotos-gratis/engenheiro-de-computadores-a-digitar-no-teclado-a-escrever-codigo-para-construir-firewalls_482257-101117.jpg?semt=ais_hybrid&w=740&q=80" alt="Projeto 1" />
            <h3>AI Code Assistant</h3>
            <p>Ferramenta de revisão de código com IA para desenvolvedores.</p>
            <div className="tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>OpenAI API</span>
            </div>
            <button className="deploy">deploy()</button>
          </div>
        </div>

      </div>


        {/* Skills */}
<div className="skills">
  <h2 className="titulo">
    <span className="tag">&lt;</span>
    <span className="nome">Skills</span>
    <span className="tag">/&gt;</span>
  </h2>
  <p className="subtitulo">// Níveis de proficiência</p>

  <div className="skills-grupos">
    {/* Frontend */}
    <div className="skills-card">
      <h3 className="skills-titulo">frontend<span className="dot">.skills</span></h3>
      <div className="skill"><span>React.js</span><div className="barra"><div style={{ width: "80%" }}></div></div></div>
      <div className="skill"><span>TypeScript</span><div className="barra"><div style={{ width: "80%" }}></div></div></div>
      <div className="skill"><span>Next.js</span><div className="barra"><div style={{ width: "70%" }}></div></div></div>
      <div className="skill"><span>CSS</span><div className="barra"><div style={{ width: "90%" }}></div></div></div>
      <div className="skill"><span>Boostratp </span><div className="barra"><div style={{ width: "70%" }}></div></div></div>
       <div className="skill"><span>JavaScript </span><div className="barra"><div style={{ width: "80%" }}></div></div></div>
      
    </div>

    {/* Backend */}
    <div className="skills-card">
      <h3 className="skills-titulo">backend<span className="dot">.skills</span></h3>
      <div className="skill"><span>Node.js</span><div className="barra"><div style={{ width: "70%" }}></div></div></div>
      <div className="skill"><span>Python</span><div className="barra"><div style={{ width: "50%" }}></div></div></div>
      <div className="skill"><span>My SQL</span><div className="barra"><div style={{ width: "70%" }}></div></div></div>
      <div className="skill"><span>Java</span><div className="barra"><div style={{ width: "40%" }}></div></div></div>
      <div className="skill"><span>C ++</span><div className="barra"><div style={{ width: "40%" }}></div></div></div>
       <div className="skill"><span>Php</span><div className="barra"><div style={{ width: "20%" }}></div></div></div>
    </div>

    {/* DevOps */}
    <div className="skills-card">
      <h3 className="skills-titulo">Outras<span className="dot">.skills</span></h3>
      <div className="skill"><span>Git & Github</span><div className="barra"><div style={{ width: "85%" }}></div></div></div>
      <div className="skill"><span>Hardware</span><div className="barra"><div style={{ width: "90%" }}></div></div></div>
      <div className="skill"><span>Windows</span><div className="barra"><div style={{ width: "90%" }}></div></div></div>
      <div className="skill"><span>Linux</span><div className="barra"><div style={{ width: "90%" }}></div></div></div>
       <div className="skill"><span>Firebase</span><div className="barra"><div style={{ width: "75%" }}></div></div></div>
    </div>
  </div>

  {/* Dev Tools */}
  <div className="devtools">
    <h3 className="devtools-titulo">dev<span className="dot">.tools</span>[]</h3>
    <div className="devtools-grid">
      <span>VS Code</span>
      <span>Git</span>
      <span>Figma</span>
      <span>Firebase</span>
    </div>
  </div>
</div>





     
      </div>
      );
}

      export default Home;
