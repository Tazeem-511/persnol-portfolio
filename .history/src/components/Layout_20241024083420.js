// Layout.js
import Navbar from "./navbar"; // Make sure the path is correct
import Footer from "./footer"; // Ensure this is also correct

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
