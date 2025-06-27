import { getFullName } from "@/lib/utils";
import { CommunityProfilDetails } from "@/types/community";
import { Contribution } from "@/types/contribution";
import { forwardRef, LegacyRef } from "react";
import { formatTimeAgo } from "@/lib/dateUtils";
import ImageKit from "../ui/ImageKit";
import Image from "next/image";

interface CardProfileDetailProps {
    communityProfile: CommunityProfilDetails | null;
    contributions: Contribution[] | null;
}

const CardProfileDetail = forwardRef(({communityProfile, contributions} : CardProfileDetailProps, ref: LegacyRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className="text-left !w-full sm:max-w-[90%] xl:max-w-[1536px] mx-auto py-6 ">
            <div className="w-full sm:w-[75%] max-w-[1022px] mx-auto py-8 lg:flex lg:gap-8">
                {/* Left Section */}
                <div className="flex flex-col gap-4 lg:w-1/2 h-full">
                    <div className="bg-[#2e364b] text-[#f5ffa3] p-6 rounded-[24px] flex items-center gap-4 shadow-lg hover:shadow-5xl transition-shadow duration-300 group">
                        <Image
                            src="/Images/noun-co2-6844008.svg"
                            alt="Carbone capturé icon"
                            width={40}
                            height={40}
                            className="w-10 h-10 group-hover:filter "
                        />

                        <div>
                            <h3 className="text-lg font-semibold group-hover:text-[#64ff58]">Carbone capturé</h3>
                            <p className="group-hover:text-[#64ff58]">
                                {communityProfile?.catched_carbon 
                                    ? parseFloat(communityProfile.catched_carbon) >= 1000 
                                        ? `${(parseFloat(communityProfile.catched_carbon) / 1000).toFixed(2)} t`
                                        : `${parseFloat(communityProfile.catched_carbon).toFixed(2)} kg`
                                    : '--------'}
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#2e364b] text-[#f5ffa3] p-6 rounded-[24px] flex items-center gap-4 shadow-lg hover:shadow-5xl transition-shadow duration-300 group">
                        <Image src="/Images/noun-environment-care-4230002.svg" alt="Biodiversité restaurée icon" width={40} height={40}  className="w-10 h-10 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:contrast-200 group-hover:hue-rotate-[90deg] group-hover:saturate-300" />
                        <div>
                            <h3 className="text-lg font-semibold group-hover:text-[#64ff58]">Biodiversité restaurée</h3>
                            <p className="text-sm group-hover:text-[#64ff58]">
                                {communityProfile?.restored_biodiversity 
                                    ? parseFloat(communityProfile.restored_biodiversity) > 0.1
                                        ? `${parseFloat(communityProfile.restored_biodiversity).toFixed(2)} ha`
                                        : `${(parseFloat(communityProfile.restored_biodiversity) * 10000).toFixed(2)} m²`
                                    : '--------'}
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#2e364b] text-[#f5ffa3] p-6 rounded-[24px] flex items-center gap-4 shadow-lg hover:shadow-5xl transition-shadow duration-300 group">
                        <Image src={'/Images/noun-empire-state-building-1977099.svg'} alt="Influence climatique icon" width={40} height={40} className="w-10 h-10 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:contrast-200 group-hover:hue-rotate-[90deg] group-hover:saturate-300" />
                        <div>
                            <h3 className="text-lg font-semibold group-hover:text-[#64ff58]">Influence climatique</h3>
                            <p className="text-sm group-hover:text-[#64ff58]">
                                {communityProfile?.climatic_influence_entreprise 
                                    ? `${communityProfile.climatic_influence_entreprise} ${communityProfile.climatic_influence_entreprise > 1 ? 'entreprises parrainées' : 'entreprise parrainée'}`
                                    : '--------'}
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#2e364b] text-[#f5ffa3] p-6 rounded-[24px] flex items-center gap-4 shadow-lg hover:shadow-5xl transition-shadow duration-300 group">
                        <Image src={'/Images/buddy.svg'} alt="Influence climatique icon" width={40} height={40} className="w-10 h-10 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:contrast-200 group-hover:hue-rotate-[90deg] group-hover:saturate-300" />
                        <div>
                            <h3 className="text-lg font-semibold group-hover:text-[#64ff58]">Influence climatique</h3>
                            <p className="text-sm group-hover:text-[#64ff58]">
                                {communityProfile?.climatic_influence_citoyen 
                                    ? `${communityProfile.climatic_influence_citoyen} ${communityProfile.climatic_influence_citoyen > 1 ? 'personnes parrainées' : 'personne parrainée'}`
                                    : '--------'}
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#2e364b] text-[#f5ffa3] p-6 rounded-[24px] flex items-center gap-4 shadow-lg hover:shadow-5xl transition-shadow duration-300 group">
                        <p className="w-10 text-center text-[40px] italic  group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:contrast-200 group-hover:hue-rotate-[90deg] group-hover:saturate-300">
                            { communityProfile?.projetsSoutenus.filter((project) => !!project.title).length ?? 0 }
                        </p>
                        <div>
                            <h3 className="text-lg font-semibold group-hover:text-[#64ff58]">Projets financés</h3>
                            <a href="#" className="text-sm underline text-[#f5ffa3] hover:text-[#64ff58]">Voir les projets</a>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="mt-8 lg:mt-0 lg:w-1/2 bg-[#ffffff] max-h-[612px] p-6 rounded-[24px] shadow-lg flex flex-col  h-max-content">
                    <h2 className="text-xl font-bold mb-4">{(contributions?.length ?? 0) > 1 ? 'Dernières contributions' : 'Dernière contribution'} ({contributions?.length ?? 0})</h2>
                    <div className="space-y-4 overflow-auto">
                        {contributions && contributions.map((contribution, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <ImageKit src={contribution.community.photo_url || (contribution.community.customer_type === 1 ? '/Images/default_avatar.png' : '/Images/company.png')} alt="Profile picture" width={40} height={40} className="w-10 h-10 min-w-10 rounded-full bg-[#6f84b8]" />
                                <div className="w-full">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold">
                                            <span className="capitalize">
                                                {getFullName(contribution.community.firstname, contribution.community.lastname, contribution.community.display_name, contribution.community.customer_type, contribution.community.company_name)} <br />
                                            </span>
                                            a permis un
                                            <span className="text-[#44a7f4]">{" "}financement de{" "}
                                                {Number(contribution.amount.toFixed(2)) === 0 
                                                    ? Math.ceil(contribution.amount * 1000) / 1000 
                                                    : contribution.amount.toFixed(2)
                                                }€
                                            </span>
                                        </p>
                                        <p className="text-[14px] text-[#d8d8d8] ml-4">
                                            {contribution.date_creation ? formatTimeAgo(contribution.date_creation) : 'Date inconnue'}
                                        </p>
                                    </div>
                                    {contribution.note_public && <div className="bg-[#fdf9e9] mt-2 rounded-[24px] p-4">
                                        <p className="text-sm text-gray-600 line-clamp-3 overflow-hidden" dangerouslySetInnerHTML={{ __html: contribution.note_public }} />
                                    </div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
});

CardProfileDetail.displayName = 'CardProfileDetail';

export default CardProfileDetail;
