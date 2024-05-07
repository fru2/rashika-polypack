import { Button, Typography } from '@mui/material';
import React from 'react'

type Props = {
  text: string;
}

function UnderlineButton({ text }: Props) {
  return (
    <Button disableRipple>
      <span className='underline'>
        {text}
      </span>
    </Button>
  )
}

function OutlineButton({ text }: Props) {
  return (
    <Button variant='outlined'>
      <span>
        {text}
      </span>
    </Button>
  )
}

function SolidButton({ text }: Props) {
  return (
    <Button variant='contained'>
      <span>
        {text}
      </span>
    </Button>
  )
}

function TextButton({ text }: Props) {
  return (
    <Button variant='text'>
      <span>
        {text}
      </span>
    </Button>
  )
}

export { UnderlineButton, OutlineButton, SolidButton, TextButton };