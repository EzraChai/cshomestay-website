import { client } from "@/lib/hygraph";
import { gql } from "graphql-request";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";

export default function QuestionPage({ content }) {
  if (!!content) {
    const data = content.howTo;
    return (
      <>
        {!!data && (
          <Head>
            <title>
              {`${data.title} | Questions | Cozy & Sweet Homestay Port Dickson`}
            </title>
            <meta property="og:image" content={data.image.url} />
            <meta property="og:image" content={data.whatsappOgImage.url} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />

            <meta property="og:type" content="website" />
          </Head>
        )}
        <article className="max-w-3xl px-4 pt-24 pb-24 mx-auto lg:pt-32 md:px-0">
          {!!data.image && (
            <Image
              className="mb-8 overflow-hidden rounded-xl"
              src={data.image.url}
              height={data.image.height}
              width={data.image.width}
              alt={`${data.title}&apos; background image.`}
            />
          )}
          <div className="prose lg:prose-xl prose-h1:lg:text-[2.7rem] prose-img:rounded-xl prose-img:overflow-hidden ">
            <MDXRemote {...data.content} components={{ ...components }} />
          </div>
        </article>
      </>
    );
  }
}

const components = {
  img: (props) => {
    const alt = props.alt.split(".");
    if (alt[1] === "mp4") {
      return (
        <video className="overflow-hidden rounded-xl" controls>
          <source src={props.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <img src={props.src} alt={props.alt} />;
    }
  },
};

export async function getStaticProps({ params }) {
  let data = await getQuestionBySlug(params.slug);
  if (!!data) {
    data.howTo.content = await serialize(data.howTo.content);
    return {
      props: { content: data },
    };
  }
  return null;
}

export async function getStaticPaths() {
  let questions = await getQuestions();
  questions = questions.howTos;

  const paths = [];
  questions.map((question) => {
    paths.push({ params: { slug: question.slug } });
  });

  return {
    paths,
    fallback: true,
  };
}

async function getQuestions() {
  const query = gql`
    query Howtos {
      howTos {
        slug
      }
    }
  `;

  return await client.request(query);
}

async function getQuestionBySlug(slug: string) {
  const query = gql`
    query Howtos {
      howTo(where: { slug: "${slug}" }) {
        id
        image  {
          url
          width
          height
        }
        whatsappOgImage {
          url
        }
        content
        title
      }
    }
  `;

  return await client.request(query);
}
