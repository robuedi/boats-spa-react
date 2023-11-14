import * as React from 'react';
import BoatCard from './BoatCard';
import Filters from '../../components/filters/Filters';
import Pagination from '../../components/Pagination';
import Stack from '@mui/joy/Stack';

export default function BoatList() {

    
  return (
    <div className='flex '>
      <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
        <Filters />
        <Stack spacing={2} sx={{ overflow: 'auto' }}>

        </Stack>
      </Stack>

      <Pagination />
    </div>
  );
}
