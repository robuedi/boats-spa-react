import * as React from 'react';
import BoatCard from './BoatCard';
import Filters from '../../components/filters/Filters';
import Pagination from '../../components/Pagination';
import Stack from '@mui/joy/Stack';
import {Boat} from '../../__generated__/graphql';

type Props = {
  boats: Pick<Boat, "name"|"location"|"price"|"description"|"year"|"length"|"sold">[]
}

export default function BoatList(props: Props) {
    
  return (
    <div className='flex '>
      <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
        <Stack spacing={2} sx={{ overflow: 'auto' }}>
          {props.boats.map(item => 
            <BoatCard
              title={item.name}
              price={item.price}
              location={item.location}
              description={item.description}
              year={item.year}
              length={item.length}
              sold={item.sold}
              image={`https://loremflickr.com/700/400/yacht?v=${Math.random()}`}
            />  
          )}
        </Stack>
      </Stack>

      <Pagination />
    </div>
  );
}
