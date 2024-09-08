import styled from "styled-components";

export const Wrapper = styled.div`
  /* height: 100dvh;

  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("../src/assets/thankyoupage.png");
  background-size: cover;
  background-position: center;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center; */

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "content image";

  /* margin-top: 15%; */
  height: 100vh;
  background-color: #e9eae3;

  .content-container {
    grid-area: "content";
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .content-container p {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  }

  .image-container {
    grid-area: "image";

    .image {
      border-radius: 15px;
      height: 100%;
    }
  }
`;
