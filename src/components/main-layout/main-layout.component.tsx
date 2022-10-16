import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { logoImg } from 'assets';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SectionIdEnum } from 'types';
import { Navigation } from './navigation/navigation.component';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box height="100vh">
      <AppBar position="fixed" sx={{ background: 'black' }}>
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink href={`#${SectionIdEnum.intro}`} offset={isSmall ? '56px' : '64px'} className="all_unset">
              <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: 'pointer' }}>
                <img width="54px" height="54px" src={logoImg} alt="logo" />
                <Typography variant="h5" sx={{ width: 'fit-content' }}>CodeFocus</Typography>
              </Box>
            </AnchorLink>
          </Box>
          <Navigation isSmall={isSmall} />
        </Toolbar>
      </AppBar>
      <Box>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
