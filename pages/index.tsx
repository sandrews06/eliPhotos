import Head from 'next/head'
import Image, { ImageLoaderProps } from 'next/image'
import Link from 'next/link'
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  const loader = ({ src, width }: ImageLoaderProps) => {
    return `${src}?w=${width}&fm=webp&q=80`
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Eli Andrews Photography Portfolio</title>
        <meta name="description" content="Photography Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.bgWrap}>
          <Image
            className={styles.imageDesktop}
            alt=""
            loader={loader}
            src="https://images.ctfassets.net/hn94000t32hs/3BG6hInA3CsFdEeyX8gVZE/ee308c49b61db71b7ba4162b14a2d84d/PC250010.jpeg"
            layout="fill"
            objectFit="cover"
          />
          <Image
            className={styles.imageMobile}
            alt=""
            loader={loader}
            src="https://images.ctfassets.net/hn94000t32hs/3BG6hInA3CsFdEeyX8gVZE/ee308c49b61db71b7ba4162b14a2d84d/PC250010.jpeg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Nav showHome={false} />
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <h1>Eli Andrews</h1>
            <h3>Photography Portfolio</h3>
            <p>
              <Link href="/photos/insects">Visit Gallery</Link>
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
