'use client'

import Image from 'next/image';
import styles from './HeroSection.module.scss';

const imageLoader = ({ src, width, quality }) => {
  return `https://www.calm.com/_next/image?url=/_n/images/${src}&w=${width}&q=${quality || 75}`
}

export default function Hero() {
  return (
    <section
      className={styles.heroSection}
    >
      <div className={styles.heroSection__background}>
        <span className={styles.heroSection__backgroundOverlay}>
          <Image
            alt=""
            src="jasper-lake.webp"
            layout="fill"
            loading="eager"
            loader={imageLoader}
            objectFit="cover"
            sizes="100vw"
            className={styles.heroSection__backgroundImage}
            priority
          />
        </span>
      </div>
      <div className={styles.heroSection__content}>
        <div className={styles.heroSection__container}>
          <h1 className={styles.heroSection__title}>
            Calm your mind. Change your life.
          </h1>
          <p className={styles.heroSection__description}>
            The #1 app for sleep, meditation and relaxation
          </p>
          <div className={styles.heroSection__buttons}>
            <button className={styles.heroSection__buttons__primary} type='button' tabIndex={0}>
              Try Calm for Free
            </button>
            <button className={styles.heroSection__buttons__secondary} type='button' tabIndex={0}>
              Already have an account?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}