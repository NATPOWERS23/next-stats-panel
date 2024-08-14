import type React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Sidebar from './Sidebar';

// Mock the Clerk components and hooks
jest.mock('@clerk/nextjs', () => ({
  Protect: ({ children }: { children: React.ReactNode }) => <div data-testid="protect">{children}</div>,
  SignedIn: ({ children }: { children: React.ReactNode }) => <div data-testid="signed-in">{children}</div>,
  UserButton: () => <div data-testid="user-button">User Button</div>,
  useOrganizationList: jest.fn(),
}));

// Mock the MenuItem component
jest.mock('./MenuItem/MenuItem', () => {
  return function MockMenuItem({ item }: { item: { id: string; title: string } }) {
    return <div data-testid={`menu-item-${item.id}`}>{item.title}</div>;
  };
});

// Mock the menu items
jest.mock('../../constants/menu-items', () => ({
  menuItems: [
    { id: '1', title: 'Menu Item 1' },
    { id: '2', title: 'Menu Item 2' },
  ],
}));

// Mock the CSS module
jest.mock('./Sidebar.module.css', () => ({
  sidebar: 'mockSidebar',
}));

import { useOrganizationList } from '@clerk/nextjs';

describe('Sidebar', () => {
  beforeEach(() => {
    (useOrganizationList as jest.Mock).mockReturnValue({
      isLoaded: true,
      setActive: jest.fn(),
      userMemberships: {
        data: [
          { id: 'mem1', organization: { id: 'org1', name: '' } },
          { id: 'mem2', organization: { id: 'org2', name: 'Org 2' } },
        ],
      },
    });
  });

  it('renders loading state when not loaded', () => {
    (useOrganizationList as jest.Mock).mockReturnValueOnce({
      isLoaded: false,
    });

    const { getByText } = render(<Sidebar />);
    expect(getByText('Loading')).toBeTruthy();
  });

  it('renders UserButton when signed in', () => {
    const { getByTestId } = render(<Sidebar />);
    expect(getByTestId('user-button')).toBeTruthy();
  });

  it('renders organization approval requests', () => {
    const { getByText, getAllByText } = render(<Sidebar />);
    expect(getByText(/Погодитися з умовами використання/)).toBeTruthy();
    expect(getAllByText('Погодитися')).toHaveLength(1);
  });

  it('calls setActive when approval button is clicked', async () => {
    const mockSetActive = jest.fn();
    (useOrganizationList as jest.Mock).mockReturnValue({
      isLoaded: true,
      setActive: mockSetActive,
      userMemberships: {
        data: [{ id: 'mem1', organization: { id: 'org1', name: '' } }],
      },
    });

    const { getByText } = render(<Sidebar />);
    fireEvent.click(getByText('Погодитися'));

    await waitFor(() => {
      expect(mockSetActive).toHaveBeenCalledWith({ organization: 'org1' });
    });
  });

  it('renders menu items inside Protect component', () => {
    const { getByText, getByTestId } = render(<Sidebar />);
    expect(getByTestId('protect')).toBeTruthy();
    expect(getByText('Menu')).toBeTruthy();
    expect(getByTestId('menu-item-1')).toBeTruthy();
    expect(getByTestId('menu-item-2')).toBeTruthy();
  });
});