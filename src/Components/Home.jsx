import React from 'react'
import Feed from './Feed/Feed'
import Head from './Helpers/Head'


function Home() {
  return (
    <section className='container mainContainer'>
      <Head title="Fotos" description="home do site dogs com o feed de fotos"/>
      <Feed />
    </section>
  )
}

export default Home
