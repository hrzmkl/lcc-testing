interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  active?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  active = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'w-full h-[52px] sm:h-[52px] sm:w-auto px-6 py-3 text-center rounded-full text-[#e9c0ea] transition-all duration-300 transform hover:scale-105 hover:-translate-y-[3px] ease-in-out';
  const activeStyles = 'bg-[#4f2273] underline decoration-[#e9c0ea] decoration-2 shadow-lg';
  const inactiveStyles = 'bg-[#aa7fb9]';

  return (
    <button
      className={`${baseStyles} ${active ? activeStyles : inactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
