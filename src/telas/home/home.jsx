import React, { useState, useEffect } from 'react';
import './home.css';
import { Github, Linkedin, Mail, X, Menu } from 'lucide-react'; // ⬅️ Adicionado X e Menu
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import emailjs from 'emailjs-com';
import novaopcao from '../../assets/images/novaopcao.png';
import home from '../../assets/images/home.png';
import vendas from '../../assets/images/vendas.png';
import relatorios from '../../assets/images/relatorios.png';
import carrinho from '../../assets/images/carrinho.png';
import estoque from '../../assets/images/estoque.png';



function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [imagemAtual, setImagemAtual] = useState(0);
  const [imagemAmpliada, setImagemAmpliada] = useState(false);
  const projetosInfo = [
    {
      imagem: home,
      titulo: "Home",
      descricao: "Esse é o painel principal do sistema.",

    },
    {
      imagem: estoque,
      titulo: "Estoque",
      descricao: "O  Estoque permite gerenciar todos os produtos cadastrados, incluindo inserção, edição, exclusão e controle de quantidades, garantindo organização e atualização dos itens disponíveis.",

    },
    {
      imagem: vendas,
      titulo: "Vendas",
      descricao: "A central de Vendas centraliza o registro e acompanhamento das transações realizadas, exibindo histórico, valores e desempenho comercial de forma prática e visual.",

    },
    {
      imagem: relatorios,
      titulo: "Relatórios",
      descricao: "A página de Relatórios fornece uma visão analítica do sistema, apresentando dados consolidados em tabelas e gráficos que auxiliam na tomada de decisões estratégicas.",

    },
    {
      imagem: carrinho,
      titulo: "Carrinho",
      descricao: "O carrinho reúne os produtos selecionados para compra, permitindo revisar os itens, ajustar quantidades e confirmar a operação antes da finalização da venda.",

    },
  ];


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

  // Função para scroll suave
  const scrollPara = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
          <a href="#" className="logo">&lt;Matheus/&gt;</a>
        </div>

        {/* Links visíveis no desktop */}
        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <button className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`menu-lateral ${menuOpen ? "ativo" : ""}`}>
          <ul>
            <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
            <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
          </ul>
        </div>
      </nav>


      {/* Corpo */}
      <div className="corpo">

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
          <button className="btn-primary" onClick={() => scrollPara('projetos')}>Ver Projetos</button>
          <button className="btn-secondary" onClick={() => scrollPara('contato')}>Entre em Contato</button>
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
              Sou Matheus, 19 anos, moro em Barueri-SP. Sou formado em Técnico em Informática e atualmente estou graduando em Análise e Desenvolvimento de Sistemas pela Universidade Cruzeiro do Sul virtual. Atuo como Auxiliar Técnico de TI na Selbetti, com experiência em suporte, reparos de hardware (notebooks e CPUs), atendimento a chamados de garantia e instalação de imagens em ambientes corporativos.
              <br /> <br />
              Meu interesse por desenvolvimento de software começou antes mesmo da formação técnica. De forma autodidata, dei os primeiros passos na programação, o que despertou meu interesse pela área e me motivou a ingressar no curso Técnico em Informática. Durante a formação, aprofundei meus conhecimentos e desenvolvi diversos projetos, tanto pessoais quanto acadêmicos, envolvendo front-end, back-end e banco de dados. Atualmente, sigo me especializando por meio da graduação em Análise e Desenvolvimento de Sistemas, buscando constantemente evoluir como profissional de tecnologia.
            </p>
          </div>
          <div className="habili">
            <div className="card"><div className="icon">💻</div><h3>Full Stack Development</h3><p>Construindo soluções completas do front ao back-end.</p></div>
            <div className="card"><div className="icon">🧠</div><h3>Solução de Problemas</h3><p>Transformando problemas complexos em soluções simples e elegantes.</p></div>
            <div className="card"><div className="icon">🤝</div><h3>Adaptabilidade</h3><p>Rapidez em aprender e se ajustar a novos contextos.</p></div>
            <div className="card"><div className="icon">⚡</div><h3>Performance</h3><p>Buscando excelência em cada linha de código, entregando sistemas rápidos, estáveis e escaláveis.</p></div>
          </div>
        </div>
      </div>

      {/* Projetos */}
      <div className='projetos' id='projetos'>
        <span className='p-projetos'>&lt;<span className='p-span-projetos'>Projetos/</span>&gt;</span>
        <p className="subtitulo">// <span>Projetos pessoais e experimentais</span></p>
        <div className="cards2">
          <div className="card2">
            <img src={novaopcao} alt="Projeto 1" />
            <h3>Nova opção</h3>
            <p>Aplicativo desenvolvido para uso interno no comércio do meu pai. Permite registrar vendas, controlar o estoque, gerar relatórios e acompanhar devedores de forma prática e organizada.</p>
            <div className="tags"><span>React Native</span><span>TypeScript</span><span>Firebase</span></div>
            <button className="deploy" onClick={() => setModalAberto(true)}>acessar()</button>
          </div>
        </div>
      </div>

      {modalAberto && (
        <div className={`modal-overlay ${modalAberto ? "ativo" : ""}`} onClick={() => setModalAberto(false)}>
          <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="fechar-modal" onClick={() => setModalAberto(false)}>
              <X size={24} />
            </button>

            <div className="carrossel">
              <button
                className="seta" id="setaesquerda"
                onClick={() =>
                  setImagemAtual((imagemAtual - 1 + projetosInfo.length) % projetosInfo.length)
                }
              >
                ‹
              </button>

              <img
                src={projetosInfo[imagemAtual].imagem}
                alt={projetosInfo[imagemAtual].titulo}
                className="carrossel-imagem"
                onClick={() => setImagemAmpliada(true)}
              />

              <button
                className="seta"
                id="setadireita"
                onClick={() => setImagemAtual((imagemAtual + 1) % projetosInfo.length)}
              >
                ›
              </button>

              {/* Modal de zoom */}
              {imagemAmpliada && (
                <div className="zoom-modal" onClick={() => setImagemAmpliada(false)}>
                  <img
                    src={projetosInfo[imagemAtual].imagem}
                    alt={projetosInfo[imagemAtual].titulo}
                    className="zoom-imagem"
                  />
                </div>
              )}
            </div>

            <div className="modal-info">
              <h3>{projetosInfo[imagemAtual].titulo}</h3>
              <p>{projetosInfo[imagemAtual].descricao}</p>

            </div>
          </div>
        </div>
      )}

      {/* Skills */}
      <div className="skills" id='skills'>
        <h2 className="titulo"><span className="tag">&lt;</span><span className="nome">Skills</span><span className="tag">/&gt;</span></h2>
        <p className="subtitulo">// Níveis de proficiência</p>

        <div className="skills-grupos">
          <div className="skills-card">
            <h3 className="skills-titulo">frontend<span className="dot">.skills</span></h3>
            <Skill nome="React.js" nivel={80} />
            <Skill nome="TypeScript" nivel={80} />
            <Skill nome="Next.js" nivel={30} />
            <Skill nome="CSS" nivel={90} />
            <Skill nome="Bootstrap" nivel={70} />
            <Skill nome="JavaScript" nivel={80} />
          </div>

          <div className="skills-card">
            <h3 className="skills-titulo">backend<span className="dot">.skills</span></h3>
            <Skill nome="Node.js" nivel={70} />
            <Skill nome="Python" nivel={20} />
            <Skill nome="MySQL" nivel={70} />
            <Skill nome="Java" nivel={40} />
            <Skill nome="C++" nivel={30} />
            <Skill nome="PHP" nivel={20} />
          </div>

          <div className="skills-card">
            <h3 className="skills-titulo">outras<span className="dot">.skills</span></h3>
            <Skill nome="Git & Github" nivel={85} />
            <Skill nome="Hardware" nivel={95} />
            <Skill nome="Windows" nivel={99} />
            <Skill nome="Linux" nivel={95} />
            <Skill nome="Firebase" nivel={80} />
          </div>
        </div>
      </div>

      {/* Contato */}
      <div className='contato' id='contato'>
        <span className='p-contato'>&lt;<span className='p-span-contato'>Contato/</span>&gt;</span>


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
              <a href="https://github.com/matheussvdev" target="_blank"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/matheus-santos-vieira-60457b309" target="_blank"><Linkedin size={20} /></a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=matheussv.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="email-button"
              >
                <AiOutlineMail size={20} />
              </a>
            </div>
            <p className="subtitle">// Me encontre nessas redes</p>
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
