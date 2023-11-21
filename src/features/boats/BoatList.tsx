import * as React from 'react';
import BoatCard from './BoatCard';
import Filters from '../../components/filters/Filters';
import Pagination from '../../components/Pagination';
import Stack from '@mui/joy/Stack';
import {Boat} from '../../__generated__/graphql';

type Props = {
  boats: Pick<Boat, "name"|"location">[]
}

export default function BoatList(props: Props) {
    
  return (
    <div className='flex '>
      <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
        <Stack spacing={2} sx={{ overflow: 'auto' }}>
          {props.boats.map(item => 
            <BoatCard
              title={item.name}
              category="Entire loft in central business district"
              image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400"
            />  
          )}
        </Stack>
      </Stack>

      <Pagination />
    </div>
  );
}
