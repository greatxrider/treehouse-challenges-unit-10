import { Route, Routes } from "react-router-dom";

// App Components
import Header from "./components/Header";
import Home from "./components/Home";
import UserSignIn from "./components/UserSignIn";
import UserSignOut from "./components/UserSignOut";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Header accentColor={accentColor} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={
          <UserSignIn accentColor={accentColor} />} />
        <Route path="signout" element={<UserSignOut />} />
        <Route path="settings" element={
          <Settings
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            accentColor={accentColor}
            updateAccentColor={setAccentColor}
            fontPercentage={fontPercentage}
            updateFontPercentage={setFontPercentage} />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
