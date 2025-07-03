import { CSSProperties, memo, ReactNode } from 'react';

export const customerType = (type: 1 | 2 | 3, sexe: 1 | 0 | null) => {
  switch (type) {
    case 2:
      return 'Entreprise';
    case 3:
      return 'ONG & Assos';
    default:
      switch (sexe) {
        case 1:
          return 'Citoyen';
        case 0:
          return 'Citoyenne';
        default:
          return 'Citoyen(ne)';
      };
  }
};

export const getCustomerTypeNumber = (filter: string) => {
  switch(filter) {
    case 'Citoyens':
      return 1;
    case 'Entreprise':
      return 2;
    case 'ONG & Assos':
      return 3;
    default:
      return 0;
  }
}

export const getCustomerColor = (type: 1 | 2 | 3) => {
  switch(type) {
    case 2:
      return {
        color: '#fff',
        background: '#234f19'
      }
    case 3:
      return {
        color: '#244f19',
        background: '#d8fc31'
      }
    default:
      return {
        color: '#000',
        background: '#ededed'
      }
  }
}

export const messages = [
  {
    author: 'Margaux',
    content:
      "Imagine si on pouvait restaurer 11 millions d'hectares pour la biodiversité... 🐘🦒🦏🐢🦜",
    time: '10:19',
  },
  {
    author: 'Margaux',
    content:
      'On pourrait séquestrer 1,5% des émissions annuels de gaz à effet de serre.',
    time: '10:15',
  },
  {
    author: 'Kylian',
    content: 'Sérieux ? 15 millions de terrains de foot! ⚽️😁',
    time: '10:21',
  },
  {
    author: 'Elliot',
    content: "Ah oui.. c'est 4,9 milliards de vols Paris - New York ✈️😩",
    time: '10:16',
  },
  {
    author: 'Bixente',
    content: "Carrément... Tu m'expliques comment ça marche ?",
    time: '10:21',
  },
  {
    author: 'Audrey',
    content:
      "Et pour moi qui kiffe le ski, ça fait 229 milliards d'A/R Paris - Courchevel en covoiturage! ⛷️⛄️😂",
    time: '10:18',
  },

  {
    author: "Margaux",
    
    // content: "Et pour moi qui kiffe le ski, ça fait 229 milliards d'A/R Paris - Courchevel en covoiturage! ⛷️⛄️😂",
    content: "<p class='mb-2 mt-0'> T'as pas vu la vidéo? <span class='text-[#fcea2b] text-mm'>👇</span></p><p id='videoTchat' class='cursor-pointer text-center text-nowrap rounded-full bg-[#e3ff00] hover:bg-opacity-[0.5] w-[90%] px-2 sm:!px-8 py-[5px] hover:scale-105 shadow-lg transition-all font-normal' onClick={openModalVideo}>Tout comprendre en 3 min</p>",
    time: "10:22"
  }
] 

export const menuSection = [
  {
    title: 'Café en grain',
    linksPlus: [{ title: 'Voir tous les Cafés en grains', url: '/13-cafe-grain' }],
    links: [
      { title: 'Nos cafés maison', url: '#' },
      { title: 'Cafés en Grain Pure Origine', url: '/136-cafe-en-grain-pure-origine' },
      { title: 'Assemblages - Blends', url: '/617-nos-assemblages-blends' },
      { title: 'Café Grain Italien', url: '/140-cafe-grain-italien' },
      { title: 'Cafés de spécialité', url: '/410-cafe-en-grains-de-specialite' },
      { title: 'Cafés en Grain Bio', url: '/135-cafe-grain-bio' },
      { title: 'Café en Grain 100% Arabica', url: '/145-cafe-grains-arabica' },
      { title: 'Café en Grain Décaféiné', url: '/144-cafe-grains-decafeine' },
      { title: 'Café en Grain 1 Kg - 6Kg', url: '/298-cafe-en-grain-1-kg' },
    ],
  },
  {
    title: 'Machines à café en grain ',
    linksPlus: [{ title: 'Voir toutes les machines', url: '/607-machines-a-cafe-a-grains' }],
    links: [
      { title: 'Machine à café Delonghi', url: '/344-machine-automatique-delonghi' },
      { title: 'Machine à café Jura', url: '/236-machine-automatique-jura' },
      { title: 'Machine à café Melitta', url: '/337-machine-a-cafe-expresso-melitta' },
      { title: 'Machine à café Scott', url: '/367-machine-automatique-scott' },
      { title: 'Machine à café Professionnelles', url: '/462-machine-a-cafe-professionnelle' },
      { title: 'Voir toutes les marques', url: '/23-toutes-les-marques-de-machines-a-grains-avec-broyeur' },
    ],
  },
  {
    title: 'Cafetieres et espresso',
    linksPlus: [{ title: 'Voir toutes les Machines Expresso', url: '/490-cafetieres' }],
    links: [
      { title: 'Cafetières électriques', url: '/30-cafetiere-filtremethode-douce' },
      { title: 'Cafetières italienne ou à piston ', url: '/32-cafetiere-italienne' },
      { title: 'Cafetières filtre manuelles', url: '/544-cafetieres-filtre-methode-douce-cafetiere-slow-coffee' },
      { title: 'Cafetières de voyage', url: '/472-cafetiere-nomade-voyages' },
      { title: 'Extraction à froid / cold brew', url: '/476-extraction-a-froid-cold-brew' },
    ],
  },
  {
    title: 'Cafés moulus et dosettes',
    linksPlus: [{ title: 'Voir tout les Cafés moulus et dosettes', url: '/14-cafe-moulu' }],
    links: [
      { title: 'Voir toutes les dosettes ESE', url: '/15-dosettes-ese' },
      { title: 'Café Moulu Bio & Equitable', url: '/152-notre-selection-de-cafe-moulu-bio-equitable' },
      { title: 'Café Moulu Pure Origine', url: '/301-cafe-moulu-pure-origine' },
      { title: 'Café moulu italien', url: '/300-cafe-moulu-italien' },
      { title: 'Café moulu 100% arabica', url: '/147-cafe-moulu-100-arabica' },
      { title: 'Café moulu Décaféiné', url: '/153-cafe-moulu-decafeine' },
      { title: 'Café moulu 250g', url: '/299-cafe-moulu-250g' },
      { title: 'Café moulu 500g', url: '/338-cafe-moulu-500g' },
    ],
  },
  {
    title: 'Et encore plus',
    linksPlus: [{ title: 'Nos marques de café', url: '/marques' }],
    links: [
      { title: 'Thés et infusions', url: '/606-thes-et-gourmandises' },
      { title: 'Entretien', url: '/604-entretien-' },
      { title: 'Accessoires', url: '/603-accessoires' },
      { title: 'Produits professionnels', url: '/605-produits-professionnels' },
      { title: 'Bons plans', url: '/348-promotions-cafe' },
    ],
  },
  {
    title: 'Solution Café entreprise',
    linksPlus: [{ title: '', url: '#' }],
    links: [
      { title: 'Solution café professionnelles', url: '/content/231-entreprise' },
      { title: 'Découvrir nos solutions café au bureau', url: '/content/231-entreprise' },
      { title: 'Location machines à café grains professionnelles', url: '/content/230-nos-machines' },
      { title: 'Demander une dégustation gratuite', url: '/content/229-nos-cafes' },
      { title: 'Demander une estimation gratuite', url: '/content/231-entreprise' },
    ],
  },
  {
    title: "Besoin d'aide ?",
    linksPlus: [{ title: '', url: '#' }],
    links: [
      { title: 'Voir ou suivre vos commandes', url: '/content/22-chacun-son-cafe-comment-suivre-l-avancement-de-ma-livraison' },
      { title: 'Acheter à nouveau', url: '/content/6-chacun-son-cafe-acceder-a-l-historique-de-vos-commandes-et-factures' },
      { title: 'Retours en remboursements', url: '/content/27-chacun-son-cafe-comment-me-faire-rembourser-ma-commande-' },
      { title: 'Mot de passe oublié', url: '/content/155-chacun-son-cafe-comment-reinitialiser-ou-modifier-mon-mot-de-passe' },
      { title: 'Assistance machines', url: '/content/36-contactez-le-sav' },
      { title: 'Paramètres de compte', url: '/content/156-chacun-son-cafe-mes-parametres-de-compte' },
      { title: 'Codes promos', url: '/content/18-comment-utiliser-un-code-promotionnel' },
      { title: 'Partenariats', url: '/content/157-chacun-son-cafe-faq-les-questions-frequemment-posees' },
      { title: 'Service client - Aide', url: '/content/category/2-aide' },
    ],
  },
  {
    title: 'Stratégie & Gouvernance',
    linksPlus: [{ title: '', url: '#' }],
    links: [
      { title: 'Tout comprendre en 3 minutes', url: 'https://youtu.be/FsGYYOLUGig', interne: true},
      { title: 'Stratégie et gouvernance', url: '/strategie-et-gouvernance', interne: true },
      { title: 'Méthodologie sur le terrain', url: '/methodologie-sur-le-terrain', interne: true },
      { title: 'Les projets financés par vos achats', url: '/projects', interne: true },
      { title: 'Communauté des contributeurs', url: '/community', interne: true },
      { title: 'Timeline du programme', url: '/timeline', interne: true },
      { title: "Fil d'actualité", url: '/blog' },
    ],
  },
  {
    title: 'Nous connaître',
    linksPlus: [{ title: '', url: '#' }],
    links: [
      { title: 'Comment choisir son café ?', url: '/content/179-guide-comment-choisir-son-cafe' },
      { title: 'Comment conserver son café ?', url: '/content/90-chacun-son-cafe-comment-conserver-votre-cafe-' },
      { title: 'Comment choisir votre mouture ?', url: '/content/119-comment-choisir-votre-mouture-' },
      { title: 'Comment bien doser son café ?', url: '/content/164-comment-bien-doser-son-cafe' },
      { title: '10 façons de préparer un bon café sans capsule', url: '/content/165-chacun-son-cafe-les-10-facons-de-preparer-un-bon-cafe-sans-capsule-' },
      { title: 'Quel degré de torréfaction choisir ?', url: '/content/165-chacun-son-cafe-les-10-facons-de-preparer-un-bon-cafe-sans-capsule-' },
    ],
  },
];

export const SliderOneItems = [
  {
    sliderImage: '/Images/b2b/Safran.png',
    sliderImage2: '',
    sliderTitle: 'Safran',
    style: {
      objectFit: 'contain' as CSSProperties['objectFit'],
      transform: 'scale(95%)'
    },
    sliderText: "contribue durablement à un monde plus sûr, où le transport aérien devient toujours plus respectueux de l'environnement.",
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-1.jpg',
    sliderImage2: '',
    sliderTitle: 'Plus de 4 milliards...',
    sliderText: 'de tasses par jour consommées dans le monde',
    reverse: true,
  },
  // {
  //   sliderImage: '/Images/b2b/leon-grosse-logo.svg',
  //   sliderImage2: '',
  //   sliderTitle: 'Leon Grosse',
  //   sliderText:
  //     "se distingue par son engagement en faveur de la construction durable et de la réduction de l'empreinte carbone dans ses projets.",
  // },
  {
    sliderImage: '/Images/b2b/LVMH_logo.svg',
    sliderImage2: '',
    sliderTitle: 'LVMH',
    background: '#fff',
    sliderText:
      "préserve l'artisanat tout en réduisant son empreinte environnementale et en soutenant les communautés locales.",
  },
  // {
  //   sliderImage:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-7.webp',
  //   sliderImage2: '',
  //   sliderTitle: 'Claire Chauveinc\n' + 'Mon declic climatique?',
  //   sliderText:
  //     "Après un grand tri, j'ai réalisé que je n'utilisais pas la majorité de mes affaires. La surconsommation est alarmante.",
  // },
  // {
  //   sliderImage:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-17.webp',
  //   sliderImage2: '',
  //   sliderTitle: 'Mathieu Maugret\n' + 'Mon declic climatique?',
  //   sliderText:
  //     "Voir des canards vivants agoniser dans des cages sur un marché au Vietnam m'a fait réfléchir sur comment on en est arrivé là.",
  // },
  // {
  //   sliderImage:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-2.webp',
  //   sliderImage2: '',
  //   sliderTitle: 'Youri Diser\n' + 'Mon declic climatique?',
  //   sliderText:
  //     'Un documentaire sur Netflix montrait des fous palmés nourrissant leurs oisillons de plastique. Résultat : tous avaient du plastique dans le ventre.',
  // },
  {
    sliderImage: '/Images/b2b/Canovia.svg',
    sliderImage2: '',
    sliderTitle: 'Canovia',
    background: '#fd3d4c',
    color: '#1d232f',
    sliderText:
      "développe des solutions écologiques pour l'industrie, avec un focus sur l'innovation durable et la réduction de l'impact environnemental.\n",
  },
  {
    sliderImage: '/Images/b2b/cdc_biodiversite.jpg',
    sliderImage2: '',
    sliderTitle: 'CDC Biodiversité',
    background: '#fff',
    color: '#e3001b',
    style: { scale: '0.9' },
    sliderText:
      "conçoit et met en place des actions concrètes de restauration et préservation de la biodiversité.\n",
  },
  // {
  //   sliderImage: '/Images/b2b/ALLIANZ.svg',
  //   sliderImage2: '',
  //   sliderTitle: 'Allianz',
  //   background: '#fff',
  //   color: '#004a93',
  //   sliderText:
  //     "soutient la transition énergétique et l'inclusion sociale à travers des solutions d'assurance durables et responsables.\n",
  // },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-3.jpg',
    sliderImage2:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-7.jpg',
    sliderTitle: '',
    sliderText: '',
    reverse: true,
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-4.jpg',
    sliderImage2: '',
    sliderTitle: 'Mathilde Métairie\n' + 'Photographe\n',
    sliderText:
      'Le film earthlings sur l’exploitation animale et la pollution à Marseille quand j’y vivais.',
  },
  {
    sliderImage: "/Images/b2b/UFF.jpeg",
    sliderImage2: '',
    sliderTitle: 'UFF',
    style: {
      objectFit: 'contain' as CSSProperties['objectFit'],
    },
    sliderText: 
      'accompagne ses clients au fil des générations pour contribuer ensemble à une société plus responsable.'
  },
  {
    sliderImage: '/Images/b2b/akagreen-53812.svg',
    sliderImage2: '',
    sliderTitle: 'Akagreen',
    background: '#fff',
    style: {
      transform: 'translateX(-1px) translateY(-8px)',
    },
    className: '-translate-x-[10px] -translate-y-[5px]',
    // background: '#b6e9fe',
    sliderText:
      'Akagreen propose des scénographies végétales immersives et durables pour cultiver le bien-être et reconnecter les entreprises à la nature',
  },
  // {
  //   sliderImage:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-24.webp',
  //   sliderImage2: '',
  //   sliderTitle: 'Pauline François\n' + 'Mon déclic climatique ?',
  //   sliderText:
  //     "Le covid, voir la nature reprendre ses droits, les bons médias et mes discussions engagées m'ont poussé à calculer mon empreinte carbone.",
  // },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-21.jpg',
    sliderImage2:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-15.png',
    sliderTitle: '5.5 millions... ',
    sliderText:
      'des producteurs vivent en dessous du seuil de pauvreté international de $3,20 par jour',
    reverse: true,
  },
  {
    sliderImage: '/Images/b2b/Asso.svg',
    sliderImage2: '',
    sliderTitle: 'Association Espoir',
    background: '#1a988c',
    color: '#fff',
    sliderText:
      "L'Association Espoir lutte contre l'exclusion en soutenant la réinsertion sociale des personnes en difficulté.",
  },
  {
    sliderImage: '/Images/b2b/beelix.png',
    sliderImage2: '',
    sliderTitle: 'Beelix',
    // background: '#fff',
    background: '#fd3d4c',
    color: '#1d232f',
    sliderText:
      "Beelix soutient l'entrepreneuriat responsable avec des solutions digitales respectueuses de l'environnement.",
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-9.jpg',
    sliderImage2:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-7.jpg',
    sliderTitle: '',
    sliderText: '',
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-12.jpg',
    sliderImage2: '',
    sliderTitle: 'Mon déclic climatique ?',
    sliderText:
      "Voir les déchets de l'industrie agroalimentaire m'a marqué : quel coût écologique, animal et humain.",
  },
  {
    sliderImage: '/Images/b2b/Edenred.svg',
    sliderImage2: '',
    sliderTitle: 'EdenRed',
    background: '#fff',
    color: '#FF0000',
    sliderText:
      'Edenred améliore le bien-être et le pouvoir d’achat des collaborateurs tout en renforçant l’attractivité des entreprises et l’économie locale.',
  },
  // {
  //   sliderImage: '/Images/b2b/daher.svg',
  //   sliderImage2: '',
  //   sliderTitle: 'DAHER',
  //   sliderText:
  //     "Daher s'engage dans la transition énergétique avec des solutions de transport durable et innovantes.",
  // },
  // {
  //   sliderImage:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-10.jpg',
  //   // sliderImage2: "/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-11.webp",
  //   sliderImage2: '',
  //   sliderTitle: 'Mon déclic climatique ?',
  //   sliderText:
  //     "Quand j'ai passé mes premières nuits dans la grange de mes parents, qui marche à l'électricité solaire et sans eau courante, et que j'ai réalisé l'énergie inutile que l'on utilise chaque jour.",
  // },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-16.jpg',
    sliderImage2:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-14.jpg',
    sliderTitle: '',
    sliderText: '',
    reverse: true,
  },
  // {
  //   sliderImage: '/Images/b2b/Vinci.svg',
  //   sliderImage2: '',
  //   sliderTitle: 'Vinci',
  //   sliderText:
  //     "Construction innove pour réduire l'impact environnemental de ses projets de construction.",
  // },
  {
    sliderImage: '/Images/b2b/BERLUTI.svg',
    sliderImage2: '',
    sliderTitle: 'Berluti',
    style: {
      transform: 'translateX(2px)'
    },
    background: '#fff',
    sliderText:
      'valorise le savoir-faire artisanal et applique des normes environnementales strictes dans ses productions',
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-13.jpg',
    sliderImage2: '',
    sliderTitle: '55 %',
    sliderText:
      'du stock de carbone forestier est séquestré dans les forêts tropicales',
    reverse: true,
  },
  {
    sliderImage: '/Images/b2b/Vinci.svg',
    sliderImage2: '',
    sliderTitle: 'Vinci Construction',
    background: '#62f44a',
    color: '#1e2330',
    style: {
      transform: 'scale(110%)'
    },
    sliderText:
      "Vinci Construction innove pour réduire l'impact environnemental de ses projets de construction.",
  },
  {
    sliderImage: "/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-56 - .jpg",
    sliderImage2: "",
    sliderTitle: "Jérémy Fonteneau\n" +
        "Mon déclic climatique ?",
    sliderText: "Entre pistes de ski au Qatar et glaciers détruits pour des compétitions, la démesure humaine est choquante.",
    reverse: true
  },{
    sliderImage: "/Images/b2b/tbwa-group.svg",
    sliderImage2: "",
    sliderTitle: "TBWA",
    style: {
      transform: 'scale(140%)'
    },
    background: '#fff',
    // background: '#62f44a',
    sliderText: "promeut des campagnes responsables, éthiques et respectueuses de l’environnement",
  }
  // ,{
  //   sliderImage: "/Images/b2b/solvay.svg",
  //   sliderImage2: "",
  //   sliderTitle: "SOLVAY",
  //   background: '#e2fe04',
  //   color: '#244f19',
  //   style: {
  //     transform: 'scale(110%)'
  //   },
  //   sliderText: "Solvay développe des solutions chimiques durables pour une industrie plus performante et moins polluante.",
  // },
];

