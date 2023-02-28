import React, { useState } from 'react'
import { Box, FormControl, MenuItem, Select, InputLabel } from "@mui/material";

const FilterMenu = (props) => {
  const categories = ['Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Home', 'Insider', 'Magazine', 'Movies', 'Ny Region', 'Obituaries', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Sunday Review', 'Technology', 'Theater', 'T-magazine', 'Travel', 'Upshot', 'Us', 'World']
  
  const chooseCategory = (event) => {
    props.setCategory(event.target.value)
  }

  return(
    <Box sx={{ minWidth: 120, margin: '1rem' }}>
      <InputLabel id='category-label'>Choose category</InputLabel>
      <Select
        labelId='category-label'
        id='category'
        label='category'
        value={''}
        onChange={chooseCategory}
        sx={{width: 100}}
      >
        <MenuItem value={'home'}>Choose a category...</MenuItem>
      {categories.map((item, index) => <MenuItem key={index} value={item.toLowerCase()}>{item}</MenuItem>)}
      </Select>
    </Box>
  )
}


export default FilterMenu