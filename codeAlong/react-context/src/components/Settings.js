import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Components
import DarkMode from "./themes/DarkMode";
import AccentColor from "./themes/AccentColor";
import FontSize from "./themes/FontSize";
import UserContext from "../context/UserContext";

function Settings(props) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  // If the user isn't logged in navigate them to signin route
  useEffect(() => {
    if (user === null) {
      navigate('/signin', { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="bounds">
      <div className="grid-100">
        <h1>Preferences</h1>
        <DarkMode />
        <AccentColor />
        <FontSize />
      </div>
    </div>
  );
}

export default Settings;