export const SliderTwoItems = [
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-10.jpg',
      sliderImage2: '',
    // sliderImage2:
    //   '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-19.jpg',
    sliderTitle: 'Elodie Souslikoff\n' + 'Mon déclic climatique ?',
    sliderText:
      "Quand j'ai passé mes premières nuits dans la grange de mes parents, qui marche à l'électricité solaire et sans eau courante, et que j'ai réalisé l'énergie inutile que l'on utilise chaque jour.",
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-4 (2).jpg',
    sliderImage2: '',
    sliderTitle: 'Charlotte Gramard\n' + 'Mon déclic climatique ?',
    sliderText:
      "À Bali, j'ai vu des rivières de plastique et ces continents de déchets dans les océans. C'était un choc.",
  },
  {
    sliderImage: '/Images/b2b/Celine-logo.svg',
    sliderImage2: '',
    sliderTitle: 'Céline',
    background: '#fff',
    color: '#244f19',
    style: {
      transform: 'translateX(6px) translateY(-5px)'
    },
    sliderText:
      'Céline adopte des pratiques éthiques et durables dans la production de ses collections.',
  },
  {
    sliderImage: '/Images/b2b/MAIF.svg',
    sliderImage2: '',
    sliderTitle: 'MAIF',
    background: '#061391',
    color: '#fff',
    sliderText:
      " La MAIF promeut une société juste et responsable avec des produits d'assurance écoresponsables.",
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-12.jpg',
    sliderImage2: '',
    sliderTitle: 'Martin Vives\n' + 'Mon déclic climatique ?',
    sliderText:
      "Voir les déchets de l'industrie agroalimentaire m'a marqué : quel coût écologique, animal et humain.",
    reverse: true,
  },
  {
    sliderImage: '/Images/b2b/mutualite-fr.svg',
    sliderImage2: '',
    sliderTitle: 'Mutualité Française',
    color: '#ff0000',
    background: '#fff',
    style: { objectFit: 'contain' as CSSProperties['objectFit'] },
    sliderText: 'bâtit une politique globale de prévention, renforce un égal accès aux soins, rend la santé accessible, inclusive et protectrice. '
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-22.jpg',
    sliderImage2: '',
    sliderTitle: 'Pénélope Cassin\n' + 'Consultante CRM et Database\n',
    sliderText:
      'Voir la faune marine et les coraux disparaître devant chez mes grand-parents en Guadeloupe.',
  },
  {
    sliderImage: '/Images/b2b/tr-rebranded-logo.svg',
    sliderImage2: '',
    sliderTitle: ' Thomson Reuters',
    background: '#e2fe04',
    color: '#244f19',
    style: {
      objectFit: 'contain' as CSSProperties['objectFit'],
      transform: 'scale(90%)'
    },
    sliderText:
      "facilite l'accès à l'information fiable et responsable pour promouvoir la justice et la transparence.",
  },
  {
    sliderImage: '/Images/b2b/Logo_Covéa.svg',
    sliderImage2: '',
    sliderTitle: 'Covea',
    background: '#fe6d02',
    color: '#244f19',
    sliderText:
      "finance des projets durables et favorise l'inclusion sociale à travers ses services d'assurance.\n",
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-23.jpg',
    sliderImage2: '/Images/communityslideV2Small/orange.png',
    sliderTitle: '',
    sliderText:
      'La déforestation tropicale est responsable de plus de 7% des émissions mondiales de CO2',
    reverse: true,
  },
  // {
  //   sliderImage:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-24.webp',
  //   sliderImage2: '',
  //   sliderTitle: 'Pauline François\n' + 'Mon déclic climatique ?',
  //   sliderText:
  //     "Le covid, voir la nature reprendre ses droits, les bons médias et mes discussions engagées m'ont poussé à calculer mon empreinte carbone.",
  //   reverse: true,
  // },
  {
    sliderImage: '/Images/b2b/daher.svg',
    sliderImage2: '',
    sliderTitle: 'Daher',
    background: '#e2fe04',
    color: '#244f19',
    style: {
      transform: 'translateX(-5px) translateY(-10px)'
    },
    sliderText:
      "Daher s'engage dans la transition énergétique avec des solutions de transport durable et innovantes.",
  },
  // {
  //   sliderImage: '/Images/b2b/dior.png',
  //   sliderImage2: '',
  //   sliderTitle: 'DIOR',
  //   background: '#fff',
  //   color: '#000',
  //   style: {
  //     transform: 'translateY(-7px)'
  //   },
  //   sliderText:
  //     "Dior combine luxe et durabilité avec une mode éthique et respectueuse de l'environnement.",
  // },
  {
    sliderImage: '/Images/b2b/lvh.svg',
    sliderImage2: '',
    sliderTitle: 'La Fondation Louis Vuitton',
    background: '#fff',
    color: '#000',
    style: { transform: 'scale(90%)', objectFit: 'contain' as CSSProperties['objectFit'] },
    sliderText:
      "promeut l’art et la culture en soutenant la création contemporaine et en rendant l’art accessible au plus grand nombre.",
  },
  // {
  //   sliderImage: "/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-5.jpg",
  //   sliderImage2: "",
  //   sliderTitle: "Margaux Roux \n" + "Mon déclic climatique ?",
  //   sliderText: "La pollution plastique à Bali : voir à quel point les produits de notre quotidien se retrouvent à polluer la Nature.",
  // },
  // {
  //   sliderImage:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-4 (2).jpg',
  //   sliderImage2: '',
  //   sliderTitle: 'Charlotte Gramard\n' + 'Mon déclic climatique ?',
  //   sliderText:
  //     "À Bali, j'ai vu des rivières de plastique et ces continents de déchets dans les océans. C'était un choc.",
  // },
  {
    sliderImage: '/Images/b2b/lwqr-insta.svg',
    sliderImage2: '',
    sliderTitle: 'La WorQueRie',
    background: '#fff',
    // background: '#62f44a',
    style: {
      transform: 'translateX(-15px)'
    },
    sliderText:
      ' La Worquerie propose un coworking “bien pensé” dans un bâtiment neuf, imaginé et conçu à 100% pour le travail et la convivialité.',
  },
  {
    sliderImage: '/Images/b2b/harmonie.svg',
    sliderImage2: '',
    sliderTitle: 'Harmonie',
    background: '#62f44a',
    color: '#1e2330',
    style: {
      transform: 'scale(110%)'
    },
    sliderText:
      "Harmonie Mutuelle place le bien-être au cœur de ses actions, en soutenant la santé et l'inclusion sociale.",
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-3.jpg',
    sliderImage2: '',
    sliderTitle: 'Fanny Robert\n' + 'Mon déclic climatique ?',
    sliderText:
      'Confronté à un smog pendant plusieurs jours, je me suis senti impuissant face à cet air irrespirable.',
    reverse: true,
  },

  // {
  //   sliderImage:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-16.webp',
  //   sliderImage2:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-4.jpg',
  //   sliderTitle: '',
  //   sliderText:
  //     'Planter 1200 milliards d’arbre permettrait d’absorber 2/3 de nos émissions actuelles',
  //   reverse: true,
  // },
  {
    sliderImage: '/Images/b2b/Tokio-marine-hcc-logo.svg',
    sliderImage2: '',
    sliderTitle: 'TokioMarine',
    background: '#fe6d02',
    color: '#244f19',
    style: {
      transform: 'scale(110%) translateY(-5px)'
    },
    sliderText:
      'Tokio Marine aide à la résilience climatique en gérant les risques environnementaux pour les entreprises et les communautés.',
  },
  {
    sliderImage: '/Images/b2b/valgo.png',
    sliderImage2: '',
    sliderTitle: 'VALGO',
    // background: '#fff',
    background: '#b6e9fe',
    color: '#244f19',
    sliderText:
      'Valgo réhabilite durablement les sites industriels pollués en mettant l’accent sur la dépollution.',
  },

  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-9.jpg',
    sliderImage2:
      '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-8.png',
    sliderTitle: '',
    sliderText: '',
  },
  {
    sliderImage: '/Images/b2b/KAWAA_LOGO_PARIS_RVB.svg',
    sliderImage2: '',
    sliderTitle: 'Kawaa Paris',
    style: {
      transform: 'translateX(4px)'
    },
    background: '#e8bfe9',
    color: '#6b3992',
    sliderText:
      'est un café & des activités & une cuisine & des rencontres & un bureau & du partage',
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-10.jpg',
    sliderImage2: '',
    sliderTitle: 'Yoni Sellam\n' + 'Mon déclic climatique ?',
    sliderText:
      ' Le jour où j’ai vu les Koalas Australiens pris au piège dans les mégas-incendies. C’était insoutenable !',
    reverse: true,
  },
  {
    sliderImage: '/Images/b2b/moet-hennessy-wiser-grey-400x150@2xC.svg',
    sliderImage2: '',
    sliderTitle: 'Moët Hennessy',
    background: '#fff',
    color: '#000',
    style: {
      transform: 'scale(175%) translateX(-3px) translateY(-6px)'
    },
    sliderText:
      'soutient une viticulture durable et les communautés locales tout en alliant tradition et innovation.',
  },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-18.jpg',
    sliderImage2:
      '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-19.png',
    sliderTitle: '',
    sliderText: '',
  },
  {
    sliderImage: '/Images/b2b/Ruinart-Logo.svg',
    sliderImage2: '',
    sliderTitle: 'Ruinart',
    background: '#fff',
    color: '#94724d',
    sliderText:
      "allie tradition et innovation pour produire un champagne durable, respectueux de l'environnement et des savoir-faire",
  },
  {
    sliderImage: '/Images/b2b/logo-reunion-aerienne.svg',
    sliderImage2: '',
    sliderTitle: 'La Réunion',
    background: '#fff',
    color: '#015095',
    sliderText:
      "Aérienne s'engage pour une aviation plus responsable, en réduisant ses émissions de carbone et en optimisant ses opérations.",
  },
  // {
  //   sliderImage:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-15.webp',
  //   sliderImage2:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-4.jpg',
  //   sliderTitle: "11 millions d'hectares",
  //   sliderText: ' de plantations de café dans le monde',
  //   reverse: true,
  // },
  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-12.jpg',
    sliderImage2:
      '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-11.png',
    sliderTitle: ' ',
    sliderText: '',
  },

  {
    sliderImage: "/Images/b2b/qwamplify.png",
    sliderImage2: "",
    sliderTitle: "Qwamplify ",
    // background: '#fff',
    background: '#fd3d4c',
    color: '#1d232f',
    sliderText: "Qwamplify  privilégie des pratiques marketing éthiques et transparentes dans ses stratégies digitales.",
  },
  {
    sliderImage: '/Images/b2b/La_Samaritaine_Logo.png',
    sliderImage2: '',
    sliderTitle: 'La Samaritaine',
    background: '#fff',
    color: '#000',
    sliderText:
      'soutient des projets de solidarité locale et propose une consommation durable.',
  },

  {
    sliderImage:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-7.jpg',
    sliderImage2:
      '/Images/communityslideV2Small/let_s-catch-carbon-bastienlabelle-8.png',
    sliderTitle: '',
    sliderText:
      'Les 10 pays qui vivent le plus les dégâts du dérèglement climatiques sont pour 0,13% des émissions cumulées.',
  },

  // {
  //   sliderImage:
  //     '/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-13.webp',
  //   // sliderImage2: "/Images/communityslideV2Small/let_s-catch-carbon-la-worquerie-bastienlabelle-14.webp",
  //   sliderImage2: '',
  //   sliderTitle: 'Arthur Mouragues\n' + 'Mon déclic climatique ?',
  //   sliderText:
  //     "En arpentant les littoraux, je suis toujours choqué par les plastiques qui jonchent les plages. Il faut agir pour l'environnement.",
  // },
  {
    sliderImage: '/Images/b2b/parcNationalVanois.svg',
    sliderImage2: '',
    sliderTitle: 'Parc National ',
    background: '#fff',
    color: '#000a8c',
    style: {
      transform: 'translateX(9px)'
    },
    sliderText:
      " Le Parc national de la Vanoise protège la biodiversité et sensibilise à la préservation de l'environnement alpin.",
  },
  {
    sliderImage: '/Images/b2b/groupe-vyv.png',
    sliderImage2: '',
    sliderTitle: 'VYV',
    // background: '#fff',
    background: '#e2fe04',
    color: '#244f19',
    sliderText:
      "Le Groupe Vyv place l'humain au cœur de ses actions en soutenant la santé, le bien-être et l'inclusion sociale.",
  },
  {
    sliderImage: '/Images/b2b/weldom-logo.png',
    sliderImage2: '',
    sliderTitle: 'Weldom',
    color: '#000',
    background: '#fff',
    sliderText: 'apporte des solutions pour que chacun puisse entretenir, réparer, profiter de son habitat et mieux vivre chez soi.'
  },
  {
    sliderImage: '/Images/b2b/rbc-logo.png',
    sliderImage2: '',
    sliderTitle: 'RBC',
    color: '#0051a4',
    background: '#fede01',
    style: { objectFit: 'contain' as CSSProperties['objectFit'] },
    sliderText: 's\'engage à aider ses clients à prospérer et les communautés à s\’épanouir, en soutenant des initiatives ayant un impact mesurable sur la société et l\’environnement.'
  },
];

