import CoffeeLeafImage from '@/components/landingPage/CoffeeLeafImage';
import CoffeeBeanImage from '@/components/landingPage/CoffeeBeanImage';
import ImageKit from '@/components/ui/ImageKit';
import { customerType } from "@/constants";
import { CommunityProfilDetails } from "@/types/community";
import { forwardRef, LegacyRef } from 'react';

const ProfileDetail = forwardRef(({communityProfile}: {communityProfile: CommunityProfilDetails | null}, ref: LegacyRef<HTMLDivElement>) => {
    if (!communityProfile) {
      return <p>Profil non trouvé</p>;
    }
    return (
        <div ref={ref} className='text-left !w-full sm:max-w-[90%] xl:max-w-[1536px] mx-auto py-6  '>
          <div className="w-full sm:w-[75%] max-w-[1022px] mx-auto relative flex flex-col items-center justify-between md:flex-row md:gap-8 md:p-4">
            <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] overflow-visible flex-shrink-0 mx-auto">
              <ImageKit
                  src={communityProfile?.photo_url || (communityProfile.customer_type === 1 ? '/Images/default_avatar.png' : '/Images/company.png')}
                  alt={communityProfile?.photo_url || ''}
                  fill
                  priority
                  loading='eager'
                  quality={50}
                  sizes="300px"
                  className={`z-[1] rounded-full bg-[#6f84b8] ${communityProfile?.photo_url ? 'object-cover' : 'object-contain'}`}
              />

              <div className="absolute h-[70px] w-[70px] md:h-[120px] md:w-[120px] top-0 -right-5 md:-right-10">
                <CoffeeLeafImage />
              </div>

              <div className="absolute h-[90px] w-[90px] md:h-[120px] z-30 md:w-[120px] bottom-0 -right-8">
                <CoffeeBeanImage />
              </div>
            </div>

            <div className="flex flex-col items-start text-left md:ps-4 mt-8 md:mt-0 md:w-1/2">

            <div className="flex gap-2 mb-4">
                <span className={`bg-[#ffffff] flex text-[#000000] ${communityProfile.town ? 'ps-1 pe-3' : 'px-1'} py-1 gap-2 rounded-full text-sm font-medium items-center`}>
                  <ImageKit
                      src={`/Images/flags/${communityProfile.country_code.toLowerCase() || 'fr'}.svg`}
                      width={25} height={25} alt={communityProfile.country_code}
                      className={'rounded-full object-cover h-6 w-7'}
                  />
                  {communityProfile?.town}
                </span>
                {communityProfile?.profession && (
                  <span className="bg-[#f3c149] text-[#000000] px-3 py-1 rounded-full text-sm font-medium line-clamp-1">
                    {communityProfile?.profession}
                  </span>
                )}
                {communityProfile?.customer_type && (
                  <span className="bg-[#f34985] text-[#ffffff] px-3 py-1 rounded-full text-sm font-medium">
                    {customerType(communityProfile?.customer_type, communityProfile.sexe)}
                  </span>
                )}
            </div>

            <h1 className="text-[48px] md:text-[100px] font-extrabold leading-none capitalize">
                {
                  (communityProfile?.customer_type !== 1) && communityProfile?.company_name ? communityProfile.company_name.toLowerCase() : (
                    <>
                      {communityProfile?.firstname.toLowerCase()}
                      <br />
                      {communityProfile.display_name == '1' && communityProfile.lastname ? communityProfile?.lastname.toLowerCase() : `${communityProfile?.lastname?.split('')[0] || ''}${communityProfile.lastname ? '.': ''}`}
                    </>
                  )
                }
            </h1>

            <p className="text-sm mt-2">
            CARBON KILLER DEPUIS MAI {communityProfile?.date_carbone_killer}
            </p>
            </div>
          </div>

          <div className="w-full sm:w-[75%] max-w-[1022px] mx-auto mt-8 flex flex-col md:flex-row md:gap-8">
              <div className="md:w-1/2">
                {communityProfile.customer_type === 1 && communityProfile.bio && (
                  <>
                    <h2 className="text-[40px] font-bold">Biographie</h2>
                    <p className="mt-2 text-gray-700 md:text-[20px]">{communityProfile.bio}</p>
                  </>
                )}
                {communityProfile.customer_type !== 1 && communityProfile.priorite_climatique && (
                  <>
                    <h2 className="text-[40px] font-bold">Mission</h2>
                    <p className="mt-2 text-gray-700 md:text-[20px]">{communityProfile.priorite_climatique}</p>
                  </>
                )}
              </div>

              <div className={`md:w-1/2 mt-8 md:mt-0`}>
              {(communityProfile.customer_type === 1) && communityProfile.declic_climatique &&  (
                <>
                  <h2 className="text-[40px] font-bold">Mon déclic climatique ?</h2>
                  <p className="mt-2 text-gray-700 md:text-[20px]">{communityProfile.declic_climatique}</p>
                </>
              )}
              </div>
          </div>
        </div>
    );
});

ProfileDetail.displayName = 'ProfileDetail';

export default ProfileDetail;