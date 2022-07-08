import React from "react";
import { getAllPerfumes } from "../../modules/shop/service";
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
  const data = await getAllPerfumes();
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
  const data = await getAllPerfumes();

  const paths = data.perfumes.map((perfume) => ({
    params: { perfumId: perfume._id },
  }));
  return {
    paths: paths, //vase che id haei page pre render besh
    fallback: false,
  };
}
