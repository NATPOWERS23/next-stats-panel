import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import ClientPage from './page'
 
describe('Page', () => {
  it('renders an inner div', async() => {
    const ui = await ClientPage();
    const { container } = render(ui);
 
    const innerDiv = container.querySelector('div');
 
    expect(innerDiv).toBeInTheDocument()
  })
})