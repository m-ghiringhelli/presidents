import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { usePresidents } from '../../hooks/usePresidents'

export default function Detail() {
  const { presidents, loading } = usePresidents();
  const { id } = useParams();
  const history = useHistory();
  const [president, setPresident] = useState({});
  const location = useLocation();

  
  useEffect(() => {
    
    const findPresidentById = () => {
      const selectedPresident = presidents.find((president) => (
        president.id === +id
        ));
        setPresident(selectedPresident);
        // console.log(selectedPresident);
      }
      const timer = setTimeout(() => {
        findPresidentById();
      }, 2000);
      return () => clearTimeout(timer);
  }, [id]);
  
  // console.log(id);

  return (
    <>
      {/* {president.id} */}
    </>
  )
}
