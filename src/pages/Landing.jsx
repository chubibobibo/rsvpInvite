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
  /** @guestName state that contains the guest name to be used as params for specific user */
  /** @Navigate used in the handleClick function to navigate to the index page with the value of the guestName state */
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

  const MenuProps = {
    defaultProps: {
      styles: {
        maxHeight: 200, // Set max height for dropdown (adjust as needed)
        overflowY: "scroll", // Enable vertical scrolling when content exceeds max height
      },
    },
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
          <CardBody className='flex flex-col gap-4 card-body '>
            <Select
              className='name-selection'
              label='Quel est ton prénom?'
              name='guestName'
              value={guestName}
              // menuProps={MenuProps}

              onChange={(val) => setGuestName(val)}
            >
              <Option value='Thomas' className='name-options'>
                Thomas
              </Option>
              <Option value='Massil' className='name-options'>
                Massil
              </Option>
              <Option value='Nassim' className='name-options'>
                Nassim
              </Option>
              <Option value='Dylan' className='name-options'>
                Dylan
              </Option>
              {/* <Option value='Naël' className='name-options'>
                Naël
              </Option> */}
              <Option value='Jimmy' className='name-options'>
                Jimmy
              </Option>
              {/* <Option value='Harouna' className='name-options'>
                Harouna
              </Option> */}
              <Option value='Omar' className='name-options'>
                Omar
              </Option>
              <Option value='Cyan' className='name-options'>
                Cyan
              </Option>
              <Option value='Matteo' className='name-options'>
                Matteo
              </Option>
            </Select>
            <Button onClick={handleClick}>Envoyer</Button>
          </CardBody>
        </Card>
      </div>
    </Wrapper>
  );
}
export default Landing;
