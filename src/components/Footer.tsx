import Image from "next/image"
import logo from "../../public/logo.svg"

export default function Footer() {

    return (
        <footer className="bg-purple-500 rounded-lg shadow-sm m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image alt="MoneYou Logo" src={logo} width={80} className="rounded-full shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">MoneYou</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline text-white me-4 md:me-6">Entrar/Cadastro</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Sobre Nós</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
                <span className="block text-sm  sm:text-center">© 2025 <a href="/" className="hover:underline">MoneYou™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}