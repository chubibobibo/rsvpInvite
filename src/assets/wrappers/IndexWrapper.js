import styled from "styled-components";

export const Wrapper = styled.div`
  /* height: 100dvh;

  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("../src/assets/banner.png");
  background-size: cover;
  background-position: center;

  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .img-container {
    opacity: 0.6;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    opacity: 0.4;

    .img-container img {
      height: 50rem;
      width: 100%;
    }
  }

  .logo-container {
    width: 45%;
    height: 45%;
    transform: translate(0, 35%);
    display: flex;
    justify-content: center;

    .logo-container img {
      border-radius: 100px;
    }
  }
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 0;
    transform: translate(0, 25%);
    /* border: 3px solid lightgray; */
    /* border-radius: 10px; */
    width: 65%;

    .content-image {
      /* border-radius: 100px; */
      margin-top: -2%;
    }
  }

  .form-container {
    border: 2px solid lightgray;
    z-index: 0;
    transform: translate(0, 35%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;

    .invForm {
      display: none;
    }

    p {
      font-size: 14px;
    }

    .response-container {
      margin-top: 10px;
      margin-bottom: 5px;
    }

    .response-yes {
      color: green;
    }
    .response-no {
      color: red;
    }

    .button-container {
      display: flex;
      gap: 5%;
    }
  }

  .submit-btn {
    margin-top: 5%;
  }
`;
