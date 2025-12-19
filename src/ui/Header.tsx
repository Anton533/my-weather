function Header({ onDaySelected, activeDays }) {
  return (
    <header className="header">
      <button
        onClick={() => {
          onDaySelected(1);
        }}
        className={activeDays === 1 ? "active" : ""}>
        показати прогноз на 1 день
      </button>
      <button
        onClick={() => {
          onDaySelected(5);
        }}
        className={activeDays === 5 ? "active" : ""}>
        показати прогноз на 5 днів
      </button>
    </header>
  );
}

export default Header;
