import React from 'react';

const SkeletonLoader = ({
  width = '100%',
  height = '100%',
  borderRadius = '0px',
  backgroundColor = '#e0e0e0',
  animationDuration = '1.5s',
}: {
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  animationDuration?: string;
}) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        backgroundColor,
        animation: `pulse ${animationDuration} ease-in-out infinite`,
      }}
    />
  );
};

const keyframes = `
  @keyframes pulse {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 0.2;
    }
  }
`;

const SkeletonLoaderWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <style>{keyframes}</style>
    {children}
  </>
);

export { SkeletonLoader, SkeletonLoaderWrapper };
