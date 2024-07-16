import * as React from 'react'
import { alpha } from '@mui/material'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import ToggleColorMode from '../../components/ToggleColorMode'
import ChipArray from '../../components/ChipArray'
import ProjectCard from '../../components/ProjectCard'

const intro = {
  name: 'Charlie Ma',
  github_username: 'charliemah',
  headline: 'Creator of OsomeLink',
  timezone: 'America/Vancouver'
}

const about = 'I am a passionate open-source developer and designer based in Canada, who combines deep technical insights with a relentless focus on simplicity of use.  I love working with amazing teammates and building projects that can help others. My aspiration is to build a product as beloved as Notion or Figma, utilizing the 10,000 hours I have invested in perfecting my skills in coding and design.'

const skills = [ 'Javascript', 'TypeScript', 'Java', 'Python', 'React', 'Redux', 'Node.js', 'Spring Boot' ]

const links = [
  {
    id: 1,
    title: 'View my LinkedIn profile',
    url: '#'
  },
  {
    id: 2,
    title: 'View my recent PRs',
    url: '#'
  },
  {
    id: 3,
    title: 'Schedule time with me',
    url: '#'
  }
]

const projects = [
  {
    id: 1,
    name: 'Teamnova',
    headline: 'Team mentorship for large open-source projects',
    image: 'https://images.unsplash.com/photo-1544161513-0179fe746fd5',
    imageLabel: 'Image label 1'
  },
  {
    id: 2,
    name: 'AMCList',
    headline: 'Peer mentorship for early-stage open-source projects',
    image: 'https://images.unsplash.com/photo-1544161513-0179fe746fd5',
    imageLabel: 'Image label 2'
  }
]

const Home = ({mode, toggleColorMode}) => {
  return (
    <Container disableGutters>
      <CssBaseline />
      <Box
        sx={(theme) => ({
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
              : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`
        })}
      >
        <Grid container justifyContent='space-between' >
          <Grid item xs={12} sm={5} lg={4}>
            <Box
              sx={(theme) => ({
                width: '100%',
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
                position: 'sticky'
              })}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Box sx={{ py: 6 }} >
                  <Avatar
                    src='https://images.unsplash.com/photo-1544161513-0179fe746fd5'
                    sx={{ width: 128, height: 128 }}
                  />
                </Box>
                <Box sx={{ py: 3 }} >
                  <Typography
                    component='h1'
                    variant='h3'
                    sx={{ fontFamily: 'Arial', fontWeight: 'bold' }}
                    gutterBottom
                  >
                    {intro.name}
                  </Typography>
                  <Typography
                    component='h2'
                    variant='h5'
                    sx={{ fontFamily: 'Helvetica', lineHeight: '25px' }}
                    gutterBottom
                  >
                    {intro.headline}
                  </Typography>
                </Box>
                <Stack
                  direction='column'
                  justifyContent='space-evenly'
                  spacing={2}
                >
                  {links.map((link) => (
                    <Button
                      size='large'
                      color='inherit'
                      variant='contained'
                      disableElevation
                      key={link.id}
                      style={{ textTransform: 'none', minWidth: '150px', maxWidth: '300px', lineHeight: '32px', borderRadius: 32 }}
                    >
                      {link.title}
                    </Button>
                  ))}
                </Stack>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={7} >
            <Container sx={{ mb: 8 }} >
              <Box sx={{ py: 2 }} >
                <Typography
                  variant='h6'
                  align='left'
                  color='text.primary'
                  gutterBottom
                >
                  About
                </Typography>
              </Box>
              <Card
                variant='outlined'
                sx={(theme) => ({
                  mb: 2,
                  display: 'flex',
                  borderRadius: 4,
                  backgroundImage:
                    theme.palette.mode === 'light' ? 'grey.100' : 'grey.800'
                })}
              >
                <CardContent>
                  <Typography component='div' align='left' variant='body2' paragraph>
                    {about}
                  </Typography>
                </CardContent>
              </Card>
              <ChipArray labels={skills} />
            </Container>
            <Container sx={{ mb: 8 }} >
              <Box sx={{ py: 2 }} >
                <Typography
                  variant='h6'
                  align='left'
                  color='text.primary'
                  gutterBottom
                >
                  Project Experience
                </Typography>
              </Box>
              <Grid container spacing={4}>
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Home