import Link from "next/link";
import { Button } from "../Button";
import { HeaderContainer } from "./styles";

function Header(){
  return(
    <HeaderContainer>
      <div className="logo">
        <img src="/assets/logo.svg" alt="logo do Ninja Mail, imagem de um invelope e o nome NinjaMail do lado direito, ambos em cor preta sem fundo." />
      </div>
      <nav>
        <ul>
          <li>
            <Link href={"#"}>
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>Pricing</a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>Patners</a>
            </Link>
          </li>
          <div className="buttonSing">
            <Button textButton="sing up free" type="button-solid"/>
          </div>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

export {Header};