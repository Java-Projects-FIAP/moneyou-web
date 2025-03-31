interface LoginInput {
    label: string,
    placeholder: string,
}

export default function LoginInput(props: LoginInput) {
    return (
        <>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black ">{props.label}</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-white border-2 border-purple-800 rounded-s-md ">
                        <svg className="w-4 h-4 text-purple-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                    </span>
                    <input type="text" id="email" className="rounded-none rounded-e-lg bg-white border-2 border-purple-800 text-purple-800 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder={props.placeholder} />
                </div>
            </div>
        </>

    )
}