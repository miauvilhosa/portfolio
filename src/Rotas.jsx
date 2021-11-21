import { Route, Switch } from "react-router";
import Home from "./components/home/home"
import NotFound from "./components/errors/not-found";
import Cursos from "./components/cursos/cursos";
import Form from "./components/cursos/formulario-curso";
export default function Rotas(){
    return(
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cursos" component={Cursos}/>
          <Route path="/cursos/novo" component={Form}/>
          <Route path="/cursos/editar/:colecaoId" component={FomularioCurso}/>
          <Route path="*" component={NotFound}/>
      </Switch>
    )
}