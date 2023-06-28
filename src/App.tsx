import React from 'react';
import { Card } from "../src/components/Card"
import './index.css';
import './App.css';



function App() {
  return (

    <>
      <main className="bg-[#eaeaec]">

        <header className="h-[10rem] py-10 px-10">
          <img src="/LogoNova.svg" alt="logo da escola da núvem personalizada" className="h-[3.2rem] min-[360px]:h-[4.2rem] min-[560px]:h-[5.2rem] animate-float2" />
        </header>


        <div className='py-[6rem] min-[220px]:h-auto flex flex-col gap-[10rem] justify-center items-center'>
          <h1 className="font-black text-center py-5 text-[4rem] min-[768px]:text-[5rem] max-[425px]:text-[3rem]">Conheça os profissionais do grupo 05!</h1>
          <div className="flex items-center justify-center max-lg:flex-col lg:text-center max-[425px]:text-center max-lg:gap-[12rem]">

            <p className="px-10 max-w-[73rem] text-[2.2rem]">O projeto de conclusão do curso foi elaborado pelos alunos do Grupo 5, com o objetivo de demonstrar nosso conhecimento. Durante o desenvolvimento do projeto, foi necessário abordar diferentes serviços da AWS para garantir um ambiente robusto e escalável. Um dos serviços utilizados foi o Route 53, que desempenhou um papel fundamental no redirecionamento do DNS para a hospedagem na Hostinger.
              <br />
              <br />
              Outro serviço que utilizamos em nosso projeto foi o CloudFront. Com sua capacidade de distribuição de conteúdo com baixa latência, segurança e alta performance, conseguimos entregar nosso site com rapidez e eficiência para usuários em diferentes localidades. O CloudFront foi essencial ao utilizar o cache distribuído de objetos estáticos em servidores ao redor do mundo, o que otimizou a entrega de conteúdo e proporcionou uma experiência de navegação mais fluida aos visitantes do nosso site. Ao combinar o Route 53 e o CloudFront, garantimos uma infraestrutura sólida e uma entrega de conteúdo confiável para o nosso projeto de conclusão do curso.</p>
            <div className="w-full px-10 flex items-center justify-center">
              <img src="/arte.svg" alt="uma arte personalizada para o projeto" className="w-[100%] max-w-[80rem] animate-float rotate lg:w-[45rem] min-[1280px]:w-[60rem]" />
            </div>
          </div>
        </div>







        <div className="py-[3rem] px-[1.5rem] justify-center gap-[10rem] flex flex-col items-center ">

          <h1 className="font-black text-center py-10 text-[4rem] min-[768px]:text-[5rem] max-[425px]:text-[3rem]">Nossa equipe</h1>

          <div className="flex gap-[10rem] flex-wrap justify-center">
            <Card


              // sobre, nome, CV, imagem, link

              // Aqui é só colocar suas informações - Matheus

              nome="Matheus Passos da Silva"
              sobre="Sou um jovem cheio de energia e extremamente dedicado, dou o sangue sempre, em tudo que faço. Tenho uma fome imensurável de crescimento e sou apaixonado por tecnologia. "
              imagem="/Matheus.png"
              link="https://www.linkedin.com/in/passosmatheus/"
              CV="/CVMatheus.pdf"




            />

            <Card

              // Aqui é só colocar suas informações - Núbia

              nome="Nubia dos Reis Faria"
              sobre="Meu nome é Nubia tenho 19 anos e sou apaixonada por tecnologia, tive o primeiro contato com programação em 2022 através do instituto PROA  e desde então almejo   permanecer na área de tecnologia ."
              imagem="/Nubia.png"
              link="https://www.linkedin.com/in/n%C3%BAbiareis"
              CV="/CVNubia.pdf"


            />

            <Card

              // Aqui é só colocar suas informações - Luiz

              nome="Luiz Felipe Borba da Silva"
              sobre="Estudante de Ciência da Computação que busca sempre aprender e se desenvolver na área de tecnologia."
              imagem="/Luiz.png"
              link="https://www.linkedin.com/in/luizfelip"
              CV="/CVLuiz.pdf"


            />







            <Card

              // Aqui é só colocar suas informações - Miguel 

              nome="Miguel Barbosa Cavalcante Mendes"
              sobre="Meu nome é Miguel tenho 20 anos e sempre gostei de tecnologia, comecei a estudar com 15 anos essa area, fiz alguns cursos, ja dei aulas de informatica, e ja trabalhei em uma grafica. Assim como todo jovem gosto de praticar esportes, sair com amigos, familia, mas meus hobbies preferidos são: Estudar programação e a musica, sempre que posso toco hinos e partituras com a minha flauta."
              imagem="/Miguel.png"
              link="https://www.linkedin.com/in/miguel-barbosa763/"
              CV="CVMiguel.pdf"
            />


            <Card

              // Aqui é só colocar suas informações - Mailson 

              nome="Mailson Costa"
              sobre="Sempre tive interesse em resolver problemas complexos, e esse interesse se
              intensificou com a minha participação na Olimpíada Brasileira de Matemática das
              Escolas Públicas (OBMEP), o que solidificou a minha paixão pela matemática.
              Atualmente, vejo na programação uma oportunidade de colocar essa paixão em
              prática e ter a possibilidade de continuar a resolver problemas complexos, e com
              isso poder ajudar pessoas de alguma forma.
              "
              imagem="/Mailson.png"
              link="https://www.linkedin.com/in/mailsonn/"
              CV="/CVMailson.pdf"


            />



          </div>
        </div>


        <div className="py-[10rem]">

          <h1 className="font-black text-center py-10 text-[4rem] min-[768px]:text-[5rem] max-[425px]:text-[3rem]">Acesse nosso GitHub!</h1>

          <div className="flex items-center justify-center">
            <img src="/QRCode.svg" alt="QR Code para acessar o github" className="max-h-[45rem] py-[5rem]" />
          </div>

          <h1></h1>

        </div>

      </main>
    </>
  );
}

export default App;
