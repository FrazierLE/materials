import React, { useState } from 'react'
import { Container, Box, TextField, Button } from '@mui/material'

const Form = (props) => {
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.currentTarget.value)
    props.filterArticles(event.currentTarget.value)
  }

  const reset = () => {
  props.resetFilter()
  setInput('')
}

  return (
    <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' }
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search by article title" variant="outlined" value={input} onChange={(event) => handleChange(event)}/>
      </Box>
      <Button onClick={reset}>Reset Search</Button>
    </Container>
  )
}

export default Form
