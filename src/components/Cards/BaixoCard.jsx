export default function BaixoCard({ baixo }) {
return (
 <div className="col-md-4">
   <div className="card h-100">
       <img src={baixo.imagem} className="card-img-top" alt={baixo.nome} />
       <div className="card-body d-flex flex-column">
         <h5 className="card-title">{baixo.nome}</h5>
         <p><strong>{baixo.preco}</strong></p>
         <p className="card-text">{baixo.descricao}</p>
         <a href="#" className="btn btn-primary mt-auto">Adicionar ao Carrinho</a>
       </div>
     </div>
 </div>
);
}