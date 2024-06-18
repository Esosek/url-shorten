import {
  useContext,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react';
import Button from '../../UI/Button';
import styles from './UrlInput.module.css';
import URLHistoryContext from '../../context/urlHistory';
import LoadingBar from '../../UI/LoadingBar';

export default function UrlInput() {
  const formRef = useRef<HTMLFormElement>(null);
  const addUrlToHistory = useContext(URLHistoryContext).addUrl;

  const [formOffset, setFormOffset] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [hasFormError, setHasFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const offset = formRef.current?.clientHeight! / 2;
    setFormOffset(offset);
  }, [formRef]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setHasFormError(false);
    setUserInput(event.target.value);
  }

  async function handleFormSubmit(e: FormEvent) {
    setIsLoading(true);
    e.preventDefault();
    if (isInputValid()) {
      setUserInput('');
      await addUrlToHistory(userInput.trim());
    } else {
      setHasFormError(true);
    }
    setIsLoading(false);
  }

  function isInputValid(): boolean {
    if (userInput.trim().length > 0) {
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
      className={`${styles.urlInput} grid grid-rows-[auto_1fr] bg-violet gap-4 max-w-5xl mx-auto p-5 rounded-lg md:p-10 md:grid-cols-[1fr_auto] md:grid-rows-1`}
    >
      <label htmlFor="url-input" className="sr-only">
        URL to shorten
      </label>
      <div className="">
        <input
          type="url"
          name="url-input"
          id="url-input"
          onChange={handleInputChange}
          value={userInput}
          placeholder="Shorten a link here..."
          className={`w-full px-5 py-3 rounded-md text-neutral-900 border-2 ${
            hasFormError && 'border-red placeholder:text-red/75'
          }`}
        />
        {hasFormError && (
          <p className="text-left mt-2 text-sm text-red italic md:absolute md:bottom-3 md:left-10 ">
            Please add a link
          </p>
        )}
      </div>

      <Button type="submit" isPrimary={true} disabled={isLoading}>
        {isLoading ? <LoadingBar /> : 'Shorten It!'}
      </Button>
    </form>
  );
}
