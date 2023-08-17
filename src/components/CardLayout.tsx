import React from 'react'

const CardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center bg-register">
      <div className="card w-75 h-75 w-lg-50 h-lg-75 rounded-2 shadow-sm justify-content-center card-bg-opacity d-flex">
        {children}
      </div>
    </div>
  )
}
export default CardLayout
