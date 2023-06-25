import { LinkedinLogo, FileArrowDown } from "@phosphor-icons/react";

interface CardProps {
  nome?: string;
  sobre?: string;
  imagem?: string;
  CV?: string;
  link?: string;
}

export const Card = ({ sobre, nome, CV, imagem, link }: CardProps) => {
  if (imagem === "" || imagem === undefined) {
    imagem = "noimage.jpg";
  }
np
  return (
    <div className="flex flex-col rounded-[2rem] text-center justify-evenly px-[1.6rem] bg-zinc-800 border-zinc-700 text-white max-w-[36.2rem] min-[1024px]:min-w-[26.5rem] min-[1024px]:max-w-[29rem] min-[1280px]:min-w-[36.2rem] py-[2rem]">
      <div className="flex flex-col items-center">
        <img src={imagem} className="max-w-[50%] rounded-full" />
        <h1 className="text-[2.4rem] py-[1.5rem]">{nome}</h1>
      </div>
      <p className="m-auto text-center text-[2rem] py-[1.8rem] px-[1.5rem]">{sobre}</p>
      <div className="flex justify-center py-[1.5rem]">
        <a href={link} target="_blank">
          <LinkedinLogo size="48" />
        </a>
        <a href={CV} download>
          <FileArrowDown size="48" />
        </a>
      </div>
      <a className="justify-self-end py-3 px-3 text-[2rem]">Saiba mais</a>
    </div>
  );
};
