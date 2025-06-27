import React from 'react';

interface SubTitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

const SubTitle: React.FC<SubTitleProps> = ({
  children,
  className = '',
  style = {},
  color = '#244f19',
}) => {
  return (
    <p
      className={`text-[${color}] w-full  font-normal text-md lg:text-lg leading-[30px] text-center -tracking-[0.025em] pt-[10px] lg:pt-[14px] ${className}`}
      style={style}
    >
      {children}
    </p>
  );
};

export default SubTitle;
