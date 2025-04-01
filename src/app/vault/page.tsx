import Image from "next/image";
import logo from "../../../public/logo.svg"
import user from "../../../public/image.svg";
import line6 from "./line-6.svg";
import undrawSavingsUwjn1 from "../../../public/undraw_savings_uwjn 1.svg";

export default function Vault() {

    return (
        <>
        <div className="bg-black w-screen flex flex-col h-screen font-[Mitr]">
            <div className="bg-black flex justify-between pt-[20px] pr-20 pl-20 flex-row ">
                <Image src={logo} alt="Logo" className="top-[40px]" ></Image>
                <Image src={user} alt="Foto do usuario" className="justify-end"></Image>
            </div>
            <div className="flex flex-row pt-[90px] pr-20 pl-60">
                <div>
                    <Image src={undrawSavingsUwjn1} alt="Foto do cofrinho" className=""></Image>
                </div>
                <div className="flex flex-col pl-80">
                        <h1 className=" pb-8 pl-20 text-white text-[42px]">Cofrinhos</h1>
                        <h2 className="[font-family:'Mitr',Helvetica] font-normal text-white text-[30px]">Total Guardado</h2>
                        <div className="flex flex-row pt-4 border-b-violet-400 border-b-3 ">
                            <h1 className="text-2xl">R$</h1>
                            <input className="pl-5 text-2xl" placeholder="0,00" type="number" />
                        </div>
                        <div className="flex flex-row justify-between pt-10 pb-10">
                            <h2 className="text-[20px] text-white">Rendimento Bruto</h2>
                            <p  className="text-[20px] text-white">R$ 20,59</p>
                        </div>
                        <div className="flex flex-col w-92 justify-between p-4 border-[4px] border-solid rounded-[18px] border-[#7220b9]">
                            <h2 className="text-[20px] text-white pb-4 ">Reserva</h2>
                            <p className=" text-[20px] text-white">R$ 282,83</p>
                        </div>
                        <div className="p-7"></div>
                        <div className="flex flex-row w-92 justify-between border-[4px] border-solid rounded-[18px] border-[#7220b9]">
                            <h2 className="text-2xl p-4">Novo Cofrinho</h2>
                            <p className="text-6xl pr-4">+</p>
                        </div>
                </div>
            </div>

        </div>
        </>
    );
}


