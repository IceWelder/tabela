"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'; // Importe o componente Link do Next.js
import { FaTiktok } from 'react-icons/fa'; // Importe o ícone do TikTok


const products = [
  {
    id: 1,
    category: "Blindagem",
    name: "Blindagem - cutilagem + esmaltação em gel",
    price: 90,
    description: "(sem decoração)",
    image: "/blindagem.jpg",
  },
  {
    id: 2,
    category: "Banho de Gel",
    name: "Feito sobre a unha natural, manicure combinada + esmaltação em gel",
    price: 130,
    description: "(sem decoração)",
    image: "/b1.jpg",
  },
  {
    id: 3,
    category: "Extensor Molde F1",
    name: "Manicure combinada + Esmaltação em Gel ",
    price: 170,
    description: "(Sem decoração)",
    image: "/m1.jpg",
  },
  {
    id: 4,
    category: "Extensor Fibra",
    name: "Manicure combinada + esmaltação",
    price: 170,
    description: "(Sem decoração) ",
    image: "/f1.jpg",
  },
  {
    id: 5,
    category: "Manicure Tradicional",
    name: "Pé e Mão Cutilagem + Esmaltação Tradicional",
    price: 60,
    description: "(sem decoração)",
    image: "/ban.jpg",
  },
];

export default function Naildesign() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const openWhatsApp = () => {
    const whatsappNumber = "5547999269018";
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const toggleFullScreen = (imageUrl: string) => {
    window.open(imageUrl, "_blank");
  };

  const handleProductClick = (productId: number) => {
    setSelectedProduct(productId);
  };

  const groupedProducts: { [key: string]: any[] } = products.reduce<{
    [key: string]: any[];
  }>((acc, product) => {
    const { category, ...rest } = product;
    acc[category] = acc[category] || [];
    acc[category].push(rest);
    return acc;
  }, {});

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative flex-grow">
        <Image
          src="/back.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <header className="z-10 text-center text-3xl font-bold py-4 text-white relative bg-brown">
          <div className="absolute inset-0 bg-contrast-opacity"></div>
          <div className="relative z-10">Tabela de Preços</div>
        </header>
        {selectedProduct !== null && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <div className="container mx-auto flex items-center justify-center h-full">
              <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-black">
                  {products.find(product => product.id === selectedProduct)?.name}
                </h2>
                <div
                  className="my-2"
                  onClick={() =>
                    toggleFullScreen(products.find(product => product.id === selectedProduct)?.image || "")
                  }
                >
                  <Image
                    src={products.find(product => product.id === selectedProduct)?.image || ""}
                    alt={products.find(product => product.id === selectedProduct)?.name || ""}
                    width={300}
                    height={300}
                    className="cursor-pointer"
                  />
                </div>
                <div className="my-2 text-gray-800">
                  {products.find(product => product.id === selectedProduct)?.description}
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={openWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
                  >
                    Agendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Object.entries(groupedProducts).map(([category, products]) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow-md overflow-hidden opacity-90"
              >
                <h2 className="text-xl font-bold py-2 px-4 bg-gradient-to-r from-brown to-brown text-white">
                  {category}
                </h2>
                <div className="p-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="cursor-pointer border-b border-gray-200 py-4"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-800">
                          {product.name}
                        </h3>
                        <p className="text-green-500 font-bold">
                          R$ {product.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="text-center py-2 text-xs text-white bg-gradient-to-r from-brown to-brown relative bg-brown mt-auto">
        <div className="absolute inset-0 bg-contrast-opacity"></div>
        <div className="flex justify-center">
          {/* Use o componente Link do Next.js corretamente */}
          <Link className="mx-2" href="https://tiktok.com">
            
              <FaTiktok className="text-gray-700 text-2xl" />
            
          </Link>
        </div>
      </footer>
      <style jsx>{`
        .contrast-opacity {
          background-color: rgba(216, 178, 139, 0.8);
        }
      `}</style>
    </div>
  );
}
