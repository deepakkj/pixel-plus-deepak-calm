'use client';
import Image from 'next/image';

import styles from './PricingSection.module.scss';
const PricingSection = () => {
  const imageLoader = ({ src, width, quality }) => {
    return `https://www.calm.com/_next/image?url=/_n/images/homepage/${src}&w=${width}&q=${quality || 75}`
  }
  return (
    <section className={styles.pricingsection_wrapper}>
      <div className={styles.pricingsection_background}>
        <span className={styles.pricingsection_background_image_container}>
          <Image
            alt=""
            loading="lazy"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom center"
            loader={imageLoader}
            src="blue-wave-bg.webp"
          />
        </span>
      </div>
      <div className={styles.pricingsection_container}>
        <h2 className={styles.pricingsection_heading}>Start your free trial of <br /> Calm Premium.</h2>
        <ul className={styles.subscriptionInfoWrapper}>
          <li className={styles.subscriptioInfoWrapper_item}>
            <button
              className={styles.subscriptioInfoWrapper_item_button}
              role="radio"
              aria-checked="true"
              type="button"
              tabIndex="0">
              <div className={styles.priceInfoWrapper}>
                <div className={styles.priceInfoWrapper_left}>
                  <span className={styles.priceInfoWrapper_left_time}>Yearly<br /></span>
                  <span className={styles.priceInfoWrapper_left_price}>US$49.99/yr.</span>
                </div>
                <div className={styles.priceInfoWrapper_right}>US$4.17/mo.</div>
              </div>
              <div className={styles.subscriptioInfo__time}>
                <span className="">14-Day Free Trial</span>
              </div>
            </button>
          </li>
        </ul>
        <p className={styles.pricingsection_copy}>
          After your free trial, the yearly subscription is US$49.99 and automatically renews each year until cancelled.
          &nbsp;
          <a href="/terms" target="_blank" rel="noreferrer">
            Terms
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://support.calm.com/hc/en-us/articles/115002473607-How-to-turn-off-auto-renewal-or-cancel-my-subscription"
            target="_blank"
            rel="noreferrer"
          >
            Cancel anytime
          </a>
        </p>
        <button
          className={styles.pricingsection_cta}
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default PricingSection;
