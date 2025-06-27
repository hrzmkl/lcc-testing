import Image from 'next/image';

const DevenirAdherent = () => {
  return (
    <div className="bg-[#2e364b] text-[#f5ffa3] p-6 rounded-[24px] flex items-center gap-4 shadow-lg hover:shadow-5xl transition-shadow duration-300 group">
      <Image
        src="/Images/Calque.svg"
        alt="Adhérente logo"
        width={40}
        height={40}
        className="w-10 h-10 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:contrast-200 group-hover:hue-rotate-[90deg] group-hover:saturate-300"
      />
      <div>
        <h3 className="text-lg font-semibold group-hover:text-[#64ff58]">
          Adhérente
        </h3>
        <a
          href="#"
          className="text-sm underline text-[#f5ffa3] hover:text-[#64ff58]"
        >
          Devenir adhérent
        </a>
      </div>
    </div>
  );
};

export default DevenirAdherent;
