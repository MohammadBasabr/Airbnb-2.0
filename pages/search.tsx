import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

type Props = {};

function Search({}: Props) {
  return (
    <div>
      <Header />
      <main className="flex">
        <section>
          <p className="tetx-xs">300+ Stays for 5 number of guests</p>
          <p className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</p>
          <div className="">
            <p
              className="px-4 py-2 border rounded-full cursor-pointer
            hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out"
            >
              Cancellation Flexibility
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
