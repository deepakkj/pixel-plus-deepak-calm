'use client'

import Image from 'next/image';
import styles from './MiddleBannerSection.module.scss';

const imageLoader = ({ src, width, quality }) => {
    return `https://www.calm.com/_next/image?url=/_n/images/homepage/${src}&w=${width}&q=${quality || 75}`
}
export default function MiddleBannerSection() {
    return (
        <section
            className={styles.middleBannerSection}
        >
            <span className={styles.middleBannerSection__background}>
                <Image
                    alt="middle-banner"
                    src="content-tile-collage.webp"
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    loader={imageLoader}
                    sizes="100vw"
                    className={styles.middleBannerSection__backgroundImage}
                />
            </span>
        </section>
    );
}