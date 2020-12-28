import React from 'react';
import { FULLSCREEN_ROUTES } from 'router/routes';
import RouterApp from 'router';


const FullscreenLayout = () => {
  return (
    <RouterApp routes={FULLSCREEN_ROUTES} />
  );
};

export default FullscreenLayout;