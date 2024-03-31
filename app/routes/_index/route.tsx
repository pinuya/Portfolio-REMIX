import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { imgPng, logoPng } from "~/assets/images";
import { ExpItem } from "./ExpItem";
import { GraduationItem } from "./GraduationItem";
import { Courses } from "./Courses";
import { Language } from "./Language";
import { json } from "@vercel/remix";
export const meta: MetaFunction = () => {
  return [
    { title: "Portfólio Tifany" },
    { name: "description", content: "Portfólio Tifany" },
  ];
};

export const loader = () => {
  const expList = [
    {
      title: "Projeto Canil",
      role: "Desenvolvedora Fullstack",
      description: "Desenvolver um site de busca e adoção de animais.",
      tags: ["html", "css", "js", "node", "ts", "react", "remix"],
      date: new Date("02-03-2024"),
    },
    {
      title: "Ilucon",
      role: "Desenvolvedora Fullstack e UI Designer",
      description:
        "Desenvolver uma Landing Page para uma empresa local. Mostrando suas principais obras e área de contato.",
      tags: ["html", "css", "js", "node", "ts", "react", "remix", "ui"],
      date: new Date("02-03-2024"),
    },
    {
      title: "Fabrica de Software",
      role: "Desenvolvedora Front-End e UI Designer",
      description:
        "Desenvolver um software para a biblioteca do Centro Universitário Vale do Salgado. Responsável pelo Front-end e UX Design da página.",
      tags: ["html", "css", "js", "ui"],
      date: new Date("02-03-2021"),
    },
  ];

  return json({ imgPng, logoPng, expList });
};

export default function Index() {
  const { imgPng, logoPng, expList } = useLoaderData<typeof loader>();

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

          {expList.map((expItem, idx) => (
            <ExpItem
              key={idx}
              title={expItem.title}
              role={expItem.role}
              description={expItem.description}
              tags={expItem.tags}
              date={new Date(expItem.date)}
            />
          ))}
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
            <GraduationItem />

            <div className="formacao-extra">
              <div className="cursos">
                <h3>Cursos On-Line</h3>
                <Courses />
              </div>

              <div className="idiomas">
                <h3>idiomas</h3>
                <Language />
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
