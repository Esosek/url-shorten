import Link from './UI/Link';

type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
  return (
    <ul className="flex gap-8 w-full">
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
  );
}
