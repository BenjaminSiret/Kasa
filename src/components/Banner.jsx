export default function Banner(props) {
  return (
    <div className={props.bannerClass}>
      <div className={props.bannerContainerClass}>
        <img
          className={props.imageClass}
          src={props.image}
          alt='landscape'
        />
        {props.text && <h1 className={props.textClass}>{props.text}</h1>}
      </div>
    </div>
  );
}
