"use client"

import React, { useCallback, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './CaruselButton'

import "./styles.css"

type PropType = {
  slides: JSX.Element[]
  options?: EmblaOptionsType,
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ])
  // const [isPlaying, setIsPlaying] = useState(true)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return

      const resetOrStop = autoplay.reset
      // autoplay.options.stopOnInteraction === false
      //   ? autoplay.reset
      //   : autoplay.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  // const toggleAutoplay = useCallback(() => {
  //   const autoplay = emblaApi?.plugins()?.autoplay
  //   if (!autoplay) return

  //   const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
  //   playOrStop()
  // }, [emblaApi])

  // useEffect(() => {
  //   const autoplay = emblaApi?.plugins()?.autoplay
  //   if (!autoplay) return

  //   setIsPlaying(autoplay.isPlaying())
  //   emblaApi
  //     .on('autoplay:play', () => setIsPlaying(true))
  //     .on('autoplay:stop', () => setIsPlaying(false))
  //     .on('reInit', () => setIsPlaying(autoplay.isPlaying()))
  // }, [emblaApi])

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    autoplay.play();
  }, []);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((e, index) => (
            <div className="embla__slide" key={index}>
              {e}
              {/* <div className="embla__slide__number">
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls flex-end">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        {/* <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? 'Stop' : 'Start'}
        </button> */}
      </div>
    </div>
  )
}

export default EmblaCarousel
