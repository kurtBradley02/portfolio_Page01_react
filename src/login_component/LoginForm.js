import './LoginForm.css';
import LoginActions from './LoginActions';


export default function LoginForm() {


    return (
        <div>

            <div className='login-card'>
                <h4 class="card-title">Sign in</h4>
                <h5 class="card-title thin">Use Registered Account</h5>

                <div class="input-container">
                    <input type="text" id="email" class="text-field" required></input>
                    <label for="email" class="floating-label">Email Address</label>
                </div>

                <div class="input-container">
                    <input type="password" id="email" class="text-field" required></input>
                    <label for="email" class="floating-label">Password</label>
                </div>

                <p class="Lorem2-text">Practice login form created with React. See link below for code source.
                    <a href="#" class="learn-more-link">Learn more</a></p>

                <div class="button-container">
                    <a href="/Register" class="create-account-link">Create account</a>
                    <button class="login-button">Login</button>
                </div>

            </div>

        </div>
    );

}

