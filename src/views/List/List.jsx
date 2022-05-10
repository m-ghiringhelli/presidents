import React, { useEffect, useState } from 'react'
import { usePresidents } from '../../hooks/usePresidents'

export default function List() {
  const fetchData = () => {
    const { presidents, loading } = usePresidents();
  }

  return (
    <>
      LIST
      {/* {presidents.map((president) => (
        <div key={president.id}>
          <h1>{president.name}</h1>
          <img src={president.photo}/>
          <p>{president.yearsInOffice}</p>
          <p>{president.vicePresidents}</p>
        </div>
      ))} */}
    </>
  )
}
