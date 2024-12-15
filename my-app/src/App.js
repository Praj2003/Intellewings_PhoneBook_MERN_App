import "./App.css";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AddContact from "./pages/AddContacts";
import ContactSuccess from "./pages/ContactSuccess";
import ViewAllContacts from "./pages/ViewAllContacts";
import EditContact from "./components/EditContact";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addNewContact" element={<AddContact />} />
        <Route path="/responseSuccess" element={<ContactSuccess />} />
        <Route path="/viewAllContactDetails" element={<ViewAllContacts />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
