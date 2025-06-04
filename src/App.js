import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Footer from "./components/Footer";  
import Header from "./components/Header";
import Carinsure from "./pages/Carinsure";
import Providers from "./pages/providers";
import PurchasePlan from "./pages/purchaseplan";
import MultiStepForm from "./components/form/MultiStepForm";
import MultiStepForm2 from "./components/form2/MultiStepForm2";

// new 04-06
function App() {
  return (
    <Router>  {/* Ensure everything is inside Router */}
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/carinsure" element={<Carinsure />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/purchase-plan" element={<PurchasePlan />} />
        <Route path="/multistepform" element={<MultiStepForm />} />
        <Route path="/multistepform2" element={<MultiStepForm2 />} />        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
// 18:40