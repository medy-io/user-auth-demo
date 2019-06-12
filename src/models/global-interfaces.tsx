// sign up state
export interface SignUpState {
    name: string;
    email: string;
    password: string;
    errors?: any;
}

// login state
export interface LoginState {
    email: string;
    password: string;
    errors?: any;
}