import { Button } from "@material-tailwind/react";

import { Wrapper } from "../assets/wrappers/IndexWrapper.js";
import { Form, useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";

import { toast } from "react-toastify";
import { IndexContext } from "../context/IndexContextProvider.jsx";

const banner = "../banner1.png";

function Index() {
  const { guest } = useParams();
  const navigate = useNavigate();

  /** state and handlers to manage the response */
  const [response, setResponse] = useState({ state: false, answer: "" });
  const responseY = () => {
    setResponse((prev) => {
      return { ...prev, state: true, answer: "Oui, je viens à ta fête!" };
    });
  };
  const responseN = () => {
    setResponse((prev) => {
      return { ...prev, state: false, answer: "Non, je ne peux pas venir." };
    });
  };

  const data = useContext(IndexContext);
  console.log(data);

  /** state and handler to manage the input data and sending of form */
  const [inputData, setInputData] = useState({
    username: guest.toUpperCase(0),
    response: "",
  });
  const handleChange = (e) => {
    setInputData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  /** web3forms */
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7bf5ff70-9ad4-429d-8bc4-c642fc4bd851");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast.success("Votre réponse a été envoyée");
      navigate(`/thankyou/${guest}`);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={banner} alt='' />
      </div>
      <div className='logo-container'>
        <img src='./logo.png' alt='' className='image-9' />
      </div>
      <div className='content-container'>
        <img src='./content.png' alt='' className='content-image' />
      </div>
      {/* <div className='location'>
        <p>Location: </p>
        <Link to={googleLink}>HAPIK SALLE D'ESCALADE</Link>
      </div> */}
      <Form method='POST' onSubmit={onSubmit}>
        <div className='form-container'>
          <p>Hello {guest.toUpperCase()},</p>
          <p> peux-tu venir à mon anniversaire?</p>
          <div className='response-container'>
            <p
              className={
                response.state === true ? "response-yes" : "response-no"
              }
            >
              {response.answer}
            </p>
          </div>
          <div className='button-container'>
            <Button size='sm' onClick={responseY}>
              OUI
            </Button>
            <Button size='sm' onClick={responseN}>
              NON
            </Button>
          </div>
          <div className='invForm'>
            <input
              type='text'
              name='username'
              value={guest}
              onChange={handleChange}
            />
            <input
              type='text'
              name='response'
              value={response.answer}
              placeholder={response.answer}
              onChange={handleChange}
            />
            {/* <p>username {inputData.username}</p>
            <p>response {inputData.response}</p> */}
          </div>
          <div className='submit-btn'>
            <Button type='submit'>Envoyer ma reponse</Button>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
}
export default Index;
