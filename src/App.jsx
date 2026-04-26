import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import DealRoom from "./pages/DealRoom";
import FindBuyers from "./pages/FindBuyers";
import Blogs from "./pages/Blog";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import Team from "./pages/Team"

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deal-room" element={<DealRoom />} />
          <Route path="/find-buyers" element={<FindBuyers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faqs" element={<FAQs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/team" element={<Team/>}/>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
