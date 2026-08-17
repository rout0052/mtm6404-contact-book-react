const Footer = () => {
    // Standard footer with information about the project
    return (
        <footer className="pt-6 pb-12 px-4 md:px-12 lg:px-20 text-xs bg-red-950 text-white flex flex-col gap-4">
            <p>Contact Information inspired by <a className="font-bold underline underline-offset-4" href="https://naddpod.com/">Not Another DND Podcast</a></p>
            <p>Tech Stack: <a className="font-bold underline underline-offset-4" href="https://react.dev/">React (Frontend Framework)</a>, <a className="font-bold underline underline-offset-4" href="https://vite.dev/">Vite (Build Tool)</a>, <a className="font-bold underline underline-offset-4" href="https://tailwindcss.com/">TailwindCSS (CSS Framework)</a>, <a className="font-bold underline underline-offset-4" href="https://daisyui.com/">DaisyUI (UI Kit)</a></p>
            <p>Programmed by Taro Routly for the MTM6404 Contact Book assignment</p>

            <img src="/tarobytez-logo-white.svg" width="150" height="auto" alt="tarobytez logo in white" />
        </footer>
    )
}

export default Footer;