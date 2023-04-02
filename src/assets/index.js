import { ReactComponent as LogoWhite } from "./svg/tincode-white.svg";
import authBg from "./jpg/auth-bg.jpg";
import homeBanner from "./jpg/home-banner.jpg";
import noAvatar from "./jpg/no-avatar.jpg";
import academyLogo from "./png/academy-logo.png";



//aqui Icon va en mayuscula porque es un componente  
const Icon = {
    LogoWhite,
};

//luego crea una variable image que NO ES COMPONENTE
const image = {
    authBg,
    homeBanner,
    noAvatar,
    academyLogo, 
}




export { Icon, image };