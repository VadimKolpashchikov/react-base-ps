import './Button.scss';

function Button() {
  const onClick = (e) => console.log(e);
  return (
    <button
      type="button" className="button button_accent"
      onClick={onClick}
    >
      Сохранить
    </button>
  );
}

export default Button;
