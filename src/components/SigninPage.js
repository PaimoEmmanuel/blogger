import React from 'react';
import { signinAuth } from './Auth';
import Footer from './Footer';

class SigninPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        signinAuth(this.state.email, this.state.password).then(() => {
            //this.props.history.push('/dashboard');
            console.log('Signed in');
        }).catch((error) => {
            console.log(error.code)
            if (error.code === "auth/user-not-found") {
                this.setState(() => ({
                    error: "User with this email does not exist"
                }))
            }
            else if (error.code === "auth/wrong-password") {
                this.setState(() => ({
                    error: "Password is incorrect"
                }))
            }
            else if (error.code === "auth/invalid-email") {
                this.setState(() => ({
                    error: "Please enter your email and password"
                }))
            }
        })

    };
    render() {
        return (
            <div className="signup">
                <h1 className="logo"><a href="/">Bloggr</a></h1>
                <div className="signup-container">
                    <div className="signup-texts">
                        <div className="signup__header">
                            <h1 className="signup__header--primary">Create & share <br></br>
                        blog posts easily.</h1>
                            <p className="signup__header--secondary">Save stress and time with <span>Bloggr</span>. <br></br>
                        Think Medium, but a faster and free one.</p>
                        </div>

                        <form onSubmit={this.onSubmit} className="signup-form">
                            {this.state.error && <p className="signup-error">{this.state.error}</p>}
                            <input
                                className="signup-input"
                                type="email"
                                name="email"
                                placeholder="email"
                                onChange={this.onEmailChange}
                            />
                            <input
                                className="signup-input"
                                type="password"
                                placeholder="password"
                                onChange={this.onPasswordChange}
                            />
                            <button
                                className="signup-button"
                                type="submit"
                            > Sign in</button>
                        </form>
                    </div>
                    <div className="signup__img">
                        <img src="images/phone.png" />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default SigninPage;