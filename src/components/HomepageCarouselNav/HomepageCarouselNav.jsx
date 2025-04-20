import styles from './HomepageCarouselNav.module.scss';

export function ArrowLeftIcon({ width = 96, height = 96, fill = 'currentColor', ...props }) {
	return (
	  <svg
		width={width}
		height={height}
		viewBox="0 0 96 96"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	  >
		<path
		  d="M57.99975,81.99975 C57.48775,81.99975 56.97675,81.80475 56.58575,81.41375 L24.58575,49.41375 C23.80475,48.63275 23.80475,47.36675 24.58575,46.58575 L56.58575,14.58575 C57.36675,13.80475 58.63275,13.80475 59.41375,14.58575 C60.19475,15.36675 60.19475,16.63275 59.41375,17.41375 L28.82875,47.99975 L59.41375,78.58575 C60.19475,79.36675 60.19475,80.63275 59.41375,81.41375 C59.02275,81.80475 58.51175,81.99975 57.99975,81.99975"
		  fill={fill}
		  fillRule="evenodd"
		/>
	  </svg>
	);
  }
  
  /**
   * Right-pointing arrow icon (mirrored)
   */
  export function ArrowRightIcon(props) {
	return (
	  <ArrowLeftIcon
		{...props}
		style={{ transform: 'scaleX(-1)', ...(props.style || {}) }}
	  />
	);
  }
const HomepageCarouselNav = ({
	carouselNavClassName,
	numSlides,
	currentSlideIndex,
	setCurrentSlideIndex,
	numCardsToShow,
}) => {
	const isAtBeginning = currentSlideIndex === 0;
	const isAtEnd = currentSlideIndex >= numSlides - numCardsToShow;

	const onPrev = () => {
		if (!isAtBeginning) {
			setCurrentSlideIndex(currentSlideIndex - 1);
		}
	};

	const onNext = () => {
		if (!isAtEnd) {
			setCurrentSlideIndex(currentSlideIndex + 1);
		}
	};

	return (
		<ul className={`${styles.homepage_carouselnav_wrapper} ${carouselNavClassName}`}>
			<li>
				<button
					onClick={onPrev}
					disabled={isAtBeginning}
					aria-label="previous"
					className={styles.homepage_carouselnav_button_prev}
				>
					<div className={styles.homepage_carouselnav_button_prev_icon_wrapper}>
					<ArrowLeftIcon />
					</div>
				</button>
			</li>
			<li>
				<button
					onClick={onNext}
					disabled={isAtEnd}
					aria-label="next"
					className={styles.homepage_carouselnav_button_next}
				>
					<div className={styles.homepage_carouselnav_button_next_icon_wrapper}>
					<ArrowRightIcon />
					</div>
				</button>
			</li>
		</ul>
	);
};

export default HomepageCarouselNav;
