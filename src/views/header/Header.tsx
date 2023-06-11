import * as React from "react";
import "./Header.scss";
import CatAnimation from "@/components/catAnimation/CatAnimation";
import useDarkMode from "@/hooks/useDarkMode";
import ExamplePdf from "@/assets/files/cv.pdf";
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  const { isDarkMode } = useDarkMode();

  const handleDownloadCV = () => {
    const filePath = ExamplePdf;
    const a = document.createElement("a");
    a.href = filePath;
    a.download = filePath.substr(filePath.lastIndexOf("/") + 1);
    a.setAttribute("download", `CV-Vu-Viet-Hoang.pdf`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="header">
      {isDarkMode ? (
        <CatAnimation />
      ) : (
        <button onClick={() => window.scrollTo(0, 0)}>
          <img src="/src/assets/images/image.png" alt="" width={80} />
        </button>
      )}

      <div className="nav-link">
        <button onClick={handleDownloadCV}>myCV</button>
        <button
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/hoang-vu-viet-93608114b/",
              "_blank"
            );
          }}>
          myLinkedin
        </button>
      </div>
    </div>
  );
};

export default Header;
