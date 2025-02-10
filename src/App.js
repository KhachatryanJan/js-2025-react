
import './App.css';

import HeaderFull from './components/Header/HedreFull';
import Main from './components/Main/main1';
import LanguageProvider, { LanguageContexte } from "./context/languageContexte";
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import DoctorInfoPage from './Pages/DoctorInfoPage';
import DateManthOligaFull from './components/Main/DateManthOligaFull';
import DoctorProvider from './context/DoctorConstext';


function App() {
  return (
    <LanguageProvider >
      <DoctorProvider>
    <HeaderFull/>
    <Routes>
       <Route path="/" element={<Main/>}>
       <Route path="Upcoming" element={<DateManthOligaFull/>}/>
         <Route path="Past" element={<DateManthOligaFull/>}/>
        </Route>
       <Route path ={`/docinfo/:id`} element={<DoctorInfoPage/>}/>
    </Routes>
    <Footer/>
    </DoctorProvider>
   </LanguageProvider>
  );
}

export default App
