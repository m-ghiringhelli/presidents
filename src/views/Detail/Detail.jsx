import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { usePresidents } from '../../hooks/usePresidents'

export default function Detail() {
  const { presidents, loading } = usePresidents();
  const { id } = useParams();
  const [president, setPresident] = useState({});
  
  useEffect(() => {
    if (loading) return;
    const selectedPresident = presidents.find((president) => (
        president.id === +id
        ));
        setPresident(selectedPresident);
  }, [id, loading]);
  
  return (
    <>
      {loading ? 
        <p>Loading president...</p> : 
        <>
          <h1>{president.name}</h1>
          <p>#{president.id}</p>
          <img src={president.photo} />
          <p>{president.yearsInOffice}</p>
        </>
      }
    </>
  )
}
