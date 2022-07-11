import React from "react";
import { connectToDatabase } from "../../lib/db";
import ItemDetail from "../../modules/shop/detail/item-detail";

const Detail = (props) => {
  const { size, id, image, title, price } = props;

  return (
    <ItemDetail size={size} image={image} price={price} title={title} id={id} />
  );
};

export default Detail;

export async function getStaticProps(context) {
  const { params } = context;
  const perfumeId = params.perfumId;
  const client = await connectToDatabase();
  const Collection = client.db().collection("perfumes");
  const data1 = await Collection.find().toArray();
  const respnse = JSON.stringify({ perfumes: data1 });
  const data = JSON.parse(respnse);
  client.close();

  const perfum = data.perfumes.find((perfume) => perfume._id === perfumeId);

  if (!perfum) {
    return { notFound: true };
  }

  return {
    props: {
      id: perfum._id,
      image: perfum.image,
      title: perfum.title,
      price: perfum.price,
      gender: perfum.gender,
      size: perfum.size,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const client = await connectToDatabase();
  const Collection = client.db().collection("perfumes");
  const data1 = await Collection.find().toArray();
  const respnse = JSON.stringify({ perfumes: data1 });
  const data = JSON.parse(respnse);
  client.close();

  const paths = data.perfumes.map((perfume) => ({
    params: { perfumId: perfume._id },
  }));
  return {
    paths: paths, //vase che id haei page pre render besh
    fallback: false,
  };
}
