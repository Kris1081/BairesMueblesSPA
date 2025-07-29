import "./Pasos.css";
function Paso  ({ numero, titulo, descripcion }) {
  return(<div className="paso-card">
    <span className="paso-numero">{numero}</span>
    <h3 className="paso-titulo">{titulo}</h3>
    <p>{descripcion}</p>
  </div>)
}

export default Paso;
