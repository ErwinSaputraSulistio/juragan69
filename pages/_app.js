import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
// components
import '../styles/components/Home/Carousel.css';
import '../styles/components/Home/Description.css';
import '../styles/components/Home/Footer.css';
import '../styles/components/Home/Navbar.css';
import '../styles/components/Home/Table.css';
// font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
