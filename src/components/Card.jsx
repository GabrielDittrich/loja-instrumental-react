export default function Card({ produto }) {
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{produto.nome}</h5>
          <p><strong>{produto.preco}</strong></p>
          <p className="card-text">{produto.descricao}</p>
          <a href="#" className="btn btn-primary mt-auto">Adicionar ao Carrinho</a>
        </div>
      </div>
    </div>
  );
}
