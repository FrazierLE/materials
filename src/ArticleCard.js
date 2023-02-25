import React, { useState } from 'react'
import { Container } from '@mui/system'
import { Box, Modal, Button, Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";

const ArticleCard = ({ id, title, image, showDetails }) => {
  return(
    <Card>
      <CardContent>
      <CardMedia
        sx={{
          height: 0,
          paddingTop: '56.25%',
          paddingBottom: '15%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
        image={image}
      />
        <Typography gutterBottom variant='h3' fontSize='1rem'>
          {title}
        </Typography>
        <CardActions>
          <Button
            size='small'
            component='button'
            id={title}
            onClick={(id) => showDetails(id)}
          >See Article Details</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default ArticleCard
