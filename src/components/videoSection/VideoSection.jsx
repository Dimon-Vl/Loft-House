import './VideoSection.scss';
import { useState } from 'react';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="videoSection">
      <div className="videoSection__container">
        <div
          className={`videoSection__video ${playing ? 'hide-overlay' : ''}`}
          style={
            !playing
              ? { '--thumb': 'url("https://i.ytimg.com/vi/uPmGtnwRL04/hqdefault.jpg")' }
              : {}
          }
          onClick={!playing ? () => setPlaying(true) : undefined}
        >
          {playing && (
            <iframe
              src="https://www.youtube.com/embed/uPmGtnwRL04?autoplay=1&mute=1&rel=0&playsinline=1"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
}
