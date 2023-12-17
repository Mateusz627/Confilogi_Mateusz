import "./scss/App.scss";
import HomeBar from "./components/HomeBar";
import HomeSimple from "./components/HomeSimple";
import HomeFeatures from "./components/HomeFeatures";
import HomeDownload from "./components/HomeDownload";
import HomeFAQ from "./components/HomeFAQ";
import HomeContact from "./components/HomeContact";
import HomeFooter from "./components/HomeFooter";
import Modal from "./components/Modal";
function App() {
  return (
    <>
      <HomeBar />
      <HomeSimple />
      <HomeFeatures />
      <HomeDownload />
      <HomeFAQ />
      <HomeContact />
      <HomeFooter />
      <Modal />
    </>
  );
}

export default App;
