import Image, { StaticImageData } from "next/image";

interface MainInfoProps {
    imgSrc: StaticImageData,
    title?: string,
    text?: string,
}


export default function MainInfo(props: MainInfoProps) {

    return (
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-around gap-4 bg-purple-500 px-8 py-6">
            <div className="w-full md:w-1/2">
                <Image src={props.imgSrc}
                    className="w-full md:w-lg" alt="Imagem" />
            </div>
            <div className="w-full md:w-1/2 text-center max-w-md flex flex-col items-center gap-4">
                <h1 className="text-3xl">{props.title}</h1>
                <p className="text-base">{props.text}</p>
            </div>
        </div>
    )
}