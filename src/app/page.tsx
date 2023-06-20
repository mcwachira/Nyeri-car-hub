import Image from 'next/image'
import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import {FetchAllCars} from "@/utils";
import {isContainer} from "postcss-selector-parser";
import CarCard from "@/components/CarCard";
import {yearsOfProduction , fuels} from "@/constants";
import ShowMore from "@/components/ShowMore";
import {HomeProps} from "@/types";




export default async function Home({searchParams}:HomeProps) {

    const allCars =   await FetchAllCars({

        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 10,
        model: searchParams.model || "",
    })

    console.log(allCars)

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
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
                    <CustomFilter title='fuel' options={fuels}/>
                    <CustomFilter title='year' options={yearsOfProduction}/>
                </div>
            </div>

            {!isDataEmpty ? (

                <section>
                    <div className='home__cars-wrapper'>
                    {allCars?.map((car:any, index:number ) => (
                        <CarCard key={index} car={car} />
                    ))}
                </div>

                    <ShowMore pageNumber={(searchParams.limit || 10)/10}
                    isNext={(searchParams.limit ||10)> allCars.length}/>
                </section>
            ):(

                <div className='home__error-container'>
                    <h2 className="text-black text-xl font-bold">
                        Oops, no results
                    </h2>
                        <p>
                            {allCars?.message}
                        </p>
                </div>
            )}




        </div>
    </main>
  )
}
