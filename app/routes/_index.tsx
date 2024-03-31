import type { MetaFunction } from "@remix-run/node";
import { imgPng, logoPng } from "~/assets/images";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfólio Tifany" },
    { name: "description", content: "Portfólio Tifany" },
  ];
};

export default function Index() {
  return (
    <>
      <header className="header">
        <img src={logoPng} alt="Tifany" />
        <nav>
          <ul className="header-menu">
            <li>
              <a href="#experiencia">Experiência</a>
            </li>
            <li>
              <a href="#formacao">Formação</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container introducao">
        <img src={imgPng} alt="Tifany" width="360" height="520" />
        <div>
          <h1>
            Desenvolvedora <br />
            Fullstack & <br />
            UI/UX Designer.
          </h1>
          <p>📍 Localizada no Ceará</p>
        </div>
      </main>

      <section
        className="container experiencia"
        id="experiencia"
        aria-label="Experiência"
      >
        <h2 className="subtitulo">Experiência</h2>
        <div>
          <p className="experiencia-texto">
            Desenvolvo pequenos projetos pessoais utilizando
            <strong> HTML</strong>, <strong>CSS</strong> e
            <strong> JavaScript</strong> em conjunto com
            <strong> Frameworks</strong> e <strong>Bibliotecas</strong>. Além
            disso, também realizo o <strong>UI</strong> e
            <strong> UX Design</strong> meus projetos.
          </p>

          <div className="empresa">
            <span className="empresa-ano">2021</span>
            <h3 className="empresa-titulo">Fábrica de Software</h3>
            <span className="empresa-titulo">
              Desenvolvedora Front-End e UI Designer
            </span>
            <p className="empresa-texto">
              Desenvolver um software para a biblioteca do Centro Universitário
              Vale do Salgado. Responsável pelo Front-end e UX Design da página.
            </p>
            <ul className="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>UX Design</li>
            </ul>
          </div>
          <div className="empresa">
            <span className="empresa-ano">2024</span>
            <h3 className="empresa-titulo">Projeto Canil</h3>
            <span className="empresa-titulo">Desenvolvedora Fullstack</span>
            <p className="empresa-texto">
              Desenvolver um site de busca e adoção de animais.
            </p>
            <ul className="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>NodeJS</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="empresa">
            <span className="empresa-ano">2024</span>
            <h3 className="empresa-titulo">Ilucon</h3>
            <span className="empresa-titulo">
              Desenvolvedora Fullstack & UI Designer
            </span>
            <p className="empresa-texto">
              Desenvolver uma Landing Page para uma empresa local. Mostrando
              suas principais obras e área de contato.
            </p>
            <ul className="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>NodeJS</li>
              <li>TypeScript</li>
              <li>UX Design</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="formacao" id="formacao" aria-label="Formação">
        <div className="formacao-container">
          <h2 className="subtitulo">Formação</h2>

          <div>
            <p className="formacao-texto">
              Minha mais recente experiência acadêmica foi minha
              <strong> graduação</strong>🎓 que concluí em 2021 em
              <strong> Análise e Desenvolvimento de Sistemas</strong>. Além
              disso estou aprimorando meus conhecimentos com cursos online.
            </p>
            <ul className="faculdade-lista">
              <li className="faculdade">
                <span className="faculdade-tipo">Graduação</span>
                <h3 className="faculdade-curso">
                  Análise e Desenvolvimento de Sistemas
                </h3>
                <span className="faculdade-instituicao">UNIVS</span>
              </li>
            </ul>
            <div className="formacao-extra">
              <div className="cursos">
                <h3>Cursos On-Line</h3>
                <ul>
                  <li>
                    UI Design para Iniciantes <span>Origamid</span>
                  </li>
                  <li>
                    HTML e CSS para Iniciantes <span>Origamid</span>
                  </li>
                  <li>
                    JavaScript, NodeJS, TypeScript e React <span>B7Web</span>
                  </li>
                </ul>
              </div>

              <div className="idiomas">
                <h3>idiomas</h3>
                <ul>
                  <li>
                    Inglês <span>/ Básico</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contato">
        <div className="footer-container">
          <p className="footer-texto">
            Estou disponível para novos projetos no momento. Entre em contato
            comigo e marcamos uma conversa! 👋
          </p>
          <ul className="footer-contato">
            <li>contato.tifanynunes@gmail.com</li>
            <li>
              <a href="https://www.linkedin.com/in/tifanyanunes/">Linkedin</a>
            </li>
            <li>
              <a href="https://github.com/tifmoou">GitHub</a>
            </li>
          </ul>
          <p className="footer-copy">Tifany. Alguns direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
