import React from 'react';
import dayjs from 'dayjs';
import { colorCardByDate } from '../utils/helpers';
import { Box, Paper, Typography, Grid, ButtonGroup, Button, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

function SingleItem({ item, setDialogOpen, setEditedItem }) {
  // Edit item button handler
  function handleEditItem() {
    // Set item to be edited in modal
    setEditedItem(item);
    // Open edit modal
    setDialogOpen(true);
  }

  // TODO Delete button handler

  // TODO recipe search handler ??

  return (
    <Box
      variant="outlined"
      // TODO make background colors less bold - probably through general theming
      sx={{ p: 2, marginBottom: 0.5, maxWidth: 500, flexGrow: 1, bgcolor: colorCardByDate(item.useByDate) }}
    >
      {/* Overall Grid*/}
      <Grid container>
        {/* Text Column */}
        <Grid item xs={10} alignItems="flex-start" container direction="column">
          {/* Name, Quantity, Unit Row */}
          <Grid container alignItems="center" spacing={1}>
            {/* Item Name */}
            <Grid item xs={9}>
              <Typography gutterBottom variant="subtitle1" component="div" textAlign="left" xs={10}>
                {item.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              {/* Quanity and Unit */}
              <Typography variant="body2" gutterBottom xs={1} textAlign="left">
                {`${item.quantity} ${item.unit}`}
              </Typography>
            </Grid>
          </Grid>
          {/* Use By Date */}
          <Typography variant="body2" gutterBottom>
            Use by: {dayjs(item.useByDate).format('MM/DD/YY')}
          </Typography>

          {/* Storage Location */}
          <Typography variant="body2" color="text.secondary">
            Stored: {item.storageLocation}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <ButtonGroup variant="contained" orientation="vertical" size="small">
            {/* Edit Button */}
            <Tooltip title="Edit" placement="left">
              <Button onClick={handleEditItem}>
                <EditIcon />
              </Button>
            </Tooltip>

            {/* Delete Button */}
            <Tooltip title="Delete" placement="left">
              <Button>
                <DeleteIcon />
              </Button>
            </Tooltip>

            {/* Find Recipe Button */}
            <Tooltip title="Find Recipie" placement="left">
              <Button>
                <DinnerDiningIcon />
              </Button>
            </Tooltip>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SingleItem;
