import React from 'react'
import { useLocation } from 'react-router-dom'
export const BlockDetailInfo = () => {

  const location = useLocation()

  console.log(location.state)
  return (
    <div>
      Block info
    </div>
  )
}
