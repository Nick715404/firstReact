import React from 'react'

export default function Footer(props) {
  return (
    <div>
      <p>Ого, тут у нас текст! {props.text}</p>
    </div>
  )
}

Footer.defaultProps = { text: 'Стандартный!'}