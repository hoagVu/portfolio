import * as React from "react";
import "./Header.scss";
import CatAnimation from "@/components/catAnimation/CatAnimation";
import useDarkMode from "@/hooks/useDarkMode";
import ExamplePdf from "@/assets/files/CV_Vu Viet Hoang_FE_Developer.pdf";
import { DownloadIcon, LinkedinIcon } from "lucide-animated";
import logoIcon from "/src/assets/images/image.png";

interface IHeaderProps {}

type TAnimatedIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

const sectionNavItems = [
  { id: "info-about", label: "About" },
  { id: "info-work", label: "Experience" },
  { id: "info-skills", label: "Skills" },
  { id: "info-projects", label: "Projects" },
];

const Header: React.FunctionComponent<IHeaderProps> = () => {
  const { isDarkMode } = useDarkMode();
  const cvIconRef = React.useRef<TAnimatedIconHandle | null>(null);
  const linkedinIconRef = React.useRef<TAnimatedIconHandle | null>(null);
  const [activeSectionId, setActiveSectionId] = React.useState(sectionNavItems[0].id);

  React.useEffect(() => {
    const sections = sectionNavItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const getHeaderHeight = () => {
      const appElm = document.querySelector(".app") as HTMLElement | null;
      const headerVar = appElm
        ? getComputedStyle(appElm).getPropertyValue("--header-height")
        : "";
      const parsedHeaderHeight = Number.parseFloat(headerVar);

      return Number.isNaN(parsedHeaderHeight) ? 80 : parsedHeaderHeight;
    };

    const updateActiveSection = () => {
      const marker = window.scrollY + getHeaderHeight() + 120;
      let nextActiveSectionId = sections[0].id;

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (marker >= sectionTop) {
          nextActiveSectionId = section.id;
        }
      }

      setActiveSectionId(nextActiveSectionId);
    };

    let frameId = 0;

    const handleScroll = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const triggerIconAnimation = (iconRef: React.RefObject<TAnimatedIconHandle | null>) => {
    iconRef.current?.startAnimation();
  };

  const handleDownloadCV = () => {
    const filePath = ExamplePdf;
    const a = document.createElement("a");
    a.href = filePath;
    a.download = filePath.substr(filePath.lastIndexOf("/") + 1);
    a.setAttribute("download", `CV_Vu_Viet_Hoang_FE_Developer.pdf`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElm = document.getElementById(sectionId);

    if (!sectionElm) {
      return;
    }

    setActiveSectionId(sectionId);

    sectionElm.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="header">
      <div className="header-inner">
        <div className="brand-slot">
          {isDarkMode ? (
            <CatAnimation />
          ) : (
            <button className="brand-button" onClick={() => window.scrollTo(0, 0)}>
              <img src={logoIcon} alt="" width={80} />
            </button>
          )}
        </div>

        <nav className="section-nav" aria-label="Main sections">
          {sectionNavItems.map((item) => (
            <button
              key={item.id}
              className={`section-button ${
                activeSectionId === item.id ? "section-button-active" : ""
              }`}
              aria-current={activeSectionId === item.id ? "page" : undefined}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-link">
          <button
            className="nav-button"
            onClick={handleDownloadCV}
            onFocus={() => triggerIconAnimation(cvIconRef)}
            onMouseEnter={() => triggerIconAnimation(cvIconRef)}
          >
            <DownloadIcon ref={cvIconRef} className="nav-button-icon" size={16} />
            <span>myCV</span>
          </button>
          <button
            className="nav-button"
            onFocus={() => triggerIconAnimation(linkedinIconRef)}
            onMouseEnter={() => triggerIconAnimation(linkedinIconRef)}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/hoang-vu-viet-93608114b/",
                "_blank"
              );
            }}>
            <LinkedinIcon
              ref={linkedinIconRef}
              className="nav-button-icon"
              size={16}
            />
            <span>myLinkedin</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
