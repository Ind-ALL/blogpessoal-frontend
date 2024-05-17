import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        
        <div className="container flex flex-col items-center py-4">
          
          <p className="text-xl font-bold">
            Blog pessoal Generation | Copyright:{" "}
          </p>
          
          <p className="text-lg">Acesse nossas redes sociais</p>
          
          <div className="flex gap-2 ">
            <LinkedinLogo size={48} weight="bold" className="cursor-pointer hover:text-rose-400"/>
            <InstagramLogo size={48} weight="bold" className="cursor-pointer hover:text-rose-400" />
            <FacebookLogo size={48} weight="bold" className="cursor-pointer hover:text-rose-400"/>
          </div>
        
        </div>
      
      </div>
    </>
  );
}
export default Footer;
