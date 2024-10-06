import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Technical from "./pages/Technical";
import NonTechnical from "./pages/NonTechnical";
import Workshop from "./pages/Workshop";
import Gallery from "./pages/Gallery";
import Paperpresentation from "./pages/Technical/Paperpresentation";
import Projectpresentation from "./pages/Technical/Projectpresentation";
import Webdevelopment from "./pages/Technical/Webdevelopment";
import Electroquiz from "./pages/Technical/Electroquiz";
import Circuittrack from "./pages/Technical/Circuittrack";
import Cadfest from "./pages/Technical/Cadfest";
import Oldtownroad from "./pages/Technical/Oldtownroad";
import Beyondinks from "./pages/Non-Technical/Beyondinks";
import Narrativepulse from "./pages/Non-Technical/Narrativepulse";
import Fotohunt from "./pages/Non-Technical/Fotohunt";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Technical Event's Path */}
        <Route path='/technical' element={<Technical />} />
        <Route path='/non-technical' element={<NonTechnical />} />
        <Route path='/workshop' element={<Workshop />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/paper-presentation' element={<Paperpresentation />} />
        <Route path='/project-presentation' element={<Projectpresentation />} />
        <Route path='/web-app-development' element={<Webdevelopment />} />
        <Route path='/electrio-quiz' element={<Electroquiz />}/>
        <Route path='/circuit-track' element={<Circuittrack /> }/>
        <Route path='/cadfest' element={<Cadfest />} />
        <Route path='old-town-road' element={<Oldtownroad />} />
        {/* Non Technical Event's Path */}
        <Route path='/beyondinks' element={<Beyondinks />}/>
        <Route path='/foto-hunt' element={<Fotohunt />}/>
        <Route path='/narrative-pulse' element={<Narrativepulse />}/>
      </Routes>
    </Router>
  );
}

export default App;
