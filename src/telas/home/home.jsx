import React, { useState, useEffect } from 'react';
import './home.css';
import { Github, Linkedin, Mail } from 'lucide-react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import emailjs from 'emailjs-com';


function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    emailjs.send(
      'service_4qm2qrl',     // seu Service ID
      'template_dl25qzn',    // seu Template ID
      formData,             // dados do formulário
      'ofymTvhvtcZYKUTOf'      // seu User ID / Public Key
    )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        e.target.reset();
      })
      .catch((err) => {
        console.error("Erro ao enviar:", err);
        alert("Ops! Ocorreu um erro ao enviar a mensagem.");
      });
  };

  // Componente Skill
  function Skill({ nome, nivel }) {
    return (
      <div className="skill">
        <span className="skill-nome">{nome}</span>
        <div className="barra-container">
          <div className="barra">
            <div style={{ width: `${nivel}%` }}></div>
          </div>
          <span className="porcentagem">{nivel}%</span>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <ul className="nav">
          <li className="left-item"><a  href="#">&lt;Matheus/&gt;</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contato">Contato</a></li>
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
          <a href="https://github.com/matheussvdev" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/matheus-santos-vieira-60457b309" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=matheussv.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-button"
          >
            <AiOutlineMail size={20} />
          </a>

        </div>

        <div className="mouse"><div className="wheel"></div></div>
      </div>

      {/* Sobre mim */}
      <div className="sobremim" id="sobre">
        <span className='p-sobre'>&lt;<span className='p-span'>Sobre/</span>&gt;</span>
        <div className="conteudo">
          <div className="descricao">
            <p>
              Sou Matheus, 19 anos, moro em Barueri-SP. Sou formado em Técnico em Informática e atualmente estou graduando em Análise e Desenvolvimento de Sistemas pela Universidade Cruzeiro do Sul virtual...
            </p>
          </div>
          <div className="habili">
            <div className="card"><div className="icon">💻</div><h3>Clean Code</h3><p>Escrevendo código limpo, escalável e bem documentado.</p></div>
            <div className="card"><div className="icon">🧠</div><h3>Problem Solving</h3><p>Transformando problemas complexos em soluções simples e elegantes.</p></div>
            <div className="card"><div className="icon">🤝</div><h3>Team Player</h3><p>Trabalho colaborativo com comunicação eficiente.</p></div>
            <div className="card"><div className="icon">⚡</div><h3>Performance</h3><p>Otimização de aplicações para velocidade e confiabilidade.</p></div>
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
            <div className="tags"><span>React</span><span>TypeScript</span><span>OpenAI API</span></div>
            <button className="deploy">deploy()</button>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="skills" id='skills'>
        <h2 className="titulo"><span className="tag">&lt;</span><span className="nome">Skills</span><span className="tag">/&gt;</span></h2>
        <p className="subtitulo">// Níveis de proficiência</p>

        <div className="skills-grupos">
          <div className="skills-card">
            <h3 className="skills-titulo">frontend<span className="dot">.skills</span></h3>
            <Skill nome="React.js" nivel={80} />
            <Skill nome="TypeScript" nivel={80} />
            <Skill nome="Next.js" nivel={70} />
            <Skill nome="CSS" nivel={90} />
            <Skill nome="Bootstrap" nivel={70} />
            <Skill nome="JavaScript" nivel={80} />
          </div>

          <div className="skills-card">
            <h3 className="skills-titulo">backend<span className="dot">.skills</span></h3>
            <Skill nome="Node.js" nivel={70} />
            <Skill nome="Python" nivel={50} />
            <Skill nome="MySQL" nivel={70} />
            <Skill nome="Java" nivel={40} />
            <Skill nome="C++" nivel={40} />
            <Skill nome="PHP" nivel={20} />
          </div>

          <div className="skills-card">
            <h3 className="skills-titulo">outras<span className="dot">.skills</span></h3>
            <Skill nome="Git & Github" nivel={85} />
            <Skill nome="Hardware" nivel={90} />
            <Skill nome="Windows" nivel={90} />
            <Skill nome="Linux" nivel={90} />
            <Skill nome="Firebase" nivel={75} />
          </div>
        </div>

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

      {/* Contato */}
      <div className='contato' id='contato'>
        <span className='p-contato'>&lt;<span className='p-span-contato'>Contato/</span>&gt;</span>
        <p className='p-subtitle'>// Let's build something amazing together</p>

        <div className='contact-container'>
          <div className='send-message'>
            <h3>enviar.<span className='green'>mensagem()</span></h3>
            <form onSubmit={handleSubmit}>
              <div className='input-row'>
                <div className='input-group'>
                  <label htmlFor="name">Nome:</label>
                  <input type='text' id='name' placeholder='seu nome' required />
                </div>
                <div className='input-group'>
                  <label htmlFor="email">E-mail:</label>
                  <input type='email' id='email' placeholder='seuemail@email.com' required />
                </div>
              </div>
              <input type='text' id='subject' placeholder='Qual é o assunto?' required />
              <textarea id='message' placeholder='Sua mensagem...' required></textarea>
              <button type="submit" className='btn-send'>enviar</button>
            </form>
          </div>

          <div className='contact-info'>
            <div className='informacoes'>
              <h3>contact.<span className='green'>info</span></h3>

              <div className='info-item'>
                <span className='icon-bg'><AiOutlineMail size={20} /></span> <span style={{ color: "gray" }}> email:</span>  <br />
                <span>matheussv.dev@gmail.com</span>
              </div>

              <div className='info-item'>
                <span className='icon-bg'><BsTelephone size={20} /></span> <span style={{ color: "gray" }}> phone: </span> <br />
                <span>+55 11 97774-1737</span>
              </div>

              <div className='info-item'>
                <span className='icon-bg'><CiLocationOn size={20} /></span> <span style={{ color: "gray" }}>location: </span>  <br />
                <span>Barueri, SP</span>
              </div>
            </div>

            <div className='status'>
              <span style={{ color: "#8545c0ff" }}>status:"<span className='green'>disponível</span>"</span>
              <p style={{ color: "gray" }}>// Sempre interessado em projetos desafiadores <br />
                  // e em colaborar com equipes talentosas</p>
              <ul>
                <li style={{ color: "#00ff7f" }}>Projetos_freelancer</li>
                <li style={{ color: "yellow" }}>oportunidades_de_tempo_integral</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          {/* Código / frase */}
          <div className="footer-code">
            <span className="dev">&lt;dev/&gt;</span>
            <p className="subtitle">// Construindo o futuro, uma linha de cada vez</p>
            <p className="passion">const passion = <span className="highlight">"clean_code"</span>;</p>
          </div>


          {/* Redes sociais */}
          <div className="footer-social">
            <p>connect.with(me)</p>
            <div className="icons">
              <a href="https://github.com/matheussvdev"  target="_blank"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/matheus-santos-vieira-60457b309"  target="_blank"><Linkedin size={20} /></a>
            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=matheussv.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-button"
          >
            <AiOutlineMail size={20} />
          </a>
            </div>
            <p className="subtitle">// Always open to connect</p>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="footer-bottom">
          <p><span style={{ color: "#6b4890ff" }}>©</span> 2025 | Feito com <span className="heart">❤️</span> e <span style={{ color: " #21b76cff" }}> &lt; &gt;</span></p>
          <p className="console-log">console.log(<span className="highlight">"Obrigado pela visita!"</span>);</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;
