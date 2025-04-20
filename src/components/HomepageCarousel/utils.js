export const getResponsiveValue = (sizes, winWidth) => {
	if (winWidth >= 1440) {
		return sizes.desktopLarge;
	}
	if (winWidth >= 1024) {
		return sizes.desktop;
	}
	if (winWidth >= 768) {
		return sizes.tablet;
	}
	return sizes.mobile;
};

export const getSlideWidth = (containerWidth, numCards, slideGap) => {
	const width = (containerWidth - slideGap * (numCards - 1)) / numCards;
	return width;
};

export const getSlideHeight = (carousel) => {
	const slideHeights = [...carousel.children].map(slide => slide.children[0].getBoundingClientRect().height);

	return Math.max(...slideHeights);
};

export const getSlideOffset = (index, currentSlideIndex, cellSpacing) => {
	const currIndex = index - currentSlideIndex;
	return `calc(${currIndex * 100}% + ${cellSpacing * currIndex}px)`;
};
