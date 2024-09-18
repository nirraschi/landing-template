// src/components/Services.jsx
const Services = () => {
    return (
        <div className="py-20 bg-gray-100 text-center">
            <h2 className="text-4xl font-bold mb-8">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-2xl font-semibold mb-4">Servicio 1</h3>
                    <p>Descripción 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit eligendi at beatae tempora neque natus fugit obcaecati architecto facere dolorum rerum.</p>
                    <img
                        src="https://via.placeholder.com/150" // Cambia esta URL por la de tu imagen
                        alt="Servicio 1"
                        className="mt-4 rounded-lg w-36 h-36 object-contain"
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-2xl font-semibold mb-4">Servicio 2</h3>
                    <p>Descripción 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit eligendi at beatae tempora neque natus fugit obcaecati architecto facere dolorum rerum</p>
                    <img
                        src="https://via.placeholder.com/150" // Cambia esta URL por la de tu imagen
                        alt="Servicio 2"
                        className="mt-4 rounded-lg"
                    />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-2xl font-semibold mb-4">Servicio 3</h3>
                    <p>Descripción 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit eligendi at beatae tempora neque natus fugit obcaecati architecto facere dolorum rerum</p>
                    <img
                        src="https://via.placeholder.com/150" // Cambia esta URL por la de tu imagen
                        alt="Servicio 3"
                        className="mt-4 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
