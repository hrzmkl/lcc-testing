const SkeletonCard = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`animate-strong-pulse ${className}`}>
      <div className="bg-gray-200 rounded-lg h-full w-full" />
    </div>
  );
};

export default SkeletonCard;
