import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import MoodIcon from "@mui/icons-material/Mood";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MyImage from "../assets/me.jpg";

const ModalStyled = styled(Modal)({
    display:'grid',
    placeContent:'center'
})
const UserBox = styled(Box)({
 display:"flex",
 alignItems:'center',
 gap:8,
});

const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Create post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", sm: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <ModalStyled open={open} onClose={() => setOpen(false)}>
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{
            width: { xs: 300, sm: 400 },
            height: { xs: 300, sm: 300 },
            borderRadius: 3,
            padding: 3,
          }}
        >
          <Typography variant="h6" color={"gray"} textAlign="center">
            Create post
          </Typography>

          <UserBox>
            <Avatar alt="Remy Sharp" src={MyImage} />
            <Typography variant="span" fontWeight={500}>
              Redwan Islam
            </Typography>
          </UserBox>
          <TextField
            sx={{
              mt: 2,
              width: "100%",
            }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />

          <Stack direction={"row"} gap="10px" mt={2} mb={3}>
            <MoodIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </ModalStyled>
    </>
  );
};

export default Add;
