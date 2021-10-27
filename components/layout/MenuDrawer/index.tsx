import { Drawer } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { menuOpenState } from '../../../recoil/menu';

export default function MenuDrawer() {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [menuOpen, router.events, setMenuOpen]);

  return (
    <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
      <ul>
        <li>
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
      </ul>
    </Drawer>
  );
}
