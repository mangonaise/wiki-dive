import { PostCategory } from '../ssg/posts'

const AnimalsIcon       = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25,22.14c-4.38,0-8.61,5.44-8.61,9s2.2,4.63,3.64,4.63c1.78,0,3.4-1.08,5-1.08,2.06,0,3,1.09,4.81,1.09,2.39,0,3.75-2,3.75-4.62C33.57,27.57,29.47,22.14,25,22.14Z" fill="currentColor" /><path d="M14.87,18.74c1.73-.18,3.11,1.7,3.11,3.78a2.84,2.84,0,0,1-2.21,3c-1.61.17-3-1.4-3.15-3.08S13.15,18.92,14.87,18.74Z" fill="currentColor" /><path d="M35.1,18.74c-1.72-.18-3.1,1.7-3.1,3.78a2.84,2.84,0,0,0,2.21,3c1.61.17,3-1.4,3.15-3.08S36.83,18.92,35.1,18.74Z" fill="currentColor" /><path d="M20.94,13c1.86-.1,3.25,2,3.14,4.21-.07,1.5-1.06,3-2.52,3.1-1.73.09-3.12-1.66-3.22-3.47S19.09,13.1,20.94,13Z" fill="currentColor" /><path d="M29.05,13c-1.87-.1-3.25,2-3.14,4.21.07,1.5,1.05,3,2.52,3.1,1.73.09,3.11-1.66,3.22-3.47S30.9,13.1,29.05,13Z" fill="currentColor" /></svg> }
const CatastropheIcon   = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M38.29,32.23,26.67,12a2,2,0,0,0-3.42,0L11.69,32.24a2,2,0,0,0,1.71,3.07H36.59A2,2,0,0,0,38.29,32.23ZM25,32.14A2.12,2.12,0,1,1,27.11,30,2.12,2.12,0,0,1,25,32.14Zm1.71-5.85a.77.77,0,0,1-.76.69H24a.78.78,0,0,1-.77-.7l-.53-6.11a.76.76,0,0,1,.76-.83h3.05a.77.77,0,0,1,.76.84Z" fill="currentColor" /></svg> }
const HistoryIcon       = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M14.74,15a1.8,1.8,0,0,0-1.8,1.8v2.59a.51.51,0,0,0,.51.5h3.09V16.82A1.79,1.79,0,0,0,14.74,15Z" fill="currentColor" /><path d="M30.45,15H17.53a2.71,2.71,0,0,1,.66,2.08V31A2.41,2.41,0,1,0,23,31V28.41h11V18.62A3.6,3.6,0,0,0,30.45,15Z" fill="currentColor" /><path d="M33.84,35H21.06A3.73,3.73,0,0,0,24.73,31v-1H37.54a.6.6,0,0,1,.6.6h0A4.3,4.3,0,0,1,33.84,35Z" fill="currentColor" /></svg> }
const InternetIcon      = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="24.99" cy="32.47" r="2.84" fill="currentColor" /><path d="M17.05,28l-1.61-1.61a.68.68,0,0,1,.07-1,15.35,15.35,0,0,1,18.85-.09.69.69,0,0,1,.07,1l-1.61,1.61a.69.69,0,0,1-.89.08A11.66,11.66,0,0,0,25,25.71a11.79,11.79,0,0,0-7.06,2.35A.66.66,0,0,1,17.05,28Z" fill="currentColor" /><path d="M25,14.69a22.74,22.74,0,0,0-14.86,5.49.69.69,0,0,0,0,1l1.66,1.67a.69.69,0,0,0,.93,0,19.09,19.09,0,0,1,24.55.06.69.69,0,0,0,.93,0l1.71-1.71a.69.69,0,0,0,0-1A22.74,22.74,0,0,0,25,14.69Z" fill="currentColor" /></svg> }
const LanguageIcon      = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M33.35,14.37H16.65a3.06,3.06,0,0,0-3.06,3.07v12.3a3.06,3.06,0,0,0,3.06,3.06h4.08v4.36l6.45-4.36h6.17a3.06,3.06,0,0,0,3.06-3.06V17.44A3.06,3.06,0,0,0,33.35,14.37ZM28,28.18H18.41a.75.75,0,0,1,0-1.5H28a.75.75,0,0,1,0,1.5Zm3.59-4.1H18.41a.75.75,0,1,1,0-1.5H31.59a.75.75,0,0,1,0,1.5Zm0-4.1H18.41a.75.75,0,0,1,0-1.5H31.59a.75.75,0,0,1,0,1.5Z" fill="currentColor" /></svg> }
const MedicineIcon      = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M35,16.86H31.15V14.54a2.33,2.33,0,0,0-2.32-2.33H21.12a2.33,2.33,0,0,0-2.33,2.33v2.32H15a2.32,2.32,0,0,0-2.32,2.33V33.1A2.32,2.32,0,0,0,15,35.43H35a2.32,2.32,0,0,0,2.32-2.33V19.19A2.32,2.32,0,0,0,35,16.86ZM22.35,15h5.3a.44.44,0,0,1,.44.44v1.34H21.91V15.47A.44.44,0,0,1,22.35,15Zm7.4,12.21a.48.48,0,0,1-.47.48H26.56v2.72a.47.47,0,0,1-.48.47H23.92a.47.47,0,0,1-.48-.47V27.72H20.72a.48.48,0,0,1-.47-.48V25.07a.47.47,0,0,1,.47-.47h2.72V21.88a.48.48,0,0,1,.48-.48h2.16a.48.48,0,0,1,.48.48V24.6h2.72a.47.47,0,0,1,.47.47Z" fill="currentColor" /></svg> }
const MiscellaneousIcon = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="24.73" cy="25" r="3.27" fill="currentColor"/><circle cx="35.33" cy="25" r="3.27" fill="currentColor"/><circle cx="14.14" cy="25" r="3.27" fill="currentColor"/></svg> }
const NatureIcon        = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25,38h0a1.61,1.61,0,0,0,1.61-1.61V30.25a11,11,0,0,0-5.2-10c-3.31-2.22-6.92-1.82-9.44-1.82,0,0-.53,4.75,4.27,9,2.7,2.36,7.14,2.5,7.14,2.5v6.52A1.62,1.62,0,0,0,25,38Z" fill="currentColor" /><path d="M25,20.41a12.22,12.22,0,0,1,2.18,2.7,11.41,11.41,0,0,1,1.28,3.52,11,11,0,0,0,6.43-3.73,10.49,10.49,0,0,0,2.76-7.51s-5.24-.24-7.61.89A12.84,12.84,0,0,0,25,20.41Z" fill="currentColor" /></svg> }
const PeopleIcon        = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M22.29,19.49h5.42a2.42,2.42,0,0,1,2.42,2.42v6.86a1.1,1.1,0,0,1-1.1,1.1H28v7.44a1.1,1.1,0,0,1-1.1,1.1H23.2a1.1,1.1,0,0,1-1.1-1.1V29.87H21a1.1,1.1,0,0,1-1.1-1.1V21.91A2.42,2.42,0,0,1,22.29,19.49Z" fill="currentColor" /><circle cx="25" cy="14.58" r="3.45" fill="currentColor" /></svg> }
const PlacesIcon        = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25,11.59A10.13,10.13,0,0,0,14.91,21.68c0,5.55,7.63,14,9.62,16.5a.59.59,0,0,0,.94,0c2-2.56,9.62-10.92,9.62-16.5A10.11,10.11,0,0,0,25,11.59Zm0,14.67a4.6,4.6,0,1,1,4.59-4.6A4.59,4.59,0,0,1,25,26.26Z" fill="currentColor" /></svg> }
const PoliticsIcon      = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M13.27,19.2H36.68a.5.5,0,0,0,.5-.51V16.51a.5.5,0,0,0-.33-.47L25.16,11.62a.55.55,0,0,0-.36,0L13.09,16.09a.5.5,0,0,0-.32.47v2.13A.51.51,0,0,0,13.27,19.2Z" fill="currentColor" /><path d="M14.76,28.34h1V20.71h3.11v7.63h4.55V20.71h3.09v7.63H31.1V20.71h3.06v7.63h1a.51.51,0,0,1,.51.5V31.4H14.26V28.84A.51.51,0,0,1,14.76,28.34Z" fill="currentColor" /><rect x="12.77" y="32.9" width="24.41" height="3.03" rx="0.5" fill="currentColor" /></svg> }
const PsychologyIcon    = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M37.37,28l-2.7-5.1a1.68,1.68,0,0,1-.2-.79C34.26,13.78,27.81,12,24.41,12s-10,3.14-10,10.4c0,4.08,3.19,7.1,3.19,7.1v8a.5.5,0,0,0,.5.5h9.25a.5.5,0,0,0,.51-.5V34.31h3.84a2.7,2.7,0,0,0,2.7-2.7V28.48H37.1A.31.31,0,0,0,37.37,28ZM29.48,22.8a1.58,1.58,0,1,1,1.59-1.58A1.58,1.58,0,0,1,29.48,22.8Z" fill="currentColor" /></svg> }
const ScienceIcon       = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M34.33,32l-4.61-8.14A1.62,1.62,0,0,1,29.5,23V15.92h.72a.83.83,0,0,0,.83-.83V13.83a.83.83,0,0,0-.83-.83H19.77a.83.83,0,0,0-.83.83v1.28a.84.84,0,0,0,.84.84h.76v7a1.72,1.72,0,0,1-.22.84L15.67,32a3.1,3.1,0,0,0,.48,3.71A4.3,4.3,0,0,0,19.21,37H30.75a4.3,4.3,0,0,0,3-1.22l.06-.06A3.1,3.1,0,0,0,34.33,32ZM21,28l2.34-4a.71.71,0,0,0,.11-.4l0-7.59h3v7.63a.8.8,0,0,0,.11.4L29,28Z" fill="currentColor" /></svg> }
const SocietyIcon       = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M13,20.23h3.87A1.73,1.73,0,0,1,18.58,22v4.9a.78.78,0,0,1-.78.79h-.72V33a.78.78,0,0,1-.79.78H13.63a.78.78,0,0,1-.78-.78V27.65H12a.78.78,0,0,1-.78-.79V22A1.73,1.73,0,0,1,13,20.23Z" fill="currentColor" /><circle cx="14.92" cy="16.63" r="2.46" fill="currentColor" /><path d="M22.8,24h3.87a1.73,1.73,0,0,1,1.73,1.72v4.91a.79.79,0,0,1-.79.78h-.72v5.31a.78.78,0,0,1-.78.79H23.45a.79.79,0,0,1-.79-.79V31.44h-.8a.78.78,0,0,1-.79-.78V25.75A1.72,1.72,0,0,1,22.8,24Z" fill="currentColor" /><circle cx="24.73" cy="20.34" r="2.46" fill="currentColor" /><path d="M32.61,20.23h3.87A1.73,1.73,0,0,1,38.21,22v4.9a.79.79,0,0,1-.79.79h-.71V33a.78.78,0,0,1-.79.78H33.26a.78.78,0,0,1-.78-.78V27.65h-.81a.78.78,0,0,1-.78-.79V22A1.73,1.73,0,0,1,32.61,20.23Z" fill="currentColor" /><circle cx="34.55" cy="16.63" r="2.46" fill="currentColor" /></svg> }
const SpaceIcon         = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M29.56,33.2l0-4.72S34.12,25.36,35,22a19.94,19.94,0,0,0,.12-7.07.7.7,0,0,0-.61-.61,19.94,19.94,0,0,0-7.07.12c-3.36.9-6.48,5.48-6.48,5.48l-4.73,0a2.21,2.21,0,0,0-2.06,1.39l-2.28,4.49a1.11,1.11,0,0,0,1,1.52l4.75.05-1.07,1.07a1.42,1.42,0,0,0,0,2l1.22,1.21L19,32.85a1.42,1.42,0,0,0,2,0l1.07-1.07.05,4.75a1.11,1.11,0,0,0,1.52,1l4.49-2.28A2.22,2.22,0,0,0,29.56,33.2ZM27.82,21.64a2,2,0,1,1,2.81,0A2,2,0,0,1,27.82,21.64Z" fill="currentColor" /></svg> }
const TechnologyIcon    = () => { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M37.17,28.2l-2.31-1.33a9.8,9.8,0,0,0,0-3.74l2.31-1.33a.48.48,0,0,0,.23-.52,10.23,10.23,0,0,0-1.17-2.76,10.1,10.1,0,0,0-1.81-2.4.5.5,0,0,0-.57-.06l-2.3,1.33a10.23,10.23,0,0,0-3.23-1.87V12.87A.51.51,0,0,0,28,12.4,10.34,10.34,0,0,0,25,12a10.4,10.4,0,0,0-3,.36.51.51,0,0,0-.34.47v2.65a10.23,10.23,0,0,0-3.23,1.87l-2.3-1.33a.5.5,0,0,0-.57.06,10.1,10.1,0,0,0-1.81,2.4,10.59,10.59,0,0,0-1.17,2.76.48.48,0,0,0,.23.52l2.31,1.33a9.8,9.8,0,0,0,0,3.74L12.83,28.2a.48.48,0,0,0-.23.52,10.23,10.23,0,0,0,1.17,2.76,10.1,10.1,0,0,0,1.81,2.4.5.5,0,0,0,.57.06l2.3-1.33a10.23,10.23,0,0,0,3.23,1.87v2.65a.51.51,0,0,0,.34.47A10.34,10.34,0,0,0,25,38a10.4,10.4,0,0,0,3-.36.51.51,0,0,0,.34-.47V34.48a10.23,10.23,0,0,0,3.23-1.87l2.3,1.33a.5.5,0,0,0,.57-.06,10.1,10.1,0,0,0,1.81-2.4,10.59,10.59,0,0,0,1.17-2.76A.48.48,0,0,0,37.17,28.2ZM25,29.53A4.53,4.53,0,1,1,29.53,25,4.53,4.53,0,0,1,25,29.53Z" fill="currentColor" /></svg> }

type IconMap = { [category in PostCategory]: JSX.Element }

const iconElements: IconMap = {
  animals: <AnimalsIcon />,
  catastrophe: <CatastropheIcon />,
  history: <HistoryIcon />,
  internet: <InternetIcon />,
  language: <LanguageIcon />,
  medicine: <MedicineIcon />,
  miscellaneous: <MiscellaneousIcon />,
  nature: <NatureIcon />,
  people: <PeopleIcon />,
  places: <PlacesIcon />,
  politics: <PoliticsIcon />,
  psychology: <PsychologyIcon />,
  science: <ScienceIcon />,
  society: <SocietyIcon />,
  space: <SpaceIcon />,
  technology: <TechnologyIcon />
}

interface Props { 
  category: PostCategory, 
  sizePx?: number,
  className?: string
}

export default function CategoryIcon({ category, sizePx = 42, className }: Props) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: `var(--category-${category})`,
        width: `${sizePx}px`, 
        height: `${sizePx}px`,
      }}>
      {iconElements[category]}
    </div>
  )
}