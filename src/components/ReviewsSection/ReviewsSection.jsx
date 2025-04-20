'use client'
import HomepageCarousel from '../HomepageCarousel/HomepageCarousel';
import styles from './ReviewsSection.module.scss';

const reviews = [
    {
      quote: 'When I cannot fall asleep, I turn on this app and am out within 5 minutes.',
      author: 'Brandy from Houston',
    },
    {
      quote: 'I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so wonderful and healing for me.',
      author: 'John from Chicago',
    },
    {
      quote: 'Calm has changed my life in immeasurable ways. I am more resilient and feel so much more connected to myself.',
      author: 'Allison from San Jose',
    },
    {
      quote: "Whenever I need to unwind from a stressful work day I meditate with Calm's soundscapes and it automatically sends me to my happy place.",
      author: 'Jasmine from Bend',
    },
    {
      quote: 'My family loves Calm! Out of the three meditation apps I have on my phone, Calm is the one I actually use.',
      author: 'Kristie from Irvine',
    },
    {
      quote: 'Calm cuts through my stress, anxiety, irregular sleep schedule and brings me to deep sleep. I usually fall asleep within 5 minutes.',
      author: 'Mathieu from New Orleans',
    },
    {
      quote: 'I have tried other meditation and gratitude apps, but this one has everything and the best teachers.',
      author: 'Jen from Scarsdale',
    },
    {
      quote: 'My wife and I have listened to Calm for well over 2 years. Cannot express how easy it is to fall asleep listening to this app.',
      author: 'Aaron from Louisville',
    },
    {
      quote: "Medication isn't for me, so I decided to give Calm a try. Now I begin and end every day with guided meditations.",
      author: 'Tracy from Newark',
    },
  ];

const ReviewsSection = () => {

	return (
        <div className={styles.reviewssection_background}>
		<section className={styles.reviewssection_wrapper}>
			<section className={styles.reviewssection_wrapper_contentwrapper}>
				<h2 className={styles.reviewssection_heading}>Over 2 million 5-star reviews.</h2>
				<HomepageCarousel
					slideItems={reviews.map(review => ({
						key: review.author,
						Slide: () => (
							<article className={styles.reviewssection_reviewItem}>
								<img src="/quote-icon.svg" alt="quote-icon" className='quote-icon' />
								<blockquote>
								<p className={styles.reviewssection_reviewItem_quote}>{review.quote}</p>
								</blockquote>
								<p className={styles.reviewssection_reviewItem_author}>{review.author}</p>
                                <img src="/5-stars.svg" alt="five-stars" className="five-stars" /> 
							</article>
						),
					}))}
					numSlides={{
						desktopLarge: 3,
						desktop: 2,
						tablet: 2,
						mobile: 1,
					}}
					slideGap={{
						desktopLarge: 48,
						desktop: 36,
						tablet: 16,
						mobile: 8,
					}}
				/>
			</section>
		</section>
        </div>
	);
};

export default ReviewsSection;
