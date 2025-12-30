import { navLinks } from "../lib/constants";

const Navbar = () => {
    return (
        <header>
            <nav id="navbar">
                <img
                    src={'/images/logo.svg'}
                    alt="logo"
                />
                <ul>
                    { navLinks.map((navItem, i) => (
                        <li key={i}>
                            <a href={navItem.label}>
                                {navItem.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex-center gap-3">
                    <button>
                        <img src={'/images/search.svg'} alt="search" />
                    </button>
                    <button>
                        <img src={'/images/cart.svg'} alt="cart" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;