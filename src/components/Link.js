import React from 'react'

const Link = ({to, children}) => (
  <div>
    <a href={to}>
      {children}
    </a>
  </div>
)

export default Link