import Header from "../../components/header/header"
import BasicCard from "../cards/basic-card";

export default function Home() {
  return (
    <>
      <Header />
      <div class="row">
        <BasicCard title="Card" descricao="Os cards são informações interativas quase sempre apresentadas em formato retangular. Assim como os cartões de crédito ou de jogos, os cards da web contêm informações resumidas, relevantes e fáceis de entender. A vantagem desse formato é a interatividade. Além de conter informações, o card é um convite à participação." />
        <BasicCard title="React" descricao="React JS é uma biblioteca JavaScript para criar interfaces de usuário ou UI (User Interface). O React foi criado pela equipe do Facebook em 2011 para otimizar a atualização e sincronização das atividades de sincronização em feeds de notícias de redes sociais, incluindo chat, status, listas de contatos, etc." />
      </div>
    </>

  );
}