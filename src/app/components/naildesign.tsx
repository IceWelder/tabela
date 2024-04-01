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
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f3f3f3', backgroundImage: "url('/backgr.jpg')", backgroundSize: "cover" }}>
      <div className="bg-cover bg-center flex-grow">
        <header className="text-center text-3xl font-bold py-8 text-black">Tabela de Preços</header>
        <div className="container mx-auto">
          {products.map((product: any) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product.id)}
              className="cursor-pointer hover:shadow-md transition duration-300 ease-in-out mb-4"
              style={{ minHeight: '80px', display: 'flex', alignItems: 'center' }}
            >
              <div className="border-dashed border-gray-400 border-b-2 relative w-full">
                <div className="flex justify-between items-center px-4">
                  <div className="font-serif text-black">{product.name}</div>
                  <div>
                    <div className="bg-green-300 rounded-lg p-2 text-black font-bold">
                      {product.price} USD
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center py-2 text-xs text-black bg-rose-200">
        <div className="flex justify-center">
          <a href="https://facebook.com" className="mx-2 text-gray-600"><FaFacebook className="text-2xl" /></a>
          <a href="https://instagram.com" className="mx-2 text-gray-600"><FaInstagram className="text-2xl" /></a>
          <a href="https://wa.me/123456789" className="mx-2 text-gray-600"><FaWhatsapp className="text-2xl" /></a>
        </div>
      </footer>
      {selectedProduct !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50" onClick={() => setSelectedProduct(null)}>
          <div className="container mx-auto flex items-center justify-center h-full">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black">{products[selectedProduct - 1].name}</h2>
              <Image src={products[selectedProduct - 1].image} alt={products[selectedProduct - 1].name} width={300} height={300} />
              <div className="my-4 text-black">{products[selectedProduct - 1].description}</div>
              <div className="flex justify-center">
                <button onClick={openWhatsApp} className="bg-green-300 rounded-lg p-2 text-black font-bold">
                  Agendar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
