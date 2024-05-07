import React from 'react'
import { OutlineButton, SolidButton } from '../button'

export default function Hero() {
  return (
    <div>
      <h1 className='uppercase'>
        Biomedical
        <span>waste bag</span>
        manufacturer
      </h1>

      <p>Biomedical waste collection bags, also known as biohazard bags or infectious waste bags, are designed to safely collect and dispose of various types of medical waste. These bags come in different colors to help differentiate between various types of waste and to indicate the potential hazards associated with the contents. The choice of colors for biomedical waste bags can vary depending on local regulations and guidelines.</p>

      <div className='flex gap-4'>
        <SolidButton text='Shop Products'></SolidButton>
        <OutlineButton text='Contact'></OutlineButton>
      </div>
    </div>
  )
}
