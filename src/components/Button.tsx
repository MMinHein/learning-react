interface Props {
  children: string;
  onClickHandler: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

function Button({ children, onClickHandler, color = "primary" }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

export default Button;
