import Image from "next/image"
import logo from "../../public/logo.svg"
import { Molle } from "next/font/google"
import Link from "next/link";


const molle = Molle({ weight: "400", subsets: ["latin"] });

export default function InfoHeader() {


    return (
        <div className="flex justify-evenly items-center p-6 bg-white ">
            <div className="flex flex-row items-center gap-3 text-purple-500 text-[30px]">
                <Image alt="Logo da Marca" src={logo} width={100} className="rounded-full shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80" />
                <p className={`hidden md:block ${molle.className}`}>MoneYou</p>
            </div>
            <Link href="/login">
                <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Acessar/Criar sua conta
                </button>
            </Link>
        </div>
    )
}