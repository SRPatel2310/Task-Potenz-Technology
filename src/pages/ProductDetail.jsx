import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 object-contain">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg border"
            />
          </div>

          {/* Product Info */}
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="mb-4">
              <span className="text-xl font-semibold text-blue-600">
                ₹{product.price}
              </span>
              <span className="ml-4 text-sm text-gray-500">
                Category: {product.category}
              </span>
            </div>

            <div className="text-sm text-gray-500">
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Rating:</strong> {product.rating} ⭐
              </p>
              <p>
                <strong>Stock:</strong> {product.stock} available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
