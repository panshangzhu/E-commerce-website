import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import { connect } from "react-redux";
import { logoutAction } from "./Actions/LoginAction";
import { ClearCartAction } from "./Actions/CartAction";
import { Link } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    marginTop: "18px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#95a5a6",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function NavigationFace(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    props.logoutAction();
    props.ClearCartAction();
  };
  console.log(props.count);
  return (
    <div>
      <ListItemIcon onClick={handleClick}>
        <FaceOutlinedIcon fontSize="large" />
      </ListItemIcon>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AddShoppingCartOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/dbshoppingcart">
            <ListItemText primary="Carts" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Log Out" onClick={() => handleLogOut()} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogin: state.loginReducer.isLogin,
  };
};

export default connect(mapStateToProps, { logoutAction, ClearCartAction })(
  NavigationFace
);
