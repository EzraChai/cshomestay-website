import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import {
  SmallPictureWithModal,
  BigPictureWithModal,
} from "../components/ImageWithModal";

const END_POINT = process.env.END_POINT;
const HYGRAPH_PERMANENT_TOKEN = process.env.HYGRAPH_PERMANENT_TOKEN;

export default function Pictures({ data }) {
  console.log(data.images);
  return (
    <div className=" bg-pinkLavender/40">
      <Head>
        <title>Pictures</title>
      </Head>
      <div className="pt-32 lg:pt-32 pb-12 w-full h-full max-w-5xl mx-auto p-5 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {data.images.map((photo, index) => {
            return index % 3 == 0 ? (
              <BigPictureWithModal key={photo.id} image={photo} />
            ) : (
              <SmallPictureWithModal key={photo.id} image={photo} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const getData = async () => {
  const client = new GraphQLClient(END_POINT, {
    headers: {
      Authorization: `Bearer ${HYGRAPH_PERMANENT_TOKEN}`,
    },
  });
  const query = gql`
    {
      images {
        id
        title
        image {
          url
          width
          height
        }
      }
    }
  `;

  return await client.request(query);
};

export const getStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      data,
    },
  };
};
