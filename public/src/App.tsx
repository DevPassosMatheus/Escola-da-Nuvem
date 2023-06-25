import React from 'react';
import logo from './logo.svg';
import { Card } from "../src/components/Card"
import './index.css';
import './App.css';
import { Header } from "../src/components/Header"
 

function App() {
  return (
    
     <> 
     <main className="bg-nuvem">
      <Header />
        <div className="py-[15rem] px-[1.5rem] justify-center gap-[5rem] flex flex-col items-center ">
          <div className="flex gap-[5rem] max-[1023px]:flex-col"> 
              <Card 
              
              // Aqui é só colocar suas informações - Matheus


              nome="Matheus Passos"
              sobre="Um jovem com uma fome imensurável de crescimento." 
              CV="/CVMatheus.pdf"
              imagem="/Matheus.png"
              link="https://www.linkedin.com/in/passosmatheus/"
              


               // Exemplo:

              // nome="Seu nome aqui"
              // sobre="Texto sobre você" 
              // CV="/CVMatheus.pdf"
              // imagem="/Matheus.png"
              // link="https://www.linkedin.com/in/passosmatheus/"
              
              />
              
              <Card 
              
               // Aqui é só colocar suas informações - Núbia

              nome="Seu nome aqui"
              sobre="Texto sobre você" 
              CV="/CVseunome.pdf"
              imagem=""
              link="link do seu Linkedin"
              
              />

              <Card 
              
                 // Aqui é só colocar suas informações - Luiz

                 nome="Seu nome aqui"
                 sobre="Texto sobre você" 
                 CV="/CVseunome.pdf"
                 imagem=""
                 link="link do seu Linkedin"
              
              />

            </div>


            <div className="flex gap-[5rem] max-[1023px]:flex-col"> 


              <Card 
              
               // Aqui é só colocar suas informações - Miguel 

               nome="Seu nome aqui"
               sobre="Texto sobre você" 
               CV="/CVseunome.pdf"
               imagem=""
               link="link do seu Linkedin"
              
              />


              <Card 

                 // Aqui é só colocar suas informações - Paulo 
              
                nome="Seu nome aqui"
                sobre="Texto sobre você" 
                CV="/CVseunome.pdf"
                imagem=""
                link="link do seu Linkedin"

              />



              <Card 

                 // Aqui é só colocar suas informações - Mailson 
              
                 nome="Seu nome aqui"
                 sobre="Texto sobre você" 
                 CV="/CVseunome.pdf"
                 imagem=""
                 link="link do seu Linkedin"
              
              />



            </div>
          </div>
      </main>
      </>
  );
}

export default App;
