function Header({ onDaySelected }) {
  return (
    <header className="header">
      <button onClick={() => onDaySelected(1)}>1 day</button>
      <button onClick={() => onDaySelected(5)}>5 days</button>
      {/* <button onClick={() => onDaySelected(7)}>7 days</button> */}
      {/* <button onClick={() => onDaySelected(10)}>10 days</button> */}
      {/* <button onClick={() => onDaySelected(15)}>15 days</button> */}
    </header>
  );
}

export default Header;
