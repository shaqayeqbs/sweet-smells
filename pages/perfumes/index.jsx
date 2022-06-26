import React from "react";
import { getAllPerfumes } from "../../modules/shop/service";
import List from "../../modules/shop/list";
import Head from "next/head";
const AllPerfume = (props) => {
  const { perfumes } = props.items;
  return (
    <div>
      <Head>
        <title>All perfumes</title>
        <meta name="description" content="perfume" />
      </Head>
      <List items={perfumes}></List>
    </div>
  );
};

export default AllPerfume;

export async function getStaticProps() {
  const perfumes = await getAllPerfumes();

  if (perfumes.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      items: perfumes,
    },
    revalidate: 1800,
  };
}
