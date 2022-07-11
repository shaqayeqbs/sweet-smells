import { getSession } from "next-auth/client";
import Head from "next/head";
import UserProfile from "../modules/profile/user-profile";

function ProfilePage() {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" content="perfume" />
      </Head>
      <UserProfile />
    </div>
  );
}

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

export default ProfilePage;
