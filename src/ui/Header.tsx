function Header({ onDaySelected }) {
  return (
    <header className="header">
      <button
        onClick={() => {
          onDaySelected(1);
        }}>
        показати прогноз на 1 день
      </button>
      <button onClick={() => onDaySelected(5)}>
        показати прогноз на 5 днів
      </button>
    </header>
  );
}

export default Header;
