import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { usePresidents } from '../../hooks/usePresidents'
import Detail from '../Detail/Detail';
import style from './List.css';

export default function List() {
  const { path, url } = useRouteMatch();
  const { presidents } = usePresidents();

  return (
    <div className={style.grid}>
      <div className={style.presidentList}>
        {presidents.map((president) => (
          <div key={president.id}>
            <Link to={`${url}/${president.id}`}>
              <p>{president.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className={style.presidentDetail}>
        <Route path={`${path}/:id`}>
          <Detail />
        </Route>
      </div>
    </div>
  )
}
