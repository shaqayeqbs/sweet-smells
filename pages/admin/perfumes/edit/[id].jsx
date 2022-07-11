import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../../lib/db";
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
  const client = await connectToDatabase();
  const Collection = client.db().collection("perfumes");
  const data1 = await Collection.find().toArray();
  const respnse = JSON.stringify({ perfumes: data1 });
  const data = JSON.parse(respnse);
  client.close();
  if (!data) {
    return <p>Something went wrong!</p>;
  }
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
