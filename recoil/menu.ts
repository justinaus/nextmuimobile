import { atom } from 'recoil';

import { KEY } from './key';

export const menuOpenState = atom<boolean>({
  key: KEY.MENU_OPEN,
  default: false,
});
