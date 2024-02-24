import { Search } from '@mui/icons-material';
import { Typography } from '@mui/material';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <>
      <Typography>Welcome Remix + MUi</Typography>
      <Search />
    </>
  );
}
