import Link from './UI/Link';

type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
  return (
    <div className="flex justify-between sm:w-full">
      <button className="ml-auto sm:hidden">
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
      <ul className="hidden gap-8 sm:flex w-full">
        <li>
          <Link>Features</Link>
        </li>
        <li>
          <Link>Pricing</Link>
        </li>
        <li>
          <Link>Resources</Link>
        </li>
        <li className="ml-auto">
          <Link>Login</Link>
        </li>
        <li>
          <Link isPrimary={true}>Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}
