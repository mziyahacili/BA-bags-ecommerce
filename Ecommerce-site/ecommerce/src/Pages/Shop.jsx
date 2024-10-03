import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Collections from '../components/Collections/Collections'
import ForthCollectionComponent from '../components/ForthCollectionComponent/ForthCollectionComponent'
import ForthCollectionComponentSecond from '../components/ForthCollectionComponentSecond/ForthCollectionComponentSecond'
import Service from '../components/Service/Service'
import InfoCarousel from '../components/InfoCarousel/InfoCarousel'
import IconSection from '../components/IconSection/IconSection'


export default function Shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <NewCollections/>
        <Collections />
        <ForthCollectionComponent/>
        <ForthCollectionComponentSecond/>
        <IconSection/>
        <Service/>
        <InfoCarousel/>
    </div>
  )
}
