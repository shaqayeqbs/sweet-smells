import List from "../modules/shop/list";
import { getAllPerfumes } from "../modules/shop/service";
import Head from "next/head";

const FilteredPage = (props) => {
  const { perfumes } = props;

  if (!perfumes || perfumes.length === 0) {
    return (
      <div>
        <p className="center">There is no Perfume!</p>;
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{perfumes.gender}</title>
        <meta name="description" content="perfumes" />
      </Head>

      <List items={perfumes} />
    </div>
  );
};

export default FilteredPage;

export async function getStaticProps(context) {
  const { params } = context;
  const gender = params.gender;

  const data = await getAllPerfumes();

  const perfumes = data.perfumes.filter((perfume) => perfume.gender === gender);

  if (!perfumes) {
    return { notFound: true };
  }

  return {
    props: {
      perfumes: perfumes,
    },
    revalidate: 1800,
  };
}
export async function getStaticPaths() {
  const data = await getAllPerfumes();
  const paths = data.perfumes.map((perfumes) => ({
    params: { gender: perfumes.gender },
  }));
  return {
    paths: paths, //vase che id haei page pre render besh
    fallback: false,
  };
}
