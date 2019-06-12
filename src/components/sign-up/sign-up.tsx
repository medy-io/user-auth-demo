import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { SignUpState } from '../../models/global-interfaces';
import { Link } from 'react-router-dom';
import { DEV_API } from '../../constants/api.constants';
// import { register } from './../../services/user.service';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        dense: {
            marginTop: 19,
        },
        menu: {
            width: 200,
        },
    }),
);

function SignUp() {
    const classes = useStyles();
    const [values, setValues] = React.useState<SignUpState>({
        name: '',
        email: '',
        password: ''
        // sendEmail: false
    });

    const handleChange = (name: keyof SignUpState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('The form was submitted with the following data:');
        console.log(values);
        callWebToken();
    };

    const callWebToken = () => {
        fetch(DEV_API + 'users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(res => {
                return Promise.resolve(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    // const setToken = (idToken: any) => {
    //     localStorage.setItem("id_token", idToken);
    // };

    return (
        <form onSubmit={handleSubmit} className={classes.container} ref={form => form = form}>
            <TextField
                id="standard-name"
                label="Username"
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
            />
            <TextField
                id="email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                onChange={handleChange('email')}
                autoComplete="email"
                margin="normal"
            />
            <TextField
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                onChange={handleChange('password')}
                autoComplete="current-password"
                margin="normal"
            />
            <div>
                <Button type="submit" variant="contained" color="primary" className={classes.button}>Register</Button>
                <Link to="/sign-in" ><span> or I'm already member</span></Link>
            </div>
            {/* {values.sendEmail ? <Loader /> : "Let's Go!"} */}
        </form>
    );
}

export default SignUp;