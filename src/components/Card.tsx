import { LinkedinLogo, FileArrowDown } from "@phosphor-icons/react";

interface CardProps {
  nome?: string;
  sobre: string;
  imagem: string;
  CV?: string;
  link?: string;
}

export const Card = ({ sobre, nome, CV, imagem, link }: CardProps) => {
  

  return (
    <div className="flex flex-col rounded-[2rem] text-center justify-evenly px-[1.6rem] shadow-2xl bg-[#26303F] border-zinc-700 py-[2rem] max-w-[40rem]">
      <div className="flex flex-col items-center">
        <img src={imagem} className="max-w-[50%] rounded-full" />
        <h1 className="text-[#FF9900] text-[2.4rem] py-[1.5rem] font-bold">{nome}</h1>
      </div>
      <p className="m-auto text-center text-[2rem] py-[1.8rem] px-[1.5rem] text-[#C5D7FF]">{sobre}</p>
      <div className="flex justify-center py-[1.5rem] text-[#FF9900]">
        <a href={link} target="_blank">
          <LinkedinLogo size="48" />
        </a>
        <a href={CV} download>
          <FileArrowDown size="48" />
        </a>
      </div>
    </div>
  );
};
