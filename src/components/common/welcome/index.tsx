import Link from 'next/link'

import s from './welcome.module.css'

export const Welcome = () => {
  return (
    <div className={s.welcome}>
      <div className={s.container}>
        <div className={s.logo}>
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#5e7ce2"
              d="M37.7,15.1h24.6l29.5,69.8H70.6l-6.9-16.5H36l-6.8,16.5H8.1L37.7,15.1z M56.9,51.6l-7.2-16.2l-6.9,16.2H56.9z"
            />
            <path
              fill="white"
              d="M78,16.8c1.1,1.1,1.7,2.5,1.7,4.1c0,1.6-0.6,3-1.7,4.2c-1.1,1.1-2.5,1.6-4,1.6c-1.6,0-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1
		c0-1.7,0.6-3.1,1.8-4.2c1.1-1,2.5-1.6,4-1.6C75.5,15.1,76.8,15.7,78,16.8z M73.9,16.1c-1.3,0-2.5,0.5-3.4,1.4
		c-0.9,0.9-1.4,2.1-1.4,3.4c0,1.3,0.5,2.5,1.4,3.4c0.9,0.9,2.1,1.4,3.4,1.4c1.3,0,2.4-0.5,3.4-1.4c0.9-0.9,1.4-2.1,1.4-3.4
		c0-1.3-0.5-2.4-1.4-3.4C76.3,16.6,75.2,16.1,73.9,16.1z M73,21.8v2.3h-1.7v-6.4c0.4,0,1,0,1.8,0c0.8,0,1.2,0,1.3,0
		c0.5,0,0.9,0.1,1.3,0.3c0.6,0.3,0.9,0.8,0.9,1.5c0,0.5-0.2,0.9-0.5,1.2c-0.3,0.2-0.7,0.4-1.1,0.4c0.4,0.1,0.7,0.2,0.9,0.4
		c0.4,0.3,0.6,0.8,0.6,1.4v0.6c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2l0.1,0.2H75c-0.1-0.2-0.1-0.5-0.1-0.9c0-0.4,0-0.6-0.1-0.8
		c-0.1-0.2-0.2-0.4-0.5-0.5c-0.1-0.1-0.3-0.1-0.6-0.1l-0.4,0H73z M73.7,20.7c0.4,0,0.7-0.1,0.9-0.2s0.3-0.4,0.3-0.8
		s-0.2-0.6-0.5-0.7c-0.2-0.1-0.6-0.1-1-0.1H73v1.9H73.7z"
            />
          </svg>
        </div>

        <h3>What's up. You've found atlr.typesxript code.</h3>

        <h3>Utils</h3>

        <Link href={'/intro'}>INTRODUCTION</Link>

        <p>
          1. Try pressing <code>ctrl+i</code> or <code>alt+i</code> to inspect boxes. Super useful for detecting
          overflows.
        </p>
        <p>2. You can find some utils on our gists notion.</p>

        <p>
          {' '}
          <a
            target="_blank"
            href="https://basementstudio.notion.site/09383099eb9d415b952af95d5e6a82cc?v=a5d4e739a25a4c3193d7f16e87bdf94e"
            rel="noreferrer">
            Check it out!
          </a>
        </p>
      </div>
    </div>
  )
}
