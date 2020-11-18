import { Layout, Hero } from '../components';

export async function getStaticProps() {
  const res = await fetch(
    'https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6'
  );

  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}

const Index = ({ products }) => {
  console.log(products);
  return (
    <Layout title="Foxtrot">
      <Hero />
    </Layout>
  );
};

export default Index;
