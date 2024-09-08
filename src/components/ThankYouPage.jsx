import { Wrapper } from "../assets/wrappers/ThankyoWrapper.js";
import { useContext } from "react";
import { IndexContext } from "../context/IndexContextProvider.jsx";
function ThankYouPage() {
  const data = useContext(IndexContext);
  console.log(data);
  return (
    <Wrapper>
      <div className='image-container'>
        <img
          src="'../../../src/assets/thankyoupage.png"
          alt=''
          className='image'
        />
      </div>
      <div className='content-container'>
        <h1>Merci</h1>
        <p>{data?.guest.toUpperCase()}</p>
        {data.state === true ? (
          <p className='text-center'>On se retrouve le 28 !</p>
        ) : (
          <p className='text-center'>pour ta reponse!</p>
        )}
      </div>
    </Wrapper>
  );
}
export default ThankYouPage;
