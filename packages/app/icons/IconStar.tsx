import React from 'react';

import Icon, { IconProps } from '../components/Icon';

const IconStar: React.FC<IconProps> = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 16.552 15.726" width={17} height={17} {...props}>
      <path d="M15.832 5.361l-4.558-.431a.788.788 0 0 1-.653-.483L8.988.49a.781.781 0 0 0-1.45 0L5.919 4.447a.771.771 0 0 1-.653.483l-4.559.431a.788.788 0 0 0-.444 1.372L3.7 9.75a.781.781 0 0 1 .248.771l-1.033 4.231a.788.788 0 0 0 1.162.862l3.8-2.234a.79.79 0 0 1 .8 0l3.8 2.234a.785.785 0 0 0 1.162-.862L12.62 10.52a.781.781 0 0 1 .248-.771L16.3 6.733a.8.8 0 0 0-.468-1.372z" />
    </Icon>
  );
};

export default IconStar;
