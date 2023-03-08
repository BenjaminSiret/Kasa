export default function Card(props) {
  return (
    <div className='card'>
      <img
        src={props.appartment.cover}
        alt='appartment-img'
        className='card-image'
      />
      <p className='title'>{props.appartment.title}</p>
    </div>
  );
}
