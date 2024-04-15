export default function Header() {
  return (
      <header className="PuntoGiro-Navbar mb-1">
        <nav className="p-1rem">
            <a href="">
                <img src="/src/assets/files/logo-giro.svg" alt=""/>
            </a>
            <h1 className="f-m">Punto GIRO</h1>
            <img className="display-none" src="/src/assets/files/sus-azul.png" alt=""/>
            <a href="">
                <img src="/src/assets/files/iso.svg" alt=""/>
            </a>
        </nav>
      </header>
   );
}