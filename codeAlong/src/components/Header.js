import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

import Nav from './Nav';

const Header = (props) => {
  const { accentColor } = useContext(ThemeContext);

  return (
    <div className="header" style={{ background: props.accentColor }}>
      <div className="bounds">
        <Link to="/">
          <h1 className="header--logo">MyApp</h1>
        </Link>
        <Nav />
      </div>
    </div>
  );
};

export default Header;