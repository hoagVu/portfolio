import useDarkMode from "@/hooks/useDarkMode";
import Footer from "@/views/footer/Footer";
import Header from "@/views/header/Header";
import Layout from "@/views/layout/Layout";
import "./App.scss";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { currentTheme } = useDarkMode();
  return (
    <div className="app" data-theme={currentTheme}>
      <Header />
      <Layout />
      <Footer />
    </div>
  );
};

export default App;
