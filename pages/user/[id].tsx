import type { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import UserCard from "../../components/UserCard/UserCard";

import Layout from "../../layouts/Layout";

import { User } from "../../interfaces/user";

import { getUser } from "../../api/user";

export const getServerSideProps = async (context: { params: { id: any } }) => {
  try {
    const user = (await getUser(Number(context?.params?.id))) as User;
    return {
      props: {
        user,
      }, // will be passed to the page component as props
    };
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      user: {},
    }, // will be passed to the page component as props
  };
};

const UserPage: NextPage<{ user: User }> = ({ user }: { user: User }) => {
  return (
    <>
      <Head>
        <title>Reqres next js app</title>
        <meta
          name="description"
          content="A NextJS app using the regres.in API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <UserCard
            avatar={user.avatar}
            firstName={user.first_name}
            lastName={user.last_name}
            email={user.email}
          />
        </div>
      </Layout>
    </>
  );
};

export default UserPage;
