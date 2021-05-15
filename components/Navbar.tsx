import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styles from './styles/Navbar.module.scss';

const links: NavLinkProps[] = [
  { text: 'blog', url: '/' },
  { text: 'about', url: '/about' },
  { text: 'support', url: '/support' }
]

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.linksContainer}>
        {links.map(linkInfo => <NavLink key={linkInfo.url} text={linkInfo.text} url={linkInfo.url} />)}
      </div>
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

interface NavLinkProps {
  text: string,
  url: string
}

function NavLink({ text, url }: NavLinkProps) {
  const router = useRouter();

  return (
    <Link href={url}>
      <button className={`${styles.navLink} ${router.pathname === url ? styles.active : ''}`}>
        {text}
      </button>
    </Link>
  )
}