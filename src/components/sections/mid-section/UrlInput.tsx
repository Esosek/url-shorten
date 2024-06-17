import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react';
import Button from '../../UI/Button';
import styles from './UrlInput.module.css';

type UrlInputProps = {};

export default function UrlInput(props: UrlInputProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [formOffset, setFormOffset] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [hasFormError, setHasFormError] = useState(false);

  useEffect(() => {
    const offset = formRef.current?.clientHeight! / 2;
    setFormOffset(offset);
  }, [formRef]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setHasFormError(false);
    setUserInput(event.target.value);
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (isInputValid()) {
      console.log('Form submitted');
    } else {
      setHasFormError(true);
    }
  }

  function isInputValid(): boolean {
    if (userInput.length > 0) {
      return true;
    }
    setHasFormError(true);
    return false;
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleFormSubmit}
      style={{ transform: `translateY(-${formOffset}px)` }}
      className={`${styles.urlInput} grid grid-rows-2 bg-violet gap-4 max-w-5xl mx-auto p-5 rounded-lg md:p-10 md:grid-cols-[1fr_auto] md:grid-rows-1`}
    >
      <label htmlFor="url-input" className="sr-only">
        URL to shorten
      </label>
      <input
        type="url"
        name="url-input"
        id="url-input"
        onChange={handleInputChange}
        placeholder="Shorten a link here..."
        className={`w-full px-5 py-3 rounded-md text-neutral-900 border-2 ${
          hasFormError && 'border-red'
        }`}
      />
      {hasFormError && (
        <p className="absolute bottom-3 left-10 text-sm text-red italic">
          Please add a link
        </p>
      )}

      <Button type="submit">Shorten It!</Button>
    </form>
  );
}
