import React from "react";
import './Footer.css'
import Logo from '../../assests/img/logo.png'


const Footer = () => {
  return (
    
    <footer id="myFooter">
        <div class="container2">
            <div class="row">
               
                <div class="col-sm-5 footAdress">
                    
              
<p className="endereco"> 
 E-mail:<a href="mailto:contato@ersservicos.com.br"> contato@ersservicos.com.br</a> <br/>
CNPJ: 29.568.574/0001-42
</p>                        
                </div>
                
                <div class="col-sm-3">
                    <div class="social-networks">
                        <a href="https://www.linkedin.com/company/ersservicos/" class="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/ersservicos" class="facebook"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/ersservicos/" class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>© 2022 Copyright: <a href="https://westhightechnology.com.br/" target="_blank">  WHT - West High Technology</a></p>
        </div>
    </footer>
  );
}

export default Footer