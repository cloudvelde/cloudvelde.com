// Components
import Header from "./components/Header";
import Image from './components/Image';
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from './components/Footer';
import Typing from './components/Typing';
import SignUpWithField from "./components/SignUpWithField";

import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';

// CSS related stuff
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Assets
import logo from "./logo.png";

function App() {
  return (
      <Router>
        <div className="app" itemID="loader">
          <div className="titleContainer">
              <Header />
              <Route path="/" exact render={(props) => (
                  <>
                    <Image src={logo} className="title" alt="cloudvelde"/>
                    <Typing />
                      <SignUpWithField />
                  </>
              )}/>
              <Route path="/privacy" render={(props) => (
                  <>
                      <Link to="/">
                        <Image src={logo} className="title titleSmall" alt="cloudvelde"/>
                      </Link>
                      <PrivacyPolicy />
                      <Link to="/">
                        <Image src={logo} className="title titleSmall extraPaddingBottom" alt="cloudvelde"/>
                      </Link>
                  </>
              )}/>
              <Footer />
          </div>
        </div>
      </Router>
  );
}

export default App;
