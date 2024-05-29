import { BLOG_TITLE } from "../constants";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./styles.css";

export const metadata = {
  title: BLOG_TITLE,
  description: "A blog about web development and programming",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
