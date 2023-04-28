import Footer from "@/components/footer";
import Header from "@/components/header";
import InfoCard from "@/components/infoCard";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";

export type searchResult = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
type Props = { searchResults: searchResult[] };

function Search({ searchResults }: Props) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  // console.log(router.query)
  const formattedStartDate = format(new Date(String(startDate)), "dd MMMM yy");
  const formattedEndDate = format(new Date(String(endDate)), "dd MMMM yy");
  const range = `${formattedStartDate}  -  ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="tetx-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <p className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </p>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map((result, index) => (
              <InfoCard key={index} item={result} />
            ))}
          </div>
        </section>
        <section></section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const myUrl = "http://localhost:4000";
  const searchResults: searchResult[] = await fetch(myUrl + "/stays").then(
    (res) => res.json()
  );

  return {
    props: { searchResults },
  };
}
