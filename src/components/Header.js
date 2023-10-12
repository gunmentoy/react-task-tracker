import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <Header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </Header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.PropTypes = {
  title: PropTypes.string.isRequired,
};

// CSS styling in React
// const headingStyle = {
// color: 'red',
// blackgroundColor: 'black',
// }

export default Header;
