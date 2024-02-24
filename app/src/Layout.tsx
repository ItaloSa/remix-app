import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>{children}</Box>
    </Container>
  );
}
