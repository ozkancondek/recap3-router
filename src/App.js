import { BrowserRouter } from "react-router-dom";
import MyNav from "./components/MyNav";

import Footer from "./components/Footer";
import { AllRoutes } from "./components/AllRoutes";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <AllRoutes />

      <Footer />
    </BrowserRouter>
  );
}
export default App;
