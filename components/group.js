import styled from 'styled-components';

import Product from './product';

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
  gap: 2rem 1rem;
  list-style: none;
  padding-left: 0;
`;

const Group = ({ groupName, products }) => {
  return (
    <section>
      <div>
        <h1>{groupName}</h1>
      </div>
      <div>
        <ProductList>
          {products.map(({ id, title, unitPrice, assets }) => {
            return (
              <li key={id}>
                {assets.map((asset) => (
                  <Product
                    key={id}
                    alt={title}
                    productImage={asset.url}
                    productTitle={title}
                    productPrice={unitPrice}
                  />
                ))}
              </li>
            );
          })}
        </ProductList>
      </div>
    </section>
  );
};

export default Group;
