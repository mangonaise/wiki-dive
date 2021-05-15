import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styles from './styles/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <NavbarLink text="blog" url="/" />
      <NavbarLink text="about" url="/about" />
      <NavbarLink text="support" url="/support" />
    </nav>
  )
}

function Logo() {
  return (
    <Link href="/">
      <h1 className={styles.logo}>wiki<span>dive</span></h1>
    </Link>
  )   
}

function NavbarLink({ text, url }: { text: string, url: string }) {
  const router = useRouter();

  return (
    <Link href={url}>
      <button className={router.pathname === url ? styles.active : ''}>
        {text}
      </button>
    </Link>
  )
}