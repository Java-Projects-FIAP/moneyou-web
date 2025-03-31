interface StepperProps {
    number: number,
    title?: string,
    text: string,
}
export default function Stepper(props: StepperProps) {

    return (
        <>
            <li className="flex items-center text-white text-2xl space-x-2.5 rtl:space-x-reverse">
                <span className="flex items-center justify-center text-lg w-8 h-8 border-2 p-4 border-white rounded-full shrink-0">
                    {props.number}
                </span>
                <span>
                    {props.title && <h3 className="font-medium leading-tight">{props.title}</h3>}
                    <p className="text-xl">{props.text}</p>
                </span>
            </li>
        </>
    )
}