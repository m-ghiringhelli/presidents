import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { act } from 'react-dom/test-utils';
import { presidentContext } from './context/PresidentContext';

describe('App', () => {
  it('shows a president name', async () => {
    act(() => {
        render(
          <presidentContext.Provider value={{ presidents, loading }}>
            <MemoryRouter>
              <App />
            </MemoryRouter>
          </presidentContext.Provider>
        );
    });
    const george = await screen.findByText(/george/i, {}, {timeout: 4000});
    screen.debug();
    expect(george).toBeInTheDocument();
  });
})