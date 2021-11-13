import logo from '../images/google.png';

const Main = () => {
    return (
    <main>
    <section className="main-logo">
      <img src={logo} alt="" />
    </section>
    <section className="main-input">
      <div className="main-input-container">
        <span className="search-icon"></span>
        <input type="text" className="barra" />
        <a className="micro-icon" href="#top">.</a>
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
    )
}

export default Main