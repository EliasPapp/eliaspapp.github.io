import "./text-button.css"

export function TextButton({url, text}) {
  return (
    <a href={url} className="text-button">{text}</a>
  );
}