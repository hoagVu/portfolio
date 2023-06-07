import useDarkMode from "@/hooks/useDarkMode";
import "./App.scss";
import Header from "@/views/header/Header";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { currentTheme, toggleDarkMode } = useDarkMode();
  console.log("currentTheme", currentTheme);
  return (
    <div className="app" data-theme={currentTheme}>
      <Header />
      <div style={{ marginTop: 100 }}>
        <span>Easy Darkmode and Themes in React</span>
        <button onClick={toggleDarkMode}>
          Switch {currentTheme} to {currentTheme === "light" ? "Dark" : "Light"}{" "}
          Theme
        </button>
      </div>
    </div>
  );
};

export default App;
