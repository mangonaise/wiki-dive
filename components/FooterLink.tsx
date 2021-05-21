import Link from 'next/link';
import styles from './styles/FooterLink.module.scss';

interface Props {
  url: string,
  text: string,
  newTab?: boolean
}

export default function FooterLink({ url, text, newTab }: Props) {
  return (
    <div className={styles.footerLink}>
      <div className={styles.strike} />
      <Link href={url}>
        <a className={styles.footerLink} target={newTab ? '_blank' : '_self'}>
          {'>'} {text}
        </a>
      </Link>
    </div>
  )
}