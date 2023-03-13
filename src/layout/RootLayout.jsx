import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchAppartments } from "../services/fetchAppartments";

export default function RootLayout() {
  const [appartments, setAppartments] = useState([]);

  useEffect(() => {
    async function getAppartments() {
      const appartments = await fetchAppartments();
      setAppartments(appartments);
    }
    getAppartments();
  }, []);

  return (
    <div className='rootLayout'>
      <Header />
      <main>
        <Outlet context={[appartments]} />
      </main>
      <Footer />
    </div>
  );
}
