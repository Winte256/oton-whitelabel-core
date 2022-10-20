import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, MenuItem, Button, TextField } from "@mui/material";

type Props = {};

const TeamTableHead = (props: Props) => {
  const { t } = useTranslation('team');
  const [value, setValue] = React.useState('');
  
  const handleChange = (event: any) => {
    setValue(event.target.value as string);
  };

  return (
    <Box>
      <Box sx={{ minWidth: 220 }}>
        <TextField
          onChange={handleChange}
          value={value}
          label={t('Search')}
          select
          size="small"
          sx={{
            width: '258px',
            mr: '24px'
          }}
        >
          <MenuItem value={10}>One</MenuItem>
          <MenuItem value={20}>Two</MenuItem>
          <MenuItem value={30}>Three</MenuItem>
        </TextField>
        <Button
          variant="outlined"
          sx={{
            textTransform: 'uppercase'
          }}
          onClick={() => setValue('')}
        >
          {t('Reset')}
        </Button>
      </Box>
    </Box>
  );
};

export default TeamTableHead;