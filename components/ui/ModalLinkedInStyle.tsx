'use client';
import React, { memo, useEffect } from "react";
import Portal from "@/components/ui/portal";

const ModalLinkedInStyle = memo(({
  children = '',
  wrapperClassName = '',
  className = '',
  show = false,
  title = 'Contributeur',
  plural = true,
  onClose,
  ...props
}: ModalProps & {plural?: boolean}) => {

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (show) {
      document.body.style.overflow = 'hidden';
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  const handleOverlayClick = (event: React.MouseEvent) => {
    // Only close if clicking the overlay itself, not its children
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal>
      <div
        onClick={handleOverlayClick}
        className={`${wrapperClassName} group fixed z-[9999] top-0 bottom-0 right-0 left-0 backdrop-blur-md bg-black/[0.5] flex justify-center items-baseline md:pt-[4vh] animate-slide-in-top duration-300 ease-in-out`}
        {...props}
      >
        <div
          className={`${className} bg-white md:rounded-xl shadow-lg h-full md:h-auto md:max-h-[98vh] md:max-w-[98vw] min-w-full md:min-w-[550px] overflow-hidden`}
        >
          <div className="flex w-full font-bold p-3 ps-6 border-b">
            <p className="text-[21px] font-medium">
              {title}{title && plural && 's'}
            </p>
            <button
              className="ms-auto text-[20px] text-[#181818] hover:bg-[#f3f3f3] leading-5 py-[10px] px-3 rounded-full"
              onClick={onClose}
            >
              &#x2715;
            </button>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
});

ModalLinkedInStyle.displayName = 'ModalLinkedInStyle';

export default ModalLinkedInStyle;
