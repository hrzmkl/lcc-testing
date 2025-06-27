import PrincipeGouvernanceCpt from '../StrategieGouvernance/StrategieCtpHome';
import { PrincipesGouvernaceData } from '../../constants';

// bg-[#f8bfeb]

const PrincipeGouvernanceSection = ({ isFaq }: PrincipeGouvernanceProps) => {
    return (
        <section className="">
            <div className="w-full max-w-[1080px] py-[60px] md:py-[80px] m-auto">
                <div
                    className="flex-center py-[48px] md:py-[64px]"
                >
                    <p className={`w-full  text-h3 md:text-h2 5xl:text-h1 font-black ${isFaq ? "text-[#e9c0e9]" : "text-[#5a1676]"} leading-[48px] lg:leading-[76px] 5xl:leading-[102px] text-center -tracking-[3px]`}>
                        Nos principes <br /> de gouvernance
                    </p>
                </div>
                <PrincipeGouvernanceCpt data={PrincipesGouvernaceData} isFaq={isFaq}/>
            </div>
        </section>
    );
};

export default PrincipeGouvernanceSection;
