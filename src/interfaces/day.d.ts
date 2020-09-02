interface DayFace {
  title: string
  copyright: string
  date: string
  explanation: string
  url: string
  hdUrl?: string
  mediaType: string
  serviceVersion: string
  can?: string
}

interface DayCustomFace {
  order: number
  url: string
  day?: DayFace
  error?: boolean
}
