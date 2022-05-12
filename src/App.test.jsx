import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { act } from 'react-dom/test-utils';
import { presidentContext } from './context/PresidentContext';

describe('App', () => {
  it('tells user page is about presidents', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(/presidents/i)).toBeInTheDocument();
  })
  it('displays a list of presidents', async () => {
    
  })
})

// describe('App', () => {
//   it('shows a president name', async () => {
//     act(() => {
//         render(
//           <presidentContext.Provider value={ }>
//             <MemoryRouter>
//               <App />
//             </MemoryRouter>
//           </presidentContext.Provider>
//         );
//     });
//     const george = await screen.findByText(/george/i, {}, {timeout: 4000});
//     screen.debug();
//     expect(george).toBeInTheDocument();
//   });
// })