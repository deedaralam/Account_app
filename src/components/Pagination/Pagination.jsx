import React from "react";
import { useApplicant } from "../../Context/ApplicantContext";

const Pagination = () => {
  const { pageNumber, setPageNumber, totalPages } = useApplicant();

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        className="px-4 py-2 text-white bg-gray-600 rounded disabled:opacity-50"
        onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
        disabled={pageNumber === 1}
      >
        Prev
      </button>

      <span className="px-4 py-2 text-lg font-semibold">{pageNumber} / {totalPages}</span>

      <button
        className="px-4 py-2 text-white bg-gray-600 rounded disabled:opacity-50"
        onClick={() => setPageNumber((prev) => Math.min(prev + 1, totalPages))}
        disabled={pageNumber === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;