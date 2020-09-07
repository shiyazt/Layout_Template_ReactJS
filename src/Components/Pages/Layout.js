import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import routes from '../../Config/admin_routes';

import { 
    AppBar,
    Divider,
    Drawer,
    IconButton,
    List, 
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    SvgIcon,
    Icon

 } from '@material-ui/core';

 import {
    Link
  } from "react-router-dom";

 import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    drawer : {
        width : 240
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
  }));


const Layout = (props) =>  {
    const classes = useStyles();
    const drawer = (
        <div>
            <Divider />
            <List>
                {
                    routes.map( ({icon, label, link_to}, index) => (
                        <ListItem button component={Link} to={'/'} key={index} component={Link} to={link_to} >
                            <ListItemIcon>
                                <WorkIcon />
                            </ListItemIcon>
                            <ListItemText>
                                {label}
                            </ListItemText>
                        </ListItem>
                    ))

                }
                
                {/* <ListItem button component={Link} to={'/builder'} >
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Builder
                    </ListItemText>
                </ListItem>
                <ListItem button component={Link} to={'/about'} >
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText>
                        About
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Help
                    </ListItemText>
                </ListItem> */}
            </List>
        </div>
    );
    return (
    <Fragment style={{display : 'flex'}}>
        <AppBar>
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer
        variant="permanent"
        anchor="left"
        style={{width : 240, flexShrink : 0}}
        classes={{
            paper: classes.drawer,
          }}
        >
            <div className={classes.toolbar} />
            {drawer}
        </Drawer>

        <div className={classes.content}>
          {props.children}
        </div>
        

    </Fragment>
    );
}

export default Layout;
