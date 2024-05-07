import React from 'react'

type Props = {
  text: string;
}

function TextHeading({ text }: Props) {
  return (
    <h1 className='uppercase'>{text}</h1>
  )
}

function TextSubhead({ text }: Props) {
  return (
    <h3 className='uppercase underline decoration-yellow-400'>{text}</h3>
  )
}

export { TextHeading, TextSubhead }
