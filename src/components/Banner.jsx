export default function Banner(props) {
  return (
    <div className={props.className}>
      <div className='banner-container'>
        <img
          className='banner-img'
          src={props.image}
          alt='landscape'
        />
        {props.text && <h1 className='banner-text'>{props.text}</h1>}
      </div>
    </div>
  );
}
