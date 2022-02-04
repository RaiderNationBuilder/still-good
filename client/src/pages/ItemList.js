import React, { useState } from 'react';
import { Stack, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SingleItem from '../components/SingleItem';
import ItemEdit from '../components/ItemEdit';

import { sortDate } from '../utils/helpers';
// TODO replace test data with useQuery to pull in user's items
import { sampleData } from '../utils/sampleData';

function ItemList() {
  // Set which item will be edited in ItemEdit modal
  const [editedItem, setEditedItem] = useState({});

  // Turn edit modal on and off
  const [dialogOpen, setDialogOpen] = useState(false);

  // TODO replace test data with useQuery to pull in user's items
  const [itemData] = useState(sortDate(sampleData));

  // Add Item(s) button handler
  function handleAddItem() {
    // clear edited item
    setEditedItem({});
    // open modal
    setDialogOpen(true);
  }

  return (
    <>
      <Stack margin={1}>
        <ItemEdit
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          setEditedItem={setEditedItem}
          editedItem={editedItem}
        />
        <Typography variant="h4">Item List</Typography>

        {/* Sort item array on render */}
        {console.log()}

        {/* Map items into cards */}
        {itemData.map(item => {
          return <SingleItem setEditedItem={setEditedItem} setDialogOpen={setDialogOpen} item={item} key={item._id} />;
        })}
      </Stack>
      <Fab onClick={handleAddItem} color="primary" aria-label="add" style={{ position: 'fixed bottom right' }}>
        <AddIcon />
      </Fab>
    </>
  );
}

export default ItemList;
