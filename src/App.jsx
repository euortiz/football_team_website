import styles from "./styles";

import {
  Avanti,
  Champion,
  Footer,
  Hero,
  LastGoals,
  Nav,
  News,
  SocialMedia,
  Store,
  BrCups,
} from "./components";

const App = () => (
  <div className="bg-dwhite flex flex-wrap">
    <Nav />
    <Hero />
    <News />
    <SocialMedia />
    <LastGoals />
    <Store />
    <Avanti />
    <Champion />
    <BrCups />
    <Footer />
  </div>
);

export default App;
