export default function GuitarCard({ guitarra }) {
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img src={guitarra.imagem} className="card-img-top" alt={guitarra.nome} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{guitarra.nome}</h5>
          <p><strong>{guitarra.preco}</strong></p>
          <p className="card-text">{guitarra.descricao}</p>
          <a href="#" className="btn btn-primary mt-auto">Adicionar ao Carrinho</a>
        </div>
      </div>
    </div>
  );
}
