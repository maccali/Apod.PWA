import React from 'react'
import Head from 'next/head'
import Nav from '../../components/utils/nav'
import CalendarContent from '../../components/content/calendar'

function Calendar() {
  return (
    <>
      <Nav />
      <Head>
        <title>Apod Pictu Calendar</title>
      </Head>
      <main>
        <CalendarContent />
      </main>
    </>
  );
}

export default Calendar
