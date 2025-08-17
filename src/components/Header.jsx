export default function Header() {
  return (
    <header>
      {/* Banner com imagem */}
      <div className="bg-image text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="titulo-principal">Estúdio Musical</h1>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary mx-auto"
        style={{ width: "80%" }}
      >
        <div className="container-fluid p-0 d-flex align-items-center">
          {/* Links do lado esquerdo */}
          <div className="d-flex">
            <a className="navbar-brand" href="#">
              Inicio
            </a>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {/* Dropdown Categoria */}
                <div className="nav-item dropdown">
                  <a
                    className="navbar-brand dropdown-toggle"
                    href="#"
                    id="categoriaMenu"
                    role="button"
                  >
                    Categoria
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="categoriaMenu"
                  >
                    <li><a className="dropdown-item" href="#guitarras">Guitarras</a></li>
                    <li><a className="dropdown-item" href="#contrabaixos">Contrabaixos</a></li>
                    <li><a className="dropdown-item" href="#baterias">Baterias</a></li>
                  </ul>
                </div>

                <a className="navbar-brand" href="#">
                  Contato
                </a>
              </div>
            </div>
          </div>

          {/* Carrinho no lado direito */}
          <div className="ms-auto">
            <a href="#" className="nav-link">
              <i className="bi bi-cart4" style={{ fontSize: "1.6rem" }}></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
