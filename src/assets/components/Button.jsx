export default function Button({ value, onClick }) {
  return (
    <button className="button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
}