export const PlanData: {
  id: number;
  title: string;
  content: ReactNode | string;
  date: string;
  isOpen: boolean;
  planState: boolean;
  categoriesBgColor?: string;
  countries: string[];
  codePays: string;
  categories: Category[];
}[] = [
  {
    id: 1,
    title: "Projet pilote au Nicaragua",
    date: "Avril 2016",
    countries: ["Nicaragua"],
    codePays: "ni",
    categories: [{ name: "Opérations", bgcolor: "#234f19", color: "#fff" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Expérimentation du modèle économique \"One Cup, One Cent\" pour valider la transition agroforestière.</p>" +
      "<p>Un programme de microcrédit destiné aux femmes célibataires est développé dans la région rurale isolée de Jinotega, au Nicaragua. Il vise à soutenir un projet agroforestier de café, intégrant des dimensions écologiques, économiques et sociales. Objectifs : améliorer les revenus des populations grâce à la production de café de meilleure qualité et à la polyculture, tout en faisant de la reforestation un levier économique.</p>" +
      "<p>Résultats attendus à long terme : la préservation, la conservation et la recréation de puits de carbone.</p>",
  },
  {
    id: 2,
    title: "100 entreprises contributrices",
    date: "Octobre 2016",
    countries: ["France"],
    codePays: "fr",
    categories: [{ name: "Financement", bgcolor: "#e9bfe9", color: "#780016" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Adoption du modèle par 100 entreprises, intégrant la transition agricole dans leurs engagements RSE.</p>",
  },
  {
    id: 3,
    title: "Mission d’évaluation au Nicaragua",
    date: "Juin 2017",
    countries: ["Nicaragua"],
    codePays: "ni",
    categories: [{ name: "Opérations", bgcolor: "#234f19", color: "#fff" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Audit du projet à Jinotega pour évaluer l’impact des premières plantations et ajuster le modèle.</p>" +
      "<p>Constat positif : le programme \"One Cup One Cent\" fonctionne. Les familles rencontrées ont développé des compétences économiques, amélioré leurs revenus et leurs conditions de vie.</p>",
  },
  {
    id: 4,
    title: "Identification d’un partenaire terrain pour le lancement de Let’s Catch Carbon au Cameroun",
    date: "Mars 2021",
    countries: ["Cameroun"],
    codePays: "cm",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Une rencontre a lieu avec le fondateur de la coopérative Terra Noun au Cameroun, engagé dans la relance de la filière café à travers un café \"climat\" qui reforeste et assure un revenu décent aux cultivateurs.</p>" +
      "<p>Ce projet est identifié comme une opportunité majeure pour déployer une vision d’une filière café à impact. En conséquence, les fonds d’amorçage du programme \"One Cup One Cent\" sont orientés vers cette coopérative, marquant le démarrage du programme Let’s Catch Carbon.</p>",
  },
  {
    id: 5,
    title: "1er Live communautaire pour les contributeurs",
    date: "Mai 2021",
    countries: ["France"],
    codePays: "fr",
    categories: [{ name: "Financement", bgcolor: "#e9bfe9", color: "#780016" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Organisation du premier live interactif réunissant le fondateur de la coopérative et les entreprises contributrices.</p>" +
      "<p>Cet événement marque un moment décisif, avec la présentation du pivot stratégique du programme : désormais, chaque pause café des collaborateurs finance directement un projet de reforestation en Afrique de l’Ouest.</p>",
  },
  {
    id: 6,
    title: "Formation à la fabrication d’engrais et insecticides bio",
    date: "Mai 2021",
    countries: ["Cameroun"],
    codePays: "cm",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Le projet a financé la venue d'un agronome spécialiste en développement communautaire en milieu rural.</p>" +
      "<p>Son intervention dans le Noun a permis de former les cultivateurs de la coopérative Terra Noun à la fabrication d'engrais et d'insecticides biologiques.</p>",
  },
  {
    id: 7,
    title: "300 entreprises contributrices",
    date: "Août 2021",
    countries: ["France"],
    codePays: "fr",
    categories: [{ name: "Financement", bgcolor: "#e9bfe9", color: "#780016" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>La certification B Corp a donné de la visibilité au projet et accéléré son développement.</p>" +
      "<p>Malgré la généralisation du télétravail avec la COVID-19, la fréquentation des bureaux reprend, tout comme l’utilisation des machines à café.</p>" +
      "<p>Les collaborateurs cherchent désormais à avoir un impact, et les entreprises s’engagent.</p>",
  },
  {
    id: 8,
    title: "Mission diagnostique de pré-lancement du programme au Cameroun",
    date: "14 mai 2022",
    countries: ["Cameroun"],
    codePays: "cm",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Une mission est menée au Cameroun avec un consultant expert en projets de développement en Afrique.</p>" +
      "<p>Objectif : diagnostiquer les besoins de la coopérative, établir une feuille de route et un budget pour les cinq prochaines années.</p>" +
      "<p>Résultat : la structuration d’un programme ambitieux de 5,4 millions d’euros visant à reforester 12 000 hectares.</p>",
  },
  {
    id: 9,
    title: "Formalisation de la gouvernance du programme pour le projet Cameroun",
    date: "30 juin 2022",
    countries: ["Cameroun"],
    codePays: "cm",
    categories: [{ name: "Gouvernance", bgcolor: "#d717e7", color: "#000" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Élaboration du cadre logique, dossier narratif, budget et indicateurs clés de mesure d’impact.</p>",
  },
  {
    id: 10,
    title: "Assemblée Générale constitutive de l'association Let's Catch Carbon",
    date: "1er juillet 2022",
    countries: ["France"],
    codePays: "fr",
    categories: [{ name: "Gouvernance", bgcolor: "#d717e7", color: "#000" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>L'assemblée générale constitutive, première assemblée générale de l’association Let’s Catch Carbon, s’est tenue pour acter la création de la structure associative.</p>" +
      "<p>Elle vise notamment à assurer la transparence des fonds et de la collecte de fonds publics et privés.</p>",
  },
  {
    id: 11,
    title: "Création officielle de la structure associative à but non lucratif",
    date: "14 octobre 2022",
    countries: ["France"],
    codePays: "fr",
    categories: [{ name: "Gouvernance", bgcolor: "#d717e7", color: "#000" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>La création de l’association Let’s Catch Carbon est publiée au Journal Officiel.</p>" +
      "<p>Elle vise à assurer la transparence des flux financiers provenant des fondations et organismes publics.</p>",
  },
  {
    id: 12,
    title: "Construction d'une école pour 200 élèves",
    date: "2 décembre 2022",
    countries: ["Cameroun"],
    codePays: "cm",
    categories: [{ name: "Projet Social", bgcolor: "#ff6a04", color: "#790015" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Les fonds financent des projets sociaux destinés à améliorer les conditions de vie des producteurs et de leurs familles.</p>" +
      "<p>Ici, ils permettent la construction d'une salle de classe pour l'école du village de Sunday.</p>",
  },
  {
    id: 13,
    title: "500 entreprises contributrices",
    date: "15 décembre 2022",
    countries: ["France"],
    codePays: "fr",
    categories: [{ name: "Financement", bgcolor: "#e9bfe9", color: "#780016" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Les services RH, Achats et les Office Managers sont de plus en plus à la recherche de fournisseurs engagés.</p>" +
      "<p>Le choix de Chacun Son Café s'impose de plus en plus logiquement à la machine à café.</p>",
  },
  {
    id: 14,
    title: "Création des premiers germoirs",
    date: "15 décembre 2022",
    countries: ["Cameroun"],
    codePays: "cm",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Les producteurs de la coopérative ont priorisé ce projet pour distribuer massivement des plants de caféiers et introduire le modèle agroforestier dans de nouvelles parcelles.</p>" +
      "<ul><li>Les grains sont mis en germination sous des plates-bandes avec paillage, arrosées si nécessaire.</li>" +
      "<li>Après trois semaines, la germination est vérifiée. Dès la première germination, le paillage est retiré.</li>" +
      "<li>Après 60 jours, la majorité des graines ayant germé sont mises en sachets pour être envoyées dans les pépinières.</li>" +
      "<li>Les plantules croissent pendant six mois avant leur transplantation en début de saison des pluies.</li></ul>",
  },
  {
    id: 15,
    title: "Achat d'une première attestation de compensation carbone",
    date: "10 mars 2023",
    countries: ["France"],
    codePays: "fr",
    categories: [{ name: "Financement", bgcolor: "#e9bfe9", color: "#780016" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Notre partenaire Qwamplify finance l'achat de semences pour la plantation de 96 hectares en agroforesterie.</p>" +
      "<p>Cette acquisition de crédits carbone ouvre pour le programme Let's Catch Carbon la possibilité d'intégrer la finance carbone.</p>",
  },
  {
    id: 16,
    title: "Signature d’une convention de partenariat tripartite pour le projet Cameroun",
    date: "28 mai 2023",
    countries: ["Cameroun"],
    codePays: "cm",
    categories: [{ name: "Gouvernance", bgcolor: "#d717e7", color: "#000" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Une convention tripartite entre Terra Noun, Let’s Catch Carbon et Chacun Son Café a été élaborée et signée.</p>" +
      "<p>D'une durée initiale de trois ans, elle est renouvelable chaque année par tacite reconduction.</p>" +
      "<p>Elle vise à répondre aux défis du changement climatique, de l'éducation et de la pauvreté par la filière café.</p>",
  },
  {
    id: 17,
    title: "600 entreprises contributrices",
    date: "1er juin 2023",
    countries: ["France"],
    codePays: "fr",
    categories: [{ name: "Financement", bgcolor: "#e9bfe9", color: "#780016" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Un développement important qui donne au programme Let's Catch Carbon le coup d'accélérateur nécessaire pour son lancement officiel.</p>",
  },
  {
    id: 18,
    title: "Première édition de la Bourse scolaire",
    date: "30 juin 2023",
    countries: ["Cameroun"],
    codePays: "cm",
    categories: [{ name: "Projet Social", bgcolor: "#ff6a04", color: "#790015" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Les financements du modèle One Cup, One Cent de Chacun Son Café ont permis de tenir la première édition de la Bourse scolaire inter-école Terra Noun.</p>" +
      "<p>L'événement du 17 mai 2023 au siège de la coopérative Terra Noun vise à améliorer l’éducation dans les écoles primaires des villages producteurs de café du Noun, au Cameroun.</p>",
  },
  {
    id: 19,
    title: "Mission diagnostique de pré-lancement du programme au Togo #1",
    date: "30 août 2023",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>L'objectif de cette mission : élaborer une première ébauche de programme formalisée dans une note de concept et un cadre logique de programme.</p>" +
      "<p>Le programme développe trois axes principaux :</p>" +
      "<ul><li>Accompagner le développement de la production caféière agroforestière</li>" +
      "<li>Contribuer à l’organisation de la filière d’un café agroforestier de qualité au Togo</li>" +
      "<li>Garantir une pérennité sociale, économique et environnementale de l’approche pour les communautés ciblées</li></ul>",
  },
  {
    id: 20,
    title: "Restauration d’une usine de transformation de café vert",
    date: "15 octobre 2023",
    countries: ["Cameroun"],
    codePays: "cm",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Cette usine de transformation de café vert à Mbamkouop inclut un espace de stockage de 800 m².</p>" +
      "<p>Les travaux ont concerné la remise en état du système décortiqueuse/déparcheuse, le nettoyage des tamis de la trieuse, ainsi que le dépoussiérage et le lavage des silos.</p>" +
      "<p>Objectif : permettre à la coopérative de reprendre progressivement le contrôle de la chaîne de valeur du café, avec la création de 4 emplois.</p>",
  },
  {
    id: 21,
    title: "Assemblée Générale de l'association Let's Catch Carbon",
    date: "22 novembre 2023",
    countries: ["France"],
    codePays: "fr",
    categories: [{ name: "Gouvernance", bgcolor: "#d717e7", color: "#000" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>L’Assemblée Générale de l’association s’est tenue dans la foulée du CA du 22 novembre 2023.</p>" +
      "<p>Le format a suivi les huit piliers définis par l’association :</p>" +
      "<ul><li>Gouvernance et structuration des organisations locales</li>" +
      "<li>Stratégie et ingénierie de programme</li>" +
      "<li>Communication et marketing</li>" +
      "<li>Gestion opérationnelle</li>" +
      "<li>Gestion administrative et financière</li>" +
      "<li>Gestion des ressources humaines</li>" +
      "<li>Partenariats et financement</li>" +
      "<li>Reporting</li></ul>",
  },
  {
    id: 22,
    title: "Mission diagnostique de pré-lancement du programme au Togo #2",
    date: "15 décembre 2023",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Gouvernance", bgcolor: "#d717e7", color: "#000" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Deuxième mission diagnostique pour formaliser une note de concept et un cadre logique de programme.</p>" +
      "<p>Les trois axes de développement du programme :</p>" +
      "<ul><li>Accompagner le développement de la production caféière agroforestière</li>" +
      "<li>Contribuer à l’organisation de la filière d’un café agroforestier de qualité au Togo</li>" +
      "<li>Garantir une pérennité sociale, économique et environnementale de l’approche pour les communautés ciblées</li></ul>",
  },
  {
    id: 23,
    title: "Formalisation de la gouvernance du programme pour le projet Togo",
    date: "10 février 2024",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Gouvernance", bgcolor: "#d717e7", color: "#000" }],
    categoriesBgColor: "#4df830",
    isOpen: false,
    planState: true,
    content:
      "<p>Élaboration du cadre logique, dossier narratif, budget et indicateurs clés de mesure d'impact pour le développement du programme au Togo.</p>",
  },
  {
    id: 24,
    title: "Signature d’une convention de partenariat tripartite pour le projet Togo",
    date: "10 mars 2024",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Gouvernance", bgcolor: "#d717e7", color: "#000" }],
    isOpen: false,
    planState: true,
    content:
      "<p>Une convention tripartite a été signée entre l’ICAT/UTCC, Chacun Son Café et Let’s Catch Carbon.</p>" +
      "<p>Cette convention de trois ans, renouvelable, vise à développer la filière caféière au Togo :</p>" +
      "<ul><li>Production d’un café de haute qualité et plus rémunérateur</li>" +
      "<li>Développement de projets sociaux et environnementaux pour les communautés</li></ul>",
  },
  {
    id: 25,
    title: "Partenariat terrain noué avec l'association Gaïa pour le projet Togo",
    date: "20 mai 2024",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Financement", bgcolor: "#e9bfe9", color: "#780016" }],
    isOpen: false,
    planState: true,
    content:
      "<p>Mise en place d'un partenariat avec la structure associative Gaïa pour la formalisation de demandes de financement conjointes, s'appuyant sur l'ancienneté et la légitimité de Gaïa dans la mise en œuvre de projets de développement au Togo.</p>",
  },
  {
    id: 26,
    title: "25 000 plants transplantés dans les parcelles des producteurs",
    date: "15 juin 2024",
    countries: ["Cameroun"],
    codePays: "cm",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    isOpen: false,
    planState: true,
    content:
      "<p>25 000 plants ont été transplantés dans les parcelles des producteurs au Cameroun.</p>",
  },
  {
    id: 27,
    title: "Finalisation du budget prévisionnel sur 5 ans pour l'ensemble du programme Let's Catch Carbon",
    date: "26 juillet 2024",
    countries: ["France"],
    codePays: "fr",
    categories: [{ name: "Gouvernance", bgcolor: "#d717e7", color: "#000" }],
    isOpen: false,
    planState: true,
    content:
      "<p>Le budget des programmes Cameroun et Togo est finalisé pour les 5 années à venir.</p>",
  },
  {
    id: 28,
    title: "86 producteurs identifiés dans 4 villages pour le lancement d’un micro-pilote du modèle d’agroforesterie caféière",
    date: "2 août 2024",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    isOpen: false,
    planState: true,
    content:
      "<p>86 producteurs ont été identifiés dans 4 villages pour le lancement d’un micro-pilote du modèle d’agroforesterie caféière au Togo.</p>",
  },
  {
    id: 29,
    title: "Financement et réussite d'un forage pour l'irrigation du modèle agroforestier",
    date: "10 août 2024",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    isOpen: false,
    planState: true,
    content:
      "<p>Le financement et la réussite d'un forage pour l'irrigation assurent un approvisionnement en eau régulier pour le modèle agroforestier, renforçant la résilience des cultures face aux variations climatiques et optimisant la croissance des caféiers et autres plantes associées. Ce projet garantit la faisabilité du projet dans la région.</p>",
  },
  {
    id: 30,
    title: "Lancement officiel du projet Togo",
    date: "1er septembre 2024",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    isOpen: false,
    planState: true,
    content:
      "<p>Le lancement du projet pilote au Togo sur 6 000 hectares marque le début de l'implantation du modèle agroforestier dans la région. Ce projet vise à tester et adapter les pratiques agroécologiques à grande échelle, avec pour objectif d'améliorer la production agricole tout en favorisant la reforestation et la résilience climatique.</p>",
  },
  {
    id: 38,
    title: 'Financement de la Guilde - Agence des Micro-projets',
    date: "10 septembre 2024",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Financement", bgcolor: "#e9bfe9", color: "#780016" }],
    isOpen: false,
    planState: false,
    content: "<p>Le financement de la Guilde a permis la mise en oeuvre du projet d’aménagement d’un centre de production de matériel végétal agroforestier à Dzogbégan et l’installation d'un système de micro-irrigation solaire à la pépinière de Tonota. </p>"
  },
  {
    id: 31,
    title: "700 entreprises contributrices",
    date: "1er octobre 2024",
    countries: ["France"],
    codePays: "fr",
    categories: [{ name: "Financement", bgcolor: "#e9bfe9", color: "#780016" }],
    isOpen: false,
    planState: true,
    content:
      "<p>Un développement important qui donne au programme Let's Catch Carbon le coup d'accélérateur nécessaire pour son lancement officiel.</p>",
  },
  {
    id: 32,
    title: "Lancement du 1er projet pour l'empowerment des femmes",
    date: "10 octobre 2024",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Financement", bgcolor: "#e9bfe9", color: "#780016" }],
    isOpen: false,
    planState: true,
    content:
      "<p>Allocation par l'Organisation internationale de la Francophonie (OIF) d'un financement pour le projet de Promotion de l’hygiène féminine et développement d’une unité de fabrication de serviettes hygiéniques réutilisables pour les femmes de la région des Plateaux au Togo.</p>",
  },
  {
    id: 33,
    title: "145 producteurs sensibilisés / formés à l’agroforesterie caféière",
    date: "20 octobre 2024",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    isOpen: false,
    planState: true,
    content:
      "<p>145 producteurs ont été sensibilisés et formés à l’agroforesterie caféière au Togo.</p>",
  },
  {
    id: 34,
    title: "Mission de suivi au Togo",
    date: "27 octobre 2024",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Opérations", bgcolor: "#234f19", color: "#fff" }],
    isOpen: false,
    planState: true,
    content:
      "<p>Cette mission de suivi au Togo permet d'évaluer les progrès du projet pilote, d'ajuster les stratégies en fonction des besoins locaux, et de renforcer le soutien aux équipes sur le terrain pour assurer la réussite du déploiement sur 6 000 hectares.</p>",
  },
  {
    id: 39,
    title: 'Financement de la Région Bretagne',
    date: "14 décembre 2024",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Financement", bgcolor: "#e9bfe9", color: "#780016" }],
    isOpen: false,
    planState: false,
    content: "<p>Le financement de la région Bretagne a permis la mise en oeuvre du projet d’aménagement d’un centre de production de matériel végétal agroforestier à Dzogbégan accompagné de l’installation d'un système de micro-irrigation solaire. </p>"
  },
  {
    id: 35,
    title: '50 producteurs sensibilisés / formés à l’agroforesterie caféière',
    date: "24 février 2025",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Terrain", bgcolor: "#b6eaff", color: "#061491" }],
    isOpen: false,
    planState: true,
    content: "<p>50 producteurs ont été sensibilisés et formés à l’agroforesterie caféière au Togo.</p>"
  },
  {
    id: 36,
    title: 'Mission de suivi',
    date: "5 mars 2025",
    countries: ["Togo"],
    codePays: "tg",
    categories: [
      { name: "Opérations", bgcolor: "#234f19", color: "#fff" },
      { name: "Terrain", bgcolor: "#b6eaff", color: "#061491" },
      { name: "Projet Social", bgcolor: "#ff6a04", color: "#790015" }
    ],
    isOpen: false,
    planState: true,
    content: "<div><p><strong>Objectifs principaux de la mission :</strong><ul><li>- Évaluer l’état d’avancement du projet agricole sur le terrain.</li><li>- Appuyer le démarrage du projet « Promotion de l’hygiène féminine et développement d’une unité de fabrication de serviettes hygiéniques réutilisables », financé par l’Organisation internationale de la Francophonie (OIF).</li><li>- Rencontrer les acteurs, autorités et partenaires locaux.</li><li>- Identifier les défis et opportunités liés au développement du programme.</li></ul></p></div>"
  },
  {
    id: 37,
    title: 'Co-création des outils de marketing social',
    date: "25 mars 2025",
    countries: ["Togo"],
    codePays: "tg",
    categories: [{ name: "Projet Social", bgcolor: "#ff6a04", color: "#790015" }],
    isOpen: false,
    planState: true,
    content: "<p>Choix d’un nom, création d’un logo et de supports de communication pour la marque de serviettes menstruelles réutilisables en collaboration avec les couturières et les revendeuses. </p>"
  },
];

export const PrincipesGouvernaceData = [
  {
    id: 1,
    title: 'Inclusive',
    round: true,
    intro:
      "Favoriser la diversité et l'inclusion à tous les niveaux, en permettant à chaque voix de contribuer et en intégrant les perspectives variées pour enrichir les initiatives et les décisions de l'entreprise.",
    content:
      "Favoriser la diversité et l'inclusion à tous les niveaux, en permettant à chaque voix de contribuer et en intégrant les perspectives variées pour enrichir les initiatives et les décisions de l'entreprise.",
  },
  {
    id: 2,
    title: 'Ethique',
    round: true,
    intro:
      'En générant non seulement des actions en lien avec la protection de\n' +
      "l'environnement et la préservation de la biodiversité, mais aussi des actions à\n" +
      'co-bénéfices pour les populations locales et les autres acteurs du programme.',
    content:
      'En générant non seulement des actions en lien avec la protection de\n' +
      "l'environnement et la préservation de la biodiversité, mais aussi des actions à\n" +
      'co-bénéfices pour les populations locales et les autres acteurs du programme.',
  },
  {
    id: 3,
    title: 'Transparence',
    round: false,
    intro:
      'Communiquer clairement et ouvertement sur nos actions, nos choix et nos résultats afin de maintenir la confiance et la responsabilité vis-à-vis de toutes les parties prenantes.',
    content:
      'Communiquer clairement et ouvertement sur nos actions, nos choix et nos résultats afin de maintenir la confiance et la responsabilité vis-à-vis de toutes les parties prenantes.',
  },
  {
    id: 4,
    title: 'Collaboratif',
    round: true,
    intro:
      "Encourager une coopération active entre équipes, partenaires et communautés pour développer des projets conjoints qui valorisent les savoirs locaux et renforcent nos actions pour l'environnement.",
    content:
      "Encourager une coopération active entre équipes, partenaires et communautés pour développer des projets conjoints qui valorisent les savoirs locaux et renforcent nos actions pour l'environnement.",
  },

  {
    id: 5,
    title: 'Entrepreneuriat',
    round: true,
    intro:
      "Promouvoir l'innovation et le développement de nouvelles idées afin de créer des solutions durables, tout en responsabilisant chaque acteur dans le cadre d'un entrepreneuriat positif pour l'environnement.",
    content:
      "Promouvoir l'innovation et le développement de nouvelles idées afin de créer des solutions durables, tout en responsabilisant chaque acteur dans le cadre d'un entrepreneuriat positif pour l'environnement.",
  },
  {
    id: 6,
    title: 'Biodiversité',
    round: false,
    intro:
      'Mettre en place des initiatives pour protéger et restaurer les écosystèmes, en tenant compte des équilibres naturels essentiels à la biodiversité et à la durabilité des environnements.',
    content:
      'Mettre en place des initiatives pour protéger et restaurer les écosystèmes, en tenant compte des équilibres naturels essentiels à la biodiversité et à la durabilité des environnements.',
  },
  {
    id: 7,
    title: 'Hygiène',
    round: true,
    intro:
      "Assurer des normes d'hygiène élevées pour garantir des espaces sains, sécuritaires et agréables, et prévenir tout risque pour la santé de nos collaborateurs et bénéficiaires.",
    content:
      "Assurer des normes d'hygiène élevées pour garantir des espaces sains, sécuritaires et agréables, et prévenir tout risque pour la santé de nos collaborateurs et bénéficiaires.",
  },
  {
    id: 8,
    title: 'Sécurité Alimentaire',
    round: false,
    intro:
      'Prendre des mesures pour garantir un accès à des aliments sains, sûrs et de qualité, en mettant en avant la durabilité et la traçabilité des produits.',
    content:
      'Prendre des mesures pour garantir un accès à des aliments sains, sûrs et de qualité, en mettant en avant la durabilité et la traçabilité des produits.',
  },
  {
    id: 9,
    title: 'Santé',
    round: true,
    intro:
      'Promouvoir le bien-être physique et mental de chaque collaborateur, en intégrant des pratiques favorisant un environnement de travail sain et une qualité de vie optimisée.',
    content:
      'Promouvoir le bien-être physique et mental de chaque collaborateur, en intégrant des pratiques favorisant un environnement de travail sain et une qualité de vie optimisée.',
  },
  {
    id: 10,
    title: 'Autonomie',
    round: false,
    intro:
      "Encourager et soutenir l'indépendance des collaborateurs et des partenaires locaux, en renforçant leurs compétences et en les impliquant activement dans nos démarches et prises de décision.",
    content:
      "Encourager et soutenir l'indépendance des collaborateurs et des partenaires locaux, en renforçant leurs compétences et en les impliquant activement dans nos démarches et prises de décision.",
  },
];
export const FaqDAta = [
  {
    question: 'Qui est Chacun Son Café ?',
    answer: `<p>Chacun Son Café est une fintech française pionnière dans le <code>café climat</code>, créée en 2005 et dirigée par Marc Gusils. Notre mission : allier plaisir du café et action climatique concrète en finançant des projets agroforestiers dans les pays en développement.</p>
    <br/>
    <strong>Notre impact</strong>
    <p>Notre programme propriétaire "Let's Catch Carbon" vise la reforestation d'1 million d'hectares d'ici 2032, représentant l'un des plus ambitieux projets de capture carbone du secteur café en France. Présents au Cameroun et au Togo, nous avons déjà mobilisé 500 000 euros d'investissements climat depuis 2022 grâce à notre communauté d'investisseurs-consommateurs, les « Carbon killers ».</p>
    <br/>
    <strong>Comment ça marche ?</strong>
    <p>Notre modèle est simple et transparent : "One Cup, One Cent". Pour chaque tasse de café consommée, un centime est automatiquement reversé au programme Let’s Catch Carbon. Celui-ci se décompose en de multiples micro-projets sur des thématiques variées : vous choisissez vous-même les micro-projets qui vous tiennent à cœur au moment de valider votre panier.</p>
    <br/>
    <strong>Notre vision d'impact</strong>
    <p>Nous réinventons la consommation de café en la transformant en levier d'investissement climatique. Notre modèle associe technologie financière, ingénierie de projet et traçabilité pour garantir un impact mesurable sur le climat et les communautés productrices. D'ici 5 ans, près de 96 000 personnes bénéficieront directement ou indirectement de ce nouveau paradigme d'investissement responsable.</p>
    <br/>
    <strong>Excellence et reconnaissance</strong>
    <p>Premier fournisseur français de café à obtenir la certification B Corp en 2021, nous maintenons le meilleur score national du secteur avec 108.8/200 en 2024. Cette reconnaissance valide notre approche unique combinant excellence gustative et innovation financière au service du climat.</p>
    <br/>
    <strong>Notre innovation</strong>
    <p>Nous sommes la seule plateforme française « café climat » à proposer un écosystème complet associant :</p>
    <ul>
      <li>- Distribution de café premium</li>
      <li>- Technologie de micro-investissement climatique</li>
      <li>- Programme propriétaire de capture carbone en pays producteurs</li>
      <li>- Partenariats gouvernementaux et éligibilité aux financements publics-privés</li>
      <li>- Transparence totale de l’allocation des fonds grâce à un véhicule juridique à but non lucratif</li>
    </ul>`,
  },
  {
    question: 'Combien puis-je investir pour commencer ?',
    answer: `<p>L'investissement climat est automatiquement intégré dans le prix de nos cafés. Notre innovation repose sur un modèle simple : chaque kilo de café génère 1€ d'investissement, calculé sur la base de 100 tasses à 1 centime chacune. Cette micro-contribution est incluse dans le prix affiché, rendant l'investissement climat accessible sans surcoût. À chaque achat, vous composez votre portefeuille d'impact en sélectionnant parmi notre catalogue de projets ceux qui correspondent à vos convictions. Vous pouvez ensuite suivre leur progression dans votre espace investisseur personnel.</p>`,
  },
  {
    question: "Comment sont sélectionnés les projets d'investissement ?",
    answer: `<p>Notre processus de sélection s'appuie sur une double validation rigoureuse. D'abord, un comité d'experts pluridisciplinaire comprenant producteurs, scientifiques et institutions évalue chaque projet. Ensuite, les communautés locales votent pour définir leurs priorités d'investissement. Cette approche démocratique est complétée par la définition d'indicateurs de performance précis et de processus de vérification stricts. Nous collaborons avec un réseau de partenaires techniques locaux qui assurent le déploiement et le monitoring des projets, avec pour objectif l'autonomisation complète des communautés bénéficiaires.</p>`,
  },
  {
    question: 'Comment puis-je commencer à investir ?',
    answer: `<p>Pour débuter, créez votre compte investisseur sur  <a href="https://www.chacunsoncafe.fr"><u>www.chacunsoncafe.fr</u></a> et complétez votre profil climatique. Ces informations nous permettent d'affiner vos recommandations d'investissement et de vous connecter à la communauté des <code>Carbon Killers</code>. Le processus d'investissement est ensuite simple : consultez les fiches détaillées des projets en levée de fonds, sélectionnez ceux qui vous intéressent, puis finalisez votre commande de café. Vos investissements sont automatiquement suivis dans votre espace <code>Mon Impact</code>.</p>`,
  },
  {
    question: 'Comment suivre la performance de mes investissements ?',
    answer: `<p>Votre espace personnel vous donne accès à vos métriques d'impact essentielles : équivalent CO2 capturé, surface de biodiversité restaurée et objectifs personnalisés basés sur votre historique. Vous y retrouvez également vos rapports d'impact annuels. Pour chaque projet soutenu, suivez en temps réel l'état d'avancement des levées de fonds, les actualités terrain, les indicateurs de performance et l'impact social mesuré en nombre de bénéficiaires.</p>`,
  },
  {
    question: "Qui contacter si j'ai des questions ?",
    answer: `<p>
    Notre engagement pour un investissement responsable s'accompagne d'un support humain complet. Nos équipes sont disponibles via le chat en ligne pour toute question technique, et vous pouvez <a href="https://calendly.com/margaux-roux/30min"> <u>réserver des consultations téléphoniques personnalisées </u> </a> pour des conseils sur le choix de votre café ou sur la façon dont nous opérons sur le terrain. <br/>
    Nous organisons également des webinaires bi-mensuels pour vous former à l'utilisation de la plateforme, si cela vous intéresse, envoyez-nous <a href="mailto:contact@example.com"><u> un mail </u></a> !  <br/>
    Pour les entreprises souhaitant transformer leur pause café en levier d'investissement climat, <a href="mailto:jeremy@chacunsoncafe.fr"><u> une équipe dédiée </u></a> est à votre disposition pour élaborer des solutions sur mesure.

    </p>`
  }
]

export const PionnierSectionData = [
  {
    image1: "/Images/coffee-machine.webp",
    image2: "/Images/DEBONHEUR.webp",
    image3: "/Images/LA-FILLE.webp",
    image4: "/Images/arabica-coffee-coff-coffee-beans.webp",
  },
  {
    image1: "/Images/coffecup.svg",
    image2: "/Images/lot-persons.webp",
    image3: "/Images/girl-with-white-background.webp",
    image4: "/Images/arabica-coffee-coff-coffee-beans.webp",
  },
  {
    image1: "/Images/Mug_slow_coffee_style_Kinto_Bleu.webp",
    image2: "/Images/Forest.webp",
    image3: "/Images/LE-MEC.webp",
    image4: "/Images/arabica-coffee-coff-coffee-beans.webp",
  },
];

export type ContentStrategieMethodologie = {
  title?: string;
  type: 'default' | 'bordered' | 'subtitle' | 'medium' | 'ol' | 'ul' | 'link' | 'image' | 'concat' | 'text' | 'array';
  value: string | (string | ContentStrategieMethodologie | string[] )[];
  href?: string;
  strongs?: string[]
  headers?: string[];
  className?: string;
  style?: CSSProperties;
}

export type StrategieMethodologie = {
  text: string;
  link: string;
  category: string;
  color: string;
  bgColor: string;
  src: string;
  content: ContentStrategieMethodologie[];
}

export const strategieEtGouvernance: StrategieMethodologie[] = [
  {
    text: 'Pourquoi agir ?',
    color: '#e3ff00',
    bgColor: '#244f19',
    category: 'Pourquoi agir ?',
    link: '/pourquoi-agir',
    src: '/Images/strategie-et-gouvernance/1-pourquoi-agir.jpg',
    content: [
      {
        type: 'medium',
        value:
          "Sauver les conditions d'habitabilité de notre planète est certainement le plus grand défi à relever par l’humanité.",
      },
      {
        type: 'default',
        value:
          "L’humanité s'inscrit dans l'univers et fait partie d'un tout plus grand qu'elle. Dans ce tout, et selon nos observations scientifiques à ce stade, la Terre, une planète exceptionnelle, a été élue pour contenir la vie telle que nous la connaissons. Elle se comporte comme un vaisseau bleu au milieu du noir total, et comme tout vaisseau, elle doit compter ses ressources vitales. Autour d’elle, c’est l'univers, qui en l'état des choses, ne contient que du vide, des planètes sans vie et des soleils vivants et morts.",
      },
      {
        type: 'default',
        value:
          "Inconsciemment et pour certains consciemment, l'humanité porte la mission de transmettre cette vie, ce miracle, cette rareté, cette exception de l'univers aux générations suivantes.",
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/l-humanite-porte-la-mission.jpg',
      },
      {
        type: 'default',
        value:
          "Aujourd'hui, ce paradigme est remis en question par notre activité qui change les conditions d'habitabilité de notre planète pour l'ensemble du monde du vivant. Le risque d’effondrement de la biodiversité est aujourd’hui bien présent. La surexploitation des ressources naturelles, le trafic illégal (déforestation, braconnage, surpêche…) déplacent des populations et rendent des zones inhabitables. Parce que nous sommes l'espèce dominante de cette planète, notre responsabilité est double, et à ce titre le défi doit être maintenant relevé.",
      },
      {
        type: 'default',
        value:
          "Nous nous pensions au-dessus de tout, aujourd'hui l’humanité est redevenue vulnérable face aux éléments. Pas la planète, elle n’a pas besoin d’être sauvée, mais nous les humains, nous entraînons avec nous une grande partie du monde du vivant.",
      },
      {
        type: 'default',
        value:
          'En recevant le privilège de la vie, nous recevons le devoir de loyauté envers ce qui a été créé. Nous sommes LA première génération qui doit impulser ce changement et cette lutte pour préserver notre planète afin de rétablir cette loyauté envers elle.',
      },
      {
        type: 'subtitle',
        value: 'À quel titre penser qu’on peut encore agir ?',
      },
      {
        type: 'ol',
        value: [
          "Ici, personne ne conteste le réchauffement climatique et ses effets, son risque d'effondrement de l’économie, de la biodiversité, et tout simplement de l'habitabilité de notre planète.",
          'Nous avons hésité à faire l’autruche, parce qu’au fond, pourquoi devrions-nous nous occuper de ce futur où nous avons déjà disparu ? Pourquoi cela devrait-il reposer sur nous ?',
          'La conclusion à laquelle nous sommes arrivés est un peu métaphysique, et nous espérons qu’elle sera partagée.',
        ]
      },
      {
        type: 'default',
        strongs: ['ÉPOPÉE', 'DÉFI', 'COLLECTIF', 'HÉROS'],
        value:
          'On peut s’enfermer dans une vision très pessimiste de la lutte contre le réchauffement climatique, avec tout le lot de catastrophisme possible. Mais on peut aussi décider de se dire qu’il s’agit d’une nouvelle offrant un DÉFI COLLECTIF incroyable à l’humanité et où chacun de nous peut en être le HÉROS.',
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/vision-tres-pessimiste.jpg',
      },
      {
        type: 'default',
        value:
          'Au titre de cette nouvelle épopée, vous faites partie de la première génération qui va volontairement impacter le climat et changer la face du monde pour que la planète ne change pas.',
      },
      {
        type: 'medium',
        value: 'Prêts à écrire l’Histoire ?',
      },
    ],
  },
  {
    category: 'Notre stratégie pour le climat',
    text: 'Notre stratégie pour le climat',
    color: '#780016',
    bgColor: '#e3ff00',
    link: '/strategie-climat',
    src: '/Images/strategie-et-gouvernance/2-notre-strategie-pour-le-climat.JPG',
    content: [
      {
        type: 'medium',
       value: "En attendant qu’une technologie du futur arrive pour nous sauver, nous sommes convaincus qu’une ALLIANCE avec la Nature peut jouer un rôle décisif dans la lutte contre le dérèglement climatique.",
      },
      {
        type: 'subtitle',
        value: "Les Solutions fondées sur la Nature",
      },
      {
        type: 'default',
        value: "Les Solutions fondées sur la Nature sont définies par l'Union Internationale pour la Conservation de la Nature (UICN) comme : \"les actions visant à protéger, gérer de manière durable et restaurer des écosystèmes naturels ou modifiés pour relever directement les défis de société de manière efficace et adaptative, tout en assurant le bien-être humain et en produisant des bénéfices pour la biodiversité\".",
      },
      {
        type: 'default',
        value: "Elles sont plébiscitées par le GIEC et la communauté scientifique.",
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/elles-sont-plebiscitees.jpg',
      },
      {
        type: 'default',
        value: "Il n’y a que très récemment que l’homme a pu avoir une telle emprise sur la nature. Le problème est qu'aujourd'hui, il a perdu le contrôle. Il se peut que le Climat soit déjà dans un phénomène d’emballement. Si c’est le cas, l'humanité va s’apercevoir qu’elle n’est en réalité que bien peu de chose. C’est pourquoi elle a obligation de se reconnecter et se réconcilier avec la Nature pour espérer inverser la tendance. Avoir la capacité de le faire est une chance.",
      },
      {
        type: 'default',
        value: "Avec Let’s Catch Carbon, nous voulons agir grâce à ces Solutions fondées sur la Nature, tout en étant conscients qu’il faudra d’autres actions, dans d’autres domaines (les énergies renouvelables, la réduction des énergies fossiles, l’efficacité énergétique…) pour véritablement garantir la survie de notre espèce. Nous collaborerons avec les autres acteurs qui s’investissent pour sauver notre planète. Cette stratégie va nous permettre d’avoir un engagement concret face au climat, avec une réalité sur l’impact constatable.",

      },
      {
        type: 'default',
        value: "Nous n’avons rien contre la Technologie et nous ne refusons pas de nous en servir si nécessaire. Mais nous croyons à une technologie qui fait avec la Nature et non contre elle. Ce n'est pas une question morale ou éthique, avec d’un côté les utopistes et de l’autre les pragmatiques. Nous aurons simplement de meilleurs résultats en agissant avec la Nature.",

      },
      {
        type: 'subtitle',
        value: "Le choix d’une Solution fondée sur la Nature : l’Agroforesterie",

      },
      {
        type: 'default',
        value: "Si les arbres couvraient l’ensemble des espaces terrestres hors terres agricoles et agglomérations, nous pourrions absorber deux tiers des émissions de gaz à effet de serre produits chaque année (source : Thomas Crother - Ecole polytechnique de Zurich).",

      },
      {
        type: 'default',
        value: "Parmi les Solutions fondées sur la Nature, nous avons donc choisi les arbres, à travers le déploiement à large échelle de systèmes agricoles agroforestiers.",
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/parmi-les-solutions.png',
      },
      {
        type: 'default',
        value: "Les terres du monde entier sont de plus en plus convoitées et soumises à une concurrence féroce ; entre terres agricoles destinées à l'alimentation, terres destinées à la production d'énergie verte, terres destinées à la croissance exponentielle de l'urbanisme, aux voies de communication routière ou ferroviaire, etc. Nous devons aussi dans le même temps produire plus de nourriture et réduire les émissions de carbone. L'agroforesterie est un moyen essentiel de réconcilier ces deux objectifs : moins de terres productives et plus de production (source : Fred Stolle, directeur adjoint du programme Forêts du World Resources Institute).",

      },
      
      {
        type: 'default',
        value: "Aujourd’hui, nous disposons du savoir-faire et de l'espace nécessaires pour ajouter davantage d'arbres aux terres agricoles du monde entier (source : Drew Terasaki Hart, écologue et informaticien chez TNC, 1er auteur d’une étude publiée le 28 septembre 2023 dans Nature Climate Change).",

      },
      
      {
        type: 'default',
       value: "Et dans les régions où l'agriculture est un moteur majeur de déforestation, l'amélioration des moyens de subsistance des agriculteurs grâce aux pratiques agroforestières peut réduire, voire inverser la déforestation (source : CIRAD).",
       
      },
      
      {
        type: 'subtitle',
        value: 'Agroforesterie versus reforestation ?'
      },
      {
        type: 'default',
        value: "Pourquoi faire le choix de développer l'agroforesterie plutôt que de simplement planter des arbres ? Pourquoi pouvons-nous croire à ce modèle plutôt qu'à un autre ?",

      },
      {
        type: 'default',
        value: "Alors que les pays du monde entier s'efforcent de réduire leurs émissions de carbone, les scientifiques soulignent le potentiel inexploité de l'agroforesterie dans la lutte contre le changement climatique.",
      },
      {
        type: 'bordered',
        value: [
          {
            type: 'text',
          value: 'Encadré 1 : Arrêtons-nous deux minutes pour comprendre ce qu\’est l\’agroforesterie. L\’agroforesterie est une des techniques issues de l\'agroécologie. Elle se définit comme un mode de production associant la culture d\’arbres et d\’arbustes avec des cultures sous-jacentes ou intercalaires (cultures maraîchères, fourragères…) ; les arbres et arbustes peuvent être plantés en pourtour de parcelles (cloisonnement) ou en ligne préservant des couloirs de culture ; sur sol en pente, les lignes de plantation des arbres suivent les courbes de niveau ; la largeur conseillée des couloirs de culture est au minimum de 10 mètres. L\’agroforesterie favorise la biodiversité au sein des agroécosystèmes et améliore la productivité tout en limitant la dégradation des sols. L\'agroécologie respecte les écosystèmes naturels et intègre les dimensions économiques, sociales et politiques de la vie humaine. Elle conçoit une approche globale qui concilie agriculture, écologie, productivité, activité humaine et biodiversité. Le modèle permet la captation de carbone par les arbres et le sol. Il restaure la biodiversité dans le milieu. Le microclimat créé génère des précipitations bénéfiques au milieu. Le modèle agroforestier diffère d\’une production intensive en système de monoculture mécanisé et donc carboné. L\'agroforesterie préserve les terres sur le long terme en transformant les pratiques des cultivateurs. L\'agroforesterie possède des avantages indéniables par rapport à une simple reforestation.',
          },
          {
            type: 'image',
            value: '/Images/strategie-et-gouvernance/encadre-1.jpg',
          },
        ]
      },
      {
        type: 'bordered',
        value: [
          {
          type: 'text',
          value: "Encadré 2 : Focus sur le modèle agroforestier Let’s Catch Carbon. \nLe modèle agroforestier promu par Let’s Catch Carbon associe de nombreuses espèces vivrières pour l’alimentation des populations (tubercules, légumineuses…), des arbres utiles (fruitiers, médicinaux, bois pour la construction…) et des cultures de rente (caféiers). \nDans le cadre de la mise en place d’un modèle agroforestier, plusieurs composantes sont préalablement évaluées. Il s’agit de définir dans un premier temps les spéculations utiles pour le producteur ou la productrice et compatibles avec les éléments pédologiques, climatiques, contextuels du milieu où le modèle sera implanté. \nDans cet exemple, le modèle compatible avec la parcelle et répondant aux besoins de l’agriculteur est un modèle couplant les plants de caféiers, les bananiers et des arbres fertilitaires de couverture.\nChez Let’s Catch Carbon, à condition de respecter une certaine distance entre les grands arbres et les caféiers, on peut introduire entre 150 et 250 arbres dans 1 hectare de culture caféière.\nPour 1 hectare, l’on prévoit d’implanter 150 plants de bananiers dès la première année qui, grâce à leur croissance rapide, fourniront de l’ombrage aux jeunes plants de caféiers. 70 arbres de couverture de type Leucenae sont également mis en place dès la première année.\nA partir de l’année suivante, 1250 plants de caféiers sont mis en place. Des cultures vivrières sont mises en interligne dès la première année. Le manioc, qui possède également un avantage d’ombrage léger pour les plants de café, sera mis en place dès la première année. Une culture de niébé peut être mise en association afin de bénéficier des avantages connus des légumineuses."
          },
          {
            type: 'image',
            value: '/Images/strategie-et-gouvernance/encadre-2.jpg',
          },
          {
            type: 'array',
            headers: ['Étage Agroforestier', 'Espèces Principales', 'Fonctions et Bénéfices', 'Méthodes de Mesure et Suivi'],
            value: [
              ['Canopée hautes','Kapokier, Iroko, Acajou(espèces en danger), Fraké(Terminalia superba)', '- Réservoir debiodiversité \n- Fournit de l\'ombre\n- Mellifères pour la pollinisation\n- Restauration d\'espèces menacées', '- Photographie aérienne et drone pour suivi\n- Analyse de biodiversité par échantillonnage d\'insectes et petits rongeurs'],
              ['Étage Intermédiaire (10-12 m)', 'Leucaena leucocephala, Cassia siamea, Erythrophileum guineensis, Pterocarpus erinaceus (aussi médicinal)', '- Fertilisation naturelle du sol (évite engrais chimiques)\n- Activité génératrice de revenus grâce à la pollinisation et apiculture', '- Analyse des sols pour enrichissement bactérien et mycorhizien\n- Contrôle du nombre d\'espèces mellifères et suivi de'],
              ['Arbres Fruitiers et Épices', 'Vitex doniana (médicinal), Avocatier, Bananier, Spondia monbin, Bligia sapida, Citrus Limon, Xylopia aethiopica (poivre de Guinée)', '- Production de fruits pour alimentation et revenus\n- Effet médicinal de certaines espèces\n- Enrichit la biodiversité', '- Prélèvements de fruits pour évaluer la productivité\n- Comptage et suivi des espèces médicinales et épicées'],
              ['Étage Caféier', 'Caféiers', '- Produit de qualité avec renforcement de la filière\n- Culture sous ombrage pour une meilleure résilience climatique', '- Suivi de la qualité du café par des formations\n- Évaluation des rendements de café sous ombrage'],
              ['Plantes Vivrières et Maraîchères', 'Niébé (haricot blanc africain), piments, aubergine africaine, macabo, taro', '- Nourriture pour les populations locales\n- Génère des revenus supplémentaires\n- Aide à la rétention de l\'humidité'],
            ]
          },
          {
            type: 'array',
            headers: ['Impacts ', 'Description', 'Méthodes de Suivi et Mesure'],
            value: [
              ['Carbone', '- Séquestration progressive : 2 t/ha en année 1, jusqu\'à 10 t/ha en année 6', '- Mesure des diamètres des troncs tous les 2 ans pour estimer la séquestration\n- Drones pour surveiller la croissance forestière'],
              ['Biodiversité', '- Réintroduction et protection d\'espèces menacées\n- Augmentation de la flore et faune (insectes, rongeurs, etc.)', '- Suivi par échantillonnage d\'insectes, comptage des fleurs\n- Analyse des sols pour mesurer la flore bactérienne et les champignons'],
              ['Impact Social', '- Restauration du lien social et renforcement de la cohésion villageoise grâce au travail collaboratif\n- Soutien aux formations agricoles', '- Listes de présence, photos, documents de formation\n- Enregistrement des villages et hectares plantés dans chaque préfecture'],
              ['Certification Carbone', '- Intégration dans un mécanisme de certification carbone à 6 000 ha', '- Audit indépendant par cabinet de certification\n- Mesures du grossissement des arbres et quantification carbone'],
              ['Formation et Renforcement des Compétences', '- Amélioration des compétences en agroforesterie et apiculture\n- Formation pour récolter un café de qualité', '- Suivi des formations par témoignages et attestation\n- Suivi des prix et revenus tirés des productions après amélioration de la qualité']
            ]
          }
        ]
      },
      {
        type: 'ul',
        title: 'Les bénéfices :',
        value: [
          'Choisir plusieurs espèces possibles afin de diversifier les essences arbustives ; le choix des espèces contribue à la fois à générer des richesses pour l\'agriculteur mais aussi à nourrir sa famille ou encore à la soigner (plantes médicinales).',
          'Développer des îlots de biodiversité du fait de la diversification des espèces et des essences présentes sur une même parcelle (augmentation de la matière organique, augmentation de la vie microbienne…).',
          'Ralentir le réchauffement climatique : l\'ombrage et la photosynthèse contribuent à faire baisser la température de l\'air, éviter les variations trop fortes de température et faire revenir l’humidité dans l’air et les sols.',
          'Améliorer les sols et la disponibilité de la ressource en eau, grâce à la diversité des systèmes racinaires entre plantes annuelles et espèces arbustives.',
          'Renforcer la sécurité alimentaire des familles qui peuvent compter sur des cultures vivrières au sein de leur parcelle agroforestière.',
        ]
      },
      {
        type: 'ul',
        title: 'Autres avantages :',
        value: [
          'Créer un environnement (bocage) favorable aux cultures (humidité, ombrage, diversité).',
          'Recycler les éléments minéraux lessivés.',
          'Disposer d’un apport en biomasse (masse totale d’êtres vivants présents dans un milieu donné) valorisable sur l’exploitation.',
          'Créer des habitats écologiques propices au maintien des équilibres agroécologiques.',
          'Limiter les dégâts dus au vent et/ou provoqués par le pâturage des animaux.',
        ]
      },
      {
        type: 'medium',
        value: "« Qui plante des arbres ne mourra pas de faim » - Tony Rinaudo, agronome australien"
      },
      {
        type: 'subtitle',
        value: 'Pourquoi le choix du café ?'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/pourquoi-le-choix-du-cafe.jpg',
      },
      {
        type: 'ol',
        value: [
          'Le café est un produit agricole, et pas n’importe lequel : c’est la seconde matière première la plus échangée dans le monde derrière le pétrole1. Chaque jour, 4 milliards de tasses de café sont consommées soit 40 millions de tonnes de biomasse.',
          'Le caféier pousse dans la ceinture subtropicale de la planète dans des zones où se concentrent des réserves de biodiversité considérables et essentielles pour la survie de notre planète.',
          'Le café est présent dans notre quotidien. “Allons prendre un café” évoque l’idée de passer un moment ensemble, d’échanger, de partager, de discuter. Le geste de boire un café est pratiqué des milliards de fois chaque jour dans le monde. Il constitue donc une habitude qui permettrait de mobiliser des millions de personnes dans une communauté engagée pour la préservation de notre planète.',
        ]
      },
      { 
        type: 'link',
        value: 'https://www.coffee-webstore.com/blog/situation-pays-producteurs-cafe-n54'
      },
      { 
        type: 'bordered',
        value: [
          {
            type: 'text',
            value: 'Encadré 3 : Arrêtons-nous deux minutes pour comprendre ce que ça change de faire pousser le café sous ombrage !\nD’une part, le café est un produit qui pousse originellement en forêt. \nD’autre part, le marché du café monte actuellement en gamme. Or le café est l’un des produits agricoles qui peut pousser sous ombrage, à la main, de façon décarbonée, avec un haut niveau de qualité.\nIl peut justement permettre d’utiliser la forêt existante et reforester massivement !\nSous ombrage, la maturation se fait lentement, le sucre vient dans le fruit, le café développe un profil organoleptique rare qui correspond à l’évolution du marché. \nEn associant des arbres d’ombrage utiles aux populations locales, on permet à la fois de :\n- fertiliser et restaurer les sols, \n- contribuer à la génération de revenus complémentaires pour les producteurs,  \n- garantir une amélioration de la biodiversité dans ces écosystèmes. \nVoilà pourquoi le café est une formidable opportunité. L’industrie du café a non seulement  le potentiel de contribuer efficacement à la baisse de l’empreinte carbone de la planète,  mais elle permet aussi à la société de participer à la baisse des émissions carbone.'
          },
          {
            type: 'image',
            value: '/Images/strategie-et-gouvernance/encadre-3.jpg',
          },
        ]
      },
      { 
        type: 'default',
        value: 'De plus le marché de ce café poussant sous ombrage est en pleine expansion. De très haute qualité, il est de plus en plus prisé par les consommateurs et les entreprises responsables ! Tout en assurant de plus larges débouchés aux producteurs, ils peuvent et doivent devenir les vecteurs d’un changement de pratiques agroforestières.'
      },
      { 
        type: 'medium',
        value: 'Chez Let’s Catch Carbon, nous avons souhaité nous focaliser, dans un premier temps, sur ce produit ô combien important et présent dans des zones stratégiques pour la préservation de notre planète. \nNous sommes convaincus que i) la puissance des volumes de l’industrie du café, couplée à, ii) la possibilité de transition massive vers un mode de culture agroforestier, doit être une des équations de résolution du défi climatique ; et ce, grâce à la transition des pratiques agricoles à l’échelle mondiale.'
      },
      { 
        type: 'medium',
        value: 'Dans notre vision, l\'industrie du café est une passerelle pour transformer l\'essai afin  de dupliquer ensuite le modèle à d\'autres produits agricoles. Notre idée est celle d’un micro-geste qui, par sa récurrence, se transforme en un outil, une arme, pour mettre en place le changement nécessaire.'
      },
      { 
        type: 'bordered',
        value: [
          {
            type: 'text',
            value: 'Encadré 4 : Que répondre à ceux qui pensent que la vraie solution Climat, c’est d’arrêter de consommer du café ?\nLe café est un produit agricole et nous savons que l\'agriculture est un facteur d\'accélération de la déforestation lorsqu’elle est pratiquée de façon déraisonnée, et tout particulièrement dans les zones tropicales. Le caféier a donc un impact sur les forêts tropicales, qui sont à la fois puits de carbone et réservoirs de biodiversité planétaire.\nPour autant, nous ne faisons pas partie de ceux qui pensent qu’il faut tout stopper pour inverser la tendance, mais qu’il faut avant tout transformer l’existant pour l’adapter au défi Climat. \nLe café, s’il est cultivé d’une façon résiliente et durable, peut avoir un impact régénératif et protecteur du vivant. \nDe plus, cesser la production de café aurait des conséquences désastreuses sur l\'économie mondiale, aggravant ainsi la pauvreté et la faim, étant donné que cette industrie fournit des emplois à 125 millions de personnes qui en dépendent pour leur survie.*\n*Source : Guide du café, Quatrième édition - publié par le Centre du commerce international & Alliances for Action'
          },
          {
            type: 'image',
            value: '/Images/strategie-et-gouvernance/encadre-4.jpg',
          },
        ]
      },
      { 
        type: 'subtitle',
        value: 'Quel périmètre d’action et quelles zones géographiques à prioriser ?'
      },
      { 
        type: 'default',
        value: 'Nous avons les compétences techniques et l’ingénierie de projet nécessaires à tout type de projet agroforestier visant à allier séquestration de carbone, protection environnementale et développement économique et social des acteurs exploitants des parcelles.'
      },
      { 
        type: 'default',
        value: 'Cependant, nous intervenons prioritairement dans les zones de production caféière à fort potentiel en termes de surfaces de reforestation : la ceinture subtropicale planétaire.'
      },
      { 
        type: 'default',
        value: 'Nous privilégions les zones bénéficiant du plus grand potentiel d’atténuation du changement climatique (croisement de plusieurs critères systémiques) et de préservation de forêts tropicales primaires millénaires.'
      },
      { 
        type: 'default',
        value: 'Dans une vision de réplicabilité de notre modèle, nous agissons dans les zones tropicales qui, si elles ne couvrent que 6% de la planète, protègent 60% de notre biodiversité planétaire.'
      },
      { 
        type: 'default',
        value: 'Notre action prend son point de départ en Afrique pour plusieurs raisons :'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/notre-action-en-afrique.jpg',
      },
      { 
        type: 'ol',
        value: [
          'Parce que c’est une zone stratégique pour le climat et la biodiversité.\nNous agissons dans le Bassin du Congo, devenu en 2022 le premier poumon vert de la planète devant l’Amazonie. Selon une étude scientifique publiée dans la revue Nature, la forêt amazonienne émet aujourd’hui plus de CO2 qu’elle n’en séquestre. Le Bassin du Congo ne doit pas subir le même sort, et pour cela, nous devons agir pour le préserver en tant que puits de carbone et sanctuaire stratégique pour lutter contre le réchauffement climatique et pour protéger la biodiversité de la planète.',
          'Parce que c’est la terre d’origine du café.',
          'Parce que l’Afrique pratique une agriculture familiale et que les populations peuvent plus facilement entendre un discours axé sur les pratiques agroforestières durables.',
          'Parce que nous travaillons pour le moment en Afrique francophone, ce qui facilite le démarrage du programme.',
        ]
      },
      { 
        type: 'default',
        value: 'Let’s Catch Carbon souhaite étendre ces zones géographiques vers l’Europe, l’Amérique du Nord, l’Asie… en fonction des opportunités et des capacités d’action de ses équipes.'
      },
      { 
        type: 'default',
        value: 'Le choix des zones dépend de plusieurs facteurs comme l’état de dégradation du couvert forestier existant, les besoins des populations, la disponibilité des terres, la présence d’un partenaire local engagé, la volonté des États…'
      },
      { 
        type: 'default',
        value: 'Nos premiers défis sont la création de zones agroforestières de 12 000 hectares au Cameroun et de 40 000 hectares au Togo.'
      },
      
    ]
  },
  {
    category: 'Notre objectif avec vous ?',
    color: '#4f2273',
    bgColor: '#e9c0ea',
    text: 'Notre objectif avec vous ?',
    link: '/objectif-avec-vous',
    src: '/Images/strategie-et-gouvernance/3-notre-objectif-avec-vous.jpg',
    content: [
      {
        type: 'medium',
        value: "Prendre part à notre Épopée Climatique, c’est croire que le changement est possible, c’est s’investir dans ce changement, c’est ajouter sa pierre à l’édifice afin d’avoir le sentiment d’un accomplissement pour soi, sa famille, ses proches, sa planète !"
      },
      {
        type: 'default',
        value: "Car agir, c'est prendre part à un défi universel, c’est s'inscrire dans le monde et se synchroniser avec celui-ci, exister, compter, se rendre utile, montrer que l'on contient bien quelque chose de précieux qui fait aussi de soi un être qui mérite de recevoir.",
      },
      {
        type: 'default',
        value: "Nous souhaitons qu’en vous engageant avec nous, vous - citoyens du Monde, entreprises, associations, fondations… - ayez le sentiment de trouver un espace de solutions pour agir concrètement au regard de l'urgence du dérèglement climatique et au besoin qu’ont les acteurs économiques d’investir dans la lutte contre leurs émissions de CO2.",
      },
      {
        type: 'bordered',
        value: "Nous redonnons à ceux qui le souhaitent le pouvoir de reprendre la main sur le destin de l’humanité. Pour cela il faudra une mobilisation massive et avoir une croissance exponentielle. L’enjeu de notre génération dans la lutte contre la préservation de notre planète est si grand qu’il va falloir un engagement massif et collectif. Vous vous apprêtez à prendre un engagement à vie pour préserver cet équilibre délicat, qui rend la vie sur Terre, telle que nous la connaissons aujourd'hui, possible. Vous allez vous engager pour la faune, la flore, les océans, pour un monde immense. Vous allez retrouver le contact, un regard et des émotions insoupçonnées. Vous en ressortirez changé au plus profond de votre être. En venant nous rejoindre, vous entrez dans une ère nouvelle de l'humanité. En tant que première génération, pionnière de la lutte climatique à grande échelle, faire que nos actions et notre engagement deviennent le récit héroïque des générations futures.",
      },
      {
        type: 'default',
        value: "La contribution financière volontaire est symbolique mais c’est bien par le nombre que nous atteindrons notre objectif.",
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/contribution-financiere.jpg'
      },
      {
        type: 'default',
        value: "À l'instar du film \"Un Monde meilleur\", nous comptons sur votre engagement sur 3 actions essentielles:",
      },
      {
        type: 'ul',
        value: [
          {
            type: 'concat',
            value: [
              {
                type: 'text',
                value: 'Proposer à 3 personnes amatrices de café de votre entourage (amis.es, famille, proches, collègues de travail…) de commander du café sur '
              },
              {
                type: 'link',
                value: 'www.chacunsoncafe.fr, ',
                href: 'https://www.chacunsoncafe.fr'
              },
              {
                type: 'text',
                value: 'au moins une fois, pour soutenir financièrement le programme via le modèle économique One Cup = One Cent.'
              }
            ]
          },
          "Convaincre ces 3 mêmes personnes d’identifier à leur tour 3 personnes de leur entourage et faire de même,",
          "Poussez la solution café au bureau à votre Boss, votre DRH ou Office Manager !",
        ]
      },
      {
        type: 'link',
        value: 'On vous a même préparé des messages tous prêts à envoyer ici. ',
        href: 'https://www.notion.so/Rejoignez-la-coop-rative-de-l-action-des-Carbon-Killers-1ca5dfff9e23801f9050e4285f48168e?showMoveTo=true&saveParent=true'
      },
      {
        type: 'medium',
        value: '3 petites actions pour réussir un immense défi !!! Passez le relai…'
      },
      {
        type: 'default',
        strongs: ['défi'],
        value: 'Notre premier défi est de planter plus de 100 000 hectares de terres en Afrique selon notre approche agroforestière. A l’échelle d’une génération (30 ans), ce sont 40 millions de tonnes de CO2 (prévisions basses) qui pourront être stockées sur ces espaces agroforestiers. Le calcul sera effectué de façon transparente et certifié par un organisme agréé.'
      },
      {
        type: 'default',
        value: "Notre objectif sera de multiplier ces défis partout sur la planète et sur des surfaces conséquentes.",
      },
    ]
  },
  {
    category: 'Qui doit participer pour que l’approche fonctionne ?',
    color: '#1d232f',
    bgColor: '#42e661',
    text: 'Qui doit participer pour que l’approche fonctionne ?',
    link: '/participation-approche',
    src: '/Images/strategie-et-gouvernance/4-qui-doit-participer.JPG',
    content: [
      {
        type: 'default',
        value: "Pour réussir ces défis, les acteurs sont multiples et tous ont un rôle important à jouer."
      },
      {
        type: 'default',
        value: "Nous pensons que l'intelligence collective et multi-acteurs est la clé du succès dans la lutte contre le changement climatique. Car, il s’agit d’un défi complexe, interconnecté et mondial.",
      },
      {
        type: 'default',
        value: "S’y attaquer implique une interaction multidimensionnelle entre des facteurs environnementaux, économiques, sociaux et politiques, ainsi qu'un investissement considérable en matière de financement, de recherche et de développement. L’approche collective permet de mobiliser une diversité de compétences, de perspectives et de ressources pour mieux comprendre et traiter cette complexité par une action coordonnée à l'échelle internationale.",
      },
      {
        type: 'default',
        value: "L'intelligence collective est aussi un moyen de renforcer la résilience des communautés face aux impacts du changement climatique. En incluant les connaissances locales, en favorisant la participation communautaire et en soutenant le développement de solutions adaptées aux spécificités régionales, on renforce la capacité des communautés à s'adapter et à atténuer les effets du changement climatique."
      },
      {
        type: 'bordered',
        value: [
          'Encadré 5 : Pourquoi un travail avec les communautés bénéficiaires est crucial ?',
          {
            type: 'image',
            value: '/Images/strategie-et-gouvernance/encadre-5.jpg'
          },
          'Transformer les pratiques agricoles ne se fait pas en un jour et pour deux très bonnes raisons :',
          '1/ Les fermiers ont leurs habitudes et leurs croyances. Ils voient les produits phytosanitaires comme le moyen d’avoir de meilleurs rendements et donc de gagner plus d’argent. Il faut donc les convaincre de modifier leur approche, leur démontrer les inconvénients de ce système et promouvoir les avantages de l’Agroécologie.',
          '2/ La nature a son propre rythme. Un caféier met 3 ans avant de produire du café. Un arbre met des années à atteindre la maturité nécessaire pour produire en quantité ou générer des revenus issus de la finance carbone.',
          'Notre méthode de promotion de l’Agroforesterie en 4 temps : Tester, Prouver, Partager, Adopter.',
          ' - Tester des modèles expérimentaux avec des fermes pilotes.',
          ' - Prouver leur efficacité en termes d’avantages tangibles pour le producteur : plus d’autonomie alimentaire, plus de revenu, moins de pénibilité aux champs.',
          ' - Partager cette expérience avec la communauté, inviter les communautés voisines (villages) puis le niveau régional.',
          ' - Adopter et généraliser ces pratiques au sein des exploitations familiales de la coopérative et du milieu.',
        ]
      },
      {
        type: 'default',
        value: "C’est le mode de fonctionnement que nous défendons car il a déjà fait ses preuves."
      },
      {
        type: 'default',
        value: "Et maintenant, cela commence en premier lieu par VOUS qui vous engagez dans ce défi planétaire. Grâce à votre contribution symbolique, et surtout grâce à votre engagement à persuader et rassembler trois personnes de votre entourage à rejoindre notre fabuleux mouvement, vous jouerez un rôle crucial dans l'établissement d'un mouvement collectif à l'échelle planétaire."
      },
      {
        type: 'subtitle',
        value: 'Les acteurs impliqués'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/acteurs-impliques.jpg'
      },
      {
        type: 'default',
        value: 'Let’s Catch Carbon : Let’s Catch Carbon est le chef d’orchestre de l’Action Globale. Let’s Catch Carbon (LCC) est une association française loi 1901 sans but lucratif. Elle a été créée afin d’encadrer, de coordonner et superviser l’ensemble des défis menés. Let\'s Catch Carbon a pour objectif la lutte contre les changements climatiques et la préservation de la biodiversité.'
      },
      {
        type: 'default',
        value: 'Chacun Son Café et ses partenaires représentent la filière café et la garantie d’un marché pour les cultivateurs des zones d’action. Chacun Son Café est une entreprise (statut SAS) créée en 2005. Elle fournit des solutions café aux entreprises et aux particuliers. Chacun Son Café joue un rôle d’appui aux financements (en propre ou par l’intermédiaire de ses clients) pour investir et participer aux projets développés avec les populations.'
      },
      {
        type: 'default',
        value: 'Entreprise à impact, Chacun Son Café est certifiée B CORP. Elle fait également le lien avec des importateurs et des torréfacteurs afin de garantir un débouché permanent pour le café des producteurs et écouler des cafés de qualité vers les consommateurs. Elle effectue un plaidoyer pour un engagement de paiement du café à un prix juste et équitable.'
      },
      {
        type: 'default',
        value: 'Les partenaires locaux sont des associations, des coopératives de producteurs, des groupements agricoles, des propriétaires terriens… enregistrés localement. Ils sont profondément engagés dans le processus des actions menées sur place et jouent le rôle de partenaire opérationnel. Chaque partenaire signe une convention avec Let’s Catch Carbon et a un devoir de transparence sur l’utilisation des sommes engagées dans les actions.'
      },
      {
        type: 'default',
        value: 'Les États : Par l\'intermédiaire du ministère compétent de chaque État, un accord est conclu avec Let’s Catch Carbon pour préciser les rôles et responsabilités respectifs des parties impliquées. Il permet d’obtenir l’aval du gouvernement du pays où nous intervenons. Il s’agit le plus souvent du Ministère de l’Agriculture ou du Ministère de l’Environnement ou d’une entité affiliée.'
      },
      {
        type: 'default',
        value: 'Les partenaires techniques : Il s’agit d’agences ou d’instituts de recherche, de conseils agricoles ou d’unités environnementales qui sont présents dans les pays où nous agissons. Cette communauté scientifique a un rôle majeur dans la validation de modèles techniques et dans la mobilisation des producteurs locaux.'
      },
      {
        type: 'default',
        value: 'Les partenaires financiers : Ce sont des bailleurs de fonds qui placent leur confiance et leurs moyens dans l’approche globale développée. Ils permettent à nos actions de changer d’échelle et d’avoir un impact réel sur le Climat.'
      },
      {
        type: 'subtitle',
        value: 'Comment cette approche est-elle coordonnée ?'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/approche-coordonnee.jpg'
      },
      {
        type: 'default',
        value: 'Cette approche repose nécessairement sur un fonctionnement tripartite, et nous l’avons construite en ce sens : '
      },
      {
        type: 'ol',
        value: [
          'une structure à but non lucratif pour diagnostiquer, élaborer, superviser le programme et garantir l’allocation et la transparence des fonds ;',
          'une structure commerciale de la filière café (ou autre produit agricole concerné) pour assurer la promotion et l’assurance des débouchés ; ',
          'un ou plusieurs partenaires locaux pour assurer le développement du programme localement et servir les populations à la base.',
        ]
      },
      {
        type: 'default',
        value: 'Chacun Son Café et ses partenaires font le lien direct avec le secteur privé en :'
      },
      {
        type: 'ul',
        value: [
          'Le sollicitant pour financer et appuyer les actions menées.',
          'Proposant des solutions café pour les entreprises.',
          'Fédérant une vraie communauté de contributeurs “changemakers” via des consultations et communications communautaires régulières.',
          'Garantissant un prix de café juste et équitable pour les producteurs.',
        ]
      },
      {
        type: 'default',
        value: 'Let’s Catch Carbon a pour responsabilité :'
      },
      {
        type: 'ul',
        value: [
          'La coordination des actions sur le terrain en collaboration avec les acteurs locaux et les partenaires techniques et financiers.',
          'Les relations avec les autorités des pays d’action.',
          'Les	partenariats	avec	les acteurs du secteur public (bailleurs de fonds, fondations…).',
        ]
      },
      {
        type: 'default',
        value: 'Un comité de pilotage assure la coordination entre les deux structures, avec des réunions régulières et un reporting mensuel. Un suivi régulier des actions menées est réalisé lors de missions de terrain conjointes.'
      },
    ]
  },
  {
    category: 'Comment ça marche ?',
    color: '#42e661',
    bgColor: '#1d232f',
    text: 'Comment ça marche ?',
    link: '/comment-ca-marche',
    src: '/Images/strategie-et-gouvernance/5-comment-ça-marche.png',
    content: [
      {
        type: 'default',
        value: 'Parce que notre modèle économique s\'appuie sur la culture du café, nous faisons du café le premier levier de financement. La transformation économique des régions est basée sur l’agriculture, ce qui est déjà l’activité principale. Nous nous appuyons sur cette force déjà existante. C’est le socle de notre stratégie et du modèle économique que nous prônons.'
      },
      {
        type: 'medium',
        value: 'Nous avons défini une approche systémique et multiforme pour le financement de nos actions. Plusieurs mécanismes existent et contribuent à notre approche globale.'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/mecanismes-financement.jpg'
      },
      {
        type: 'default',
        value: 'Un premier mécanisme lié à l’achat de café. L’achat d’un café de qualité au bon tarif et l’assurance de débouchés pérennes permettent conjointement de mieux rémunérer les producteurs. Cela les rallie à la cause du modèle agroforestier et convainc à large échelle d’autres communautés de producteurs. L’achat de café par les acteurs de la filière sécurise l’accès au marché pour nos producteurs accompagnés.'
      },
      {
        type: 'default',
        value: 'Un second mécanisme alimenté par le système “One Cup, One Cent”. Ce système permet, pour chaque tasse de café vendue par Chacun Son Café à ses clients, particuliers ou entreprises, qu’1 centime d’euro abonde un fond pour les actions menées sur le terrain. En achetant du café par l’intermédiaire de Chacun Son Café, vous contribuez au mécanisme “One Cup One Cent” et alimentez le fond d\'amorçage. Ce mécanisme permet de fédérer notre communauté autour d’un geste simple, quotidien et utile pour le Climat.'
      },
      {
        type: 'bordered',
        value: [
          'Encadré 6 : One Cup, One Cent',
          {
            type: 'image',
            value: '/Images/strategie-et-gouvernance/one-cup-one-cent.jpg'
          },
          'One Cup, One Cent est un mécanisme de financement basé sur la redistribution. Il a été théorisé par Marc Gusils, Dirigeant de Chacun Son Café, en 2015 dans le cadre de la lutte contre le réchauffement climatique par la culture du café.',
          'Pour chaque tasse consommée, 1 centime abonde un fonds d’amorçage.',
          'Marc Gusils s’est inspiré de la taxe Taubin et de la théorie du colibri : si on accède aux 4 milliards de tasses de café consommées chaque jour dans le monde, on rassemble plus de 10 milliards d’euros par an pour financer cette transition ! Notre objectif, accéder à toujours plus de tasses consommées, et ouvrir ce mécanisme de financement à d’autres acteurs du marché pour augmenter les fonds collectés et accélérer l’approche.',
          'En 2021, ce système a été labellisé B Corporation.',
          'Ce modèle est disponible en Open Source : à l’image du collectif 1% pour la planète, nous lançons le collectif One Cup, One Cent pour rassembler les torréfacteurs, les entreprises du secteur CHR (café / hôtellerie / restauration), coworkings et tout autre acteur distribuant ou servant du café au grand public. Il présente l’avantage d’impliquer le consommateur qui peut comprendre à quelle hauteur il contribue.',
          'A leur tour, les acteurs ayant adopté le mécanisme One Cup, One Cent peuvent se joindre à notre Epopée climatique. Ils contribuent ainsi à l’alimentation du fond d’appui et d’amorçage de nos Actions sur le terrain.',
        ]
      },
      {
        type: 'default',
        value: 'Le troisième mécanisme reposant sur votre contribution, soit par l’apport symbolique d’1 euro, soit par l’adhésion à notre association. Il permet d’obtenir une mise de fonds substantielle et d’alimenter d’une autre façon le fond d’amorçage du programme global. Chaque euro versé sert directement les actions menées sur le terrain.'
      },
      {
        type: 'medium',
        value: 'Ces différents niveaux de contribution forment un socle appelé “fonds d’amorçage” qui permet de donner au projet consistance et légitimité via l\'ingénierie (notre rôle unique dans le monde du café) pour la structuration de projets avec les populations locales.'
      },
      {
        type: 'default',
        value: 'Un quatrième mécanisme vient également compléter cette palette d’appui financier aux actions menées sur le terrain. Il s’agit de la rétribution post récolte. Pour les cafés possédant des notes élevées (café de spécialité - référentiel SCA) et seulement dans les zones de production de café arabica, une bonification est accordée et reversée aux producteurs. Ce fond additionnel est réparti à 80% pour les producteurs et à 20% pour abonder une caisse de solidarité. Cette caisse alimente le financement de projets sociaux, économiques ou environnementaux (construction d’école, de puits, unité de fabrication de bio-intrants, projets pour les femmes…).'
      },
      {
        type: 'subtitle',
        value: 'Pourquoi un fonds d\'amorçage comme effet de levier ?'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/fonds-amorcage.jpg'
      },
      {
        type: 'default',
        value: 'Les jeunes des pays de la ceinture subtropicale ont aussi besoin de fonds d\'amorçage à l’instar des jeunes en occident qui bénéficient du soutien de leurs proches (love money) pour démarrer.'
      },
      {
        type: 'default',
        value: 'Tout entrepreneur sait qu\'il faut amorcer les choses, commencer, et qu\'il s\'agit bien souvent de la première difficulté rencontrée : avoir la petite mise de fonds qui permet de faire ses premiers pas pour démontrer la viabilité de son idée, de son produit, son invention, de son modèle économique, de l\'attrait commercial qu\'il génère.'
      },
      {
        type: 'default',
        value: 'Et bien c\'est exactement le rôle que joue la vente du café et le fond d’amorçage : il permet d\'apporter les premiers fonds par lesquels tout peut alors commencer. En achetant / consommant le café sur le site de Chacun Son Café, vous jouez le rôle de Business Angel, vous permettez que tout commence.'
      },
      {
        type: 'default',
        value: 'En résumé, ce fond d\'amorçage est généré de 3 façons :'
      },
      {
        type: 'ul',
        value: [
          'par l’achat du café aux producteurs locaux à un prix équitable,',
          'par un appui direct en adhérant à l’association ou par une contribution financière,',
          'indirectement en consommant du café de Chacun Son Café qui s\'engage à reverser un centime d\'euro sur chaque tasse de café vendue.',
        ]
      },
      {
        type: 'medium',
        value: 'Pourquoi ce fonds d\'amorçage est crucial ?'
      },
      {
        type: 'medium',
        value: 'Car il rend les projets d’atténuation du réchauffement climatique visibles, identifiables et légitimes. '
      },
      {
        type: 'default',
        value: 'Le fonds d’amorçage permet d’aller là où personne n’est encore allé et où il est stratégique pour le Climat d’agir. Ce fonds enclenche une dynamique auprès des partenaires et bailleurs de fonds. Il permet de les rassurer et de les encourager à flécher leurs appuis financiers vers nos actions. Le fonds d’amorçage représente une passerelle pour convaincre les bailleurs de fonds internationaux de soutenir nos actions vers quelque chose d’impactant.'
      },
      {
        type: 'default',
        value: 'Nous avons des règles strictes et tracées sur l’attribution de ces fonds afin de rassurer les contributeurs. Chaque envoi de fonds sur le terrain est l’occasion d’un avancement explicité, audité, prouvé, perçu par l’ensemble des parties prenantes. A chaque mise de fond, les choses doivent avancer. Et l’ensemble de la communauté doit percevoir cet avancement. L’argent du fond d’amorçage investi doit servir de levier pour lever des fonds plus importants afin de pouvoir changer d\'échelle de développement : duplication à d’autres produits et/ou à d’autres zones géographiques.'
      },
      {
        type: 'bordered',
        value: [
          'Encadré 7 : Le problème d’allocation des aides internationales',
          {
            type: 'image',
            value: '/Images/strategie-et-gouvernance/probleme-allocation-aides-internationales.jpg'
          },
          'L’agriculture est un secteur clé de l’économie. A ce titre, elle reçoit des subventions gouvernementales. ',
          'Premier problème : ces subventions financent la perduration d’une agriculture incompatible avec les objectifs de développement durable et climatiques.',
          '520 milliards* de dollars américains de subventions sont consacrés chaque année au secteur agricole, subventionnant des activités non durables qui entraînent l’érosion des sols, la pollution de l’eau, la déforestation et bien plus encore. 28,5 milliards de dollars sont dédiés spécifiquement à l’adaptation et l’atténuation climatique du secteur agricole, mais l’allocation de ces financements aux petites fermes familiales a chuté de 44% entre 2018 et 2020. Elles ne bénéficient plus que de 5,53 milliards de dollars soit 0,8% des financements climatiques, tous secteurs confondus. Cela reflète la baisse de 20% du financement climatique destiné à l’agriculture et la foresterie. Or, ces financements devraient être 7 fois plus importants afin d’atteindre les objectifs de transition**. Un pari risqué alors que l’agriculture est stratégique pour de nombreux pays dont les structures agricoles sont le ciment économique ; des pays souvent les plus vulnérables à la crise climatique. Les pays en développement ont perdu 8 points de PIB en 2022*** à cause du dérèglement climatique.',
          'Ces aides pourraient être fléchées vers l’agriculture familiale, constituée de petites exploitations inférieures à 2 hectares qui produisent 35% de l’alimentation mondiale****. Dans un contexte de démographie exponentielle, cette agriculture est devenue stratégique pour nourrir plus de 9 milliards d’êtres humains en 2050. C’est également une agriculture décarbonée, ne nécessitant l’usage que d’une petite mécanisation.',
          '',
          'Deuxième problème : à date, ces exploitations sont atomisées, souvent avec des populations qui ne savent ni lire, ni écrire et qui ne peuvent se rendre éligible aux programmes d’aides internationaux.',
          {
            type: 'link',
            value: '* Source : Étude publiée en 2022 par The B Team, une initiative à but non lucratif formée par des dirigeants d’entreprises afin de développer un plan B pour une action concertée et positive.',
            href: 'https://bteam.org/our-thinking/news/study-governments-are-subsidizing-the-destruction-of-nature-to-the-tune-of-1-8-trillion-each-year',
          },
          {
            type: 'link',
            value: '**Source : rapport de la Climate Policy Initiative 2023, publié pour le COP28',
            href: 'https://www.climatepolicyinitiative.org/publication/the-climate-finance-gap-for-small-scale-agrifood-systems/',
          },
          {
            type: 'link',
            value: '***Source : Novethic',
            href: 'https://www.novethic.fr/actualite/economie/isr-rse/en-asie-du-sud-est-et-en-afrique-australe-les-pertes-economiques-liees-au-changement-climatique-depassent-deja-10-de-leur-pib-151922.html',
          }
        ]
      },
      {
        type: 'bordered',
        value: [
          'Encadré 8 : L’Agriculture familiale pour nourrir 9 milliards d’êtres humains en 2050',
          {
            type: 'image',
            value: '/Images/strategie-et-gouvernance/agriculture-familiale.jpg',
            style: {maxHeight: '700px', objectPosition: 'center 28%'}
          },
          'Les agricultures familiales représentent 90%* des exploitations dans le monde et produisent 35% de l’alimentation mondiale. ',
          'Nous voulons  supporter l’agriculture familiale en assurant une plus grande technicité en lien avec l’Agroécologie. Cela permet de garantir des rendements élevés, tout en réduisant la pénibilité du travail. C’est également une agriculture décarbonée, nécessitant seulement l’usage  d’une petite mécanisation.',
          'Par ailleurs, contrairement aux idées reçues, l’agriculture familiale est très performante : avec seulement 17% des surfaces agricoles terrestres, elle permet de nourrir 50% de la population mondiale**. ',
          'Elle est aussi une solution à l’autonomie alimentaire locale dans des zones à forte croissance démographique par l’introduction de cultures vivrières dans les interlignes des plantations de café.',
          'Au-delà du contexte actuel, on s’achemine vers une planète peuplée par 9 milliards d’êtres humains, dont les pays situés en zones tropicales seront les premiers à souffrir du changement climatique. ',
          'Y préserver les forêts à travers une agriculture nourricière répond au double-défi : nourrir et protéger.',
          '',
          {
            type: 'link',
            value: '* Source : France Diplomatie',
            href: 'https://onu-rome.delegfrance.org/Agriculture-familiale-17#:~:text=Les%20agricultures%20familiales%20repr%C3%A9sentent%2090,500%20millions%20de%20fermes%20familiales .'
          },
          {
            type: 'link',
            value: '**Source : Grain.org',
            href: 'https://grain.org/fr/article/4960-affames-de-terres-les-petits-producteurs-nourrissent-le-monde-avec- moins-d-un-quart-de-l-ensemble-des-terres-agricoles'
          },
        ]
      },
      {
        type: 'subtitle',
        value: 'Quelle étape après le fonds d’amorçage ?'
      },
      {
        type: 'default',
        value: 'La création d’un fonds d’amorçage fiable et conséquent permet de rendre le programme suffisamment mature pour procéder à une nouvelle étape : la recherche de financement auprès des entreprises et partenaires institutionnels. Cette étape intervient après la phase de démarrage d’un projet, lorsqu’il est éligible au financement.'
      },
      {
        type: 'ul',
        value: [
          'Les fondations d’entreprises et bailleurs de fonds sont sollicités pour le financement de projets économiques, sociaux et environnementaux.',
          'Le portage des dossiers auprès des grands bailleurs de fonds internationaux (ONU, UE, AFD, banques de développement) est organisé pour la réalisation de projets de grande envergure afin d’être réellement impactant : être un véritable changemaker.',
          'Des opérations de crowdfunding sont organisées pour financer telle ou telle action spécifique.',
        ]
      },
      {
        type: 'default',
        value: 'Les subventions ainsi obtenues permettent de couvrir les charges opérationnelles de terrain: mise en place de pépinières, sessions de formation, paiement des ressources humaines, acquisition de matériels, coordination… mais aussi de changer d’échelle. Le fond d’amorçage démarre les actions de terrain et les subventions / financements obtenus auprès des bailleurs de fonds (institutionnels, privés…) amplifient le développement du / des programmes menés.'
      },
      {
        type: 'default',
        value: 'Parallèlement, l’approche globale doit permettre la génération de crédits Carbone qui sont valorisés auprès des opérateurs de la Finance Carbone (VERRA). Cette génération de crédits s’opère à partir de la 6ème année et s’étend sur une durée de 40 ans. Elle permet de rendre le modèle économiquement viable et d’envisager la réplication à d’autres zones du Monde ou à d’autres spéculations agricoles. Les crédits octroyés sont réinvestis dans les actions Climat de Chacun Son Café et Let’s Catch Carbon. Afin de s’assurer de la véracité de ces crédits Carbone, des cabinets / experts sont contractés. Un système de monitoring strict et transparent est mis en place.'
      },
      {
        type: 'subtitle',
        value: 'Contribuer au fonds d’amorçage'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/contribuer-au-fond.jpg',
        style: { maxHeight: '700px', objectPosition: 'center 33%'}
      },
      {
        type: 'medium',
        value: 'Vous êtes un citoyen, 4 options sont possibles :'
      },
      {
        type: 'ol',
        value: [
          {
            type: 'concat',
            value: [
              {
                type: 'text',
                value: 'Vous souhaitez participer à l\'effort commun : vous devenez contributeur à la maison ou au bureau (ou les deux), en achetant du café sur '
              },
              {
                type: 'link',
                value: 'www.chacunsoncafe.fr,',
                href: 'https://www.chacunsoncafe.fr'
              },
              {
                type: 'text',
                value: ' et vous partagez le plan à vos proches, votre patron, votre DRH ! '
              },
              {
                type: 'link',
                value: 'On a préparé un message prêt à envoyer ici.',
                href: 'https://www.notion.so/Rejoignez-la-coop-rative-de-l-action-des-Carbon-Killers-1ca5dfff9e23801f9050e4285f48168e?showMoveTo=true&saveParent=true'
              }
            ]
          },
          {
            type: 'concat',
            value: [
              {
                type: 'text',
                value: 'Vous épousez les valeurs de Let’s Catch Carbon et souhaitez devenir un membre actif du projet : '
              },
              {
                type: 'link',
                value: 'rejoignez-nous sur WhatsApp',
                href: 'https://chat.whatsapp.com/FeD99g2gB4OCeq5FC540XH'
              },
              {
                type: 'text',
                value: '! Vous participez aux décisions et êtes un moteur dans la dynamique de Let’s Catch Carbon.'
              }
            ]
          },
          {
            type: 'concat',
            value: [
              {
                type: 'text',
                value: 'Vous disposez de moyens financiers conséquents et/ou vous pouvez apporter une plus-value (expertise, réseau, conseils…) au projet de Let’s Catch Carbon ; vous êtes convaincus de l’Action menée et des valeurs de Let’s Catch Carbon alors'
              },
              {
                type: 'link',
                value: ' contactez-nous !',
                href: 'mailto:margaux.roux@chacunsoncafe.fr'
              }
            ]
          },
          // 'Vous disposez de moyens financiers conséquents et/ou vous pouvez apporter une plus-value (expertise, réseau, conseils…) au projet de Let’s Catch Carbon ; vous êtes convaincus de l’Action menée et des valeurs de Let’s Catch Carbon alors devenez membres d\'honneur de l’association.',
        ]
      },
      {
        type: 'medium',
        value: 'Vous êtes une entreprise, voici plusieurs moyens de vous engager : '
      },
      {
        type: 'medium',
        value: 'IMMÉDIATEMENT :'
      },
      {
        type: 'ul',
        value: [
          'En souscrivant une solution café auprès de Chacun Son Café et contribuant ainsi au mécanisme « One Cup, One Cent »',
          'En véhiculant et proposant à vos employés de rejoindre notre communauté et qu’ils s’engagent en commandant du café à la maison et en partageant le programme avec leurs proches. ',
          'En finançant directement un des programmes / projets que nous menons sur le terrain via votre département RSE ou votre fondation d’entreprise.'        ]
      },
      {
        type: 'medium',
        value: 'COMING SOON :'
      },
      {
        type: 'ul',
        value: [
          'En proposant à vos collaborateurs des offres exclusives de café chez Chacun Son Café afin qu\'ils continuent de contribuer à la maison',
          'En mettant à disposition vos collaborateurs pour des appuis pro-bono ou du mécénat de compétence.',
          'En assurant une visibilité et une communication sur des actions auxquelles vous avez contribué.',
        ]
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/fin-comment-ça-marche.png'
      }
    ]
  },
  {
    category: 'Des enjeux au-delà du climat',
    color: "text-[#e9c0ea]",
    bgColor:"bg-[#780016]",
    text: 'Des enjeux au-delà du climat',
    link: '/enjeux-au-dela-du-climat',
    src: '/Images/strategie-et-gouvernance/6-des-enjeux-au-dela-du-climat.png',
    content: [
      {
        type: 'default',
        value: 'Au-delà des enjeux climatiques évidents et des bénéfices pour l’Environnement et la Biodiversité, notre action possède de multiples co-bénéfices pour les populations vulnérables qui s’inscrivent dans les objectifs de développement durable de la planète. Ces co-bénéfices sont aussi des pré-requis des recommandations du GIEC dans le cadre du choix et du développement de solutions climatiques.'
      },
      {
        type: 'subtitle',
        value: 'À quels objectifs de développement durable répondons-nous ?'
      },
      {
        type: 'default',
        value: 'Notre action s’envisage en priorité pour répondre à l’Objectif de Développement Durable n°13 - Prendre d\'urgence des mesures pour lutter contre les changements climatiques et leurs répercussions - mais plusieurs autres sont une conséquence, en tant que co-bénéfices.'
      },
      {
        type: 'ul',
        value: [
          'ODD 1 : Éliminer la pauvreté sous toutes ses formes et partout dans le monde.',
          'ODD 2 : Éliminer la faim, assurer la sécurité alimentaire, améliorer la nutrition et promouvoir une agriculture durable.',
          'ODD 3 : Donner aux individus les moyens de vivre une vie saine et promouvoir le bien-être à tous les âges.',
          'ODD 4 : Assurer l\'accès de tous à une éducation de qualité, sur un pied d\'égalité, et promouvoir les possibilités d\'apprentissage tout au long de la vie.',
          'ODD 5 : Parvenir à l\'égalité des sexes et autonomiser toutes les femmes et les filles.',
          'ODD 7 : Garantir l\'accès de tous à des services énergétiques fiables, durables et modernes, à un coût abordable.',
          'ODD 8 : Promouvoir une croissance économique soutenue, partagée et durable, le plein emploi productif et un travail décent pour tous.',
          'ODD 13 : Prendre d\'urgence des mesures pour lutter contre les changements climatiques et leurs répercussions.',
          'ODD 17 : Renforcer les moyens de mettre en œuvre le Partenariat mondial pour le développement et le revitaliser.',
        ]
      },
      {
        type: 'subtitle',
        value: 'Les co-bénéfices de nos défis climatiques'
      },
      {
        type: 'default',
        value: 'Notre conviction est qu’il n’y aura pas d’action climatique sans actions socio-économiques.'
      },
      {
        type: 'default',
        value: 'Notre objectif est de corréler la restauration de la forêt à l’amélioration du niveau de vie des populations locales. À partir du moment où les arbres sont synonymes de meilleurs revenus et de meilleures conditions de vie, alors la reforestation agroforestière se fait naturellement. Les populations locales deviennent garantes de l’équilibre des écosystèmes en y trouvant un intérêt économique et une source de progrès.'
      },
      {
        type: 'bordered',
        value: [
          'Encadré 9 : le progrès comme levier',
          {
            type: 'image',
            value: '/Images/strategie-et-gouvernance/progres-comme-levier.jpg'
          },
          'Nous sommes convaincus que nous serons en mesure de sauver les forêts tropicales et les écosystèmes uniquement si les populations locales s’emparent de la question, qui en réalité, avant d’être écologique, est surtout économique.',
          'Évidemment, ce sont des individus extrêmement attachés à leur terre. Ils ne souhaitent pas voir disparaître la forêt, ni être tributaires des aléas du changement climatique dont ils voient déjà les effets : la pluie arrive de plus en plus tôt (ou de plus en plus tard) et met à mal les cultures.',
          'Mais leur réalité au quotidien n’est pas à l’anticipation ou à l’adaptation, elle est à la survie : ils doivent subvenir quotidiennement à leurs besoins vitaux. L’objectif est d’assurer l’approvisionnement alimentaire avant tout.',
          'La ruralité dans les pays pauvres impose beaucoup de ténacité et une activité presque constante. Les journées de labeur sont longues, il y a peu de jours de repos, pas de vacances. La majorité des tâches sont usantes, physiquement et parfois mentalement, qui plus est à la montagne, sous les climats tropicaux chauds et humides, sans outils ni moyens motorisés.',
          'Nous venons soutenir les producteurs dans la démarche qui nous préoccupe, la protection des ressources naturelles, en mettant à leur disposition les moyens dont ils manquent.',
          'En contrepartie d’un résultat écologique à la hauteur des enjeux, ils attendent une rémunération et une évolution de leur niveau de vie. C’est en ce sens que nous travaillons ensemble. Les sujets sont clairement identifiés : l’alimentation et la sécurité alimentaire, l’accès à l\'énergie, l\'accès à l’eau, la santé….',
        ]
      },
      {
        type: 'default',
        value: 'L’impact est triple : économique (génération des revenus), social (amélioration des conditions de vie) et environnemental (résilience du système agricole et augmentation de la biodiversité). Cela donne à notre action la crédibilité d\'être en mesure de garantir le programme dans la durée.'
      },
      {
        type: 'default',
        value: 'S’agissant des co-bénéfices économiques :'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/co-benefices-economiques.jpg',
        style: { maxHeight: '700px', objectPosition: 'center 40%' }
      },
      {
        type: 'default',
        value: '« Les projets génèrent des revenus qui stimulent l’économie, l’innovation et la résilience face aux défis climatiques. Leur rentabilité « empouvoirent » les communautés locales et stimulent leurs capacités entrepreneuriales, tout en réduisant la dépendance aux financements externes, à rebours d’une vision caritative des rapports Nord / Sud, basée sur la subvention ou le don. Créer une économie locale forte amène en effet directement la question de l\'autonomie de l\'émancipation - et notamment des femmes - qui bénéficient d’ailleurs de projets spécifiques. Dans cette démarche, l\'action de Let\'s Catch Carbon a pour vocation d\'accompagner les communautés locales vers l\'atteinte de cette rentabilité, tout en s’assurant de leur totale prise d’autonomie. Nous insistons bien sur ce point qui sous-tend notre démarche : nous n\'aidons pas, nous travaillons avec et faisons du commerce ensemble selon une approche globale de préservation de notre planète et d’utilisation de solutions basées sur la Nature, afin que les deux parties soient profitables. Nous avons la conviction que cela est le chemin d’une autonomie pérenne pour les personnes tout en étant une solution durable pour l\'environnement ».'
      },
      {
        type: 'default',
        value: 'S’agissant des co-bénéfices environnementaux :'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/co-benefices-environnementaux.jpg',
        style: { maxHeight: '600px' }
      },
      {
        type: 'default',
        value: '« La sauvegarde de la biodiversité et des écosystèmes est fondamentale pour un développement résilient au climat, compte tenu des menaces que le changement climatique fait peser sur eux et de leur rôle dans l’adaptation et l’atténuation (confiance très élevée). Le maintien de la biodiversité et des services écosystémiques à l’échelle mondiale dépend de la conservation efficace et équitable d’environ 30 à 50 % des terres, des eaux douces et des océans de la planète, y compris les écosystèmes actuellement proches de l’état naturel (confiance élevée). L’augmentation des vagues de chaleur, des sécheresses et des inondations dépasse déjà les seuils de tolérance des plantes et des animaux. À des niveaux de réchauffement supérieurs à 2°C, les risques de disparition, d’extinction et d’effondrement des écosystèmes augmentent rapidement (confiance élevée). »'
      },
      {
        type: 'default',
        value: 'S’agissant des co-bénéfices sociaux :'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/co-benefices-sociaux.jpg',
        style: { maxHeight: '600px', objectPosition: 'center 20%' }
      },
      {
        type: 'default',
        value: '« Le développement résilient au climat est possible lorsque les gouvernements, la société civile et le secteur privé font des choix de développement inclusifs qui donnent la priorité à la réduction des risques, à l’équité et à la justice, et lorsque les processus décisionnels, les financements et les actions sont intégrés à tous les niveaux de gouvernance, dans tous les secteurs et dans tous les délais (confiance très élevée). La justice sociale et climatique contribue à des avantages multiples pour la santé, le bien-être et les services écosystémiques, y compris pour les autochtones et les communautés marginalisées et vulnérables (confiance élevée). Le projet Let’s Catch Carbon repose fondamentalement sur le principe d\'inclusion. Cela se traduit par la promotion de solutions climatiques qui bénéficient à tous les membres de la société, tout en encourageant la participation active de chacun. Ainsi, Let’s Catch Carbon se veut promoteur d’un modèle sociétal : en tirant le fil de la question climatique, c’est un système plus global qui se met en place, avec un impact au-delà du climat, pour devenir sociétal ».'
      },
      {
        type: 'medium',
        value: 'Chez Let’s Catch Carbon, nous nous sommes engagés à développer 5 co-bénéfices majeurs :'
      },
      {
        type: 'ul',
        value: [
          'L\'accès à l\'Eau, ressource ô combien précieuse sans laquelle la Vie ne serait pas possible sur Terre.',
          'L\'éducation car sans la connaissance et l\'apprentissage, l\'humain ne serait rien. C\'est aussi par l\'information / la connaissance que les populations locales adhèreront à la lutte contre le réchauffement climatique.',
          'L\'accès à une Énergie propre et durable, car cette thématique est directement liée et connectée aux changements climatiques',
          'L\'Empowerment des femmes car elles représentent + de 50% de l\'humanité et détiennent 50% de moins de richesses que les hommes. Elles sont victimes d\'inégalités.',
          'La sécurité alimentaire grâce au modèle agroforestier qui permet de générer des denrées alimentaires pour les familles les plus nécessiteuses.',
        ]
      },
      {
        type: 'default',
        value: 'Parallèlement, Let’s Catch Carbon permet de lutter contre l\'exode rural et de favoriser l\'ancrage des jeunes sur leurs terroirs d\'origine.'
      },
      {
        type: 'default',
        value: '« En 2050, seulement 10% des terres ne seront pas affectées par l\'homme. La dégradation des sols va déplacer au moins 50 millions d\'humains d\'ici 2050, jusqu\'à 700 millions si aucune mesure n\'est prise pour enrayer les dégâts. »'
      },
      {
        type: 'medium',
        value: 'Le modèle étonnant de Let’s Catch Carbon permet une action vertueuse, à co-bénéfices multiples :'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/le-modele-etonnant.jpg',
        style: { objectPosition: 'center 45%' }
      },
      {
        type: 'ul',
        value: [
          'Un impact environnemental indéniable au cœur de notre stratégie, grâce à la plantation d\'arbres et/ou l\'aménagement de forêts/plantations dégradées tout en contribuant à la sécurité alimentaire des populations.',
          'Un bénéfice économique pour les populations locales qui ne dépendent plus que d’un seul revenu, qui gagnent plus grâce à la polyculture et à des produits mieux vendus, la sécurisation d\'un marché et une marge conservée voire améliorée pour les entreprises en aval des filières. Les fermes ne supportent pas seulement une famille, ils supportent des communautés entières et des chaînes de valeur agricoles.',
          'Un impact social important grâce à la mise en œuvre de projets utiles pour les populations locales en lien avec l\'accès à l\'eau, l\'éducation, l\'accès à l\'énergie... Le tout selon un modèle pérenne sur les plans social, économique et environnemental.',
        ]
      },
    ]
  },
  {
    category: 'On vous explique pourquoi on y croit !',
    color: "text-[#b6eaff]", 
    bgColor: "bg-[#00acc4]",
    text: 'On vous explique pourquoi on y croit !',
    link: '/pourquoi-on-y-croit',
    src: '/Images/strategie-et-gouvernance/7-pourquoi-on-y-croit.JPG',
    content: [
      {
        type: 'default',
        value: 'Nous sommes conscients que ce n’est pas seuls que nous allons pouvoir modifier le climat. Nous voulons prouver la puissance d\'un modèle socio-économique et environnemental pour les régions des zones tropicales là où sont les forêts primaires qu\'il faut impérativement sauver avec le climat.'
      },
      {
        type: 'default',
        value: 'C’est pourquoi nous avons choisi d’impacter là où nous pouvions avoir un véritable effet de levier à grande échelle : dans les zones tropicales, où l’agriculture est massivement dominée par le modèle des petites fermes familiales de moins de 2 hectares. La FAO estime qu\'il y aurait 570 millions d\'exploitations agricoles dans le monde, dont plus de 500 millions relèveraient de l\'agriculture familiale.*'
      },
      {
        type: 'default',
        value: 'Nous souhaitons rendre légitime la place de l\'agriculture familiale qui génère 50% de la production alimentaire mondiale** et développer une agriculture basée sur des principes agroécologiques dont l\'agroforesterie sera le principal fer de lance.'
      },
      {
        type: 'default',
        value: 'Nous pensons qu’il est temps de faire de l\'agriculture familiale une agriculture puissante.'
      },
      {
        type: 'default',
        value: 'Nous pensons qu’elle doit être en mesure de répondre aux exigences de l\'industrie caféière en aval de la filière pour être à la fois un acteur majeur économiquement, mais aussi une réponse à d’autres enjeux : l’autonomie alimentaire, la sortie du seuil de pauvreté, le développement durable pour le climat, pour la biodiversité, pour la gestion des précipitations, pour les économies en zones tropicales humides (subsahariennes notamment).'
      },
      {
        type: 'default',
        value: 'En capitalisant sur l\'innovation locale, les pratiques traditionnelles et la sagesse collective, l\'intelligence locale devient un moteur essentiel pour une transition réussie vers des modes de vie plus durables et résistants aux changements environnementaux.'
      },
      {
        type: 'default',
        value: 'Notre rôle est de démontrer les potentialités de cette agriculture en la structurant, en lui donnant un accès aux subventions internationales pour l\'alimentation, l\'agriculture et le Climat, en lui donnant une chance de bénéficier des mêmes avantages économiques et donc stratégiques qu\'une agriculture de grandes exploitations mécanisées et carbonée qui bénéficie depuis des décennies de subventions massives.'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/notre-role-est-de-demontrer.jpg'
      },
      {
        type: 'default',
        value: 'L\'autre levier de l\'approche de Let’s Catch Carbon est de faire participer les acteurs du Nord dans la préservation des ressources naturelles du Sud et la reforestation climato-intelligente pour contribuer à la lutte contre le réchauffement climatique. Le développement de l\'agroforesterie est une des techniques, déjà reconnues dans le Monde, que Let’s Catch Carbon met en place avec les communautés pour "reverdir" la planète.'
      },
      {
        type: 'link',
        value: '*Source : Le conseil économique, social et environnemental',
        href: 'https://www.lecese.fr/sites/default/files/pdf/Avis/2014/2014_26_agriculture_familiale.pdf'
      },
      {
        type: 'link',
        value: '**Source : Grain.org',
        href: 'https://grain.org/fr/article/4960-affames-de-terres-les-petits-producteurs-nourrissent-le-monde-avec-moins-d-un-quart-de-l-ensemble-des-terres-agricoles'
      },
      {
        type: 'subtitle',
        value: 'Quels avantages et bénéfices pour l’écosystème des acteurs ?'
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/avantage-et-benefices.jpg',
        style: { maxHeight: '700px', objectPosition: 'center 20%' }
      },
      {
        type: 'default',
        value: 'L’entreprise à impact Chacun Son Café et ses partenaires se sont joints à la création de l’approche globale et garantissent des débouchés sur l’aval de la filière café. Cette synergie entre acteurs permet :'
      },
      {
        type: 'medium',
        value: 'Pour les entreprises de la filière café'
      },
      {
        type: 'ul',
        value: [
          'La garantie d’un café de qualité : un café de spécialité, cultivé sous ombrage offrant maturation lente et sucrosité, pour des grains à la douceur et à la fraîcheur optimales. Le tout, évidemment, sans ou avec très peu d’intrants chimiques, selon une approche d’agriculture raisonnée.',
          'Un café à impact environnemental élevé : la culture en agroforesterie s’accompagne de co-bénéfices nombreux pour le Climat, les sols, la Biodiversité…',
          'Une plus value économique pour Chacun Son Café et les autres intervenants de la filière : producteurs, transformateurs, importateurs, torréfacteurs, consommateurs.',
          'Une contribution concrète et mesurable dans la lutte contre le dérèglement climatique, la protection de la biodiversité, la séquestration de carbone et la préservation des derniers poumons de la planète.',
        ]
      },
      {
        type: 'medium',
        value: 'Pour les entreprises privées et acteurs publics'
      },
      {
        type: 'ul',
        value: [
          'La satisfaction de leurs collaborateurs de retrouver un pouvoir sur le réel et contribuer à des actions pour le Climat.',
          'Un engagement sociétal fort en faveur de la Lutte contre les changements climatiques et la préservation des écosystèmes.',
          'Une traçabilité de leur contribution extra-financière à la réduction des émissions de CO2 avec des chiffres clés mesurés et communiqués régulièrement.',
          'Une adéquation de leurs actions avec les nouvelles réglementations (CSRD) et exigences de transparence / d’engagement extra-financier.',
          'Une image et une visibilité améliorée auprès de toutes leurs parties prenantes.',
        ]
      },
      {
        type: 'medium',
        value: 'Pour les acteurs locaux partenaires des actions'
      },
      {
        type: 'ul',
        value: [
          'La garantie de marchés / débouchés économiques pour le café produit selon le modèle agroforestier.',
          'Une rémunération avantageuse avec un prix supérieur au marché boursier et un système de rétribution post récolte.',
          'Le financement de projets économiques, sociaux et environnementaux pour les communautés.',
          'Le développement d’une dynamique régionale sur le plan économique, social et environnemental.',
          'Une inclusion renforcée des populations locales au sein d’une filière forte et accompagnée',
          'La réalisation d’engagement confirmé pour les autorités en lien avec les priorités et axes de développement des états',
          'L’amélioration de la sécurité alimentaire des populations.',
          'Un ancrage rural, moyen d\'échapper à une émigration forcée vers les métropoles voire les pays du Nord en quête de meilleures conditions de vie (un enjeu alors que les migrations climatiques vont se multiplier).',
        ]
      },
    ]
  },
  {
    category: 'Une gouvernance agile et inclusive',
    color: "#fff",
    bgColor: "#234f19",
    text: 'Une gouvernance agile et inclusive',
    link: '/gouvernance-agile-inclusive',
    src: '/Images/strategie-et-gouvernance/8-une-gouvernance-agile.webp',
    content: [
      {
        type: 'default',
        value: 'L’ensemble de nos actions repose sur une gouvernance imbriquée et co-décideuse entre Let’s Catch Carbon et Chacun son Café. Let’s Catch Carbon est une association loi 1901. Chacun son Café est une entreprise à impact. Nous pensons que trop souvent, une dichotomie existe entre les modèles associatifs et les entreprises ce qui les rend parfois contre productives. Pourquoi ne pas les réconcilier ? C’est ce que nous avons imaginé dans ce modèle de gouvernance partagée.',
      },
      {
        type: 'default',
        value: 'Comme toute association, Let’s Catch Carbon dispose d\'une Assemblée Générale composée de ses membres qui valident les grandes décisions de l\'association. Un Conseil d\'administration travaille sur les grands axes de l\'association et soumet les propositions à l\'Assemblée Générale pour validation. Enfin, un coordinateur général rend compte des avancées des différentes actions menées par l\'association et prépare les éléments budgétaires chaque année. Chaque conseil d’administration et assemblée est sanctionnée par un procès verbal archivé.',
      },
      {
        type: 'default',
        value: 'Comme toute entreprise, Chacun son Café poursuit un but commercial permettant de faire vivre ses employés, développer son chiffre d’affaires et conforter ses actionnaires. Elle inscrit son engagement envers le Climat dans son ADN et son board valide cette décision. Son directeur met en œuvre les grands axes de développement de l’entreprise en accord avec ses actionnaires.',
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/comme-toute-entreprise.jpg',
        style: { maxHeight: '600px', objectPosition: 'center 48%' }
      },
      {
        type: 'default',
        value: 'La conciliation des axes de développement de Let’s Catch Carbon et de Chacun Son Café est donc conjointe. Ces axes ont le même objectif « Climat » même s’ils n’ont pas la même finalité économique. L’association met en œuvre les actions définies dans son plan d’action en lien avec les programmes qu’elle développe sur le terrain et selon sa vision d’agir pour l’urgence climatique et la biodiversité ; l’entreprise, quant à elle, s’assure que les actions menées débouchent sur des contrats et opportunités commerciales permettant son développement. Tout cela dans une vision « Climat » bénéfique pour les 2 parties. Une sorte de partenariat gagnant/gagnant. Les intérêts des programmes développés servent les 2 parties prenantes (développement des actions environnementales et de la vision prônée par l’association et développement éthique et commercial pour l’entreprise).',
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/conciliation-des-axes.jpg',
      },
      {
        type: 'default',
        value: 'Un comité de pilotage composé des membres fondateurs de l’association et des représentants de l’entreprise, se réunit chaque 2 semaines en moyenne. Il valide les grandes décisions proposées par le coordinateur et les conseils d’administration des 2 entités. Ce comité de pilotage fait le point sur les différentes actions en cours et sur les actions à mener dans les prochaines échéances. Les décisions sont prises à l’unanimité et de façon collégiale. En cas de désaccord, chaque partie met en avant ses arguments afin de convaincre l’autre partie. Un consensus est le plus souvent trouvé afin d’éviter des situations de blocage.',
      },
      {
        type: 'default',
        value: 'Une convention cadre de partenariat a été signée entre LCC et CSC ; elle régit les rôles et responsabilités de chacune des parties.',
      },
    ]
  },
  {
    category: 'Les 8 commandements de notre action',
    color: "#000",
    bgColor: "#d717e7",
    text: 'Les 8 commandements de notre action',
    link: '/commandements-action',
    src: '/Images/strategie-et-gouvernance/9-les-8-commandements.JPG',
    content: [
      {
        type: 'medium',
        value: 'L\'éthique que nous nous imposons est de préserver et protéger la planète en nous appuyant sur les solutions fondées sur la nature, tout en améliorant les conditions socio-économiques des populations les plus vulnérables.',
      },
      {
        type: 'default',
        value: '',
      },
      {
        type: 'default',
        value: 'Le GIEC conditionne le développement résilient au climat “lorsque les gouvernements, la société civile et le secteur privé font des choix de développement inclusifs qui donnent la priorité à la réduction des risques, à l’équité et à la justice, et lorsque les processus décisionnels, les financements et les actions sont intégrés à tous les niveaux de gouvernance, dans tous les secteurs et dans tous les délais (confiance très élevée). La justice sociale et climatique contribue à des avantages multiples pour la santé, le bien-être et les services écosystémiques, y compris pour les autochtones et les communautés marginalisées et vulnérables (confiance élevée).”',
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/GIEC-conditionne.jpg',
        style: { maxHeight: '700px', objectPosition: 'center 25%' }
      },
      {
        type: 'ol',
        title: 'C’est ce qui sous-tend notre action, et se matérialise par 8 commandements :',
        value: [
          'Construire une relation Sud Nord (Nord/Sud) basée sur des échanges commerciaux éthiques et non sur une logique d\'aide.',
          'Construire un modèle de financement pérenne qui ne dépend pas de l\'économie du don.',
          'Inclure dans la mondialisation des populations locales jusqu’ici exclues des échanges commerciaux internationaux.',
          'Conditionner le financement des projets locaux à l’autonomie et la pérennité de leur modèle économique. Le développement de projets locaux rentables permet non seulement de garantir la viabilité des initiatives environnementales locales dans le temps, mais également d’en assurer une totale indépendance.',
          'Mettre en place dans les règles de gouvernance des structures (coopératives) un % des revenus alloué à des projets sociaux, économiques et environnementaux. Ainsi, les projets concernés (éducation, hygiène, santé…) peuvent trouver une pérennité.',
          'Contribuer sans jamais se substituer aux populations autochtones.',
          'Aider à mettre en place les règles de gouvernance qui permettent d’avoir des processus de décisions collégiales et transparents au sein des coopératives et acteurs partenaires.',
          'Inclure toutes les communautés au-delà des seules communautés de café et toutes les confessions.',
        ],
      },
      {
        type: 'image',
        value: '/Images/strategie-et-gouvernance/8-commandements.jpg',
        style: { maxHeight: '600px', objectPosition: 'center 68%' }
      },
    ]
  },
];

export const methodologieSurLeTerrain: StrategieMethodologie[] = [
  {
    category: 'L\'approche de terrain',
    color: '#e3ff00',
    bgColor: '#244f19',
    text: 'L\'approche de terrain',
    link: '/l-approche-de-terrain',
    src: '/Images/methodologie-sur-le-terrain/1-notre-approche.JPG',
    content: [
      {
        type: 'ul',
        title: 'L’approche de terrain repose sur une collaboration permanente et active entre 4 acteurs majeurs : ',
        value: [
          'Le consortium CSC - LCC qui impulse la planification opérationnelle des activités à mener sur le terrain et assure la coordination entre toutes les parties prenantes.',
          'Le partenaire local qui met en œuvre les actions sur le terrain en collaboration avec les autorités et les partenaires techniques.',
          'Le partenaire technique qui appuie les actions à la fois sur le plan scientifique (vérification / conseil sur les techniques agroécologiques) et sur le plan organisationnel (mobilisation des producteurs).',
          'L’acteur étatique qui valide le programme d’actions menées et qui mobilise les autorités traditionnelles, les institutions légales et les agences spécialisées.',
        ]
      },
      {
        type: 'default',
        value: 'Cette approche de “terrain”, qu’on pourrait qualifier de locale, est déterminante en raison de la connaissance contextuelle profonde détenue par les communautés. '
      },
      {
        type: 'default',
        value: 'Cette compréhension locale permet la création de solutions adaptées, résilientes et spécifiques à chaque région, maximisant l\'efficacité des interventions. '
      },
      {
        type: 'default',
        value: 'L\'implication des communautés locales favorise un sentiment d\'appropriation, d\'engagement et de solidarité, renforçant la capacité d\'action rapide et la durabilité des initiatives climatiques, et la résilience des communautés.'
      },
      {
        type: 'subtitle',
        value: 'Qui sont les structures locales ?'
      },
      {
        type: 'image',
        value: '/Images/methodologie-sur-le-terrain/structures-locales.jpg'
      },
      {
        type: 'ul',
        title: 'Le consortium CSC - LCC travaille avec des partenaires locaux engagés et possédant un fort ancrage auprès des populations. Il s’agit de : ',
        value: [
          'Coopératives ou groupements agricoles : entités reconnues localement et composées de producteurs et productrices. Elles peuvent être regroupées en faitière ou union de producteurs. Ce groupe représente les bénéficiaires directs.',
          'Agences, instituts ou cabinets techniques : ces structures interviennent dans le conseil et l’appui technique aux producteurs et productrices ; elles peuvent être renforcées sur certaines thématiques par l’équipe de Let’s Catch Carbon et de ses partenaires et participer à des sessions de renforcement de compétences.',
          'Acteurs gouvernementaux : Ils constituent l’autorité administrative du pays d’action. Ils donnent leur accord pour intervenir dans le pays selon les priorités du gouvernement en place et facilitent nos interventions. Une convention bipartite régit les rôles et responsabilités des parties. Les liens sont réguliers et transparents et respectent en priorité les engagements pris avec les populations locales.',
        ]
      },
      {
        type: 'medium',
        value: 'Comment devient-on partenaire du consortium CSC - LCC ?'
      },
      {
        type: 'image',
        value: '/Images/methodologie-sur-le-terrain/comment-devenir-partenaire.jpg',
      },
      {
        type: 'ul',
        title: 'Si vous êtes une structure locale intéressée par une collaboration avec le consortium CSC - LCC, vous devez répondre aux critères suivants :',
        value: [
          'Évoluer dans une zone de culture de café,',
          'Avoir un ancrage local auprès des producteurs locaux, ',
          'Avoir accès à suffisamment de surfaces agricoles pour avoir un impact significatif du point de vue de l’Agroforesterie et de la captation carbone,',
          'Être motivé par le déploiement d’un projet d’agroforesterie à grande échelle et dans la durée.',
        ]
      },
      {
        type: 'default',
        value: 'Après étude de votre candidature et sous réserve d’un diagnostic préalable, le consortium CSC - LCC organise une ou plusieurs missions diagnostiques d’évaluation.'
      },
      {
        type: 'ul',
        title: 'Cette évaluation passe par 5 vérifications :',
        value: [
          'la gouvernance,',
          'la mise en œuvre d\'actions avec et pour les populations vulnérables cibles, ',
          'la connaissance du milieu et des besoins des parties prenantes,',
          'la tenue d\'une comptabilité, etc, avec les cadres de la structure,',
          'le partage des valeurs et de la philosophie d’approche de Let’s Catch Carbon.',
        ]
      },
      {
        type: 'default',
        value: 'Nous organisons dans le même temps des focus groups et des entretiens individuels avec les producteurs pour co-construire la démarche.'
      },
    ]
  },
  {
    category: 'Une méthodologie complète et inclusive',
    color: '#780016',
    bgColor: '#e3ff00',
    text: 'Une méthodologie complète et inclusive',
    link: '/une-methodo-complete-et-inclusive',
    src: '/Images/methodologie-sur-le-terrain/2-une-methodo-complete-et-inclusive.png',
    content: [
      {
        type: 'subtitle',
        value: 'Rappel des principes de base de notre Action'
      },
      {
        type: 'default',
        value: 'Sur la méthodologie en tant que telle, chaque action ou projet mené est identifié, sélectionné (ou pas) puis mis en œuvre.'
      },
      {
        type: 'default',
        value: 'Identification : chaque action ou projet est préalablement discuté au sein d\'un comité de pilotage* puis voté par les populations. '
      },
      {
        type: 'default',
        value: '*La constitution des comités de pilotage fluctue selon le sujet traité, il peut s’agir de groupes de travail avec les producteurs, mais aussi avec les associations de femmes ou bien les autorités locales ou encore des représentants de l’Etat ou d’institutions techniques ou scientifiques. '
      },
      {
        type: 'default',
        value: 'Sélection : le consortium CSC - LCC participe au développement des projets mais n’est pas décisionnaire quant à leur élaboration et leur priorisation. Ce sont les communautés locales qui expriment leurs besoins et votent la feuille de route selon un processus géré par le partenaire local (par exemple, une Assemblée Générale rassemblant les membres de la coopérative). '
      },
      {
        type: 'medium',
        value: 'Mise en œuvre :'
      },
      {
        type: 'ol',
        title: 'Pour chaque projet ou action sont définis : ',
        value: [
          'un partenaire technique, ',
          'des indicateurs',
          'des process de vérification. ',
        ]
      },
      {
        type: 'ul',
        title: 'Trois règles de mise en oeuvre sont communes à nos actions : ',
        value: [
          'Le partenaire local est un relais prioritaire sur place pour la mise en œuvre, l’encadrement et la mesure des résultats. Il peut être appuyé par la venue d’experts (exemple : un agronome). ',
          'Des missions locales sont planifiées une à deux fois par an pour un audit ou une évaluation effectué par les membres du consortium CSC - LCC ou un cabinet externe. ',
          'Les acteurs et bénéficiaires du projet ou de l’action sont mis à contribution à tous les moments clés de la mise en œuvre, dans le souci d’une autonomie totale à l’issue du processus.',
        ]
      },
      {
        type: 'medium',
        value: 'Notre objectif : arriver à une méthodologie de développement qui puisse être répliquée à grande échelle par différentes communautés et différentes pratiques agricoles dans différentes zones géographiques stratégiques pour la séquestration carbone dans le monde.'
      },
      {
        type: 'subtitle',
        value: 'Les grandes étapes de notre Action'
      },
      {
        type: 'image',
        value: '/Images/methodologie-sur-le-terrain/etape-de-notre-action.jpg',
      },
      {
        type: 'default',
        value: 'La liste des étapes détaillées ci-dessous ne représente pas une liste exhaustive mais simplement un exemple de cheminement qui est employé par nos équipes lors du déploiement d’un programme sur le terrain.'
      },
      {
        type: 'ul',
        value: [
          'La validation des besoins des communautés : La première étape consiste à vérifier que notre Action s’insère et cadre avec les besoins des producteurs et productrices. Cette vérification s’opère lors d’une ou plusieurs missions de diagnostic réalisées en préalable au programme.',
          'L’intégration dans les priorités des États : Le démarrage de toute action passe obligatoirement par une validation en amont de toute initiative avec les autorités des pays où nous intervenons. Cette démarche préalable se concrétise le plus souvent, par la signature de conventions de partenariat avec un ou plusieurs acteurs étatiques. Il s’agit notamment de ministères, d’agences techniques ou de directions gouvernementales.',
          'L’identification du partenaire local : selon les pays d’Action, cette étape a pu être réalisée en amont - par exemple, au cours des missions diagnostiques - et permet de s’assurer du sérieux et de l’engagement du partenaire local. Il s’agit du partenaire qui représente le mieux possible les producteurs et s’engage à préserver leurs intérêts.',
          {
            type: 'image',
            value: '/Images/methodologie-sur-le-terrain/partenaire-local.jpg',
          },
          'La sélection d’un partenaire de certification Carbone : Au cours de cette étape, il s’agit, pour nos équipes et l’ensemble des partenaires, de sélectionner un prestataire qui validera la méthodologie, les méthodes de calcul et l’enregistrement du programme à la certification Carbone. Le prestataire est contractualisé pour les phases d’étude baseline et de monitoring.',
          'La validation des modèles agroforestiers : En lien avec les partenaires techniques et les producteurs, les équipes de terrain valident les schémas agroforestiers qui seront développés dans la zone d’intervention. Ces modèles doivent à la fois répondre aux besoins des producteurs et propriétaires terriens et aux enjeux de captation et séquestration de carbone grâce au choix d’espèces forestières et vivrières adaptées aux spécificités du milieu.',
          'La mise en place d’espaces de production agroforestiers : Cette étape consiste dans la création, en premier lieu, de pépinières avec les espèces agroforestières et les plants de caféiers, et dans un second temps, dans la plantation en plein champ de ces plants. Cette étape importante passe par l’optimisation au préalable des zones de plantation et de production de matériel végétal (irrigation, fertilisation, entretien…).',
          {
            type: 'image',
            value: '/Images/methodologie-sur-le-terrain/espaces-de-production-agroforestiers.jpg',
          },
          'La structuration de la filière café : En lien avec les partenaires en aval de la filière (importateurs, torréfacteurs…), le consortium CSC - LCC appuie la structuration de la filière café. Cette structuration permet l’interaction avec les partenaires de l’interprofession et dresse le bilan des actions à mener pour améliorer le processus de récolte, l’achat/vente, les cahiers des charges ou encore l’exportation.',
          'La formation et la sensibilisation des communautés locales : L’éducation et le transfert de compétences aux communautés locales demeurent un axe important de notre action. Des formations spécifiques sur l’agroforesterie, et l’Agroécologie en général, sont mises en œuvre avec les acteurs locaux et en collaboration avec les partenaires techniques. Des opérations de sensibilisation de masse sont menées sur tous les territoires d’intervention. Sur certains programmes, des centres de formation dédiés sont installés permettant une formation en continu des populations locales et notamment des jeunes et des femmes selon des techniques adaptés à leur niveau d’éducation.',
          {
            type: 'image',
            value: '/Images/methodologie-sur-le-terrain/formation-et-sensibilisation.jpg',
            style: { maxHeight: '600px', objectPosition: 'center top' }
          },
          'Les investissements autour de la filière café : En lien avec l’étape précédente, des aménagements sont réalisés en fonction des résultats du diagnostic filière. Ces investissements peuvent concerner la création de stations de lavage, d’unités de tri, l’amélioration du processus de collecte des cerises de café, l\'échantillonnage…',
          'La mise en place d’un processus de rétribution : Dans un souci d’amélioration des revenus des producteurs, LCC et ses partenaires en Europe développent plusieurs solutions qui permettent de mieux rémunérer les producteurs grâce à leurs efforts en matière de culture de café agroforestier, de respect des normes de qualité ou encore d’enregistrement dans un processus de café de spécialité.',
          'Le suivi des plantations agroforestières : un suivi régulier est organisé avec les producteurs et les agences techniques agricoles afin d’optimiser les espaces de plantation. Il s’agit à la fois d’un suivi technique mais aussi d’un suivi organisationnel des producteurs et associations de producteurs. Des moyens de géolocalisation sont utilisés afin d’assurer une traçabilité des parcelles suivies par le programme.',
          'La mise en œuvre de projets socio-économiques et environnementaux : Grâce au système de rétribution post récolte, des caisses de solidarité sont mises en place et génèrent des projets socio-économiques et environnementaux autour de 5 grandes thématiques : accès à l’eau, accès à l’Energie, Education, empowerment des femmes et sécurité alimentaire. Ces microprojets sont pilotés et supervisés par les équipes locales et Let’s Catch Carbon.',
          {
            type: 'image',
            value: '/Images/methodologie-sur-le-terrain/suivi-des-plantations.jpg',
          },
          'La mise en place d’un processus de traçabilité et de transparence financière : Des procédures sont mises en place à la fois dans le cadre de la certification des crédits carbone mais aussi sur toute la partie budgétaire et financière des programmes menés. Des garde-fous sont établis pour limiter au maximum les risques de fraude, de malversation ou autre risque financier. Des audits comptables sont réalisés chaque année.',
        ]
      },
    ]
  },
  {
    category: 'Les dimensions pour suivre nos actions',
    color: '#4f2273',
    bgColor: '#e9c0ea',
    text: 'Les dimensions pour suivre nos actions',
    link: '/les-7-dimensions',
    src: '/Images/methodologie-sur-le-terrain/3-les-7-dimensions.jpg',
    content: [
      {
        type: 'default',
        value: 'Afin d’assurer un monitoring adapté de notre programme, nous avons élaboré une méthodologie en 7 dimensions qui permet de couvrir tous les aspects et sujets de chacun de nos programmes.'
      },
      {
        type: 'subtitle',
        value: 'Dimension 1 : La gouvernance et la structuration des organisations locales'
      },
      {
        type: 'default',
        value: 'Nous appuyons les organisations partenaires dans une dimension de gouvernance et de structuration pour qu’elles deviennent des structures autonomes capables de perdurer dans leur pays. '
      },
      {
        type: 'ul',
        title: 'Le consortium CSC - LCC leur permet d’améliorer la structuration de leurs organes de gouvernance, par exemple : ',
        value: [
          'organisation de conseils d’administration, d\'assemblées, de réunions de comités…,',
          'responsabilisation des membres clés,',
          'mise en conformité avec les réglementations du pays.',
        ]
      },
      {
        type: 'default',
        value: 'Une gouvernance adaptée garantit l’appropriation des actions sur le long terme par le partenaire local et permet à Let’s Catch Carbon de pouvoir se retirer de son rôle d’appui technique à moyen ou long termes selon les contextes et les maturités des organisations locales.'
      },
      {
        type: 'subtitle',
        value: 'Dimension 2 : Stratégie et ingénierie de projets'
      },
      {
        type: 'image',
        value: '/Images/methodologie-sur-le-terrain/dimension-2.jpg',
      },
      {
        type: 'ul',
        title: 'Nous définissons avec chaque organisation partenaire et spécifiquement celle en charge de la mise en oeuvre des actions sur le terrain :',
        value: [
          'des axes stratégiques clés, ',
          'des projets,',
          'des sous-projets, ',
          'des indicateurs d’impact et de suivi,',
          'une durée,',
          'un calendrier / une planification temporelle,',
          'une gouvernance',
          'un budget global,',
          'un budget annuel.',
        ]
      },
      {
        type: 'ol',
        title: 'Selon notre approche, la méthodologie de mise en oeuvre de ces sous-projets sur le terrain repose sur trois exigences : ',
        value: [
          'Tenir compte avant tout des besoins recensés auprès des populations locales en lien avec notre partenaire local (coopérative, groupement de coopérative…). ',
          'Répondre au critère de lien direct avec la lutte contre les changements climatiques et avoir une pérennité à court, moyen ou long terme. ',
          'Répondre à l’exigence de trouver une rentabilité économique, celle-ci devant être intégrée et gérée par les communautés locales, pour assurer sa pérennité. ',
        ]
      },
      {
        type: 'subtitle',
        value: 'Dimension 3 : La Communication et le marketing'
      },
      {
        type: 'default',
        value: 'La communication vise à faciliter le partage d\'informations auprès des partenaires techniques et financiers et sur le plan interne et externe (réseaux, privés…) entre les différentes parties prenantes. '
      },
      {
        type: 'ul',
        title: 'Elle inclut : ',
        value: [
          'un plan de communication global,' ,
          'une base média partagée,',
          'des fiches de présentation du programme,' ,
          'des posts / actualités, ',
          'des rapports narratifs mensuels ou annuels, ',
          'les sites Internet, ',
          'les comptes réseaux sociaux.',
        ]
      },
      {
        type: 'default',
        value: 'Elle se complète par la communication des données du programme au sein du secteur d\'activité (national et international) et une intégration dans les réseaux (associations de professionnels, réseaux régionaux et internationaux...) afin de partager les expériences.'
      },
      {
        type: 'default',
        value: 'Sur le plan local, la communication permet aux partenaires locaux d\'accroître leur visibilité auprès des autorités et acteurs du pays d’action. Elles gagnent ainsi en reconnaissance et en crédibilité et confortent leurs rôles dans la société.'
      },
      {
        type: 'default',
        value: 'La notion de marketing est davantage utilisée dans le cas où le partenaire local souhaite diffuser des produits locaux à l’attention des consommateurs ou encore promouvoir des services.'
      },
      {
        type: 'subtitle',
        value: 'Dimension 4 : La Gestion opérationnelle'
      },
      {
        type: 'image',
        value: '/Images/methodologie-sur-le-terrain/dimension-4.jpg',
      },
      {
        type: 'default',
        value: 'La gestion opérationnelle constitue le monitoring continu et régulier des actions développées sur le terrain. ',
      },
      {
        type: 'ul',
        title: 'Exemples : ',
        value: [
          'mise en place d’une pépinière, ',
          'organisation de formations, ',
          'sélection et acquisition de matériels, ',
          'mise en œuvre d’un atelier, ',
          'réalisation d’une étude de marché.',
        ],
      },
      {
        type: 'default',
        value: 'La gestion opérationnelle correspond à la transcription des actions décidées lors de l’élaboration de la stratégie d’action du partenaire locale (dimension 2).',
      },
      {
        type: 'default',
        value: 'La mise en œuvre de cette dimension est assurée par les équipes locales appuyées par les partenaires locaux et l’équipe du consortium CSC - LCC.',
      },
      {
        type: 'subtitle',
        value: 'Dimension 5 : Gestion administrative, RH et financière',
      },
      {
        type: 'default',
        value: 'La gestion administrative et des ressources humaines vise à organiser le suivi des personnes composant le partenaire local. ',
      },
      {
        type: 'ul',
        title: 'Cela inclut au départ : ',
        value: [
          'le dimensionnement des équipes',
          'l’organisation des recrutements ',
        ],
      },
      {
        type: 'ul',
        title: 'Puis par la suite : ',
        value: [
          'l’accompagnement, ',
          'le renforcement de compétences, ',
          'l’élaboration des fiches de poste, ',
          'la rédaction des contrats de travail, ',
          'l’évaluation et l’évolution des employés… ',
        ],
      },
      {
        type: 'default',
        value: 'Des diagnostics des besoins en formation sont réalisés régulièrement afin de pouvoir renforcer les compétences des employés possédant un engagement et/ou une plus value factuelle dans la structure. Le renforcement d’équipe instaure un climat social favorable et améliore les conditions de travail',
      },
      {
        type: 'ul',
        title: 'Let’s Catch Carbon accompagne les structures locales dans cette structuration de leur département administratif et RH : ',
        value: [
          'elle les aide à développer des manuels de procédures et respecter les règles en matière de droit du travail,',
          'elle propose également des outils comme la grille salariale et le plan de carrières afin de contribuer à un bien être au travail des employés.',
        ],
      },
      {
        type: 'image',
        value: '/Images/methodologie-sur-le-terrain/dimension-5.jpg',
      },
      {
        type: 'default',
        value: 'La gestion budgétaire et financière est le second axe de cette dimension. ',
      },
      {
        type: 'ul',
        title: 'Elle est capitale pour plusieurs raisons : ',
        value: [
          's’assurer de la bonne gestion financière de la structure locale',
          'vérifier la solidité financière du partenaire et l’évolution vers une structure autonome financièrement',
          'garantir une transparence et une conformité financière notamment envers les partenaires financiers',
        ],
      },
      {
        type: 'ul',
        title: 'Cet axe vise entre autres à : ',
        value: [
          'référencer toutes les immobilisations acquises par la structure, ',
          'développer des outils de suivi et de monitoring budgétaire, ',
          'mettre en place des procédures comptables et financières respectant les normes établies, ',
          'garantir la fiabilité des comptes et des états financiers…',
        ],
      },
      {
        type: 'default',
        value: 'Le consortium CSC - LCC assure un rôle important dans l’accompagnement à cette dimension financière et effectue des audits de vérification régulièrement afin de s’assurer de la bonne tenue de la comptabilité. Une attention particulière est accordée aux règles fiscales et légales du pays d’action. ',
      },
      {
        type: 'default',
        value: 'Le suivi financier consiste en un processus permettant au programme de prévoir et de mesurer périodiquement sa performance financière par rapport au budget. ',
      },
      {
        type: 'ul',
        title: 'Il permet : ',
        value: [
          'de contrôler la progression des emplois et des ressources d\'une période sur l\'autre,',
          'de surveiller et d\'ajuster les activités en conséquence, ',
          'de rendre compte aux partenaires financiers du programme.',
        ],
      },
      {
        type: 'subtitle',
        value: 'Dimension 6 : Financements et partenariats',
      },
      {
        type: 'default',
        value: 'La dimension 6 demeure le fer de lance de toutes les actions développées par le consortium CSC - LCC et ses partenaires. ',
      },
      {
        type: 'ul',
        title: 'Elle rassemble l’ensemble des documents et outils permettant : ',
        value: [
          'de collecter des fonds publics et privés, ',
          'de référencer des partenaires et investisseurs, ',
          'd’assurer le suivi des exigences des bailleurs de fonds,',
          'de communiquer sur les actions et convictions du programme.',
        ],
      },
      {
        type: 'default',
        value: 'Le consortium CSC - LCC et ses partenaires mettent en place une stratégie de recherche de fonds, d’identification et de sélection de pistes de financement, de rédaction de dossiers de demande de subvention… pour les actions entreprises dans les différents pays d’intervention. ',
      },
      {
        type: 'default',
        value: 'Une relation régulière et transparente est assurée avec les partenaires financiers du/des projets. ',
      },
      {
        type: 'ul',
        title: 'La recherche de financements suit les modalités de l’approche globale à savoir: ',
        value: [
          'la création et le développement du fond d’amorçage,',
          'les effets de leviers des partenariats publics / privés (en référence avec l’approche globale de notre action).',
        ],
      },
      {
        type: 'default',
        value: 'Cette dimension inclut également pour le consortium CSC - LCC et ses partenaires, l’identification de partenaires autres que financiers à savoir les partenaires techniques. Il peut s’agir par exemple de centre de recherche, d’universités, d’entreprises développant des compétences utiles pour les actions menées sur le terrain, de start-up développant des applications…',
      },
      {
        type: 'default',
        value: '',
      },
      {
        type: 'subtitle',
        value: 'Dimension 7 : Reporting',
        className: 'object-bottom'
      },
      {
        type: 'image',
        value: '/Images/methodologie-sur-le-terrain/dimension-7.jpg',
      },
      {
        type: 'default',
        value: 'Toutes les activités et actions menées sur le terrain doivent être répertoriées et capitalisées dans des documents et outils développés à cet effet. Il s’agit notamment de rapports d’activités, de rapports mensuels, trimestriels ou annuels. L’ensemble des documents créés constitue la mémoire du programme. ',
      },
      {
        type: 'default',
        value: 'Par ailleurs, Let’s Catch Carbon fera parfois appel à des cabinets ou structures spécialisés qui contribueront à la production de rapports techniques, d\'études techniques, d’expertises spécifiques. Ces rapports viennent enrichir les connaissances et la capitalisation des actions en vue de potentielles réplications dans d’autres secteurs géographiques ou sur d’autres spéculations agricoles.',
      },
    ]
  },
  {
    category: 'Notre Modèle au Cameroun',
    color: '#1d232f',
    bgColor: '#42e661',
    text: 'Notre Modèle au Cameroun',
    src: '',
    link: '/notre-modele-au-cameroun',
    content: [
      {
        type: 'default',
        value: 'L’objectif général des programmes que nous développons est de répondre par le biais de la filière du café aux défis croisés du changement climatique, de l’éducation des populations et de la pauvreté, en vue d’améliorer les conditions de vie et la résilience climatique des populations vulnérables. ',
      },
      {
        type: 'default',
        value: 'Dans l’exemple qui suit (extrait de nos actions au Cameroun), le programme se décline en trois axes clés : ',
      },
      {
        type: 'default',
        value: 'Axe 1 : Accompagner et structurer le développement du partenaire local et d’une filière café à empreinte carbone neutre ou négative. ODD 8, 13 et 17',
      },
      {
        type: 'default',
        value: 'Axe 2 : Tester les solutions agroécologiques, renforcer les compétences des producteurs et vulgariser les pratiques agroécologiques caféières. ODD 2, 4 et 13',
      },
      {
        type: 'default',
        value: 'Axe 3 : Développer une offre de services et de projets sociaux et environnementaux pour les producteurs de café. ODD 2, 3, 4, 5, 7 ',
      },
      {
        type: 'bordered',
        value: [
          'Axe 1 : Accompagner et structurer le développement de la coopérative Terra Noun et d’une filière café à empreinte carbone neutre ou négative.',
          'Résultat 1.1 - La coopérative Terra Noun structure sa gouvernance et développe son organisation interne et externe : Poursuivre l’organisation de la gouvernance de la coopérative ; Renforcer l’équipe de Terra Noun ; Renforcer les compétences des équipes ; Développer les outils de suivi et de gestion de Terra Noun ; Réaliser les réunions de gouvernance et informer ses membres.',
          'Résultat 1.2 - Terra Noun contribue à l’organisation de la filière café dans le Noun : Réaliser une enquête auprès des producteurs du département du Noun ; Acquérir des infrastructures et des matériels pour organiser la filière ; Mettre en place des itinéraires techniques culturaux sur la base de l’Agroécologie ; Sensibiliser et fédérer les producteurs autour de Terra Noun ; Développer un système de petite mécanisation auprès des producteurs afin de réduire la pénibilité du travail. ',
          'Résultat 1.3 - Un système de commercialisation équitable et durable est mis en place pour les producteurs de Terra Noun : Développer le concept de la culture de café à empreinte/impact ; Assurer l’achat du café vert auprès des producteurs de Terra Noun ; Mettre en place un système de préfinancement des producteurs ; Optimiser les étapes de commercialisation (approche Direct Trade); Organiser le système de rétribution post récolte.',
          'Prévisions budgétaires Axe 1 : 3 200 000€ (dont 2,8 M€ pour les plantations et réhabilitations)',
        ],
      },
      {
        type: 'bordered',
        value: [
          'Axe 2 : Tester les solutions agroécologiques, renforcer les compétences des producteurs et vulgariser les pratiques agroécologiques caféières dans le Noun.',
          'Résultat 2.1 - Une ferme école permet le renforcement des compétences en continu des producteurs : Construire les infrastructures de la ferme école ; Aménager les parcelles agricoles et les zones d’élevage de la ferme école ; Élaborer les cursus pédagogiques adaptés aux populations locales ; Identifier et sélectionner les producteurs / productrices participant aux formations ; Recruter et former les équipes pédagogiques ; Réaliser les formations modulaires théoriques et pratiques ; Elaborer et valider le plan d’affaire à 5 ans de la ferme école.',
          'Résultat 2.2 - La ferme école sert de terrain d’expérimentation et permet la diffusion des pratiques agroforestières sur le long terme : Mettre en place des parcelles d’expérimentation ; Développer des pépinières et des germoirs ; Distribuer et assurer la plantation des espèces arbustives ; Vulgariser les modèles agroforestiers auprès des producteurs ; Réaliser une enquête auprès des producteurs formés.',
          'Prévisions budgétaires OS2 :  800 000€ (dont 250 000€ d’investissements)3 200 000€ (dont 2,8 M€ pour les plantations et réhabilitations)',
        ],
      },
      {
        type: 'bordered',
        value: [
          'Axe 3 : Développer une offre de services et de projets sociaux et environnementaux pour les producteurs de café du Noun.',
          'Résultat 3.1 - Terra Noun et ses partenaires organisent un système de financement de projets sociaux et environnementaux : Identifier des projets portés par les populations ; Mettre en place un jury de sélection compétent ; Valider le modèle de financement par la caisse de financement social de Terra Noun ; Développer des approches de financement participatives ; Promouvoir les partenariats avec les entreprises.',
          'Résultat 3.2 - Terra Noun et ses partenaires promeuvent un programme d’inclusion sociale à travers des projets utiles aux populations vulnérables : Sélectionner des projets pour les femmes ; Sélectionner des projets sur l’accès à l\'Énergie ; Sélectionner des projets d’appui à la jeunesse et l’éducation ; Sélectionner des projets dans d’autres secteurs.',
          'Résultat 3.3 - Chacun son Café et ses partenaires s’engagent dans un processus d’enregistrement à la Finance Carbone : Réaliser une étude baseline ; Réaliser une enquête de monitoring ; Rédiger et enregistrer le Project Design Document (PDD).',
          'Prévisions budgétaires Axe 3 :  1 500 000€ (dont 50% dédié aux projets sociaux et environnementaux)',
        ],
      },
      {
        type: 'medium',
        value: 'Bénéficiaires directs : 6000 producteurs et productrices du département du Noun',
      },
      {
        type: 'default',
        value: 'Bénéficiaires indirects : Les familles des ménages soit environ 30 000 personnes (5 personnes par ménage). Les autres bénéficiaires indirects sont les employés de la coopérative (qui bénéficient d’une montée en compétences, d’un revenu régulier et de conditions de travail décentes), les fournisseurs (entreprises, artisans, associations…) qui sont contractés au cours du programme, les autorités camerounaises, et en particulier le Ministère de l’Agriculture et du Développement Rural (MINADER) et ses différentes branches, qui bénéficient des développements du programme, les populations du Noun (1 540 000 habitants – chiffre 2019) bénéficient indirectement de l’essor général de la filière café (augmentation de l’activité économique).',
      },
      {
        type: 'bordered',
        value: [
          'AXES PRÉSENTANT DES CO-BÉNÉFICES',
          'Développement de projets sociaux et environnementaux pour les populations du Noun dans les domaines de l’accès à l’Energie, l’éducation, l’Empowerment des femmes, l’accès à l’eau…',
          'Exemples de projets développés : installation d’une unité de fabrication de serviettes hygiéniques réutilisables, diffusion de foyers améliorés, forage de puits pour la consommation d’eau potable…',
          'Indicateur 1 : 5 projets sociaux ou environnementaux développés chaque année',
          'Indicateur 2 : 100 villages ciblés par le programme',
          'Génération de crédits Carbone : le programme prévoit un enregistrement au VCS sur une période de 40 ans. 12 000 Ha sont concernés dont 5400 Ha représentent de nouvelles plantations agroforestières et 6600 Ha représentent des plantations réhabilitées.',
          'Indicateur : 320 000 T de carbone / an',
          'Réplicabilité du modèle : Possibilité de passage à l’échelle et de réplication du programme à d’autres régions.',
          'Indicateurs : 250 paysans relais formés',
        ],
      },
      {
        type: 'medium',
        value: 'Les partenaires au cœur du programme',
      },
      {
        type: 'default',
        value: 'Lets Catch Carbon (LCC) : L’association Let’s Catch Carbon (LCC) est une association française loi 1901 sans but lucratif. Elle a été créée afin d’encadrer et superviser le programme. Let\'s Catch Carbon a comme objectifs la lutte contre les changements climatiques et la préservation de la biodiversité.',
      },
      {
        type: 'default',
        value: 'Terra Noun : Coopérative de droit camerounais, fondée en 2013 pour lutter contre l’exode rural des jeunes, la coopérative a été créée pour relancer la filière du café en travaillant sur un café de qualité qui permet d’améliorer les revenus des producteurs. Elle est le partenaire opérationnel de terrain et met en œuvre les activités dans le département du Noun.',
      },
      {
        type: 'default',
        value: 'Chacun Son Café (CSC) : Chacun Son Café est une entreprise (statut SAS) créée en 2005, qui fournit des solutions café aux entreprises et aux particuliers. Chacun Son Café joue un rôle d’appui aux financements (en propre ou par l’intermédiaire de ses clients) pour investir et participer aux projets développés avec les populations. Entreprise à impact, Chacun Son Café est certifiée B-CORP.',
      },
      {
        type: 'medium',
        value: 'Les partenaires techniques institutionnels et financiers',
      },
      {
        type: 'default',
        value: 'Les institutions de recherche agronomiques tels que le Centre de coopération internationale en recherche agronomique pour le développement (CIRAD), l’Institut de Recherche Agricole pour le Développement (IRAD) du Cameroun',
      },
      {
        type: 'default',
        value: 'Les acteurs de la filière comme le Conseil Interprofessionnel du Cacao et du Café (CICC), ou l’International Trade Center (ITC) ou les partenaires tels que le Ministère de l\'Agriculture et du Développement Rural (MINADER), le Fonds de Développement des filières Cacao et Café (FODECC), l’Union Européenne (UE), l’Agence Française de Développement (AFD), l’Organisation des Nations Unies, notamment l’Organisation pour l\'alimentation et l\'agriculture (FAO), les fondations internationales et les fondations d’entreprises, les entreprises privées et fédérations professionnelles…',
      },
    ]
  }
]

export const projectFilter = [
  { name: "Accès à l'eau", activeBgColor: "#40E0D0", inactiveBgColor: "#fff", activeTextColor: "#003333", inactiveTextColor: "#000000" },
  { name: "Accès à l'énergie", activeBgColor: "#FAFAD2", inactiveBgColor: "#fff", activeTextColor: "#8B8000", inactiveTextColor: "#000000" },
  { name: "Agriculture raisonnée", activeBgColor: "#808000", inactiveBgColor: "#fff", activeTextColor: "#F0E68C", inactiveTextColor: "#000000" },
  { name: "Agroforesterie", activeBgColor: "#228B22", inactiveBgColor: "#fff", activeTextColor: "#FFFFFF", inactiveTextColor: "#000000" },
  { name: "Digital", activeBgColor: "#8A2BE2", inactiveBgColor: "#fff", activeTextColor: "#FFFFFF", inactiveTextColor: "#000000" },
  { name: "Sécurité alimentaire", activeBgColor: "#E27D2B", inactiveBgColor: "#fff", activeTextColor: "#FFD700", inactiveTextColor: "#000000" },
  { name: "Santé / Hygiène", activeBgColor: "#98FB98", inactiveBgColor: "#fff", activeTextColor: "#006400", inactiveTextColor: "#000000" },
  {
    name: "Empowerment des Femmes",
    activeBgColor: "#FF1493",
    inactiveBgColor: "#fff",
    activeTextColor: "#fff",
    inactiveTextColor: "#000000",
  },
  {
    name: "Entrepreneuriat",
    activeBgColor: "#B22222",
    inactiveBgColor: "#fff",
    activeTextColor: "#FFD700",
    inactiveTextColor: "#000000",
  },
  {
    name: "Formation",
    activeBgColor: "#EEE8AA",
    inactiveBgColor: "#fff",
    activeTextColor: "#8A2BE2",
    inactiveTextColor: "#000000",
  },
  {
    name: "Low Tech",
    activeBgColor: "#A52A2A",
    inactiveBgColor: "#fff",
    activeTextColor: "#FF6347",
    inactiveTextColor: "#000000",
  },
  {
    name: "Éducation",
    activeBgColor: "#FF7F50",
    inactiveBgColor: "#fff",
    activeTextColor: "#FFFFFF",
    inactiveTextColor: "#000000",
  },
  {
    name: "Réduction de la pénibilité",
    activeBgColor: "#98FB98",
    inactiveBgColor: "#fff",
    activeTextColor: "#006400",
    inactiveTextColor: "#000000",
  },
];