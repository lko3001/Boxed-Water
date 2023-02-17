import TeamCard from "@/components/TeamCard";
import team from "../team.json";
import reviews from "../reviews.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.set(bottleImage.current, { rotate: 12 });
      gsap.set(bigImg.current, { y: 80 });

      gsap.from(".titleText", {
        x: -200,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
      });
      gsap.to(bottleImage.current, {
        rotation: -12,
        scrollTrigger: {
          trigger: bottleImage.current,
          scrub: true,
        },
      });
      gsap.to(bigImg.current, {
        y: -70,
        scrollTrigger: {
          trigger: bigImg.current,
          scrub: true,
        },
      });
      gsap.to(video.current, {
        scrollTrigger: {
          trigger: video.current,
          onEnter: () => video.current!.play(),
          onEnterBack: () => video.current!.play(),
          onLeave: () => video.current!.pause(),
          onLeaveBack: () => video.current!.pause(),
        },
      });
      gsap.to(comp.current, {
        backgroundColor: "white",
        scrollTrigger: {
          trigger: baseSection.current,
          scrub: true,
          start: () => `${window.innerHeight}px bottom`,
          end: () => `${window.innerHeight + 500}px bottom`,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const bottleImage = useRef(null);
  const baseSection = useRef(null);
  const bigImg = useRef(null);
  const littleImg = useRef(null);
  const video = useRef<HTMLVideoElement>(null);
  const comp = useRef<null>(null);

  return (
    <div ref={comp} className="bg-ice">
      <Head>
        <title>Boxed Water</title>
        <meta property="og:title" content="Boxed Water" />
        <meta name="description" content="Refresh Yourself With Boxed Water" />
        <meta
          property="og:description"
          content="Refresh Yourself With Boxed Water"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/drop.ico" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1627483262769-04d0a1401487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <meta
          property="og:url"
          content="https://landing-boxedwater.vercel.app/"
        />
      </Head>
      <article className="isolate flex h-screen flex-col bg-white font-archivonarrow">
        <div className="grid min-h-0 grow grid-rows-2 lg:flex">
          <div className="flex w-full flex-col justify-between overflow-hidden lg:p-20">
            <div className="flex grow flex-col justify-center py-8 px-16 lg:block lg:p-0">
              <div className="titleText text-5xl font-bold uppercase opacity-70 lg:text-7xl">
                Boxed Water
              </div>
              <h1 className="text-5xl font-bold uppercase lg:text-7xl">
                <div className="titleText">Refresh</div>
                <div className="titleText">Your</div>
                <div className="titleText">Day</div>
              </h1>
            </div>
            <a
              className="w-full bg-black px-8 py-4 text-lg text-white lg:w-fit"
              href="#section2"
            >
              Learn More
            </a>
          </div>
          <div className="overflow-hidden lg:absolute lg:top-0 lg:-z-10 lg:h-full lg:w-full">
            <img
              src="https://images.unsplash.com/photo-1553530979-212c46e00221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1362&q=80"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </article>
      <section
        id="section2"
        className="relative flex h-screen flex-row-reverse items-center justify-between gap-4 bg-ice bg-contain bg-center bg-no-repeat p-12 text-sm bg-blend-screen lg:flex-col lg:gap-0 lg:p-20 2xl:p-52"
        style={{
          backgroundImage:
            "url('https://themayanagari.com/wp-content/uploads/2020/09/water-splass-png-image-download.jpg')",
        }}
      >
        <Image
          alt="Boxed Water"
          src="/boxed-water.png"
          height={2634}
          width={1009}
          draggable={true}
          ref={bottleImage}
          className="absolute top-1/2 left-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 object-contain sm:w-1/3 md:w-1/4 lg:h-4/5 lg:w-fit"
        />
        {/* Text Paragraph */}
        <div className="z-[1] w-auto max-w-[25ch] self-end text-right text-sm lg:w-[25ch] lg:text-base">
          <p>
            Looking for a refreshing pick-me-up? Look no further than our crisp,
            cool water. Pure hydration, with every sip
          </p>
        </div>
        {/* Boxed Water */}
        <div className="text-center` absolute top-16 left-0 z-[1] flex w-full justify-center text-white lg:static">
          <h1 className="w-fit bg-black px-8 py-4 text-2xl font-black tracking-widest lg:text-8xl">
            Boxed Water
          </h1>
        </div>
        {/* Ingredients */}
        <div className="z-[1] flex flex-col divide-y divide-black self-end lg:self-start md:[&>*]:pr-16">
          <span className="py-2 pt-0 font-archivonarrow text-2xl font-black lg:py-4 lg:text-5xl">
            1000 ml
          </span>
          <p className="py-2 text-xs md:text-base lg:py-4">
            fresh <br />
            purified water
          </p>
          <span className="py-2 text-xs md:text-base lg:py-4">
            no additives
          </span>
          <span className="py-2 pb-0 text-xs md:text-base lg:py-4">
            refreshing
          </span>
        </div>
      </section>
      <section className="m-auto" ref={baseSection}>
        <div className="flex flex-col justify-between gap-8 py-20 px-12 lg:flex-row lg:px-20 2xl:px-52">
          <h1 className="text-4xl font-bold uppercase lg:text-7xl">
            Live happy <br /> drink healthy
          </h1>
          <p className="self-end font-archivonarrow text-lg">
            Organic <br /> purified water
          </p>
        </div>
        <div className="px-0 lg:px-20 2xl:px-52">
          <img
            src="https://images.unsplash.com/photo-1604537371316-c2ea9d1b04ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
            className="aspect-[4/5] h-full w-full object-cover object-bottom lg:aspect-[16/8]"
          />
        </div>
        <div className="py-20 px-12 lg:px-20 2xl:px-52">
          <div className="mb-8 grid lg:grid-cols-3">
            <h1 className="font-archivonarrow text-3xl font-bold">
              Bringing the magic of purifed water to everyone, without
              compromise
            </h1>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <p>
              Introducing our newest offering: a refreshing water that is as
              cool and invigorating as a dip in a mountain stream. With every
              sip, you will taste the crisp purity of the water, straight from
              its source. Our water is carefully filtered and treated to ensure
              its quality, while retaining its natural taste and refreshing
              properties.
            </p>
            <p>
              So why not give our refreshing water a try? It is the perfect way
              to hydrate, refresh, and invigorate yourself, no matter what your
              day brings. With its crisp, clean taste and refreshing properties,
              it is sure to become your go-to beverage for all your hydration
              needs.
            </p>
          </div>
        </div>

        <h1 className="my-20 mx-12 mt-0 text-6xl font-bold uppercase lg:my-32 lg:mx-20 lg:text-right lg:text-8xl 2xl:mx-52">
          say no more
        </h1>
        <div className="flex flex-col-reverse items-center justify-between px-0 lg:flex-row lg:px-20 2xl:px-52">
          <p className="mb-16 p-12 lg:mb-0 lg:p-0">
            Stay hydrated with our refreshing water. Pure, crisp and delicious
          </p>
          <img
            src="https://images.unsplash.com/photo-1587502624372-45627391a31f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="aspect-[4/5] w-full object-cover lg:aspect-[3/2] lg:w-2/3"
            ref={bigImg}
          />
        </div>
        <div className="flex flex-col gap-12 px-12 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:place-items-end lg:gap-20 lg:px-20 2xl:px-52">
          <img
            src="https://images.unsplash.com/photo-1564419320603-628d868a193f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80"
            className="aspect-[4/5] w-full object-cover lg:col-start-1 lg:col-end-1 lg:-translate-y-28"
            ref={littleImg}
          />
          <p className="font-semibold uppercase lg:col-start-3 lg:col-end-3 lg:text-2xl">
            Quench your thirst, refresh your body. Our water is the pure and
            perfect remedy
          </p>
        </div>
      </section>
      <section className="my-20 lg:mt-52">
        <video
          src="https://i.imgur.com/OvpP7XT.mp4"
          className="aspect-[21/9] w-full object-cover"
          muted
          ref={video}
        ></video>
      </section>
      <section className="my-20 px-4">
        <h1 className="mx-12 mb-20 mt-0 text-center text-4xl font-bold uppercase lg:my-32 lg:mx-20 lg:text-8xl 2xl:mx-52">
          reviews
        </h1>
        <div className="items-top mx-auto flex max-w-7xl flex-row flex-wrap justify-center gap-4">
          {reviews.map((review) => (
            <div
              className="max-w-sm p-8 outline outline-1 transition-colors duration-100 hover:bg-black hover:text-white"
              key={review.review}
            >
              <h2 className="mb-4 text-center text-2xl font-bold capitalize">
                {review.name}
              </h2>
              <p className="font-archivonarrow">{review.review}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="my-20 px-4">
        <h1 className="mx-12 mb-20 mt-0 text-center text-4xl font-bold uppercase lg:my-32 lg:mx-20 lg:text-8xl 2xl:mx-52">
          The Team
        </h1>
        <div className="mx-auto flex max-w-5xl flex-row flex-wrap items-center justify-center gap-8">
          {team.map((member) => (
            <TeamCard
              key={member.image}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
