// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import Hotels from "./hotels";
import CountryPreference from "./countrypreference";
import AboutUs from "./AboutUs";
import SignIn from "./SignIn";
import Cars from "./cars";
import Help from "./help";
import Home from "./home";
import Privacy from "./privacy";
import Search from "./search";
import Package from "./package";
import Signup from "./signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/countrypreference" element={<CountryPreference />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/search" element={<Search />} />
        <Route path="/package" element={<Package />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
