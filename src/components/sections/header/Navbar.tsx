import { useState } from 'react';
import Link from '../../UI/Link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen((prevValue) => !prevValue);
  }
  return (
    <div className="flex justify-between md:w-full">
      <button onClick={handleMenuClick} className="ml-auto md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="24px"
          height="24px"
          className="fill-gray-400"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <div
        className={`fixed left-6 right-6 top-full p-8 text-white font-bold bg-violet rounded-lg origin-top ${
          !isOpen ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'
        } md:static md:p-0 md:bg-inherit md:text-inherit md:w-full md:scale-y-100 md:opacity-100 transition-all`}
      >
        <ul className="flex flex-col items-center gap-8 md:flex-row">
          <li>
            <Link>Features</Link>
          </li>
          <li>
            <Link>Pricing</Link>
          </li>
          <li>
            <Link>Resources</Link>
          </li>
          <hr className="bg-gray-600 h-[1px] w-full border-none md:hidden" />
          <li className="md:ml-auto">
            <Link>Login</Link>
          </li>
          <li className="w-full md:w-fit">
            <Link isPrimary={true}>Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
