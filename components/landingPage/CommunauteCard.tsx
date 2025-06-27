import Link from "next/link";

import { getFullName } from "@/lib/utils";
import { CommunityProfilDetails } from "@/types/community";
import ProjetSoutenusMinCard from "./ProjetSoutenusMinCard";
import ImageKit from "../ui/ImageKit";

const formatDateFr = (timestamp: string) => {
  const timestampMillisecond = parseInt(timestamp) * 1000; 
  const date = new Date(timestampMillisecond);

  const dateFr = date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  return dateFr
}

const CommunauteCard = ({ data }: { data: CommunityProfilDetails[] }) => {
  return (
      <div data-aos="fade-right" data-aos-duration="300" data-aos-offset="-100" className="w-full grid grid-cols-1 gap-4 items-start sm:justify-between lg:justify-normal sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }, (_, colIndex) => (
          <div className="grid gap-4 md:masonry-3-col sm:masonry-2-col masonry-1-col w-full sm:max-w-full" key={colIndex}>
            {data
              .filter((_, i) => i % 3 === colIndex)
              .map((item, index) => (
                <div key={index} className="w-full min-w-[330px] max-w-[calc(100vw - 32px)] lg:!max-w-[330px] xl:max-w-[330px] mx-auto"> 
                  <div
                    className="bg-white hover:bg-[#feffce] transition-colors duration-300 shadow-lg rounded-[1.2rem] flex flex-col items-start relative pt-6"
                  >
                    <Link href={`/community/${item.id}`} className="w-full">
                      <ImageKit
                        src={item.photo_url || (item.customer_type === 1 ? '/Images/default_avatar.png' : '/Images/company.png')} 
                        alt={getFullName(item.firstname, item.lastname, item.display_name, item.customer_type, item.company_name)}
                        width={240}
                        height={240}
                        quality={50}
                        loading='lazy'
                        placeholder="blur"
                        blurDataURL={item.photo_small_url || (item.customer_type === 1 ? '/Images/default_avatar.png' : '/Images/company.png')}
                        style={{objectPosition: "top center"}}
                        className={`w-60 h-60 rounded-full mx-auto bg-[#6f84b8] ${
                          item.photo_url ? 'object-cover' : 'object-contain'
                        }`}
                      />
                    </Link>

                    <Link href={`/community/${item.id}`} className="px-6 pt-6 flex-grow max-w-full">
                      <h2 className="text-[24px] font-medium text-left capitalize">{getFullName(item.firstname, item.lastname, item.display_name, item.customer_type, item.company_name)}</h2>
                      <div className="space-y-1">
                        <h2 className="text-[22px] font-bold text-left">
                          Carbon Killer depuis {item.date_carbone_killer}
                        </h2>

                        <p className="text-[20px] text-gray-600 text-left font-light leading-tight">
                          <span>
                            {[
                              item.town?.trim() ? item.town : item.lieu, 
                              item.profession, 
                              item.motCles
                            ]
                              .filter(Boolean)
                              .map((val, index, array) => (
                                <span key={index}>
                                  {val}
                                  {index !== array.length - 1 && <br />}
                                </span>
                              ))}
                          </span>
                        </p>

                        {item.bio && item.bio !== "-" && (
                          <>
                            <p className="text-[22px] font-bold text-left">Ma Bio:</p>
                            <p className="text-[19px] text-gray-800 text-left font-light leading-tight">
                              {item.bio}
                            </p>
                          </>
                        )}

                        {(!item.bio || item.bio === "-") && (
                          <p className="text-[19px] text-gray-800 text-left font-light leading-tight underline">
                            {item.url}
                          </p>
                        )}

                        {(item.declic_climatique && item.declic_climatique !== "-") || 
                        (item.priorite_climatique && item.priorite_climatique !== "-") ? (
                          <>
                            <p className="text-[22px] font-bold text-left leading-tight">
                              {item.declic_climatique && item.declic_climatique !== "-" 
                                ? "Mon déclic climatique ?" 
                                : "Ses priorités pour le climat ?"}
                            </p>
                            <p className="text-[19px] text-gray-600 text-left leading-tight">
                              {item.declic_climatique && item.declic_climatique !== "-" 
                                ? item.declic_climatique 
                                : item.priorite_climatique}
                            </p>
                          </>
                        ) : null}

                      </div>
                      {item.date_last_activity && (
                        <p className="text-[20px] font-bold mt-4 text-left -tracking-[1px]">
                          Dernière activité : {formatDateFr(item.date_last_activity)}
                        </p>
                      )}
                    </Link>
                    <div className="px-6 pb-6 max-w-full">
                      {Array.isArray(item.projetsSoutenus) && item.projetsSoutenus.filter((project) => !!project.title).length > 0 && (
                        <ProjetSoutenusMinCard projects={item.projetsSoutenus.filter((project) => !!project.title)} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
  );
};

export default CommunauteCard;
