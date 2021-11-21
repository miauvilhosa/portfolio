// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'
// Importantando o component Galeria de fotos


const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;