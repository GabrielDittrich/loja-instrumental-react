
export default function Header() {
  return (
    <header>
      <div className="bg-image text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="titulo-principal">Rock Day</h1>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary mx-auto" style={{ width: '80%' }}>
        <div className="container-fluid p-0 d-flex">
          <a className="navbar-brand" href="#">Inicio</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="navbar-brand" href="#">Categoria</a>
              <a className="navbar-brand" href="#">Sobre</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
