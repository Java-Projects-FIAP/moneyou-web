"use client";

import Image from "next/image";
import fotoLogin from "../../../public/foto-login.svg";
import moneyouLogo from "../../../public/logo.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import LoginInput from "@/components/LoginInput";
import { useForm } from "react-hook-form";
import axios from "axios";
import { CircleAlert } from "lucide-react";
import { createUser, getUserByEmail } from "../actions/user-actions";


const loginSchema = z.object({
    email: z.string().email({ message: "E-mail inválido" }),
    name: z.string().optional(),
    password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
});

export default function Login() {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const router = useRouter();
    const [alert, setAlert] = useState<string>();

    type FormData = z.infer<typeof loginSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (formData: FormData) => {
        try {
            const user = await getUserByEmail(formData.email);
            if (isLogin) {
                if (!user || !user?.email) {
                    setAlert("E-mail não cadastrado. Crie sua conta já!");
                    return;
                }
                formData.password === user.password ? router.push("/vault") : setAlert("Senha incorreta. Tente novamente.");
                return;
            }
            if (user || user?.email) {
                setAlert("E-mail já cadastrado. Tente outro!");
                return;
            }
            await createUser(formData);
            reset();
            router.push("/vault");
        } catch (error) {
            console.error("Erro ao entrar usuário:", error);
            setAlert("Erro ao entrar com usuário. Tente novamente.");
        }
    };



    return (
        <div className="flex w-screen h-screen">
            <div className="w-1/2 hidden md:flex items-center justify-center bg-gradient-to-l from-purple-500 to-purple-800">
                <Image src={fotoLogin} alt="Foto da tela de login" width={500} />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-100">
                <Image src={moneyouLogo} alt="MoneYou Logo" className="mb-12" />

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6 m-6 w-full max-w-md">
                    {alert && (
                        <div className="w-fit flex flex-row items-center gap-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <CircleAlert />
                            <span className="block sm:inline">{alert}</span>
                        </div>
                    )}
                    <div className="gap-2">
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <LoginInput label="E-mail" type="text" placeholder="Informe seu e-mail" {...register("email")} error={errors.email?.message} />
                            {!isLogin && (<LoginInput label="Nome" placeholder="Informe seu nome" {...register("name")} error={errors.name?.message} />)}
                            <LoginInput label="Senha" isPassword placeholder="Informe sua senha" type="password" {...register("password")} error={errors.password?.message} />
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <Button type="button" onClick={() => router.push('/')} className="w-1/2 bg-white hover:bg-white text-purple-600 border-2 border-purple-800">
                                Voltar
                            </Button>
                            <Button type="submit" className="bg-purple-800 hover:bg-purple-600 w-1/2">
                                {isLogin ? "Entrar" : "Cadastrar"}
                            </Button>
                        </div>
                        <div className="flex mt-4 items-center justify-center">
                            <h3 className="text-black">{isLogin ? "Não tem cadastro? " : "Já tem login? "}</h3>
                            <p
                                className="text-purple-800 cursor-pointer"
                                onClick={() => {
                                    setIsLogin((prev) => !prev);
                                }}
                            >
                                Faça agora!
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
