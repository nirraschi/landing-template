import React from 'react';

const ImagePlaceholder = ({ imageUrl, shape }) => {
  // Definimos las formas que podemos llegar a necesitar

    const shapeClasses = {
    arc: 'rounded-t-full', // Forma de arco - No lleva comillas por ser un identidificador válido, sin espacios ni guiones. Aunque es indistinto si lleva comillas o no.
    'semi-circle': 'rounded-full', // Forma de semicírculo
    'quarter-circle-1': 'rounded-tr-full h-1/2 w-1/2', // cuarto de circulo, distintas posiciones
    'quarter-circle-2': 'rounded-tl-full h-1/2 w-1/2',
    'quarter-circle-3': 'rounded-bl-full h-1/2 w-1/2',
    'quarter-circle-4': 'rounded-br-full h-1/2 w-1/2'

    
    };

    return ( //Retornamos el componente, si hay imagen o no.
        //Clases responsives: https://tailwindcss.com/docs/responsive-design
        //
    <div className={`relative overflow-hidden bg-gray-300 ${shapeClasses[shape]} w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72`}>
        {imageUrl ? (
        <img src={imageUrl} alt="Imagen real" className="w-full h-full object-cover" />
        ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
            Imagen no disponible
        </div>
        )}
    </div>
    );
};

export default ImagePlaceholder;
