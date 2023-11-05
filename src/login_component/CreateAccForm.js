export default function CreateAccForm() {
    return (
        <div>
            <div className='login-card'>
                <h4 class="card-title">Create New Account</h4>
                <h5 class="card-title thin">*Fill up all fields</h5>

                <div class="input-container">
                    <input type="text" id="fullname" class="text-field" required></input>
                    <label for="email" class="floating-label">Full Name</label>
                </div>

                <div class="input-container">
                    <input type="text" id="email" class="text-field" required></input>
                    <label for="email" class="floating-label">Email Address</label>
                </div>

                <div class="input-container">
                    <input type="password" id="password" class="text-field" required></input>
                    <label for="email" class="floating-label">Password</label>
                </div>

                <div class="input-container">
                    <input type="password" id="confirmPassword" class="text-field" required></input>
                    <label for="email" class="floating-label">Confirm Password</label>
                </div>


                <div class="button-container">
                    <a href="/" class="create-account-link">Back</a>
                    <button class="register-button">Create Account</button>
                </div>

            </div>
        </div>
    );
}