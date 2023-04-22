import { gql } from "graphql-request";
import { client } from "@/lib/hygraph";
import Link from "next/link";
import Head from "next/head";

export default function QuestionPage({ questions }) {
  return (
    <>
      <Head>
        <title>Questions | Cozy & Sweet Homestay Port Dickson</title>
      </Head>
      <div className="max-w-3xl px-4 pt-24 mx-auto md:pt-32">
        <h2 className="text-4xl font-extrabold text-center lg:text-6xl lg:tracking-tight text-zinc-800">
          Questions.
        </h2>
        <ul className="mt-6">
          {questions.howTos.map((question, index) => (
            <li key={question.id}>
              <Link className="p-4" href={`/question/${question.slug}`}>
                {index === 0 && <hr className="mb-4 lg:mb-6" />}
                <h4 className="text-2xl font-bold lg:text-4xl lg:tracking-tight text-zinc-700">
                  {question.title}
                </h4>
                <hr className="mt-4 lg:mt-6" />
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
