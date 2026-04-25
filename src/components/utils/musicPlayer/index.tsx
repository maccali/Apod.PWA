import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  RiCloseLine,
  RiMusic2Line,
  RiPlayFill,
  RiSpotifyLine,
  RiYoutubeLine
} from 'react-icons/ri'

import styles from './musicplayer.module.css'
import { trackEvent } from '../../../helpers/analytics'

type MusicTrack = {
  title: string
  youtubeId: string
  spotifyId: string
}

const tracks: Array<MusicTrack> = [
  {
    title: 'Fm Rift run',
    youtubeId: 'se0kjuSd2wg',
    spotifyId: '7HJbqZNFGjGufBakW1AaiJ'
  },
  {
    title: 'Groove Lake',
    youtubeId: '-JQfrbON1po',
    spotifyId: '0Ee7Aq4Xufp9u8ntcTtWQm'
  },
  {
    title: 'Groove Lake',
    youtubeId: 'Sise-itMaU8',
    spotifyId: '58HfxJQJb7PnZDK8Z5oFA0'
  },
  {
    title: 'Groove Lake',
    youtubeId: 'Sise-itMaU8',
    spotifyId: '3gg3IsCv3qeWvH0lSoXvxs'
  },
  {
    title: 'Groove Lake',
    youtubeId: 'Cn8wqwDOOoc',
    spotifyId: '1syhYGSKDrL5dxmwPwljiA'
  },
  {
    title: 'Groove Lake',
    youtubeId: 'Aj55liZ-ypI',
    spotifyId: '3f4zu47idJ1sZ7De9Jt86f'
  },
  {
    title: 'Groove Lake',
    youtubeId: 'D18bPyA7k3I',
    spotifyId: '1YEy4ms17DOuZv3W5FkEKv'
  },
  {
    title: 'Groove Lake',
    youtubeId: '3mfUsgxv_1s',
    spotifyId: '1jbh5WEj6Mcmakc8PuB48n'
  },
  {
    title: 'Groove Lake',
    youtubeId: 'iOoMURvOa8o',
    spotifyId: '246UUgb3hNg0ELD63i2dn5'
  },
  {
    title: 'Groove Lake',
    youtubeId: 'iOoMURvOa8o',
    spotifyId: '0eGmGiTSCaK5dsIAygPjOC'
  },
  {
    title: 'Groove Lake',
    youtubeId: 'RNop7_IQ7Ao',
    spotifyId: '11FjNPSDpFbkEVDYzFA2SD'
  }
]

function randomTrack() {
  return tracks[Math.floor(Math.random() * tracks.length)]
}

function MusicPlayer() {
  const [track, setTrack] = useState<MusicTrack>(tracks[0])
  const [provider, setProvider] = useState<'spotify' | 'youtube'>('youtube')
  const [open, setOpen] = useState(false)
  const playerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const savedTrackId = window.sessionStorage.getItem('music-player-track')
    const savedProvider = window.localStorage.getItem('music-player-provider-v2')
    const selectedTrack =
      tracks.find(item => item.spotifyId === savedTrackId) || randomTrack()

    setTrack(selectedTrack)
    window.sessionStorage.setItem('music-player-track', selectedTrack.spotifyId)

    if (savedProvider === 'spotify' || savedProvider === 'youtube') {
      setProvider(savedProvider)
    }
  }, [])

  function changeProvider(nextProvider: 'spotify' | 'youtube') {
    setProvider(nextProvider)
    window.localStorage.setItem('music-player-provider-v2', nextProvider)
    trackEvent('music_player_click', {
      action: 'change_provider',
      provider: nextProvider,
      track_title: track.title,
      track_id: nextProvider === 'spotify' ? track.spotifyId : track.youtubeId
    })
  }

  function changeTrack() {
    const nextTrack = randomTrack()
    setTrack(nextTrack)
    window.sessionStorage.setItem('music-player-track', nextTrack.spotifyId)
    trackEvent('music_player_click', {
      action: 'random_track',
      provider,
      track_title: nextTrack.title,
      track_id: provider === 'spotify' ? nextTrack.spotifyId : nextTrack.youtubeId
    })
  }

  function goToPlayer() {
    setOpen(true)
    trackEvent('music_player_click', {
      action: 'jump_to_player',
      provider,
      track_title: track.title
    })
    window.setTimeout(() => {
      playerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }, 50)
  }

  return (
    <>
      <button
        type="button"
        title="Go to music player"
        className={styles.jump}
        onClick={goToPlayer}
      >
        <RiMusic2Line />
        <span>Music</span>
      </button>

      <aside
        id="music-player"
        ref={playerRef}
        className={`${styles.player} ${open ? styles.open : ''}`}
      >
        {open ? (
          <>
            <div className={styles.header}>
              <button
                type="button"
                title="Random track"
                className={styles.trackButton}
                onClick={changeTrack}
              >
                <RiMusic2Line />
                <span>{track.title}</span>
              </button>

              <div className={styles.actions}>
                <button
                  type="button"
                  title="Use YouTube"
                  className={provider === 'youtube' ? styles.active : ''}
                  onClick={() => changeProvider('youtube')}
                >
                  <RiYoutubeLine />
                </button>
                <button
                  type="button"
                  title="Use Spotify"
                  className={provider === 'spotify' ? styles.active : ''}
                  onClick={() => changeProvider('spotify')}
                >
                  <RiSpotifyLine />
                </button>
                <button
                  type="button"
                  title="Minimize"
                  onClick={() => {
                    setOpen(false)
                    trackEvent('music_player_click', {
                      action: 'minimize_player',
                      provider,
                      track_title: track.title
                    })
                  }}
                >
                  <RiCloseLine />
                </button>
              </div>
            </div>

            {provider === 'spotify' ? (
              <iframe
                title={`${track.title} on Spotify`}
                className={styles.spotify}
                src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            ) : (
              <iframe
                title={`${track.title} on YouTube`}
                className={styles.youtube}
                src={`https://www.youtube.com/embed/${track.youtubeId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            )}
          </>
        ) : (
          <button
            type="button"
            title="Open music player"
            className={styles.pill}
            onClick={() => {
              setOpen(true)
              trackEvent('music_player_click', {
                action: 'open_player',
                provider,
                track_title: track.title
              })
            }}
          >
            <span className={styles.eyebrow}>Listen while you explore</span>
            <Image
              src="/imgs/grove-lake-logo.png"
              alt="Grove Lake"
              width={184}
              height={52}
              className={styles.logo}
            />
            <span className={styles.genre}>Instrumental hip-hop for deep space browsing</span>
            <span className={styles.listen}>
              <RiPlayFill />
              Play a random track
            </span>
          </button>
        )}
      </aside>
    </>
  )
}

export default MusicPlayer
