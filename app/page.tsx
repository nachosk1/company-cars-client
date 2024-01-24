'use client'

import { useEffect, useState } from 'react';
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils'
import Spinner from '@/components/Spinner';


export default function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(true)

  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")

  const [fuel, setFuel] = useState("")
  const [year, setYear] = useState("2022")

  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    try {
      setLoading(true)
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || '2022',
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '',
      })

      setAllCars(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars()
  }, [fuel, year, limit, manufacturer, model])

  return (
    <main className='overflow-x-hidden'>
      <Hero />

      <div
        id='discover'
        className={`mt-12 padding-x padding-y max-width ${allCars.length < 0 && 'mb-36'}`}
      >
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catagologos de autos</h1>
          <p>Explora los autos que te podrían gustar</p>
        </div>

        <div className='home__filters'>
          <SearchBar
            setManufacturer={setManufacturer}
            setModel={setModel}
          />

          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {
              allCars.length ? (
                <section>
                  <div className='home__cars-wrapper'>
                    {allCars?.map((car, index) => <CarCard car={car} key={index} />)}
                  </div>


                  <ShowMore
                    pageNumber={limit / 10}
                    isNextPage={limit > allCars.length}
                    setLimit={setLimit}
                  />
                </section>
              ) : (
                <div className='home__error-container'>
                  <h2 className='text-black text-xl font-bold'>Oops, no hay resultados</h2>
                </div>
              )
            }
          </>
        )}
      </div>
    </main>
  )
}
