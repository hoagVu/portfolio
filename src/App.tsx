import Layout from "@/views/layout/Layout";
import "./App.scss";
import Header from "@/views/header/Header";
import Footer from "@/views/footer/Footer";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <Header />
      <Layout />
      <Footer />
    </>
  );
};

export default App;
