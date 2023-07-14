import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/blog";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import FAQ from "./pages/FAQ";
import Membership from "./pages/Membership";
import Team from "./pages/Team";
import SharedLayout from "./pages/SharedLayout";
import Shop from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Contacts" element={<Contacts />} />
        <Route path="Faq" element={<FAQ />} />
        <Route path="Membership" element={<Membership />} />
        <Route path="Team" element={<Team />} />
        <Route path="Shop" element={<Shop />} />
      </Route>
    </Routes>
    // </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //
    //       <Route index element={<Home />} />
    //
    //
    //
    //
    //
    //
    //       <Route path="Shop" element={<Shop />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
