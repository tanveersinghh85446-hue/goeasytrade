import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import DealRoom from "./pages/DealRoom";
import FindBuyers from "./pages/FindBuyers";
import Blogs from "./pages/Blog";
import FAQs from "./pages/FAQs";

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
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
