import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./pages/profile";

function App() {
  return (
   <>
     <Navbar />
    <div className="mx-5">
      <Profile />
    </div>
   </>
  );
}

export default App;
