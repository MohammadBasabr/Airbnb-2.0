import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LargeCard from "@/components/largeCard";
import LargeCards from "@/components/largeCard";
import MediumCard from "@/components/mediumCard";
import SmallCard from "@/components/smallCard";
import Head from "next/head";

export type exploreData = { img: string; location: string; distance: string };
export type card = { img: string; title: string };
type Props = { exploreData: exploreData[]; cardsData: card[] };

export default function Home({ exploreData, cardsData }: Props) {
  return (
    <>
      <Head>
        <title>Airbnb</title>
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull some data from a server - api endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, index) => (
              <SmallCard key={index} item={item} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item, index) => (
              <MediumCard item={item} key={index} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer/>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:4000/cards1").then((res) =>
    res.json()
  );
  const cardsData = await fetch("http://localhost:4000/cards2").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
