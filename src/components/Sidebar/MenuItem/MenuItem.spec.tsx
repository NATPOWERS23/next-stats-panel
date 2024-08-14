import type React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MenuItem from './MenuItem';

// Mock the next/link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

// Mock the constants
jest.mock('../../../constants/menu-items', () => ({
  crmPath: '/crm',
  subMenuItems: {
    1: [
      { id: 'sub1', title: 'Sub Item 1', link: '/sub1' },
      { id: 'sub2', title: 'Sub Item 2', link: '/sub2' },
    ],
  },
}));

// Mock the CSS module
jest.mock('./MenuItem.module.css', () => ({
  item: 'mockItem',
  dropdown: 'mockDropdown',
  subitem: 'mockSubitem',
}));

describe('MenuItem', () => {
  const mockItem = { id: '1', title: 'Test Item', link: '/test' };
  const mockItemWithoutSubMenu = { id: '2', title: 'No Sub Menu', link: '/no-sub' };

  it('renders a link when there is no submenu', () => {
    const { getByText } = render(<MenuItem item={mockItemWithoutSubMenu} />);
    const link = getByText('No Sub Menu');
    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toBe('/crm/no-sub');
  });

  it('renders a div instead of a link when there is a submenu', () => {
    const { getByText } = render(<MenuItem item={mockItem} />);
    const div = getByText('Test Item');
    expect(div.tagName).toBe('DIV');
  });

  it('toggles submenu visibility when clicked', () => {
    const { getByText, queryByText } = render(<MenuItem item={mockItem} />);
    const div = getByText('Test Item');

    // Submenu should be hidden initially
    expect(queryByText('Sub Item 1')).toBeNull();

    // Simulate a click (key up event in this case)
    fireEvent.keyUp(div);

    // Submenu should be visible now
    expect(queryByText('Sub Item 1')).not.toBeNull();

    // Simulate another click
    fireEvent.keyUp(div);

    // Submenu should be hidden again
    expect(queryByText('Sub Item 1')).toBeNull();
  });

  it('renders correct number of subitems in submenu', () => {
    const { getByText, getAllByRole } = render(<MenuItem item={mockItem} />);
    const div = getByText('Test Item');

    // Show submenu
    fireEvent.keyUp(div);

    const subItems = getAllByRole('listitem');
    expect(subItems).toHaveLength(2);
  });

  it('renders correct links in subitems', () => {
    const { getByText, getAllByRole } = render(<MenuItem item={mockItem} />);
    const div = getByText('Test Item');

    // Show submenu
    fireEvent.keyUp(div);

    const subItems = getAllByRole('listitem');
    expect(subItems[0].textContent).toBe('Sub Item 1');
    expect(subItems[1].textContent).toBe('Sub Item 2');

    const subItemLinks = subItems.map(item => item.querySelector('a'));
    expect(subItemLinks[0]?.getAttribute('href')).toBe('/crm/sub1');
    expect(subItemLinks[1]?.getAttribute('href')).toBe('/crm/sub2');
  });
});