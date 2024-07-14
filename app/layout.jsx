import "@/assets/styles/globals.css";

const layout = ({ children }) => {
  return (
    <html>
      <body className="bg-black">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default layout;
