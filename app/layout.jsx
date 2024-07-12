import "@/assets/styles/globals.css";

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;
