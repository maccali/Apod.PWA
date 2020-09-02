import Head from 'next/head'

type DayMetaFace = {
  copyright: string
  date: string
  explanation: string
  mediaType: string
  title: string
  url: string
  can: string
}

function DayMeta({
  copyright,
  date,
  explanation,
  mediaType,
  title,
  url,
  can
}: DayMetaFace) {
  const titlePage = `Apod Day ${date}`
  const titleCards = `${date} - ${title}`
  const description = `
    ${title ? `${title}, ` : ''}
    ${copyright ? `${copyright}, ` : ''}
    ${explanation.length > 70 ? explanation.substring(0, 70) : explanation}
    `
  const descriptionCards = `
    ${copyright ? `${copyright}, ` : ''}
    ${explanation.length > 120 ? explanation.substring(0, 120) : explanation}
    `
  const creator = `NASA${copyright ? `, ${copyright}` : ''}`
  const link = can

  return (
    <Head>
      <title>{titlePage}</title>
      <meta name="description" content={description}></meta>

      {/* Open Grafh Tags */}
      <meta name="og:title" property="og:title" content={titleCards} />
      <meta
        name="og:description"
        property="og:description"
        content={descriptionCards}
      />
      <meta name="og:url" property="og:url" content={link} />

      {mediaType === 'image' ? (
        <meta name="og:image" property="og:image" content={url} />
      ) : (
        ''
      )}
      <meta name="og:type" property="og:type" content={mediaType} />

      {/* Twitter Tags */}
      <meta name="twitter:title" content={titleCards} />
      <meta name="twitter:description" content={descriptionCards} />
      <meta name="twistter:creator" content={creator} />

      {mediaType === 'image' ? (
        <meta name="twitter:card" content="summary_large_image" />
      ) : (
        <meta name="twitter:card" content="player" />
      )}

      {mediaType === 'image' ? (
        <meta name="twitter:image" content={url} />
      ) : (
        <meta name="twitter:player" content={url} />
      )}
    </Head>
  )
}

export default DayMeta
