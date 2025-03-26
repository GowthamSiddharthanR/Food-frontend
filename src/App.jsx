import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import ViewOrder from "./ViewOrder";
import Orders from "./Orders";
import CreateOrder from "./CreateOrder";
import EditOrder from "./EditOrder";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Welcome />} />
        <Route path="/user" element={<Orders />} />
        <Route path="/user-create" element={<CreateOrder />} />
        <Route path="/user/:id" element={<ViewOrder />} />
        <Route path="/edit/:id" element={<EditOrder/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
