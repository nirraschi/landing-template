// src/components/Contact.jsx
const Contact = () => {
    return (
        <div className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
            <h2 className="text-4xl font-bold mb-8">Contáctanos</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
                Estamos aquí para ayudarte. Completa el formulario a continuación y nos pondremos en contacto contigo.
            </p>
            <form className="bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="email"
                        type="email"
                        placeholder="Tu correo electrónico"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="message"
                        rows="4"
                        placeholder="Tu mensaje"
                    />
                </div>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    type="submit"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contact;
