import { Routes, Route } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import Offer from "../components/Offer/Offer";
import Priopity from "../components/Priority/Priority";
import ServiceGrid from "../components/Services/Services";

import About from "../pages/About/About";
import JobDetails from "../pages/JobDetails/JobDetails";
import Service from "../pages/Service/Service";
import AdditionalServices from "../components/AdditionalServices/AdditionalServices";
import Impressum from "../pages/Impressum/Impressum";
import Jobs from "../pages/Jobs/Jobs";
import NotFound from "../pages/NotFound/NotFound";
import FAQSection from "../components/FAQSection/FAQSection";
import Contact from "../pages/Contact/Contact";
import Resume from "../pages/Resume/Resume";

import jobData from "../data/jobData";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Offer />
            <Priopity />
            <ServiceGrid />
            <AdditionalServices />
            <FAQSection />
          </>
        }
      />
      <Route path="/uber-uns" element={<About jobs={jobData} />} />
      <Route path="/leistungen" element={<Service />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/jobs" element={<Jobs />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
