import logo from '../../../../assets/images/logo.png';
import Image from 'next/image';
const Logo = () => {
   return (
      <div className="h-28 text-center p-2" >
         <div>
            <Image src={logo} alt="logo" />
         </div>
         <div>
            Mongolian National University
         </div>
      </div>
   );
}
 
export default Logo;