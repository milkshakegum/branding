import React from 'react'
import { Logo } from './Logo'

type Props = {
  date: string
  year: string
  link1: React.ReactNode
  link2: React.ReactNode
}

export function Footer({ date, year, link1, link2 }: Props) {
  return (
    <div className="pmndrs-menu">
      <div>
        <Logo style={{ width: 42, height: 42 }} color="#b0b0b0" />
      </div>
      <div>
        <span>
          <b>jianna masmila</b>
        </span>
        <a href="https://jiannamasmila.co">pmndrs.rs</a>
        <a href="https://twitter.com/jiannamasmila.co">@pmndrs</a>
      </div>
      <div>
        <span>{date}</span>
        <span>{year}</span>
      </div>
      <div>
        <span>Open Source</span>
        <span>Developer collective</span>
      </div>
      <div style={{ width: '100%' }} />
      <div>
        <b>{link1}</b>
        {link2}
      </div>
    </div>
  )
}
