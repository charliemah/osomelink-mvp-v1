import React from 'react'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const ProjectCard = ({ project }) => {

  return (
    <Grid item key={project.key} xs={12} sm={6}>
      <Card
        variant='outlined'
        sx={{ maxWidth: 345, p: 2, display: 'flex', flexDirection: 'column', borderRadius: 4 }}
      >
        <CardContent>
          <Typography variant='subtitle1' gutterBottom component='div' >
            {project.name}
          </Typography>
          <Typography variant='body2' color='text.secondary' >
            {project.headline}
          </Typography>
        </CardContent>
        <CardMedia
          component='img'
          image={project.image}
          alt={project.imageLabel}
          sx={{ borderRadius: 4 }}
        />
      </Card>
    </Grid>
  )
}

export default ProjectCard
