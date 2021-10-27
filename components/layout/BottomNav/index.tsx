import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import RestoreIcon from '@mui/icons-material/Restore';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { menuOpenState } from '../../../recoil/menu';

export default function BottomNav() {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);

  const handleChange = useCallback(
    (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
      if (newValue !== 'menu') {
        return;
      }

      if (menuOpen) {
        return;
      }

      setMenuOpen(true);
    },
    [menuOpen, setMenuOpen],
  );

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels onChange={handleChange}>
        <BottomNavigationAction label="Menu" icon={<MenuIcon />} value="menu" />
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
