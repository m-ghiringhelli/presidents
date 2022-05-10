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

  useEffect(() => {
    const findPresidentById = () => {
      const selectedPresident = presidents.find((president) => (
        president.id === +id
      ));
      setPresident(selectedPresident);
    }
    findPresidentById();
  }, [id]);
  
  console.log(id);

  return (
    <>
      {/* {president.id} */}
    </>
  )
}
