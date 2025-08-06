import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Pagination from "./Pagination";
import Products from "./Products";

export default function Profile() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const skip = (page - 1) * limit;
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
        setLoading(false);
      });
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <Products products={products} loading={loading} />
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
