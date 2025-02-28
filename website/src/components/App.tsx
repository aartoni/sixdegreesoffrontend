import Particles from '@tsparticles/react';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import particlesConfig from '../resources/particles.config.json';
import theme from '../resources/theme.json';
import {Home} from './Home';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Particles
          options={particlesConfig}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};
