import { getSession } from "next-auth/client";
import { getAllPerfumes } from "../../../../modules/shop/service";
import Form from "../../../../modules/admin/edit/form";

function EditPage(props) {
  const { size, id, image, title, price, gender } = props;
  return (
    <Form
      size={size}
      image={image}
      price={price}
      title={title}
      id={id}
      gender={gender}
    />
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const { params } = context;
  const id = params.id;
  const data = await getAllPerfumes();
  const perfum = data.perfumes.find((perfume) => perfume._id === id);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  if (!perfum) {
    return { notFound: true };
  }

  return {
    props: {
      session: session,
      id: perfum._id,
      image: perfum.image,
      title: perfum.title,
      price: perfum.price,
      gender: perfum.gender,
      size: perfum.size,
    },
  };
}

export default EditPage;
