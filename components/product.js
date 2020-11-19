import styled from 'styled-components';

const ProductContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > p {
    margin: 0;
  }

  > span {
    color: var(--color-price);
  }
`;

const Product = ({ alt, productImage, productTitle, productPrice }) => {
  return (
    <ProductContainer>
      <div>
        <ProductImage src={productImage} alt={alt} />
      </div>
      <ProductInfoContainer>
        <p>{productTitle}</p>
        <span>${productPrice}</span>
      </ProductInfoContainer>
    </ProductContainer>
  );
};

export default Product;
