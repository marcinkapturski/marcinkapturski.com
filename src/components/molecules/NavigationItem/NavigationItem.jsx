import { Link } from "react-scroll";

const NavigationItem = ({ section, name }) => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link transition"
          spy
          to={section}
          data-testid="navigation_item"
        >
          {name}
        </Link>
      </li>
    </>
  );
};

export default NavigationItem;
