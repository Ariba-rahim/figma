import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faSearch, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';

export default function NavBar() {
  return (
    <div className=" w-[1440] h-[900px] top-[100px] bg-[#FBEBB5] left-[202px] ">
    {/* Header Section */}
    <header className="flex justify-between items-center p-6 ">
        <h1 className="text-2xl font-bold"></h1>
        <nav className="flex space-x-6">
          <a href="">Home</a>
          <a href="#shop" >Shop</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Icons */}
    
       
    </div>
  );
}





  