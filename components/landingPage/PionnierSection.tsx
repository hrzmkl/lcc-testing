"use client";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
// import SectionsPionniers from "@/components/HomeSections/PionnierSections";
import SectionsPionniers2 from "@/components/HomeSections/PionnierSections2";
import IncubateurDeProjetSection from "@/components/HomeSections/IncubateurDeProjetSection";
import dynamic from "next/dynamic";
import { useAppStore } from "@/store/appStore";
import { usePathname } from "next/navigation";

const CestIciQueToutCommenceSection = dynamic(() => import("@/components/HomeSections/CestIciQueToutCommenceSection"), { ssr: false });
const ProgrammeTerrain = dynamic(() => import("@/components/HomeSections/ProgrammeTransformation"), { ssr: false });
const ActionnairesSlides = dynamic(() => import("@/components/HomeSections/ActionnairesSlides"), { ssr: false });
const SectionsCafeDiscuss = dynamic(() => import("@/components/HomeSections/CafeUneArmeBio"), { ssr: false });
const NousSommesDansLaPhaseSection = dynamic(() => import("@/components/HomeSections/NousSommesDansLaPhaseSection"), { ssr: false });
const PrincipeGouvernanceSection = dynamic(() => import("@/components/HomeSections/PrincipeGouvernanceSection"), { ssr: false });
const QuestionSection = dynamic(() => import("@/components/HomeSections/QuestionSection"), { ssr: false });

type SectionID =
  // | "SectionsPionniers"
  | "SectionsPionniers2"
  | "Start"
  | "SectionsCafeDiscuss"
  | "ActionnairesSlides"
  | "CestIciQueToutCommenceSection0"
  | "CestIciQueToutCommenceSection"
  | "ProgrammeTerrain"
  | "ProgrammeTerrain0"
  | "IncubateurDeProjetSection"
  | "DansLaPhaseSection"
  | "PrincipeGouvernanceSection"
  | "QuestionSection"
  | "FootSect";

interface SectionConfig {
  id: SectionID;
  component: React.ReactNode | (() => React.ReactNode);
  style?: React.CSSProperties;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

const PionnierSection = () => {
  const pathname = usePathname();
  const setBgColor = useAppStore((state) => state.setBgColor);
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [isFaq, setIsFaq] = useState(false);

  const [loadedSections, setLoadedSections] = useState(() => [true, true, ...Array(12).fill(false)]);

  const sectionColors = useMemo(() => ({
    // SectionsPionniers: "#d8fc31",
    SectionsPionniers2: "#d8fc31",
    Start: "#d8fc31",
    IncubateurDeProjetSection: "#eeff69",
    ActionnairesSlides: "#1d232f",
    SectionsCafeDiscuss: "#780016",
    CestIciQueToutCommenceSection0: "#780016",
    CestIciQueToutCommenceSection: "#f8bfeb",
    ProgrammeTerrain0: "#f9d9f3",
    ProgrammeTerrain: "#f9d9f3",
    DansLaPhaseSection: "#dfe5a3",
    PrincipeGouvernanceSection: "#f8bfeb",
    QuestionSection: "#5a1676",
    FootSect: "#ff37fc",
  }), []);

  const renderSection = useCallback((section: SectionConfig, isLoaded: boolean) => {
    if (!isLoaded) return null;
    if (typeof section.component === "function") return section.component();
    return section.component;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id as SectionID;
          if (entry.isIntersecting) {
            if ((sectionId !== "CestIciQueToutCommenceSection") || (window.scrollY === 0)) {
              if ((window.scrollY === 0) && (pathname == '/')) setBgColor("#d8fc31");
              else setBgColor(sectionColors[sectionId] || "#d8fc31");
            }
            setIsFaq(sectionId === "QuestionSection");
          }
        });
      },
      {
        threshold: [0.22],
      }
    );

    const currentSections = sectionsRef.current.slice();
    currentSections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sectionColors, setBgColor]);

  useEffect(() => {
    const lazyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-section-idx"));
          if (entry.isIntersecting && !loadedSections[idx + 1] && idx + 1 < loadedSections.length) {
            setLoadedSections((prev) => {
              const next = [...prev];
              next[idx + 1] = true;
              return next;
            });
          }
        });
      },
      {
        rootMargin: "400px 0px 400px 0px",
        threshold: 0,
      }
    );

    const lastLoadedIdx = loadedSections.lastIndexOf(true);
    const currentSections = sectionsRef.current.slice(); // capture snapshot
    if (currentSections[lastLoadedIdx]) {
      lazyObserver.observe(currentSections[lastLoadedIdx]!);
    }

    return () => {
      if (currentSections[lastLoadedIdx]) {
        lazyObserver.unobserve(currentSections[lastLoadedIdx]!);
      }
    };
  }, [loadedSections]);

  const sectionConfigs: SectionConfig[] = [
    // { id: "SectionsPionniers", component: <SectionsPionniers /> },
    { id: "SectionsPionniers2", component: <SectionsPionniers2 /> },
    { id: "Start", component: null },
    { id: "IncubateurDeProjetSection", component: <IncubateurDeProjetSection /> },
    { id: "ActionnairesSlides", component: () => <ActionnairesSlides /> },
    { id: "SectionsCafeDiscuss", component: () => <SectionsCafeDiscuss /> },
    { id: "CestIciQueToutCommenceSection0", component: null },
    { id: "CestIciQueToutCommenceSection", component: () => <CestIciQueToutCommenceSection /> },
    { id: "ProgrammeTerrain0", component: null },
    { id: "ProgrammeTerrain", component: () => <ProgrammeTerrain /> },
    { id: "DansLaPhaseSection", component: () => <NousSommesDansLaPhaseSection /> },
    { id: "PrincipeGouvernanceSection", component: () => <PrincipeGouvernanceSection isFaq={isFaq} /> },
    { id: "QuestionSection", component: () => <QuestionSection /> },
    { id: "FootSect", component: null, props: { className: "h-[64px]" } },
  ];

  return (
    <div className="relative z-[11] overflow-x-hidden">
      {sectionConfigs.map((section, i) => (
        <div
          key={section.id}
          ref={el => { sectionsRef.current[i] = el; }}
          id={section.id}
          data-section-idx={i}
          style={section.style}
          {...section.props}
        >
          {renderSection(section, loadedSections[i])}
        </div>
      ))}
    </div>
  );
};

export default PionnierSection;
