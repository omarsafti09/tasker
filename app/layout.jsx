import "@/assets/styles/globals.css";
import NavBar from "@/components/NavBar";

const layout = ({ children }) => {
  return (
    <html>
      <body className="bg-cyan-800">
        <NavBar />
        <main className="p-16">{children}</main>
      </body>
    </html>
  );
};

export default layout;
