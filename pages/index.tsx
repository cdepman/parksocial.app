import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "components/Button/Button";
import Switcher from "components/Switcher/Switcher";
import { LP_GRID_ITEMS } from "../data/lp-items";

export default function Web() {
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://next-enterprise.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta
          property="og:image:width"
          content="1200"
        />
        <meta
          property="og:image:height"
          content="630"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <title>ParkSocial</title>
      </Head>
      <Switcher />
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center pt-10">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              <div className="flex justify-center">
                <div style={{ color: "#30B5A6" }}>Park</div>
                <div style={{ color: "#FF6B6B" }}>Social</div>
              </div>
            </h1>
            <p className="mb-6 max-w-lg font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Your Public Park Companion. Pop-Ups, Events, Feature-Rich Map,
              Stewardship Rewards
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingTop: 30,
                paddingBottom: 30,
              }}
            >
              <Image
                src="/app-images/app-mock-small.png"
                height={300}
                width={300}
                alt="ParkSocial App Mock"
              />
            </div>
            <div style={{ padding: 20 }}>
              <Button
                href="https://github.com/Blazity/next-enterprise"
                className="mr-3"
                style={{ backgroundColor: "#30b5a6", border: "none" }}
              >
                Get the App
              </Button>
              <Button
                href="#our_mission"
                intent="secondary"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div
                key={singleItem.title}
                id={singleItem.id || ""}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  {singleItem.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {singleItem.description}
                </p>
                {singleItem.list && singleItem.list.length && (
                  <ul className="list-disc text-left text-gray-500 dark:text-gray-400">
                    {singleItem.list?.map((listItem) => (
                      <li
                        key={singleItem.title}
                        className="flex items-center space-x-3"
                      >
                        <svg
                          class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 12"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                          />
                        </svg>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  if (req.headers?.host?.includes("next-enterprise.vercel.app")) {
    return {
      redirect: {
        destination:
          "https://blazity.com/open-source/nextjs-enterprise-boilerplate",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
}
