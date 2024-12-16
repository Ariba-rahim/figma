import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faHome, faShoppingCart, faSearch, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faHome, faShoppingCart, faSearch, faHeart, faPhone);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
