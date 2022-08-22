import { Box, Stack, Typography } from '@mui/material';
import { RHFTextField } from 'src/components/hook-form';

export const SelectGuestsAndRooms = () => {
  const FIELD_WIDTH = '60px';
  return (
    <Stack spacing={2} p={4}>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Typography fontWeight="bold">Adults</Typography>
          <Typography variant="caption">18 years or older</Typography>
        </Box>
        <Box width={FIELD_WIDTH}>
          <RHFTextField
            size="small"
            name="adultCount"
            type="number"
            // TODO: display nummers
            InputProps={{
              inputMode: 'numeric',
              inputProps: {
                min: 1
              }
            }}
          />
        </Box>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Typography fontWeight="bold">Rooms</Typography>
          <Typography variant="caption">Select number of rooms.</Typography>
        </Box>

        <Box width={FIELD_WIDTH}>
          <RHFTextField
            size="small"
            name="roomCount"
            type="number"
            defaultValue={1}
            InputProps={{
              inputMode: 'numeric',
              inputProps: {
                min: 1
              }
            }}
          />
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Typography fontWeight="bold">Children</Typography>
          <Typography variant="caption">
            We don&apos;t support booking with children yet.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
