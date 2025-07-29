import { Routes, Route } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import Offer from "../components/Offer/Offer";
import Priopity from "../components/Priority/Priority";
import ServiceGrid from "../components/Services/Services";

import About from "../pages/About/About";
import JobDetails from "../pages/JobDetails/JobDetails";
import Service from "../pages/Service/Service";
import Impressum from "../pages/Impressum/Impressum";
import Privacy from "../pages/Privacy/Privacy";
import Jobs from "../pages/Jobs/Jobs";
import NotFound from "../pages/NotFound/NotFound";
import AdditionalServices from "../components/AdditionalServices/AdditionalServices";
import Callback from "../pages/Callback/Callback";
import FAQSection from "../components/FAQSection/FAQSection";
import Contact from "../pages/Contact/Contact";
import OrderPage from "../pages/OrderPage/OrderPage";
import Resume from "../pages/Resume/Resume";
import Coupon from "../pages/Coupon/Coupon";
import ServiceTypes from "../pages/ServiceTypes/ServiceTypes";
import OptionalServices from "../pages/OptionalServices/OptionalServices";

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
      <Route path="art-der-leistung" element={<ServiceTypes />} />
      <Route path="/zusatzleistungen" element={<OptionalServices />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bestellen" element={<OrderPage />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/coupon" element={<Coupon />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Privacy />} />
      <Route path="/jobs" element={<Jobs />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
