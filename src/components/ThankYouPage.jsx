import { Wrapper } from "../assets/wrappers/ThankyoWrapper.js";
import { useContext } from "react";
import { IndexContext } from "../context/IndexContextProvider.jsx";

import { Link } from "react-router-dom";
const googleLink =
  "https://www.google.com/maps/place/HAPIK+Salle+d'escalade+100%25+fun/@48.8254215,2.2646827,16z/data=!3m1!4b1!4m6!3m5!1s0x47e67bb407cd2179:0xcfdba8f1ee576daa!8m2!3d48.8254215!4d2.2646827!16s%2Fg%2F11w3r1l7hc?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D";

function ThankYouPage() {
  const data = useContext(IndexContext);
  console.log(data);
  return (
    <Wrapper>
      {/* <div className='background-container'></div> */}
      {/* <div className='content-container'>
        <h1>Merci</h1>
        <p>{data?.guest.toUpperCase()}</p>
        {data.state === true ? (
          <p className='text-center'>On se retrouve le 28 !</p>
        ) : (
          <p className='text-center'>pour ta reponse!</p>
        )}
      </div> */}
      <div className='content-container'>
        <img src='../thankyou.png' alt='' />
      </div>
      <div className='location'>
        <Link to={googleLink}>HAPIK SALLE D'ESCALADE</Link>
        <p>(cliquez sur la carte pour l'adresse)</p>
      </div>
      <div className='map'>
        <Link to={googleLink}>
          <img src='../map.png' alt='' />
        </Link>
      </div>
      <div className='contact'>
        <p>
          Si vous avez d'autres questions, n'hésitez pas à nous contacter par
          mail:
        </p>
        <Link to='https://www.mail.google.com/' className='link'>
          lesterabao@gmail.com
        </Link>

        <Link to="'https://www.mail.google.com/'" className='link'>
          cbcrisostomo@gmail.com
        </Link>
      </div>
    </Wrapper>
  );
}
export default ThankYouPage;
