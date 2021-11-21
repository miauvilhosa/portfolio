import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function CardReveal(props){
    const history = useHistory();
    const handlerExcluir = (e) => {
      e.preventDefault();

      if(window.confirm("Deseja excluir o curso" + props.curso.nome + "?")){
        api.delete("/colecoes/" + props.curso.colecaoId)
          .then(() => history.go(0));
          
      }
    };

    return(
    <div class="col s12 m6 l4">
        <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src="https://materializecss.com/images/office.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{props.curso.nome}<i class="material-icons right">more_vert</i></span>
      <p><Link to={"/cursos/editar/" + props.curso.colecaoId}>Editar</Link> | <a href="#" onClick={handlerExcluir}>Excluir</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{props.curso.nome}<i class="material-icons right">close</i></span>
      <p>{props.curso.descricao}</p>
    </div>
  </div>
  </div>
    );
}