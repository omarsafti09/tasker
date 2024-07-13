import "@/assets/styles/globals.css";
import NavBar from "@/components/NavBar";

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default layout;
