import React from 'react';

import next from 'next';
console.log(next);

interface Props {
  name: string;
}

function HomePage({ name = 'Marius' }: Props) {
  return <div>Homepage, {name}!</div>;
}

export default HomePage;
