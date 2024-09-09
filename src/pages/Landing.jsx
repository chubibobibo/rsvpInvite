import { Wrapper } from "../assets/wrappers/LandingWrapper";

import {
  Card,
  CardBody,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Landing() {
  const navigate = useNavigate();
  const [guestName, setGuestName] = useState("");
  const handleClick = () => {
    if (guestName === "") {
      return toast.error(
        "Vous devez sélectionner le nom de votre enfant puis appuyer sur envoyer"
      );
    }
    navigate(`/${guestName}`);
  };

  return (
    <Wrapper>
      <div className='image-container'>
        {/* <img src='./src/assets/climbing.jpg' alt='' className='image' /> */}
      </div>
      <div className='header'>
        <h1>Confirmation pour la fête </h1>
        <h1>d'anniversaire de Samuel </h1>
      </div>
      <div className='card-container'>
        <Card className='cardElem'>
          <CardBody className='flex flex-col gap-4 card-body'>
            <Select
              size='md'
              label='Quel est ton prénom?'
              name='guestName'
              value={guestName}
              onChange={(val) => setGuestName(val)}
            >
              <Option value='Thomas'>Thomas</Option>
              <Option value='Massil'>Massil</Option>
              <Option value='Nassim'>Nassim</Option>
              <Option value='Dylan'>Dylan</Option>
              <Option value='Naël'>Naël</Option>
              <Option value='Hiran'>Hiran</Option>
              <Option value='Harouna'>Harouna</Option>
              <Option value='Omar'>Omar</Option>
            </Select>
            <Button onClick={handleClick}> Envoyer</Button>
          </CardBody>
        </Card>
      </div>
    </Wrapper>
  );
}
export default Landing;
