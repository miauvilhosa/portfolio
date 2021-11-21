import { Link } from "react-router-dom";

const Menu = () => (
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Cursos</Link></li>

      </ul>
    </div>
  </nav>
);
export default Menu;