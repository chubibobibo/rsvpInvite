import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("./banner.png");
  background-size: cover;
  background-position: center;

  /* text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5); */
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  margin-top: 0;

  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    width: 80%;
  }
  .cardElem {
    width: 100%;
  }

  @media only screen and (min-width: 390px) {
    .header {
      margin-top: 0;
      display: flex;
      justify-content: start;
      flex-direction: column;

      h1 {
        font-size: 28px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
    }
    .card-container {
      width: 100%;

      margin-top: 2%;
      margin-bottom: 20%;
    }

    .cardElem {
      width: 70%;
    }

    .card-body {
      width: 100%;
    }
  }

  @media only screen and (min-width: 1280px) {
    .header {
      margin-top: 0;

      h1 {
        font-size: 36px;
      }
    }
    .card-container {
      width: 100%;

      margin-top: 2%;
      margin-bottom: 20%;
    }

    .cardElem {
      width: 50%;
    }

    .card-body {
      width: 100%;
    }
  }

  @media only screen and (min-width: 1980px) {
    .header {
      margin-top: 0;

      h1 {
        font-size: 28px;
      }
    }
    .card-container {
      width: 100%;

      margin-top: 2%;
      margin-bottom: 10%;
    }

    .cardElem {
      width: 40%;
    }

    .card-body {
      width: 100%;
    }
  }

  @media only screen and (min-width: 2100px) {
    .header {
      margin-top: 0;

      h1 {
        font-size: 28px;
      }
    }
    .card-container {
      width: 100%;

      margin-top: 2%;
      margin-bottom: 10%;
    }

    .cardElem {
      width: 30%;
    }

    .card-body {
      width: 100%;
    }
  }
`;
