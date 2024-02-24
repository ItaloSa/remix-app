import { Box } from '@mui/material';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <Box display="flex">{children}</Box>;
}
