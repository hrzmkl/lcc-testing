const CommunitySimpleListSkeleton = () => {
  return (
    <div className="flex flex-col w-full py-8 h-[45vh] md:h-[60vh] overflow-y-auto">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex w-full px-8 items-center"
        >
          <div className="h-[60px] w-[60px] min-w-[60px] rounded-full bg-gray-200 animate-pulse" />
          <div className={`flex flex-col ps-2 w-full h-full py-5 ${index && 'border-t'}`}>
            <div className="h-[22px] w-2/3 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-[19px] w-1/2 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommunitySimpleListSkeleton
