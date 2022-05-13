import { screen, render, act, findByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom'
import App from './App';
import { ProvidePresidents } from './context/PresidentContext';

describe('App', () => {
  it('starts on detail and shows george washington', async () => {
    act(() => {
      render(
        <ProvidePresidents>
          <MemoryRouter initialEntries={['/', '/list', '/list/1']} initialIndex={2}>
            <App />
          </MemoryRouter>
      </ProvidePresidents>
      )
    })
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    const portrait = await screen.findByAltText(/washington/i, {}, {timeout: 4000});
    expect(portrait).toBeInTheDocument();
  })
})

beforeEach(() => {
  act(() => {
    render(
      <ProvidePresidents>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ProvidePresidents>
    )
  })
})

it('tells user page is about presidents', () => {
  expect(screen.getByRole('heading', {
    name: /presidents/i
  })).toBeInTheDocument();
})
it('displays a list of presidents when visiting /list', async () => {
  const listLink = screen.getByRole('link', {
    name: /click here to view the presidents/i
  })
  userEvent.click(listLink);
  const george = await screen.findByText(/george/i, {}, {timeout: 4000});
  expect(george).toBeInTheDocument();
  const presidents = await screen.findAllByRole('link');
  expect(presidents.length).toEqual(2);
})