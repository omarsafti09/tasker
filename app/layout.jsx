import "@/assets/styles/globals.css";
import NavBar from "@/components/NavBar";

const layout = ({ children }) => {
  return (
    <html>
      <body className="bg-black">
        <NavBar />
        <main className="flex justify-center items-center h-96">
          {children}
        </main>
      </body>
    </html>
  );
};

export default layout;
