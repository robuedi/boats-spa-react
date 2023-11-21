import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StraightenIcon from '@mui/icons-material/Straighten';
import {Maybe} from '../../__generated__/graphql';

type BoatCardProps = {
  image: string;
  title: React.ReactNode;
  price: number,
  year: number,
  length: number,
  location: string,
  sold:  number,
  description: Maybe<string> | undefined
};

export default function BoatCard({
  title,
  image,
  price,
  location,
  year,
  length,
  description,
  sold
}: BoatCardProps) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        bgcolor: 'neutral.softBg',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': {
          boxShadow: 'lg',
          borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
        },
      }}
    >
      <CardOverflow
        sx={{
          mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
          mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
          '--AspectRatio-radius': {
            xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
            sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
          },
        }}
      >
        <AspectRatio
          ratio="1"
          flex
          sx={{
            minWidth: { sm: 120, md: 160 },
            '--AspectRatio-maxHeight': { xs: '160px', sm: '9999px' },
          }}
        >
          <img alt="" src={image} />
          <Stack
            alignItems="center"
            direction="row"
            sx={{ position: 'absolute', top: 0, width: '100%', p: 1 }}
          >
            {!!sold && (
              <Chip
                variant="soft"
                color="danger"
                startDecorator={<WorkspacePremiumRoundedIcon />}
                size="md"
              >
                Sold
              </Chip>
            )}
          </Stack>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <div>
            <Typography level="title-md">
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: 'text.primary' }}
              >
                {title}
              </Link>
            </Typography>
          </div>
        </Stack>

        <Stack
          spacing="0.25rem 1rem"
          direction="row"
          useFlexGap
          flexWrap="wrap"
          sx={{ my: 0.25 }}
        >
          <Typography level="body-xs" startDecorator={<FmdGoodRoundedIcon />}>
            {location}
          </Typography>
          <Typography level="body-xs" startDecorator={<CalendarMonthIcon />}>
            {year}
          </Typography>
          <Typography level="body-xs" startDecorator={<StraightenIcon />}>
            {length}m
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ mt: 'auto' }}>
          {description && <Typography
              level="title-sm"
              sx={{ display: 'flex', gap: 1 }}
            >
              {description}
            </Typography>
          }
          <Typography level="title-lg" sx={{ flexGrow: 1, textAlign: 'right' }}>
            <strong>£{price.toLocaleString()}</strong> <Typography level="body-md">total</Typography>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
