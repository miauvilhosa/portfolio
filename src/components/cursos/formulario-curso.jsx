import Button from "react-materialize/lib/Button";
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.production.min";
import api from "../../services/api";

export default function Form(){
    const history = useHistory();
    const{colecaoId} = useParams();
    const [ dadosCurso, setDadosCurso] = useState({
        nome: '',
        descricao: '',
        publico: false
    })

    function goBack(){
        history.push("/cursos")
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        if(colecaoId){
            api.put("/colecoes/" + colecaoId, dadosCurso)
                .then(goBack);
        }else{
            api.post("/colecoes", dadosCurso)
                .then(goBack);
        }
        api.post("/colecoes",dadosCurso)
            .then(goBack);
    }

    useEffect(()=>{
        api.get("/colecoes/" + colecaoId)
            .then(response => setDadosCurso(response.data));
    }, colecaoId)

    return(
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12 m6">
                        <input id="nome" type="text" class="validate" value={dadosCurso.nome} onChange={e => setDadosCurso({...dadosCurso, nome: e.target.value})}/>
                        <label for="textarea1">Nome</label>
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12 m6">
                        <textarea id="descricao" class="materialize-textarea" value={dadosCurso.descricao} onChange={e => setDadosCurso({...dadosCurso, descricao: e.target.value})}></textarea>
                        <label for="textarea1">Descrição</label>
                        </div>
          </div>
        </form>
      </div>
      <div class="row">
          <div class="input-field col s12 m6">
              <div class="switch">
                  <label>
                      Publico
                      <input type="checkbox" checked={dadosCurso.publico} onChange={e => setDadosCurso({...dadosCurso, publico: e.target.value})}/>
                      <span class="lever"></span>
                      Privado
                  </label>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="input-field col s12 m6">
              <a class="waves-effect waves-light btn" onClick={goBack}>Cancelar</a>
              <button class="btn waves-effect waves-light" type="submit" name="action">Salvar
                <i class="material-icons right">send</i>
              </button>
          </div>
      </div>
           </div>
          </div>
        </form>
      </div>

    )
}