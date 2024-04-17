"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    category: "Blindagem",
    name: "Blindagem ",
    price: 80,
    description: "",
    image: "/back.jpg",
  },
  {
    id: 2,
    category: "Blindagem",
    name: "Blindagem Cutilage Russa + Esmaltação em Gel ",
    price: 80,
    description: "",
    image: "/product2.jpg",
  },
  {
    id: 3,
    category: "Banho de Gel",
    name: "Cutilagem ",
    price: 100,
    description: "",
    image: "/product3.jpg",
  },
  {
    id: 4,
    category: "Banho de Gel",
    name: "Esmaltação em Gel ",
    price: 100,
    description: "",
    image: "/product4.jpg",
  },
  {
    id: 5,
    category: "Extensor Molde F1",
    name: "Cutilagem Russa ",
    price: 170,
    description: "",
    image: "/product5.jpg",
  },
  {
    id: 6,
    category: "Extensor Molde F1",
    name: "Esmaltação em Gel ",
    price: 170,
    description: "",
    image: "/product6.jpg",
  },
  {
    id: 7,
    category: "Extensor Fibra",
    name: "Cutilagem Russa ",
    price: 120,
    description: "",
    image: "/product7.jpg",
  },
  {
    id: 8,
    category: "Extensor Fibra",
    name: "Esmaltação ",
    price: 120,
    description: "",
    image: "/product8.jpg",
  },
];

export default function Naildesign() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const openWhatsApp = () => {
    const whatsappNumber = "123456789";
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const toggleFullScreen = (imageUrl: string) => {
    window.open(imageUrl, "_blank");
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
    <div className="min-h-screen relative">
      <Image
        src="/naild.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      {selectedProduct !== null && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="container mx-auto flex items-center justify-center h-full">
            <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-black">
                {products[selectedProduct - 1].name}
              </h2>
              <div className="my-2" onClick={() => toggleFullScreen(products[selectedProduct - 1].image)}>
                <Image
                  src={products[selectedProduct - 1].image}
                  alt={products[selectedProduct - 1].name}
                  width={300}
                  height={300}
                  className="cursor-pointer"
                />
              </div>
              <div className="my-2 text-gray-800">
                {products[selectedProduct - 1].description}
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
      <header className="text-center text-3xl font-bold py-4 text-white bg-gradient-to-r from-pink-500 to-rose-200">
        Tabela de Preços
      </header>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(groupedProducts).map(([category, products]) => (
            <div
              key={category}
              className="bg-white rounded-lg shadow-md overflow-hidden opacity-90" // Defina a opacidade aqui
            >
              <h2 className="text-xl font-bold py-2 px-4 bg-gradient-to-r from-pink-300 to-rose-100 text-white">
                {category}
              </h2>
              <div className="p-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
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
      <footer className="text-center py-2 text-xs text-white bg-gradient-to-r from-pink-500 to-rose-200 fixed bottom-0 w-full">
        <div className="flex justify-center">
          <a href="https://facebook.com" className="mx-2">
            <FaFacebook className="text-blue-700 text-2xl" />
          </a>
          <a href="https://instagram.com" className="mx-2">
            <FaInstagram className="text-pink-500 text-2xl" />
          </a>
          <a href="https://wa.me/123456789" className="mx-2">
            <FaWhatsapp className="text-green-500 text-2xl" />
          </a>
        </div>
      </footer>
    </div>
  );
}