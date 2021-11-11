import logo from './images/google.png';
import './App.css';

function App() {
  return (
    
<div className="contenedor">

<header>
        <nav>
            <ul className="nav-right-section">
                <li><a href="#top">Gmail</a></li>
                <li><a href="#top">Imágenes</a></li>
                <li className="menu-icon"></li>
                <li className="perfil-photo"></li>
            </ul>
        </nav>
    </header>
    <main>
        <section className="main-logo">
            <img src={logo} alt="" />
        </section>
        <section className="main-input">
            <div className="main-input-container">
                <span className="search-icon">
                
                </span>
                <input type="text" className="barra" />
                <a className="micro-icon" href="#top"></a>
            </div>
        </section>
        <section className="main-buttons">
            <div>
                <button>Buscar con Google</button>
            </div>
            <div>
                <button>Me siento con suerte</button>
            </div>
        </section>
    </main>
    <footer>
        <ul className="footer-left">
            <li><a href="#top">Sobre Google</a></li>
            <li><a href="#top">Publicidad</a></li>
            <li><a href="#top">Negocios</a></li>
            <li><a href="#top">Cómo funciona la Búsqueda</a></li>
        </ul>
        <ul className="footer-right">
            <li><a href="#top">Privacidad</a></li>
            <li><a href="#top">Condiciones</a></li>
            <li><a href="#top">Preferencias</a></li>
        </ul>

    </footer>        
</div>
  );
}

export default App;
