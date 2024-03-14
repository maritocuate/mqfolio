import { Ref, forwardRef } from 'react'

type OverlayProps = {
  scroll: { current: number }
}

const Overlay = forwardRef(
  ({ scroll }: OverlayProps, ref: Ref<HTMLDivElement>) => (
    <div
      className="scroll"
      ref={ref}
      onScroll={e => {
        if (scroll !== null) {
          const scrollTop = e.currentTarget.scrollTop
          const scrollHeight = e.currentTarget.scrollHeight
          const windowHeight = e.currentTarget.clientHeight

          const calculatedScroll = scrollTop / (scrollHeight - windowHeight)
          scroll.current = calculatedScroll
        }
      }}
    >
      <div style={{ height: '200vh' }}>
        <div className="dot">
          <h1>About Me</h1>
          Hi, my name is <strong>Mario</strong>! Im 37 years old, I live in
          Buenos Aires and Im a web developer. Besides programming I like
          reading science fiction and playing Xbox (PES and Civilization more
          than anything else).
          <br />I love technology and challenging projects.
        </div>
      </div>
      <div style={{ height: '200vh' }}>
        <div className="dot">
          <h1>Tech Stack</h1>The last few years I working with{' '}
          <strong>React</strong> using design patterns (HOC, Presentational,
          Provider, Compound, etc). I prefer Jest for unit testing, and I also
          use Cypress for end-to-end testing. For some projects where I need to
          work server-side I use <strong>Next 14</strong> (TypeScript) with
          Prisma for the NoSQL databases (<strong>MongoDB</strong>). Through the
          years I acquired strong understanding of vanilla JavaScript and
          general knowledge in popular libraries like jQuery, GSAP, TailwindCSS,
          etc. I have experience with source control using Git and SVN. Familiar
          with NodeJS and Express. Although I mostly use Django.
        </div>
      </div>
      <div style={{ height: '200vh' }}>
        <div className="dot">
          <h1>Moreover...</h1>I am not an expert but I also model in{' '}
          <strong>Blender</strong> to use it with <strong>ThreeJs</strong> more
          than anything else. Using physics with <strong>MatterJs</strong> I
          also like a lot.
          <br />
          My second language could be <strong>Python</strong> as it is essential
          for Tensorflow and Machine Learning.
        </div>
      </div>
      <div style={{ height: '100vh' }} className="final">
        <div className="dot">
          <h1>Portfolio</h1>Some projects
        </div>
      </div>
    </div>
  )
)

export default Overlay
