import Head from "next/head";
import Image from "next/image";
import { Button } from "components/Button/Button";
import Switcher from "components/Switcher/Switcher";
import { LANDING_PAGE_CONTENT } from "../data/landing-page-content";

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
      <section className="bg-gray-100 dark:bg-gray-900">
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
                href=""
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
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-left space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LANDING_PAGE_CONTENT.map((contentItem) => (
              <div
                key={contentItem.title}
                id={contentItem.id || ""}
                className="flex flex-col items-left justify-left text-left"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {contentItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  {contentItem.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-5">
                  {contentItem.description}
                </p>
                {contentItem.list && contentItem.list.length && (
                  <ul className="list-disc text-left text-gray-500 dark:text-gray-400">
                    {contentItem.list?.map((listItem) => (
                      <li
                        key={contentItem.title}
                        className="flex items-center space-x-3"
                      >
                        <svg
                          className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            zIndex: 1,
            position: "relative",
            width: "70%",
            backgroundColor: "rgb(100 145 65 / 75%)",
            marginBottom: 300,
            padding: 30,
            borderRadius: 10,
            color: "white",
          }}
          className="font-light md:text-xl lg:mb-8 lg:text-xxl"
        >
          "We believe public parks are powerful places for human connection,
          health, and joy. Especially in urban centers, public parks are an
          opportunity for us to come together in a beautiful public space
          regardless of class, age, orientation, or beliefs. Countless studies
          have shown the tangible health benefits of spending time in natural
          and social settings."
        </p>
        <Image
          src="/hero-images/hero-park.jpeg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="ParkSocial App Mock"
        />
      </div>
    </>
  );
}
