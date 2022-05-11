import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { usePresidents } from '../../hooks/usePresidents'
import Detail from '../Detail/Detail';

export default function List() {
  const { path, url } = useRouteMatch();
  const { presidents, loading } = usePresidents();

  console.log('path', path);
  console.log('url', url);

  return (
    <>
      {presidents.map((president) => (
        <div key={president.id}>
          <Link to={`${url}/${president.id}`}>
            <p>{president.name}</p>
          </Link>
        </div>
      ))}
        <Route path={`${path}/:id`}>
          <Detail />
        </Route>
    </>
  )
}
