import { useContext } from "react";
import MainRoutes from "./routes/MainRoutes";
import "./styles/tailwind.css";
import "./styles/theme.css";
import "./styles/fonts.css";
import "./styles/animation.css";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import { NavContext } from "./contexts/NavContext";

function App() {
  const { loginModalOpen, registerModalOpen } = useContext(NavContext);
  return (
    <>
      <MainRoutes />
      {loginModalOpen && <LoginModal />}
      {registerModalOpen && <RegisterModal />}
    </>
  );
}

export default App;
