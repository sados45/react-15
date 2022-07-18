import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // bu sekilde yazarak importu gerceklesir, router domun. 
import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Main from './components/Main';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className="App">
      
<Router>
  <Routes>

    <Route path= '/' element = { <Main /> } />
    <Route path= '/about-us'element={<AboutUs/>}/>
    <Route path= '/contact'element={<Contact/>}/>  
    {/* burada Routelarin icine main dahil uzantilarimizi verdik. localhost3000 yanina slas ile birlikte contact ve AboutUs yazdigimizda ana sayfada bu ikisini yazdirmis oluruz.   */}
    <Route path = '/user-info/:userId'element={<UserInfo/>}/>
  </Routes>

 </Router> {/*distan ice dogru sarmal yaptik.  */}

    </div>
  );
}

export default App;

// npm install react-router-dom@6 yaptik.react router-dom u kurmak icin.
