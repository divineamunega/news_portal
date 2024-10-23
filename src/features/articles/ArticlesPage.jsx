import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";
import NavBar from "../../ui/NavBar";

export default function ArticlePage() {
  return (
    <div>
      <NavBar />
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
}
