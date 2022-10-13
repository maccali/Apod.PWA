import React from 'react'
import api from '../../services/api'

import Nav from '../../components/utils/nav'
import DayMeta from '../../components/metas/day'
import DayContent from '../../components/content/day'
import DateNotExist from '../../components/content/dateNotExist'

import DateHelper from '../../helpers/date'

function Day({ day }: any) {
  return (
    <>
      <Nav />
      {day ? (
        <DayMeta
          copyright={day.copyright}
          date={day.date}
          explanation={day.explanation}
          mediaType={day.mediaType}
          title={day.title}
          url={day.url}
          can={day.can}
        />
      ) : (
        ''
      )}
      <main>
        {day ? (
          <DayContent
            copyright={day.copyright}
            date={day.date}
            explanation={day.explanation}
            mediaType={day.mediaType}
            title={day.title}
            url={day.url}
            hdUrl={day.hdUrl}
          />
        ) : (
          <DateNotExist />
        )}
      </main>
    </>
  )
}

Day.getInitialProps = async (ctx: any) => {
  if (DateHelper.validDateAndPast(ctx.query.day)) {
    const key = process.env.NASA_API_KEY
    const url = `/apod?api_key=${key}&date=${ctx.query.day}`

    const req: any  = await api.get(`${url}`)
    if (req.status === 200) {
      const day: DayFace = {
        title: req.data['title'],
        copyright: req.data['copyright'],
        date: req.data['date'],
        explanation: req.data['explanation'],
        url: req.data['url'],
        hdUrl: req.data['hdurl'],
        mediaType: req.data['media_type'],
        serviceVersion: req.data['service_version'],
        can: `https://${ctx.req.headers.host}${ctx.req.url}`
      }

      return {
        day
      }
    }
  }
  return {
    day: null
  }
}

export default Day
