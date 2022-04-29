import Link from "next/link";
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
          <li>
            <button>sing up free</button>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

export {Header};