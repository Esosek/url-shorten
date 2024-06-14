import { useEffect, useRef, useState } from 'react';
import Button from '../../UI/Button';
import styles from './UrlInput.module.css';

type UrlInputProps = {};

export default function UrlInput(props: UrlInputProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [wrapperOffset, setWrapperOffset] = useState(0);

  useEffect(() => {
    const offset = wrapperRef.current?.clientHeight! / 2;
    setWrapperOffset(offset);
  }, [wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      style={{ transform: `translateY(-${wrapperOffset}px)` }}
      className={`${styles.urlInput} grid grid-rows-2 bg-violet gap-4 max-w-5xl mx-auto p-5 rounded-lg md:p-10 md:grid-cols-[1fr_auto] md:grid-rows-1`}
    >
      <label htmlFor="url-input" className="sr-only">
        URL to shorten
      </label>
      <input
        type="url"
        name="url-input"
        id="url-input"
        placeholder="Shorten a link here..."
        className="w-full px-5 py-3 rounded-md text-neutral-900"
      />
      <Button>Shorten It!</Button>
    </div>
  );
}
