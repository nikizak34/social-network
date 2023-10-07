import React from 'react';
import {NavLink} from "react-router-dom";
import {AppBar, Button, makeStyles, Typography} from "@material-ui/core";


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOut: () => any
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        height: theme.spacing(10),
        flexDirection: "row",
        alignItems: "center"
    },
    logo: {
        width: "30px",
        height: "30px",
        paddingLeft: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
        paddingLeft: theme.spacing(4)
    },
    loginBlock: {
        paddingRight: theme.spacing(4)
    },
    logout: {
        marginLeft: theme.spacing(4)
    },
    login: {
        textDecoration: "none",
        color: "inherit"
    }
}));

function Header(props: HeaderPropsType) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                    <img src="https://img.artlebedev.ru/everything/kazan/kazan.png" alt="error"
                         className={classes.logo}/>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink to="/profile" style={{textDecoration:'none',cursor:'default',color:'white'}}>Social Network</NavLink>
                    </Typography>
                    <div className={classes.loginBlock}>
                        {props.isAuth
                            ?
                            <div>
                                <span>{props.login}</span>
                                <Button variant="outlined" color={"inherit"} onClick={props.logOut} className={classes.logout}>Log Out</Button>
                            </div>

                            :<Button variant="outlined" color={"inherit"} className={classes.login} >
                            <NavLink to={'/login'}>Login</NavLink>
                            </Button>
                        }
                    </div>
            </AppBar>
        </div>
    )
}

export default Header