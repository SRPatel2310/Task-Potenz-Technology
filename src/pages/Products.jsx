import React from "react";
import { Link } from "react-router-dom";

function Products({ products, loading }) {
  return (
    <>
      {loading ? (
        <div className="text-center text-gray-600">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded shadow p-4 hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-blue-600 font-bold">₹{product.price}</p>
              </div>
              <Link
                to={`/products/${product.id}`}
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Products;
