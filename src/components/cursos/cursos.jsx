import Card from "react-materialize/lib/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react/cjs/react.production.min";
import api from "../../services/api";
import CardReveal from "../cards/card-reveal";

export default function Cursos(){
    const [cursos, setCursos] = useState([{
        colecaoId: 0,
        nome: '',
        descricao: ''
    }]);
    const pagina = 1;

    useEffect(
        () => {
            api.get("/colecoes")
                .then(response => setCursos(response.data))

        },
        pagina

    )
    return(
    <>
        <h1>Cursos</h1>
        <div className="row">
            {cursos.map(curso => <CardReveal curso={curso}/>)}
            <CardReveal/>
        </div>
        <Link to="/cursos/novo">
            <a class="btn-floating btn-large waves-effect waves-light black"><i class="material-icons">add</i></a>
        </Link>
    </>
    )
}