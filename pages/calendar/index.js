import React from 'react'
import Head from 'next/head'
import Nav from '../../components/utils/nav'
import Footer from '../../components/utils/footer'
import CalendarContent from '../../components/content/calendar'

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return <>
      <Nav />
      <Head>
        <title>ApodSpace | Calendar</title>
      </Head>
      <main>
        <CalendarContent />
      </main>
      <Footer />
    </>;
  }
}

export default Calendar
