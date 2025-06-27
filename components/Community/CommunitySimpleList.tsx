import { getFullName } from '@/lib/utils';
import { Profile } from '@/types/project';
import Image from 'next/image'
import Link from 'next/link'
import { MouseEventHandler, useRef } from 'react'
import CommunitySimpleListSkeleton from './CommunitySimpleListSkeleton';
import debounce from 'lodash.debounce';
interface CommunitySimpleListProps {
    profiles: Profile[];
    className?: string;
    onMouseUp?: MouseEventHandler<HTMLAnchorElement>;
    onEndReached?: () => void;
    isLoading?: boolean
}

const CommunitySimpleList = ({profiles, className = '', onMouseUp, onEndReached, isLoading = false}: CommunitySimpleListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const handleScroll = debounce(() => {
    if (!listRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    if (scrollHeight - scrollTop <= clientHeight * 1.2 && onEndReached) {
      onEndReached();
    }
  }, 300);

  if (profiles.length === 0) return <CommunitySimpleListSkeleton />;

  return (
    <div
      ref={listRef}
      className={`flex flex-col w-full py-8 h-[95%] md:h-[60vh] overflow-y-auto ${className}`}
      onScroll={handleScroll}
    >
      {profiles.map((profile, index) => (
        <Link
          href={`/community/${profile.id}`}
          onMouseUp={onMouseUp}
          key={index}
          className={`flex w-full px-8 items-center hover:bg-[#f3f3f3]`}
        >
          <Image
            src={profile.photo_url || (profile.customer_type === 1 ? '/Images/default_avatar.png' : '/Images/company.png')}
            alt={getFullName(profile.firstname, profile.lastname, profile.display_name, profile.customer_type, profile.company_name)}
            width={60}
            height={60}
            className="h-[60px] w-[60px] min-w-[60px] rounded-full object-cover bg-[#6f84b8]"
          />
          <span
            className={`flex flex-col ps-2 w-full h-full py-5 ${
              index && 'border-t'
            }`}
          >
            <p className="font-medium text-[18px] leading-[22px] capitalize">
              {getFullName(profile.firstname, profile.lastname, profile.display_name, profile.customer_type, profile.company_name)}
            </p>
            <p className="text-[15px] text-[#666666] font-light leading-[19px]">
              Carbon killer depuis {profile.date_carbone_killer}
            </p>
          </span>
        </Link>
      ))}
      <div className="flex justify-center min-h-10 min-w-10 items-center py-4">
        {isLoading && (
          <svg className="animate-spin h-10 w-10 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
      </div>
    </div>
  );
}

export default CommunitySimpleList;