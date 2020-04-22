import React from 'react';
import FormInput from '../components/form-input.component';
import CustomButton from '../components/custom-button.component';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
// import axios from 'axios';
import uuid from 'uuid/v4';


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
        marginBottom: '2rem',

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

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            firstNamePersian: '',
            lastNamePersian: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("تایید رمز صحیح نیست");
            return;
        }

        try {
            // Send Data to the Database
            const Data = { ...this.state, userId: uuid() }
            console.log(Data);
            // axios.post('API', this.state)
            //     .then(response => console.log(response))
        } catch (error) {
            console.error(error);
        }

        this.props.history.push('/signin')
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { firstNamePersian, lastNamePersian, email, password, confirmPassword, phone } = this.state;
        return (
            <Grid container>
                <Grid item xs={12}>
                    <div
                        style={{
                            padding: '2rem',
                            display: 'flex',
                            justifyContent: 'center',
                            height: '150vh',
                            backgroundColor: 'rgb(41, 9, 78)'
                        }}
                    >
                        <Grid item xs={6} style={{ marginTop: '5%' }}>
                            {/* square */}
                            <Paper style={{ padding: '2rem', borderRaduis: '15px', background: '#481A7E' }} elevation={3} square>
                                <div className='sign-up'>
                                    <h2 className='title' style={{color: '#FF5722'}}>عضو نیستید ؟</h2>
                                    <span style = {{color: '#FF5722'}}>ثبت نام</span>
                                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
                                        <FormInput
                                            type='text'
                                            name='firstNamePersian'
                                            value={firstNamePersian}
                                            onChange={this.handleChange}
                                            label='نام کاربری'
                                            required
                                        />

                                        <FormInput
                                            type='text'
                                            name='lastNamePersian'
                                            value={lastNamePersian}
                                            onChange={this.handleChange}
                                            label='نام خانوادگی'
                                            required
                                        />

                                        <FormInput
                                            type='email'
                                            name='email'
                                            value={email}
                                            onChange={this.handleChange}
                                            label='ایمیل'
                                            required
                                        />

                                        <FormInput
                                            type='tel'
                                            name='phone'
                                            value={phone}
                                            onChange={this.handleChange}
                                            label='تلفن همراه'
                                            required
                                            pattern="[0-9]{11}"
                                        />

                                        <FormInput
                                            type='password'
                                            name='password'
                                            value={password}
                                            onChange={this.handleChange}
                                            label='رمز عبور'
                                            required
                                        />
                                        <FormInput
                                            autoComplete="new-password"
                                            type='password'
                                            name='confirmPassword'
                                            value={confirmPassword}
                                            onChange={this.handleChange}
                                            label='تایید رمز عبور'
                                            required
                                        />
                                        <CustomButton type='submit'>ثبت نام</CustomButton>
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
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(withStyles(styles)(SignUp));