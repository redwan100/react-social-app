import { Avatar, AvatarGroup, Box, ImageList, ImageListItem,  Typography } from '@mui/material'
import React from 'react'
import RightListItem from './RightListItem';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} maxWidth={300}>
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>

        <AvatarGroup total={24}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
        </AvatarGroup>

        <Box>
          <Typography variant="h6" fontWeight={200} mt={3}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
          </ImageList>

         <RightListItem />
         <RightListItem />
         <RightListItem />
        </Box>
      </Box>
    </Box>
  );
}

export default Rightbar