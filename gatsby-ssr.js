import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <Partytown key="partytown" debug={true} forward={['dataLayer.push']} />,
  ]);
}