import Footer from "@/components/Footer";
import InfoHeader from "@/components/InfoHeader";
import MainInfo from "@/components/MainInfo";
import Stepper from "@/components/Stepper";
import Image from "next/image";

import imgFamily from "../../public/imgFamily.png"
import moneyHand from "../../public/maozinha.png"

const explainText = "Os cofrinhos digitais são recursos bancários que ajudam a economizar dinheiro separando valores dentro da conta para diferentes objetivos. Com isso, os usuários podem organizar suas finanças de forma simples e acessível. Essa funcionalidade incentiva o hábito de poupar e o planejamento financeiro."

export default function Home() {
  return (
    <>
      <InfoHeader />

      <main className="flex flex-col justify-center items-center">
        <MainInfo imgSrc={imgFamily} title="O que são nossos cofrinhos ?" text={explainText} />
        <div className="flex flex-row w-full justify-between bg-purple-500">
          <div className=" px-12 py-6">
            <h1 className="text-3xl mb-5">Como Funciona ?</h1>
            <ol className="items-center space-y-10 flex-col rtl:space-x-reverse gap-4">
              <Stepper number={1} text="Entre/Crie sua conta MoneYou" />
              <Stepper number={2} text="Escolha guardar seu dinheiro em uma reserva ou criar um objetivo" />
              <Stepper number={3} text="Guarde seu dinheiro e pronto. Simples assim." />
            </ol>
          </div>
          <div className="flex justify-end">
            <Image src={moneyHand} height={400} alt="Mão entregando dinheiro" className="hidden md:block" />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
