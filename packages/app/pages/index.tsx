import React from 'react';

interface Props {
  name: string;
}

function HomePage({ name = 'Marius' }: Props) {
  return <div>Homepage, {name}!</div>;
}

export default HomePage;
