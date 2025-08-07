import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GuitarCard from './components/Cards/GuitarCard';
import { guitarras } from './data/guitarras';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baixos } from './data/baixos';
import BaixoCard from './components/Cards/BaixoCard';

function App() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <main style={{ flex: 1 }}>
          <article>
            <section className="container my-5">
              <h2>Destaques</h2>
              <div className="row">
                {guitarras.map((guitarra, index) => (
                  <GuitarCard key={index} guitarra={guitarra} />
                ))}
              </div>
            </section>
            <section className="container my-5">
              <h2>Baixos</h2>
              <div className="row">
                {baixos.map((baixo, index) => (
                  <BaixoCard key={index} baixo={baixo} />
                ))}
              </div>
            </section>
          </article>
        </main>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
