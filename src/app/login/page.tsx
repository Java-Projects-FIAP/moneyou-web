import Image from "next/image"
import fotoLogin from "../../../public/foto-login.svg"
import LoginInput from "@/components/LoginInput"
import moneyouLogo from "../../../public/logo.svg"

export default function Login() {
    return (
        <>
            <div className="flex w-screen h-screen">
                <div className="w-1/2 hidden md:flex items-center justify-center bg-gradient-to-l from-purple-500 to-purple-800">
                    <Image src={fotoLogin} alt="Foto da tela de login" width={500} />
                </div>
                <div className="w-full md:w-1/2 flex flex-col  items-center justify-center bg-gray-100">
                    <Image src={moneyouLogo} alt="MoneYou Logo" className="mb-12" />
                    <form className="flex flex-col gap-6">
                        <LoginInput label="E-mail" placeholder="Informe seu e-mail" />
                        <LoginInput label="Senha" placeholder="Informe seu e-mail" />
                        <LoginInput label="Repita sua senha" placeholder="Informe seu e-mail" />
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}