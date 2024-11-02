function Button({ onclick, children }) {
  return (
    <button className="button" onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
