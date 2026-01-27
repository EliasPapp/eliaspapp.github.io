import "./icon-button.css"

export function IconButton({icon, url}) {
  return (
    <a className={`icon-button fa fa-${icon}`} href={url}></a>
  );
}