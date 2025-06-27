import { FC, useCallback } from "react";
import {SubMenuItems} from "@/components/submenu/menuItems";
import { useAppStore } from "@/store/appStore";
import Link from "next/link";
import ImageKit from "../ui/ImageKit";

type Subtitle = {
    title: string;
    href: string;
    timeline?: string;
    handleClick?: () => void
}

interface SubMenu1Props {
    onClickCapture: () => void;
    setOpenSub?: (bool: boolean) => void;
    subtitle: 'store' | 'decouvrir',
    className?: string;
}

const SubMenuItemsList = ({subtitles}: { subtitles: Subtitle[][]}) => {
    return subtitles.map((column, columnIndex) => (
        <section key={columnIndex} className="w-full md:w-fit h-full flex-start xl:flex-center">
            <div className="w-full md:w-[70%] h-[65%] flex flex-col justify-center items-center gap-8 md:gap-6">
                {column.map((item, index) => (
                    <SubMenuItems key={index} href={item.href} onClick={item.handleClick}
                        title={item.title}
                        timeline={item.timeline}
                    />
                ))}
            </div>
        </section>
    ))
}

const SubMenu1: FC<SubMenu1Props> = ({onClickCapture, className, subtitle = 'store', setOpenSub = () => {}}) => {
    const setOpenModalVideo = useAppStore((state) => state.setOpenModalVideo);
    const handleClick = useCallback(() => {
        setOpenModalVideo(true);
        onClickCapture();
    }, [onClickCapture, setOpenModalVideo])
    const submenu: {store: Subtitle[][]; decouvrir: Subtitle[][]} ={ 
        decouvrir: [
            [
                {title: 'Tout comprendre en 3 minutes', href: '', handleClick, timeline: 'Voir le film, vous allez adorer. 😊'},
                {title: 'Stratégie et gouvernance', href: '/strategie-et-gouvernance', handleClick: () => onClickCapture(), timeline: 'Un peu de lecture !'},
            ],
            [
                {title: 'Méthodologie sur le terrain', href: '/methodologie-sur-le-terrain', handleClick: () => onClickCapture(), timeline: 'Un peu de lecture !'},
                {title: 'Timeline du programme', href: '/timeline', handleClick: () => onClickCapture(), timeline: 'Comment on s\'y prend là-bas! 😊'},
            ],
        ],
        store: [
                    [
                        { title: 'Café en grains', href: process.env.NEXT_PUBLIC_REDIRECT + '/13-cafe-grain' },
                        { title: 'Café moulu', href: process.env.NEXT_PUBLIC_REDIRECT + '/14-cafe-moulu' },
                        { title: 'Dosettes ESE', href: process.env.NEXT_PUBLIC_REDIRECT + '/15-dosettes-ese' },
                        { title: 'Thés et infusions', href: process.env.NEXT_PUBLIC_REDIRECT + '/106-thes' },
                    ],
                    [
                        { title: 'Machines à café à grains', href: process.env.NEXT_PUBLIC_REDIRECT + '/23-toutes-les-marques-de-machines-a-grains-avec-broyeur' },
                        { title: 'Cafetières', href: process.env.NEXT_PUBLIC_REDIRECT + '/490-cafetieres' },
                        { title: 'Machines Expresso', href: process.env.NEXT_PUBLIC_REDIRECT + '/577-machines-a-cafe-manuelles' },
                        { title: 'Entretien', href: process.env.NEXT_PUBLIC_REDIRECT + '/26-entretien-machine-cafe' },
                    ],
                    [
                        { title: 'Accessoires', href: process.env.NEXT_PUBLIC_REDIRECT + '/27-accessoires-machine-cafe' },
                        { title: 'Bons plans', href: process.env.NEXT_PUBLIC_REDIRECT + '/348-promotions-cafe' },
                        { title: 'Produits professionnels', href: process.env.NEXT_PUBLIC_REDIRECT + '/605-produits-professionnels' },
                        { title: 'Café en entreprise', href: process.env.NEXT_PUBLIC_REDIRECT + '/content/231-entreprise' },
                    ],
                    [
                        { title: 'Guide cafés', href: process.env.NEXT_PUBLIC_REDIRECT + '/content/category/22-guide' },
                        { title: 'Actualités', href: process.env.NEXT_PUBLIC_REDIRECT + '/blog/' },
                        { title: 'On vous aide', href: process.env.NEXT_PUBLIC_REDIRECT + '/content/category/2-aide' },
                        { title: 'Votre machine au bureau', href: process.env.NEXT_PUBLIC_REDIRECT + '/content/230-nos-machines' },
                    ]
                ]
    }
    return (
        <div
            className={`submenu1 font-roboto md:w-screen md:mx-auto md:max-w-[1031px] gap-8 md:gap-[6rem] bg-white md:px-[4rem] py-4 mt-2 md:mt-0 lg:py-[2.5rem] flex flex-col lg:flex-row flex-start xl:flex-center ${className}`}>
            <section className="flex md:hidden w-full md:w-fit h-full flex-start xl:flex-center">
                <div className="w-full md:w-[70%] h-[65%] flex flex-col justify-center items-center gap-8 md:gap-6">
                    <Link
                        href={'#'}
                        prefetch={false}
                        className={`w-full h-full flex flex-row justify-start items-center gap-4 cursor-pointer text-nowrap leading-none`}
                        onClick={() => setOpenSub(false)}
                    >
                        <ImageKit src="/icons/arrow_back.svg" alt="arrow back" width={24} height={24} />
                        <p className="text-nowrap text-[20px] font-semibold md:font-semibold text-black hover:underline decoration-1 m-0 p-0">
                            {subtitle === 'store' ? 'Store' : 'Découvrir'}
                        </p>
                    </Link>
                </div>
            </section>
            <SubMenuItemsList subtitles={submenu[subtitle]} />
        </div>
    );
};

export default SubMenu1;
