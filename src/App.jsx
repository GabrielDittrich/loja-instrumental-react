import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isCategory } from './utils/isCategory'
import "bootstrap-icons/font/bootstrap-icons.css";

import { produtos } from './data/produtos';
import { destaques } from './data/destaques';

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
                {produtos
                  .filter(p =>
                    destaques.guitarras.includes(p.id) ||
                    destaques.contrabaixos.includes(p.id)
                  )
                  .map(p => <Card key={p.id} produto={p} />)}
              </div>
            </section>
            <section className="container my-5">
              <h2>Guitarras</h2>
              <div className="row">
                {produtos
                  .filter(isCategory('guitarras'))
                  .map(produto => (
                    <Card key={produto.id} produto={produto} />
                  ))}
              </div>
            </section>
            <section className="container my-5">
              <h2>Baixos</h2>
              <div className="row">
                {produtos
                  .filter(isCategory('contrabaixos'))
                  .map(produto => (
                    <Card key={produto.id} produto={produto} />
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
