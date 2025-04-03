import { useState } from "react";

const ITEMS_PER_PAGE = 20;

const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentData,
  };
};

export default usePagination;