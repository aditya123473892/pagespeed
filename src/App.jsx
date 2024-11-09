import "./App.css";
import WebsiteGrader from "./components/WebsiteGrader";
import Main from "./components/Main";
import Lighthouse from "./components/lighthouse";
import PageSpeedCards from "./components/Appspeedcard";
import PageSpeedInsights from "./Pagespeed";

function App() {
  return (
    <>
      <WebsiteGrader />
      <Main />
      <PageSpeedCards></PageSpeedCards>
      <PageSpeedInsights></PageSpeedInsights>

      {/* <Lighthouse/> */}
    </>
  );
}

export default App;
