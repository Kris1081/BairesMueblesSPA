import "./Pasos.css";
function Paso  ({ numero, titulo, descripcion, imagen }) {
  return(<div className="paso-card">
    {imagen &&(
      <img src={imagen} alt={titulo} className="w-full h-[250px] object-cover" />
    )}
    {numero && (
              <span className="paso-numero">{numero}</span>
        )}
    <h3 className="paso-titulo">{titulo}</h3>
    <p>{descripcion}</p>
  </div>)
}

export default Paso;
