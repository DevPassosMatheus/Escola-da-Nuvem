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

              nome="Seu nome aqui"
              sobre="Texto sobre você" 
              imagem=""
              
              />
              
              <Card 
              
               // Aqui é só colocar suas informações - Núbia

              nome="Seu nome aqui"
              sobre="Texto sobre você" 
              imagem=""
              
              />

              <Card 
              
                 // Aqui é só colocar suas informações - Luiz

              nome="Seu nome"
              sobre="Texto sobre você" 
              imagem=""
              
              />

            </div>


            <div className="flex gap-[5rem] max-[1023px]:flex-col"> 


              <Card 
              
               // Aqui é só colocar suas informações - Miguel 

              nome="Seu nome aqui"
              sobre="Texto sobre você" 
              imagem=""
              
              />


              <Card 

                 // Aqui é só colocar suas informações - Paulo 
              
              nome="Seu nome aqui"
              sobre="Texto sobre você" 
              imagem=""

              />



              <Card 

                 // Aqui é só colocar suas informações - Mailson 
              
              nome="Seu nome aqui"
              sobre="Texto sobre você" 
              imagem=""
              
              />



            </div>
          </div>
      </main>
      </>
  );
}

export default App;
