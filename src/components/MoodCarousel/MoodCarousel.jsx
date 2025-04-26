'use client'

import useEmblaCarousel from 'embla-carousel-react';

export default function MoodCarousel({ entries }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const prev = () => emblaApi && emblaApi.scrollPrev()
  const next = () => emblaApi && emblaApi.scrollNext()

  return (
    <div className="embla">
      <div className="embla__arrows flex justify-between mt-2 left">
        <button onClick={prev} className="px-2 text-2xl cursor-pointer">‹</button>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {entries.map((entry) => (
            <div key={entry.time} className="embla__slide">
              <div className="embla__slide__card p-4 bg-gray-100 rounded h-full flex flex-col justify-center">
                <div className="text-3xl text-center">{entry.mood}</div>
                <p className="mt-2 text-sm">{entry.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__arrows flex justify-between mt-2 right">
        <button onClick={next} className="px-2 text-2xl cursor-pointer">›</button>
      </div>
    </div>
  )
}
