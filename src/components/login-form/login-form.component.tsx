import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { LoginState } from '../../models/global-interfaces';
import { LoginFormProps } from './login-form-props.interface';
import { login } from '../../services/auth/authService';

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

function LoginForm(props: LoginFormProps) {
    const classes = useStyles();
    // state using a hook!
    const [values, setValues] = React.useState<LoginState>({
        email: '',
        password: '',
        errors: {}
    });

    const handleChange = (name: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
    }

    // !fix - any type must be a real type
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const errors = validate();
        // setValues({ ...values, errors })
        // if (errors) return;
        doSubmit();
    }

    // const validate = () => {
    //     const errors = { email: '', password: '' };
    //     if (values.email.trim() === '')
    //         errors.email = 'Email is required';
    //     if (values.password.trim() === '')
    //         errors.password = 'Password is required';
    //     return Object.keys(errors).length === 0 ? null : errors;
    // }

    const doSubmit = async () => {
        try {
            const res = await login(values.email, values.password);
            console.log(res);
            props.history.push("/app");
        } catch (error) {
            if (error.response && error.response.statue === 400) {
                // const er = {...}
                console.log(error);
                setValues({ ...values, errors: error });
            }
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className={classes.container}>
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
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>Login</Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;