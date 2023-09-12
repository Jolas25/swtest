import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Root() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <div className="main__container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
