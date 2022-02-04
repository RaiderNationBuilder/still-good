import React, { useState } from 'react';
import { Button, ButtonGroup, Dialog, DialogTitle, Grid, MenuItem, Select, Stack, TextField } from '@mui/material';
import TaskAlt from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DoDisturb from '@mui/icons-material/DoDisturb';

function ItemEdit({ dialogOpen, setEditedItem, editedItem, setDialogOpen }) {
  
  // Generic onChange handler
  function editField(event) {
    const { name, value } = event.target;
    setEditedItem({
      ...editedItem,
      [name]: value,
    });
  }

  // TODO Create validation for required fields
  // Have been checking out this video for reference: https://www.youtube.com/watch?v=sTdt2cJS2dg
  const [itemName, setItemName] = useState('');
  const [useByDate, setUseByDate] = useState('');
  const [itemNameError, setItemNameError] = useState(false);
  const [useByDateError, setUseByDateError] = useState(false);


  // TODO Submit button handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setItemNameError(false);
    setUseByDateError(false);

    if (itemName == '') {
      setItemNameError(true);
    }
    if (itemName == '') {
      setUseByDateError(true);
    }

    if(itemName && useByDate){
      console.log(itemName);
    }
    // TODO useMutation saveItem

    // clear edited
    setEditedItem({});

    setDialogOpen(false);
  }
  // TODO Submit and add button handler
  function handleSubmitAndAdd() {
    // TODO useMutation saveItem

    // clear edited
    setEditedItem({});
  }

  // Cancel button handler
  function handleEditCancel() {
    setEditedItem({});
    setDialogOpen(false);
  }

  function handleClose() {}
  return (
    <Dialog onClose={handleClose} open={dialogOpen}>
      <DialogTitle>Add/Edit Items</DialogTitle>
      <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
        <Stack margin={2} spacing={2}>
          {/* Name Field */}
          <TextField

            name="name"
            value={editedItem.name}
            size="small"
            label="Item"
            type="text"
            required
            error={itemNameError}
            // value={item.name}
            InputLabelProps={{
              shrink: true,
            }}

          />

          <Grid container>
            <Grid item xs={7}>
              {/* Quantity Field */}
              <TextField
                name="quantity"
                value={editedItem.quantity}
                size="small"
                label="Quantity"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                
              />
            </Grid>
            <Grid item xs={5}>
              {/* Unit Field */}
              {/*
              // TODO make this a select instead of a text field
              // TODO create select options
              */}
              <TextField
                name="unit"
                value={editedItem.unit}
                size="small"
                label="Unit"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                
              />
            </Grid>
          </Grid>
          {/* Use By Field */}
          <TextField

            name="useByDate"
            value={editedItem.useByDate}
            size="small"
            label="Use by"
            type="date"
            required
            error={useByDateError}
            InputLabelProps={{
              shrink: true,
            }}

          />

          {/* Added On Field */}
          <TextField
            name="addedDate"
            value={editedItem.addedDate}
            size="small"
            label="Added on"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}

          />

          {/* Storage Location Selector */}
          {/* 
          //TODO resolve controlled/uncontrolled object error 
          */}
          <Select
            name="storageLocation"
            label="Stored where"
            size="small"
            value={editedItem.storageLocation ? editedItem.storageLocation : 'other'}
          >
            <MenuItem value="fridge">Fridge</MenuItem>
            <MenuItem value="freezer">Freezer</MenuItem>
            <MenuItem value="pantry">Pantry</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>

          {/* Buttons */}
          <ButtonGroup variant="contained" fullWidth={true}>
            <Button onClick={handleFormSubmit}>
              <TaskAlt />
            </Button>
            <Button onClick={handleSubmitAndAdd}>
              <AddTaskIcon />
            </Button>
            <Button onClick={handleEditCancel}>
              <DoDisturb />
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Dialog>
  );
}

export default ItemEdit;
