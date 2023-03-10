import logoBw from "../assets/logoBw.png";

export default function Footer() {
  return (
    <footer id='footer'>
      <img
        src={logoBw}
        alt='logo'
        className='footer-logo'
      />
      <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
