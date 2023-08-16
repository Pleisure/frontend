interface Props {
  divStyle: string;
  buttonStyle: string;
  content: string;
}

export default function Button({ divStyle, buttonStyle, content }: Props) {
  return (
    <div className={divStyle}>
      <button className={buttonStyle}>{content}</button>
    </div>
  );
}
