// src/components/Header.jsx
const Header = () => {
    return (
        <header className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">Logo</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">
                                Quienes Somos
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="text-gray-600 hover:text-blue-600 transition">
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
