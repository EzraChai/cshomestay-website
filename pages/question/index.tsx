import { gql } from "graphql-request";
import { client } from "@/lib/hygraph";
import Link from "next/link";
import Head from "next/head";

export default function QuestionPage({ questions }) {
  return (
    <>
      <Head>
        <title>Questions | Cozy & Sweet Homestay Port Dickson</title>
        <meta
          property="og:title"
          content="Questions | Cozy & Sweet Homestay Port Dickson"
        ></meta>
        <meta
          property="og:image"
          content="https://cshomestay.vercel.app/api/image/og"
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://cshomestay.vercel.app/og-whatsapp.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:description"
          content="Frequently asked questions by the guests."
        />
        <meta property="og:url" content="https://cshomestay.vercel.app" />
      </Head>
      <div className="max-w-3xl px-4 pt-24 mx-auto md:pt-32">
        <h2 className="text-4xl font-extrabold text-center lg:text-6xl lg:tracking-tight text-zinc-800">
          Questions.
        </h2>
        <ul className="mt-12">
          {questions.howTos.map((question, index) => (
            <li className=" group" key={question.id}>
              <Link href={`/question/${question.slug}`}>
                {index === 0 && <hr className="text-zinc-600" />}
                <h4 className="py-4 text-2xl font-bold transition-colors lg:py-6 lg:text-4xl lg:tracking-tight group-hover:text-black text-zinc-600 ">
                  {question.title}
                </h4>
                <hr className="text-zinc-600" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let data = await getQuestionsWithTitle();
  if (data) {
    return {
      props: { questions: data },
    };
  }
  return null;
}

export async function getQuestionsWithTitle() {
  const query = gql`
    query Howtos {
      howTos {
        id
        slug
        title
      }
    }
  `;

  return await client.request(query);
}
