'use client'
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';


import CarouselNav from '../HomepageCarouselNav/HomepageCarouselNav';
import styles from './HomepageCarousel.module.scss';
import { getSlideOffset, getResponsiveValue, getSlideHeight, getSlideWidth } from './utils';

const HomepageCarousel = ({
    slideItems,
    numSlides: _numSlides,
    slideGap: _slideGap,
}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState();
    const [slideHeight, setSlideHeight] = useState();
    const [slideInnerHeight, setSlideInnerHeight] = useState('auto');
    const [isReady, setIsReady] = useState(false);

    const { width: winWidth } = useWindowSize();
    const carouselRef = useRef(null);

    const numCards = getResponsiveValue(_numSlides, winWidth);
    const slideGap = getResponsiveValue(_slideGap, winWidth);

    useEffect(() => {
        if (!carouselRef.current) {
            return;
        }

        const carouselContainer = carouselRef.current;

        const setSlideDimensions = () => {
            setIsReady(false);
            const containerWidth = carouselContainer.getBoundingClientRect().width;
            const width = getSlideWidth(containerWidth, numCards, slideGap);
            setSlideWidth(width);
            const height = getSlideHeight(carouselContainer);
            setSlideHeight(height);
            setIsReady(true);
        };

        const resizeObserver = new ResizeObserver(setSlideDimensions);

        resizeObserver.observe(carouselContainer);

        return () => {
            resizeObserver.disconnect();
        };
    }, [numCards, slideGap]);

    useEffect(() => {
        if (isReady) {
            setTimeout(() => {
                setSlideInnerHeight('100%');
            }, 250);
        } else {
            setSlideInnerHeight('auto');
        }
    }, [isReady]);

    return (
        <>
            <ul className={styles.homepage_carousel_wrapper} style={{ height: slideHeight ? `${slideHeight}px` : 'auto' }} ref={carouselRef}>
                {slideItems.map((item, index) => {
                    const isActive = currentSlideIndex <= index && currentSlideIndex > index - numCards;
                    return (
                        <li
                            key={item.key}
                            aria-hidden={!isActive}
                            style={{
                                width: `${slideWidth}px`,
                                height: slideInnerHeight,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                transform: `translateX(${getSlideOffset(index, currentSlideIndex, slideGap)})`,
                                transition: 'transform 0.2s ease-in-out'
                            }}
                        >
                            <div
                            style={{
                                height: '100%',
                            }}
                            >
                            <item.Slide isActive={isActive} />
                            </div>
                        </li>
                    );
                })}
            </ul>
            <CarouselNav
                numSlides={slideItems.length}
                currentSlideIndex={currentSlideIndex}
                setCurrentSlideIndex={setCurrentSlideIndex}
                numCardsToShow={numCards}
            />
        </>
    );
};

export default HomepageCarousel;
