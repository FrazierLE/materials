import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Container, CardActions, CardMedia, Card, Button, Modal, Box, Typography } from '@mui/material';
import './ModalCard.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalCard = (props) => {
    const card = props.modal.map(item => {
      return(
        <Container>
          <Button onClick={props.closeModal} sx={{cursor: 'pointer'}}><ClearIcon /></Button>
          <Card className='modal-card card'>
            <Typography>
            {item.title} {item.byline}
            </Typography>
            <CardMedia
              component="img"
              height="194"
              image={item.multimedia?.[0].url || 'https://serpstat.com/files/img/34/1676542462.4999.png'}
              alt="article image"
            />
            <Typography component={'span'}>
            {item.abstract}
            </Typography>
            <CardActions>
              <Button size='small'
              variant='a'
              href={item.url}
              >Read More on NY Times</Button>
            </CardActions>
          </Card>
        </Container>
      )
    })
  return(
    <div className='modal-card'>
      <Modal open={props.open} onClose={props.closeModal} >
        <Box sx={style}>
          <Typography>
            {card}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalCard