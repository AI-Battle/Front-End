import React, { Component } from 'react';
import FormInput from '../components/form-input.component';
import CustomButton from '../components/custom-button.component';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
// import axios from 'axios';

const styles = {
    returnButton: {
        fontSize: '1.5rem',
        float: 'left',
        marginTop: '1rem',
        textDecoration: 'none',
        color: 'white',
        padding: '.5rem',
        transition: 'all .2s',
        borderRadius: '.3rem',

        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
            textDecoration: 'none',
            transform: 'translateY(-2px)'
        },

        '&:focus': {
            transform: 'translateY(0)'
        }
    }
}

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profileName: '',
            password: ''
        }
    }

    // componentDidMount() {
    //     const data = axios.get('API')
    //         .then(response => response.data)
    //         .
    //         .
    //         if(data.userId)
    // }

    handleSubmit = async event => {
        event.preventDefault();

        try {
            // Sending Data to database
            console.log(this.state);
            // axios.post('API', this.state)
            //     .then(response => console.log(response))
        } catch (error) {
            console.log(error);
        }

        this.setState({ email: '', password: '' });
        this.props.history.push('/challenges')
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Paper
                        square
                        style=
                        {{
                            padding: '2rem',
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100vh',
                            backgroundColor: 'rgb(41, 9, 78)'
                        }}
                    >
                        <Grid item xs={6} style={{ marginTop: '5%' }}>
                            <Paper style={{
                                padding: '2rem',
                                background: '#481A7E'
                            }} elevation={3}>
                                <div className='sign-in'>
                                    <h2 className='title' style={{ color: '#FF5722' }}>قبلا عضو شده اید؟</h2>
                                    <span style={{ color: '#FF5722' }}>ورود به پنل کاربری</span>
                                    <form onSubmit={this.handleSubmit}>
                                        <FormInput
                                            name='profileName'
                                            type='text'
                                            value={this.state.profileName}
                                            handleChange={this.handleChange}
                                            label='نام کاربری'
                                            required
                                        />

                                        <FormInput
                                            autoComplete="new-password"
                                            name='password'
                                            type='password'
                                            value={this.state.password}
                                            handleChange={this.handleChange}
                                            label='رمز عبور'
                                            required
                                        />

                                        <div className='buttons'>
                                            <CustomButton type='submit'>ورود</CustomButton>
                                        </div>

                                    </form>
                                </div>
                            </Paper>
                            <Link
                                to='/'
                                className={this.props.classes.returnButton}
                            >
                                &#8592;بازگشت
                            </Link>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}


export default withRouter(withStyles(styles)(SignIn));
