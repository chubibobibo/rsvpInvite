import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e9eae3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  /* .image-container {
    grid-area: "image";
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    width: 90%;
    height: 10rem;
  } */

  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    width: 80%;
  }

  @media only screen and (min-width: 1920px) {
    .image-container {
      height: 40rem;
      width: 100%;
      display: flex;
      justify-content: center;

      .image {
        height: 40rem;
        width: 100%;
        object-fit: cover;
        left: 40%;
        margin: 0;
        opacity: 0.7;
      }
    }

    .header {
      margin-top: 2%;

      h1 {
        font-size: 30px;
      }
    }
    .card-container {
      width: 100%;
      margin-bottom: 2rem;
      margin-top: 2%;
    }

    .cardElem {
      width: 40%;
    }

    .card-body {
      width: 100%;
    }
  }

  @media only screen and (min-width: 420px) {
    .image-container {
      height: 40rem;
      width: 100%;
      display: flex;
      justify-content: center;

      .image {
        height: 40rem;
        width: 100%;
        object-fit: cover;
        left: 40%;
        margin: 0;
        opacity: 0.7;
      }
    }
    .header {
      margin-top: 2%;

      h1 {
        font-size: 30px;
      }
    }
    .card-container {
      width: 100%;
      margin-bottom: 2rem;
      margin-top: 2%;
    }

    .cardElem {
      width: 40%;
    }

    .card-body {
      width: 100%;
    }
  }

  @media only screen and (min-width: 672px) {
    .image-container {
      height: 40rem;
      width: 100%;
      display: flex;
      justify-content: center;

      .image {
        height: 40rem;
        width: 100%;
        object-fit: cover;
        left: 40%;
        margin: 0;
        opacity: 0.7;
      }
    }
    .header {
      margin-top: 2%;

      h1 {
        font-size: 30px;
      }
    }
    .card-container {
      width: 100%;
      margin-bottom: 2rem;
      margin-top: 2%;
    }

    .cardElem {
      width: 60%;
    }

    .card-body {
      width: 100%;
    }
  }

  @media only screen and (min-width: 412px) {
    .image-container {
      height: 30rem;
      width: 100%;
      display: flex;
      justify-content: center;

      .image {
        height: 30rem;
        width: 100%;
        object-fit: cover;
        left: 40%;
        margin: 0;
        opacity: 0.7;
      }
    }
    .header {
      margin-top: 2%;

      h1 {
        font-size: 30px;
      }
    }
    .card-container {
      width: 100%;
      margin-bottom: 2rem;
      margin-top: 2%;
    }

    .cardElem {
      width: 60%;
    }

    .card-body {
      width: 100%;
    }
  }

  @media only screen and (min-width: 390px) {
    .image-container {
      height: 30rem;
      width: 100%;
      display: flex;
      justify-content: center;

      .image {
        height: 30rem;
        width: 100%;
        object-fit: cover;
        left: 40%;
        margin: 0;
        opacity: 0.7;
      }
    }
    .header {
      margin-top: 2%;

      h1 {
        font-size: 30px;
      }
    }
    .card-container {
      width: 100%;
      margin-bottom: 2rem;
      margin-top: 2%;
    }

    .cardElem {
      width: 60%;
    }

    .card-body {
      width: 100%;
    }
  }
`;
