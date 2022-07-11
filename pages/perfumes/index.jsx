import React from "react";

import List from "../../modules/shop/list";
import Head from "next/head";
import { connectToDatabase } from "../../lib/db";
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
  const client = await connectToDatabase();
  const Collection = client.db().collection("perfumes");
  const data = await Collection.find().toArray();
  const respnse = JSON.stringify({ perfumes: data });
  const perfumes = JSON.parse(respnse);
  client.close();

  if (perfumes.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      items: perfumes,
    },
    revalidate: 5,
  };
}
