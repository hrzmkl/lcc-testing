import { type ClassValue, clsx } from "clsx";
import { RefObject } from "react";
import { twMerge } from "tailwind-merge";

// NOTE: This function is from ShadCN and should not be edited
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
function capitalizeWords(str: string) {
  return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

export const truncateText = (text: string, length: number) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};


type DisplayName = 0 | 1 | '0' | '1';
export function getFullName(firstname: string, lastname?: string | null, displayName: DisplayName = 0, customerType: 1 | 2 | 3 = 1, companyName: string | null = null) {
  const fullname = [firstname, displayName == 1 ? lastname : `${lastname ? lastname.split('')[0] : ''}.`].join(' ');
  return capitalizeWords((customerType == 1 ?  fullname : companyName || fullname).toLowerCase());
}

// Fonction générique handleScroll
export const handleScrollBg = (elementRef: React.RefObject<HTMLElement>, onThresholdReached: () => void, onThresholdLeft: () => void, onThresholdEnd: (bgColor: string) => void) => {
  if (elementRef.current) {
    const elementRect = elementRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const elementTop = elementRect.top;
    const elementHeight = elementRect.height;
    const scrollPercentage = ((viewportHeight - elementTop) / elementHeight) * 100;

    if (scrollY == 0) {
      onThresholdLeft();
    } else if (scrollPercentage >= 100) {
      onThresholdEnd('#ff37fc')
    } else if (scrollPercentage >= 66) {
      onThresholdReached();
    } else {
      onThresholdLeft();
    }
  }
};

export function executeOnIntersection(element: HTMLElement, callback: () => void, threshold = 0.25) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.25 && entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect(); // Nettoie l'observateur lors du démontage
  } else {
    console.log('IntersectionObserver is not supported in this browser.');
  }
}

export const executeAtSectionEnd = (sectionRef: RefObject<HTMLDivElement>, callback: (bgColor: string) => void) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio == 1 && entry.isIntersecting) {
        callback('#ff37fc');
      }
    });
  }, {
    threshold: 1, // Déclenchez l'observer dès que l'élément entre dans la vue
  });

  // Commencez à observer l'élément spécifié
  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  // Retournez une fonction pour nettoyer l'observer si nécessaire
  return () => {
    observer.disconnect();
  };
}

export const formatNumberWithSpaces = (num: number | string): string => {
  return Number(num).toLocaleString('fr-FR');
}

