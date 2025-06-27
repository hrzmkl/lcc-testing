import React, { useState, useEffect, ReactNode } from "react";
import Portal from "@/components/ui/portal"; // Import the Portal component



export const ModalCsc = ({
                             children = '',
                             wrapperClassName = '',
                             className = '',
                             show = false,
                             onClose,
                             ...props
                         }: ModalProps) => {
    const [isVisible, setIsVisible] = useState(show);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose(); // Call the onClose function when Escape is pressed
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

    // Return null instead of false when show is false
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
                className={`${wrapperClassName} group fixed z-[9999] top-0 bottom-0 right-0 left-0 backdrop-blur-md bg-black/[0.5] flex justify-center items-center animate-slide-in-top duration-300 ease-in-out`}
                {...props}
            >
                <button
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black/[.3] text-white text-h3 leading-10 font-bold pt-[1.15rem] pb-[1.35rem] px-6 hover:bg-black/[.8] transition-all duration-300"
                    onClick={onClose}
                >
                    &#x2715;
                </button>
                <div
                    className={`${className} bg-white rounded-xl shadow-lg max-h-[98vh] max-w-[98vw] min-w-[300px] md:min-w-[480px] `}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};