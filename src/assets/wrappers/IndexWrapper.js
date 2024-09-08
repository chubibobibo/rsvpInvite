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
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .response-no {
      color: red;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .button-container {
      display: flex;
      gap: 5%;
    }
  }

  .submit-btn {
    margin-top: 5%;
  }

  @media only screen and (min-width: 1920px) {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "logo1 form" "logo2  form"; */

    .img-container {
      opacity: 0.2;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;

      height: 10rem;

      .img-container img {
        height: 32rem;
        width: 100%;
        object-fit: cover;
      }
    }

    .logo-container {
      width: 40%;
      height: 15%;
      transform: translate(0, 60%);
      display: flex;
      justify-content: center;
      grid-area: "logo1";
      .image-9 {
        border-radius: 100px;
        width: 30rem;
        height: 30rem;
      }
    }
    .content-container {
      grid-area: "logo2";
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 0;
      transform: translate(-10%, 130%);
      /* border: 3px solid lightgray; */
      /* border-radius: 10px; */
      width: 30%;

      .content-image {
        /* border-radius: 100px; */
        margin-top: -2%;
      }
    }

    .form-container {
      grid-area: "form";
      border: 2px solid lightgray;
      z-index: 0;
      transform: translate(0, 90%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      border-radius: 10px;
      width: 90%;
      height: 20rem;

      .invForm {
        display: none;
      }

      p {
        font-size: 26px;
        /* font-weight: 600; */
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }

      .response-container {
        margin-top: 10px;
        margin-bottom: 5px;
      }

      .response-yes {
        color: green;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
      .response-no {
        color: red;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }

      .button-container {
        display: flex;
        gap: 5%;
      }
    }

    .submit-btn {
      margin-top: 5%;
    }
  }
`;
