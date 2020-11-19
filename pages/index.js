import styled from 'styled-components';
import { Layout, Hero, Group } from '../components';

const GroupsContainer = styled.div`
  padding: 3rem 0;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export async function getStaticProps() {
  const res = await fetch(
    'https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6'
  );

  const data = await res.json();

  return {
    props: {
      aisles: data,
    },
  };
}

const Index = ({ aisles }) => {
  return (
    <Layout title="Foxtrot">
      <Hero />
      <GroupsContainer>
        {aisles.aisle.groups.map(({ id, name, products }) => (
          <Group key={id} groupName={name} products={products} />
        ))}
      </GroupsContainer>
    </Layout>
  );
};

export default Index;
