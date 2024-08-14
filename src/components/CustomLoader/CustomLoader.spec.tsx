import React from 'react';
import { render } from '@testing-library/react';
import CustomLoader from './CustomLoader';

// Mock the CSS module
jest.mock('./CustomLoader.module.css', () => ({
  container: 'mockContainer',
  loader: 'mockLoader',
}));

describe('CustomLoader', () => {
  it('renders without crashing', () => {
    const { container } = render(<CustomLoader />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders a container div with the correct class', () => {
    const { container } = render(<CustomLoader />);
    const containerDiv = container.firstChild as HTMLElement;
    expect(containerDiv.tagName).toBe('DIV');
    expect(containerDiv.className).toBe('mockContainer');
  });

  it('renders a loader div inside the container', () => {
    const { container } = render(<CustomLoader />);
    const loaderDiv = container.querySelector('.mockLoader');
    expect(loaderDiv).toBeTruthy();
    expect(loaderDiv?.tagName).toBe('DIV');
  });

  it('has the correct structure: container div with a single child loader div', () => {
    const { container } = render(<CustomLoader />);
    const containerDiv = container.firstChild as HTMLElement;
    expect(containerDiv.childNodes.length).toBe(1);
    expect(containerDiv.firstChild).toEqual(container.querySelector('.mockLoader'));
  });
});