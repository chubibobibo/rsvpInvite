import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #e9eae3;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  margin-top: 0;

  .content-container {
    grid-area: "content";
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    /* transform: translate(25%, -220%); */
  }

  .location {
    margin-top: 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }

  .map {
    width: 25%;
    height: 25%;
    margin-top: 5%;

    .map img {
      border-radius: 10px;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -20%;
    width: 90%;

    p {
      font-size: 16px;
    }

    .link {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 680px) {
    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: -10%;
      width: 90%;

      p {
        font-size: 16px;
      }

      .link {
        font-size: 16px;
      }
    }
  }

  @media only screen and (min-width: 920px) {
    .content-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 40%;
      /* transform: translate(25%, -220%); */
      margin-top: -5%;
    }

    .contact {
      margin-top: -10%;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5%;
      width: 90%;

      p {
        font-size: 16px;
      }

      .link {
        font-size: 16px;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .content-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 30%;
      /* transform: translate(25%, -220%); */
      margin-top: 0%;
    }

    .map {
      width: 15%;
      height: 15%;
      margin-top: 2%;

      .map img {
        border-radius: 10px;
      }
    }

    .contact {
      margin-top: -10%;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5%;
      width: 90%;

      p {
        font-size: 16px;
      }

      .link {
        font-size: 16px;
      }
    }
  }

  @media only screen and (min-width: 1680px) {
    .content-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 20%;
      /* transform: translate(25%, -220%); */
      margin-top: 0%;
    }

    .map {
      width: 10%;
      height: 10%;
      margin-top: 1%;

      .map img {
        border-radius: 10px;
      }
    }

    .contact {
      margin-top: -10%;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5%;
      width: 90%;

      p {
        font-size: 16px;
      }

      .link {
        font-size: 16px;
      }
    }
  }
`;
