"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Produto 1',
    price: 100,
    description: 'Descrição do Produto 1',
    image: '/product1.jpg',
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 150,
    description: 'Descrição do Produto 2',
    image: '/product2.jpg',
  },
  // Adicione mais produtos conforme necessário
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const openWhatsApp = () => {
    const whatsappNumber = '123456789'; // Substitua pelo seu número de WhatsApp
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: '#ffffff', backgroundImage: "url('/naild.jpg')", backgroundSize: "cover" }}>
      {selectedProduct !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50" onClick={() => setSelectedProduct(null)}>
          <div className="container mx-auto flex items-center justify-center h-full">
            <div className="bg-rose-300 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-black">{products[selectedProduct - 1].name}</h2>
              <div className="my-2">
                <Image src={products[selectedProduct - 1].image} alt={products[selectedProduct - 1].name} width={300} height={300} />
              </div>
              <div className="my-2 text-black">{products[selectedProduct - 1].description}</div>
              <div className="flex justify-center">
                <button onClick={openWhatsApp} className="bg-green-300 rounded-lg p-2 text-black font-bold shadow-md">
                  Agendar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-cover bg-center flex-grow z-10">
        <header className="text-center text-3xl font-bold py-4 text-white">Tabela de Preços</header>
        <div className="container mx-auto relative">
          <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"></div>
          <div className="relative z-10">
            {products.map((product: any) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product.id)}
                className="cursor-pointer mb-4"
              >
                <div className="border-b-2 border-solid border-gray-400 relative">
                  <div className="flex justify-between items-center px-4">
                    <div className="font-serif text-white">
                      {product.name} <span className="text-xs text-gray-500">(Clique aqui)</span>
                    </div>
                    <div>
                      <span className="text-green-500 font-bold">{product.price} USD</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="text-center py-2 text-xs text-black bg-rose-200 z-10">
        <div className="flex justify-center">
          <a href="https://facebook.com" className="mx-2 text-gray-600"><FaFacebook className="text-2xl" /></a>
          <a href="https://instagram.com" className="mx-2 text-gray-600"><FaInstagram className="text-2xl" /></a>
          <a href="https://wa.me/123456789" className="mx-2 text-gray-600"><FaWhatsapp className="text-2xl" /></a>
        </div>
      </footer>
    </div>
  );
}
