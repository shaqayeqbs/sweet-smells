import React from "react";
import AddProductForm from "../../modules/admin/add/add-product-from";
import { getSession } from "next-auth/client";

const AddProduct = () => {
  return (
    <>
      <AddProductForm />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default AddProduct;
