import { AppBar, Avatar, Badge, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import MyImage from '../assets/me.jpg'

const ToolbarStyled = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme})=>({
    backgroundColor:'white',
    padding:'0 10px',
    borderRadius:theme.shape.borderRadius,
    width: '40%',
}))
const Icons = styled("div")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "3px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


const Navbar = () => {
    const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <ToolbarStyled>
        <Typography
          variant="h6"
          textTransform={"uppercase"}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Redwan
        </Typography>

        <CodeOffIcon
          sx={{ display: { xs: "block", sm: "none" }, fontSize: "2rem" }}
        />

        <Search>
          <InputBase placeholder="search..." />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src={MyImage}
          />
        </Icons>
        <UserBox>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src={MyImage}
          />
          <Typography>redwan</Typography>
        </UserBox>
      </ToolbarStyled>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
