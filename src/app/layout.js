import { BLOG_DESCRIPTION, BLOG_TITLE } from "../constants";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";

export const metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image:
    "https://res.cloudinary.com/stevebarakat/image/upload/v1718105711/xstate-for-everyone-logo.png",
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
