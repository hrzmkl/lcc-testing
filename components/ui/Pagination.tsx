interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({ currentPage, totalPages, onPageChange, className = "" }: PaginationProps) => {
  const maxVisiblePages = window.innerWidth < 640 ? 2 : // sm
                         window.innerWidth < 768 ? 3 : // md
                         window.innerWidth < 1024 ? 4 : // lg
                         window.innerWidth < 1280 ? 5 : // xl
                         6; // 2xl
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className={`flex justify-center items-center gap-2 mt-8 mb-4 w-full px-4 ${className}`}>
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1 sm:px-6 sm:py-3 rounded-md bg-[#aa7fb9] text-[#e9c0ea] hover:bg-[#4f2273]"
        >
          Précédent
        </button>
      )}

      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-1 sm:px-6 sm:py-3 rounded-md bg-[#aa7fb9] text-[#e9c0ea] hover:bg-[#4f2273]"
          >
            1
          </button>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 py-1 sm:px-6 sm:py-3 rounded-md ${
            currentPage === number
              ? 'bg-purple-800 text-[#e9c0ea]'
              : 'bg-[#aa7fb9] text-[#e9c0ea] hover:bg-[#4f2273]'
          }`}
        >
          {number}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-1 sm:px-6 sm:py-3 rounded-md bg-[#aa7fb9] text-[#e9c0ea] hover:bg-[#4f2273]"
          >
            {totalPages}
          </button>
        </>
      )}

      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1 sm:px-6 sm:py-3 rounded-md bg-[#aa7fb9] text-[#e9c0ea] hover:bg-[#4f2273]"
        >
          Suivant
        </button>
      )}
    </div>
  );
};

export default Pagination;
