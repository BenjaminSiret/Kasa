import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  const [appartments, setAppartments] = useState([]);

  useEffect(() => {
    async function fetchAppartments() {
      try {
        const response = await fetch(`/data/logements.json`);
        const appartments = await response.json();
        setAppartments(appartments);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAppartments();
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
