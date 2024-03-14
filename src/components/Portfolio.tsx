const jobs = [
  {
    text: 'Salvemos Patitas',
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/salvemospatitas/main/public/screenshot.png',
    url: 'https://salvemospatitas.vercel.app/',
    tags: ['react', 'next'],
  },
  {
    text: 'Cripto Currencies',
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/react-criptomonedas/master/public/screenshot.png',
    url: 'https://hardcore-jones-d2ffc9.netlify.app/',
    tags: ['react', 'next'],
  },
  {
    text: 'MBank',
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/mbank/main/public/images/screenshot1.png?token=GHSAT0AAAAAACLCR3UGVJ3GSENKISCHWB4SZPTKORQ',
    url: 'https://mbank-three.vercel.app/',
    tags: ['react', 'next'],
  },
  {
    text: 'Airbnb Clone',
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/marbnb/main/public/screenshot.png',
    url: 'https://eclectic-churros-0472f9.netlify.app/',
    tags: ['react', 'next'],
  },
  {
    text: 'Simpsons Screensaver',
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/simpsons-screensaver/main/public/screenshot.png',
    url: 'https://simpsons-screensaver.vercel.app',
    tags: ['react', 'next'],
  },
  {
    text: '3D Portfolio',
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/3d-portfolio/main/public/screenshot.png',
    url: 'https://3d-portfolio-beta-five.vercel.app/',
    tags: ['react', 'next'],
  },
  {
    text: 'Messenger Clone',
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/messenger/main/public/screenshot.png',
    url: 'https://messenger-rho-taupe.vercel.app/',
    tags: ['react', 'next'],
  },
]
export default function Portfolio() {
  return (
    <span className="gallery">
      {jobs.map((job, index) => (
        <span key={index}>
          <img className="gallery__img" src={job.screenshot} alt={job.text} />
          <span className="gallery__text">{job.text}</span>
        </span>
      ))}
    </span>
  )
}
