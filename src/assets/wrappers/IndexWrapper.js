import styled from "styled-components";

export const Wrapper = styled.div`
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
    width: 65%;

    .content-image {
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
    /* margin-bottom: 20%; */

    .invForm {
      display: none;
    }

    p {
      font-size: 16px;
    }

    .response-container {
      margin-top: 10px;
      margin-bottom: 10px;
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

  @media only screen and (min-width: 520px) {
    .content-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* z-index: 0; */
      transform: translate(0, 35%);
      width: 50%;

      .content-image {
        margin-top: -2%;
      }
    }

    .form-container {
      grid-area: "form";
      border: 2px solid lightgray;
      z-index: 0;
      transform: translate(0%, 60%);
      /* display: flex; */
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      border-radius: 10px;
      width: 100%;
      height: 20rem;

      .invForm {
        display: none;
      }

      p {
        font-size: 18px;

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
  }

  @media only screen and (min-width: 720px) {
    .logo-container {
      width: 40%;
      /* height: 10%; */
      transform: translate(0, 50%);
      display: flex;
      justify-content: center;
      grid-area: "logo1";
      .image-9 {
        border-radius: 100px;
        width: 15rem;
        height: 15rem;
      }
    }

    .content-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* z-index: 0; */
      transform: translate(0, 45%);
      width: 50%;

      .content-image {
        margin-top: -2%;
      }
    }

    .form-container {
      grid-area: "form";
      border: 2px solid lightgray;
      z-index: 0;
      transform: translate(0, 40%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      border-radius: 10px;
      width: 100%;
      height: 20rem;
      margin-bottom: 5%;

      .invForm {
        display: none;
      }

      p {
        font-size: 18px;

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
  }

  @media only screen and (min-width: 880px) {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "first-logo second-logo" "content content";
    /* justify-content: center;
    align-items: center;
    flex-direction: row; */

    .logo-container {
      grid-area: "first-logo";
      width: 100%;
      /* height: 10%; */
      transform: translate(0, -10%);
      /* display: flex;
      justify-content: center; */
      grid-area: "logo1";
      .image-9 {
        border-radius: 100px;
        width: 80%;
        height: 130%;
      }
    }

    .content-container {
      grid-area: "second-logo";
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* z-index: 0; */
      transform: translate(0, 10%);
      width: 100%;

      .content-image {
        /* margin-top: -2%; */
        width: 80%;
        height: 110%;
      }
    }

    .form-container {
      grid-area: "content";
      border: 2px solid lightgray;
      z-index: 0;
      transform: translate(20%, -20%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      border-radius: 10px;
      width: 150%;
      height: 20rem;

      .invForm {
        display: none;
      }

      p {
        font-size: 22px;

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
  }

  @media only screen and (min-width: 1080px) {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "first-logo second-logo" "content content";

    .logo-container {
      grid-area: "first-logo";
      width: 100%;
      /* height: 10%; */
      transform: translate(0, -10%);
      /* display: flex;
      justify-content: center; */
      grid-area: "logo1";
      .image-9 {
        border-radius: 100px;
        width: 70%;
        height: 130%;
      }
    }

    .content-container {
      grid-area: "second-logo";
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* z-index: 0; */
      transform: translate(0, 10%);
      width: 100%;

      .content-image {
        /* margin-top: -2%; */
        width: 70%;
        height: 80%;
      }
    }

    .form-container {
      grid-area: "content";
      border: 2px solid lightgray;
      z-index: 0;
      transform: translate(20%, -25%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      border-radius: 10px;
      width: 150%;
      height: 20rem;

      .invForm {
        display: none;
      }

      p {
        font-size: 26px;

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
  }

  @media only screen and (min-width: 1200px) {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "first-logo second-logo" "content content";

    .logo-container {
      grid-area: "first-logo";
      width: 100%;
      /* height: 10%; */
      transform: translate(0, 20%);
      /* display: flex;
      justify-content: center; */
      grid-area: "logo1";
      .image-9 {
        border-radius: 100px;
        width: 60%;
        height: 120%;
      }
    }

    .content-container {
      grid-area: "second-logo";
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* z-index: 0; */
      transform: translate(0, 30%);
      width: 100%;

      .content-image {
        /* margin-top: -2%; */
        width: 60%;
        height: 80%;
      }
    }

    .form-container {
      grid-area: "content";
      border: 2px solid lightgray;
      z-index: 0;
      transform: translate(20%, 10%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      border-radius: 10px;
      width: 150%;
      height: 20rem;
    }
  }

  @media only screen and (min-width: 1440px) {
    /* position: relative; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "first-logo second-logo" "content content"; */

    .logo-container {
      grid-area: "first-logo";
      width: 100%;
      transform: translate(0, 50%);
      grid-area: "logo1";
      .image-9 {
        border-radius: 100px;
        width: 40%;
        height: 100%;
      }
      display: none;
    }

    .content-container {
      grid-area: "second-logo";
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* z-index: 0; */
      transform: translate(0, 60%);
      width: 100%;

      .content-image {
        /* margin-top: -2%; */
        width: 30%;
        height: 20%;
      }
    }

    .form-container {
      /* grid-area: "content"; */
      border: 2px solid lightgray;
      /* z-index: 0; */
      transform: translate(-20%, 80%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      border-radius: 10px;
      width: 150%;
      height: 20rem;
    }
  }

  @media only screen and (min-width: 1720px) {
    /* position: relative; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "first-logo second-logo" "content content"; */

    .logo-container {
      grid-area: "first-logo";
      width: 100%;
      transform: translate(0, 50%);
      grid-area: "logo1";
      .image-9 {
        border-radius: 100px;
        width: 40%;
        height: 100%;
      }
      display: none;
    }

    .content-container {
      grid-area: "second-logo";
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* z-index: 0; */
      transform: translate(0, 90%);
      width: 100%;

      .content-image {
        /* margin-top: -2%; */
        width: 20%;
        height: 15%;
      }
    }

    .form-container {
      /* grid-area: "content"; */
      border: 2px solid lightgray;
      /* z-index: 0; */
      transform: translate(-20%, 145%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      border-radius: 10px;
      width: 160%;
      height: 20%;
    }
  }

  @media only screen and (min-width: 2180px) {
    /* position: relative; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "first-logo second-logo" "content content"; */

    .logo-container {
      grid-area: "first-logo";
      width: 100%;
      transform: translate(0, 70%);
      grid-area: "logo1";
      .image-9 {
        border-radius: 100px;
        width: 20%;
        height: 30%;
      }
      display: none;
    }

    .content-container {
      grid-area: "second-logo";
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* z-index: 0; */
      transform: translate(0, 120%);
      width: 100%;

      .content-image {
        /* margin-top: -2%; */
        width: 15%;
        height: 15%;
      }
    }

    .form-container {
      /* grid-area: "content"; */
      border: 2px solid lightgray;
      /* z-index: 0; */
      transform: translate(-20%, 155%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      border-radius: 10px;
      width: 160%;
      height: 20%;
    }
  }
`;
