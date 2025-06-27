import { getFullName } from "@/lib/utils";
import { fetchLatestCommunities } from "@/services/data";

const CommunauteHeader = async () => {

  const latestCommunities = await fetchLatestCommunities(3);

  return (
    <div className="w-full flex flex-col justify-center items-start pb-2">
      <div className="w-full max-w-[1022px] mx-auto">
        <div className="mx-auto text-[#4f2273]">
          <h1 className="text-[36px] md:text-[80px] lg:text-[76px] 2xl:text-8xl mb-4 md:mb-8 font-extrabold leading-[1.1] mt-2 md:mt-6 md:text-4xl">
            Nous sommes les Carbon Killers
          </h1>
          <p className="text-base lg:text-mm leading-[20px] lg:leading-[25px] font-normal">
            Chacun de nous ici se rend visible pour que collectivement, nous nous sentions unis et forts face au changement climatique. Nous sommes déjà 30 000 chaque jour à consommer en moyenne 2 cafés par jour soit 600€ collectés quotidiennement pour financer ce défi.
          </p>
          <p className="text-base lg:text-mm leading-[20px] lg:leading-[25px] font-normal mt-4">
            La magie de notre modèle réside dans le nombre : rejoignez-nous.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 md:gap-4 w-full min-h-[41px] font-normal text-md mid-xl:text-[28.8px] 4xl:text-[30.34px] 5xl:text-xl leading-[34px] 4xl:leading-[36px] 5xl:leading-[40px] md:text-start -tracking-[0.05em]">
            Merci à nos derniers contributeurs :
            {latestCommunities ? (
              latestCommunities.map((community, index) => (
                <a
                  key={index}
                  href={`/community/${community.id}`}
                  className="capitalize underline decoration-yellow-[#4f2273] decoration-3 hover:decoration-4 hover:font-bold min-h-[26px] md:min-h-[41px]"
                >
                  {getFullName(
                    community.firstname,
                    community.lastname,
                    community.display_name,
                    community.customer_type,
                    community.company_name
                  )}
                </a>
              ))
            ) : (
              <>
                <div className="h-[41px] w-32 md:w-40 bg-purple-200/50 animate-strong-pulse rounded"></div>
                <div className="h-[41px] w-44 md:w-48 bg-purple-200/50 animate-strong-pulse rounded"></div>
                <div className="h-[41px] w-44 md:w-56 bg-purple-200/50 animate-strong-pulse rounded"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunauteHeader;
