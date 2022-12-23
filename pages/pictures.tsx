import Head from "next/head";
import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";

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
              <div
                key={photo.id}
                className=" col-span-2 rounded-xl overflow-hidden"
              >
                <Image
                  className="object-cover h-auto w-full"
                  src={photo.image.url}
                  width={photo.image.width}
                  height={photo.image.height}
                  alt={photo.title}
                />
              </div>
            ) : (
              <div
                key={photo.id}
                className=" col-span-2 md:col-span-1 rounded-xl overflow-hidden"
              >
                <Image
                  className="object-cover h-auto w-full"
                  src={photo.image.url}
                  width={photo.image.width}
                  height={photo.image.height}
                  alt={photo.title}
                />
              </div>
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
