import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import RecentWork from '../components/RecentWork/RecentWork'
import Second from '../components/Second/Second'
import Third from '../components/ThirdPart/Third'

export default function Home() {
  return (
    <div className=''>      
        <Header/>
        <Hero/>
        <Second/>
        <Third/>
        <RecentWork/>
        <Footer/>
    </div>
  )
}

export const getServerSideProps = async (context) => {

  return {
    props:{

    }
  }
}