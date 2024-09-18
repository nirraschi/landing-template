// src/components/About.jsx
const About = () => {
    return (
        <div className="py-20 bg-white text-gray-800 text-center">
            <h2 className="text-4xl font-bold mb-8 text-blue-600">¿Quiénes Somos?</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat 
                felis ac ex viverra, ac malesuada sapien convallis. Sed sollicitudin sem 
                id metus venenatis, a varius lacus blandit.
            </p>
            <div className="flex justify-center mb-8">
                <div className="+">
                    <h6>*fondo lindo o imagen*</h6>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Nuestra Misión (opcional)</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula.
                    </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Nuestra Visión (opcional)</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula.
                    </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-green-600">Nuestros Valores (opcional)</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
