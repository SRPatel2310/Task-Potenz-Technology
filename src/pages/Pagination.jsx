import React from "react";

function Pagination({ page, setPage, totalPages }) {
  const maxButtons = 5;
  const start = Math.floor((page - 1) / maxButtons) * maxButtons + 1;
  const end = Math.min(start + maxButtons - 1, totalPages);

  const pageNumbers = [];
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
      >
        Prev
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className={`px-3 py-1 rounded ${
            page === num ? "bg-blue-600 text-white" : "bg-white border"
          }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
