import { IconBase } from '@phosphor-icons/react';
import { IconProps } from "@phosphor-icons/react"
import { List } from "@phosphor-icons/react"
 

export const Header = () => {

  

  return (
    <header className="bg-custom-salmon fixed border-b-zinc-200 shadow border-b-2 px-4 py-[1rem] bg-white flex w-[100%] h-[auto] items-center justify-between">
      <div className="w-auto flex items-center gap-[1rem] py-[0.2rem]">
        <img src='/Logo.svg' className="min-[220px]:h-[2rem] min-[240px]:h-[2.2rem] min-[320px]:h-[2.8rem] min-[426px]:h-[3rem] min-[600px]:h-[5rem]"/>
      </div>

      <nav className=" flex gap-[25px] font-Nunito font-medium text-[2.2rem] mx-auto text-custom-salmon min-[220px]:hidden min-[900px]:flex text-[2.2rem]">
        <ul className='flex gap-6'>
          <li className="relative">
            <a>Matheus</a>
            </li>
          <li className="relative">
          <a>Núbia</a>
          </li>
          <li className="relative">
          <a>Luiz</a>
          </li>
          <li className="relative">
          <a>Miguel</a>
          </li>
          <li className="relative">
          <a>Paulo</a>
          </li>
          <li className="relative">
          <a>Mailson</a>
          </li>
        </ul>
      </nav>

       

      <div className="inline-block text-white flex flex-col gap-[1.5rem] min-[900px]:hidden">
        
        
        <nav className="text-white min-[900px]:hidden"> 
          <ul>
            <li className="inline-block">
              <List size={32} className="text-black"/>
              <div className="text-black absolute text-[1.6rem] bg-white px-[3rem]">
                  <a className="text-black block">teste</a>
                  <a className="text-black block">teste</a>
                  <a className="text-black block">teste</a>
                  <a className="text-black block">teste</a>
                  <a className="text-black block">teste</a>
              </div>
            </li>
          </ul>
        </nav>




        
      </div>



    </header>
  );
}