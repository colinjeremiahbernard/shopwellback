import React from "react";
import { HeaderArea } from './styled'
import { Link } from 'react-router-dom'
import { isLogged } from '../../../helpers/AuthHandler'

const Header = () => {
    let logged = isLogged();
    return (
        <HeaderArea>
           <div className="container">
              <div className="logo">
                <Link to = '/'>
                    <span className="logo-1"> s </span>
                    <span className="logo-2"> h </span>
                    <span className="logo-3"> o </span>
                    <span className="logo-4"> p </span>
                </Link>
              </div>
               
                <nav>
                    <ul>
                        {logged &&
                          <>
                             <li>
                                 <Link to="/my-account">Minha Conta</Link>
                             </li>
                             <li>
                                 <Link to="/logout">Sair</Link>
                             </li>
                             <li>
                                  <Link to="/post-an-ad" className="button"> postar um anuncio </Link>
                             </li>
                          </>
                        
                        }
                        {!logged &&
                        <>
                             <li>
                                  <Link to="/signin">Login</Link>
                             </li>
                             <li>
                                  <Link to="/signup">Cadastrar</Link>
                             </li>
                             <li>
                                  <Link to="/signin" className="button"> postar um anuncio </Link>
                             </li>
                        </>
                         }
                        
                    </ul>
                </nav>
              
           </div>
        </HeaderArea>
    )
}
export default Header