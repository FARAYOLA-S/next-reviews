import NavLink from "./NavLink";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="flex gap-2">
          <li className="font-orbitron font-bold">
            <NavLink href="/">Indie Gamer</NavLink>
          </li>
          <li className="ml-auto">
            <NavLink href="/about" prefetch={false}>About</NavLink>
          </li>
          <li>
            <NavLink href="/reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
