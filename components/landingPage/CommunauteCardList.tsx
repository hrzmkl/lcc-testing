import Link from 'next/link';
import { customerType, getCustomerColor } from '@/constants';
import { getFullName } from '@/lib/utils';
import { CommunityProfilDetails } from '@/types/community';
import ImageKit from '../ui/ImageKit';

const CommunauteCardList = ({ data, className = '' }: { data: CommunityProfilDetails[], className?: string }) => {
  return (
    <div data-aos="fade-left" data-aos-duration="300" data-aos-offset="-100" className={`w-full items-start flex gap-4 flex-col ${className}`}>
        <div
          className="flex flex-col gap-4 w-full sm:max-w-full"
        >
          {data
            .map((item, index) => (
              <Link href={`/community/${item.id}`} key={index}>
                <div
                  className="bg-white hover:bg-[#feffce] transition-colors duration-300 shadow-lg rounded-full flex items-start relative max-h-[90px] overflow-hidden"
                >
                  <div className='flex ms-1 my-1 w-[70px] min-w-[70px] min-h-[70px] lg:h-auto relative rounded-full overflow-hidden'>
                    <ImageKit
                      src={item.photo_url || (item.customer_type === 1 ? '/Images/default_avatar.png' : '/Images/company.png')}
                      alt={getFullName(item.firstname, item.lastname, item.display_name, item.customer_type, item.company_name)}
                      fill={true}
                      loading='lazy'
                      quality={50}
                      sizes="70px"
                      placeholder="blur"
                      blurDataURL={item.photo_small_url || (item.customer_type === 1 ? '/Images/default_avatar.png' : '/Images/company.png')}
                      style={{ objectPosition: item.photo_url ? 'top center' : 'center' }}
                      className={`bg-[#6f84b8] ${item.photo_url ? 'object-cover' : 'object-contain'}`}
                    />
                  </div>

                  <div className="flex justify-between md:flex-nowrap w-full my-auto gap-1">
                    <div className="w-full md:ps-4 flex flex-col min-h-full justify-center my-auto -mt-1 md:!my-auto">
                      <h2 className="capitalize w-fit text-[18px] md:text-[24px] font-medium text-left px-2 leading-tight line-clamp-1">
                        {getFullName(item.firstname, item.lastname, item.display_name, item.customer_type, item.company_name)}
                      </h2>
                      <h2 className="w-fit text-[15px] md:text-base text-left ms-0 px-2 leading-tight">
                        Carbon Killer depuis {item.date_carbone_killer}
                      </h2>
                    </div>
                    {'customer_type' in item && (
                      <span
                        className={`text-[10px] md:text-[12px] ms-2 font-medium uppercase px-3 md:px-[16px] py-[4px] rounded-[24px] my-auto me-4 lg:me-[45px] text-nowrap`}
                        style={getCustomerColor(item?.customer_type || 1)}
                      >
                        {customerType(item?.customer_type, item.sexe)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
        </div>
    </div>
  );
};

export default CommunauteCardList;
