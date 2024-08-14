import React from 'react';
import { render } from '@testing-library/react';
import InfoBox from './InfoBox';

jest.mock('./InfoBox.module.css', () => ({
  infoBox: 'mockInfoBox',
  title: 'mockTitle',
  content: 'mockContent',
  numbers: 'mockNumbers',
  currency: 'mockCurrency',
  description: 'mockDescription',
}));

describe('InfoBox', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<InfoBox title="Test Title" numbers={100} />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('renders the numbers correctly', () => {
    const { getByText } = render(<InfoBox title="Test Title" numbers={100} />);
    expect(getByText('100')).toBeTruthy();
  });

  it('renders the currency (USD) correctly', () => {
    const { getByText } = render(<InfoBox title="Test Title" numbers={100} />);
    expect(getByText('USD')).toBeTruthy();
  });

  it('renders the description when provided', () => {
    const { getByText } = render(<InfoBox title="Test Title" numbers={100} description="Test Description" />);
    expect(getByText('Test Description')).toBeTruthy();
  });

  it('does not render the description when not provided', () => {
    const { queryByText } = render(<InfoBox title="Test Title" numbers={100} />);
    expect(queryByText('Test Description')).toBeNull();
  });

  it('applies the correct CSS classes', () => {
    const { container } = render(<InfoBox title="Test Title" numbers={100} />);
    expect(container.firstChild?.className).toBe('mockInfoBox');
    expect(container.querySelector('.mockTitle')).toBeTruthy();
    expect(container.querySelector('.mockContent')).toBeTruthy();
    expect(container.querySelector('.mockNumbers')).toBeTruthy();
    expect(container.querySelector('.mockCurrency')).toBeTruthy();
  });
});