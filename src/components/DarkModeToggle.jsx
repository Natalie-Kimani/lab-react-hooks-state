// components/DarkModeToggle.jsx

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <div className="toggle-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <span className="slider"></span>
      </label>

      <span className="mode-text">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
}

export default DarkModeToggle;
