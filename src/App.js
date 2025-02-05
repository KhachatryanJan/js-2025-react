
import './App.css';

import Footer from './components/Footer/Footer';
import LanguageProvider, { LanguageContexte } from "./context/languageContexte";
import HeaderFull from './components/Header/HedreFull';


function App() {
  return (
    <LanguageProvider >
     <HeaderFull/>
     <Footer/>
   </LanguageProvider>
  );
}

export default App
