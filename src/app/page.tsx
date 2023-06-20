import Image from 'next/image'
import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="oveflow-hidden">
<Hero/>

        <div className="mnt-12 padding-x padding-y max-width" id="discover">
            <div className="home__text-container">
                <h1 className="text-4xl font-extrabold">
                    Car Catalogue
                </h1>

                <p>
                    Explore the cars you might like
                </p>

                <div className="home__filters">
                    <SearchBar/>


                </div>

                <div className="home__filter-container">
                    <CustomFilter title='fuel'/>
                    <CustomFilter title='year'/>
                </div>
            </div>        </div>
    </main>
  )
}
