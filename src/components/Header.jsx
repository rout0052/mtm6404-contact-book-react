import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <header className="sticky top-0 shadow-lg bg-red-950 z-10">
            <nav className="navbar flex justify-between px-4 md:px-12 lg:px-20">
                <div>
                    <NavLink className="flex items-center gap-2 text-xl text-white font-extrabold" to="/">
                        <img src="/contact-book-favicon.svg" className="w-auto h-6" />
                        <p>Bahumia Contact Book</p>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}



export default Header;