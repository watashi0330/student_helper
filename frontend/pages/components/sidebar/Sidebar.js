import ButtonList from "./components/ButtonList";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

const Sidebar = () => {
   return (
      <div className="w-60 h-screen flex flex-col">
         <Logo />
         <ButtonList />
         <Footer/>
      </div>
   );
}
 
export default Sidebar;