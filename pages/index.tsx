import Banner from "@/components/banner";
import Header from "@/components/header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb</title>
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner/>
    </>
  );
}
