
import './App.css';

import HeaderFull from './components/Header/HedreFull';
import Main from './components/Main/main1';
import LanguageProvider, { LanguageContexte } from "./context/languageContexte";
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import DoctorInfoPage from './Pages/DoctorInfoPage';
import DateManthOligaFull from './components/Main/DateManthOligaFull';


function App() {
  return (
    <LanguageProvider >
    <HeaderFull/>
    <Routes>
       <Route path="/" element={<Main/>}>
       <Route path="Upcoming" element={<DateManthOligaFull/>}/>
         <Route path="Past" element={<DateManthOligaFull/>}/>
        </Route>
       <Route path ={`/docinfo`} element={<DoctorInfoPage/>}/>
    </Routes>
    <Footer/>
   </LanguageProvider>
  );
}

export default App
