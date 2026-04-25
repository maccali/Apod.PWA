import ReactGA from 'react-ga4'

type AnalyticsParams = Record<string, string | number | boolean | undefined>

function canTrack() {
  return (
    typeof window !== 'undefined' &&
    window.location.hostname !== 'localhost'
  )
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (!canTrack()) return

  ReactGA.event(eventName, {
    page_path: window.location.pathname,
    ...params,
  })
}
