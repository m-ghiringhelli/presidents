import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { usePresidents } from '../../hooks/usePresidents'
import Detail from '../Detail/Detail';

export default function List() {
  const { presidents, loading } = usePresidents();

  return (
    <>
      {presidents.map((president) => (
        <div key={president.id}>
          <Link to={`/${president.id}`}>
            <p>{president.name}</p>
          </Link>
        </div>
      ))}
      <Switch>
      <Route path='/:id'>
        <Detail />
      </Route>

      </Switch>
    </>
  )
}
