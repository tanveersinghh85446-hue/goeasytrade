import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import DealRoom from "./pages/DealRoom";
import FindBuyers from "./pages/FindBuyers";
import Blogs from "./pages/Blog";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import Team from "./pages/Team";
import Sitemap from "./pages/Sitemap";
import PostYourRequirement from "./pages/PostYourRequirement";
import UserGuide from "./pages/UserGuide";
import Catalogs from "./pages/Catalogs";
import Gallery from "./pages/Gallery";
import HelpCenter from "./pages/HelpCenter";
import JobsCareers from "./pages/JobsCareers";
import Subscriptions from "./pages/Subscriptions";
import SuccessStories from "./pages/SuccessStories";
import GetOwnWebsite from "./pages/GetOwnWebsite";
import WebStories from "./pages/WebStories";
import GoEasyTradeinNews from "./pages/GoEasyTradeinNews";
import MakeaPayment from "./pages/MakeaPayment";
import AdvertisewithUs from "./pages/AdvertisewithUs";
import GuestPost from "./pages/GuestPost";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deal-room" element={<DealRoom />} />
          <Route path="/find-buyers" element={<FindBuyers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route
            path="/post-your-requirment"
            element={<PostYourRequirement />}
          />
          <Route path="/user-guide" element={<UserGuide />} />
          <Route path="/catalogue" element={<Catalogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/help-section" element={<HelpCenter />} />
          <Route path="/jobs-and-careers" element={<JobsCareers />} />
          <Route path="/subscription" element={<Subscriptions />} />
          <Route path="/success-story" element={<SuccessStories />} />
          <Route path="/get-your-own-website" element={<GetOwnWebsite />} />
          <Route path="/web-stories" element={<WebStories />} />
          <Route path="/news" element={<GoEasyTradeinNews />} />
          <Route
            path="/make-payment-with-viatrademart"
            element={<MakeaPayment />}
          />
          <Route
            path="/advertise-with-via-trade-mart"
            element={<AdvertisewithUs />}
          />
          <Route path="/guest-posting" element={<GuestPost />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />zzz
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
