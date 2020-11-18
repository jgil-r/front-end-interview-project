import styled from 'styled-components';

const HeroContainer = styled.section`
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding-top: 0;
  }
`;

const ImageContainer = styled.div`
  > img {
    width: 100%;
    height: 100%;
  }
`;

const InfoContainer = styled.div`
  padding: 0 1rem;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <ImageContainer>
        <img src="/aisle.jpg" alt="Table with beer" />
      </ImageContainer>
      <InfoContainer>
        <h1>Discover Aisle</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </InfoContainer>
    </HeroContainer>
  );
};

export default Hero;
