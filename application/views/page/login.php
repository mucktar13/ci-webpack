<div class="container">
    <div class="row">
        <div class="com-md-12">
            <div class="notification login-alert">
                Please Enter Your Username And Password!
            </div>
            <div class="notification notification-success logged-out">
                You logged out successfully!
            </div>
            <div class="well welcome-text">
                Hello, to access our app please <button class="btn btn-default btn-login">Log in</button> or <button class="btn btn-default btn-register" disabled="disabled">Register</button>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            
            <div class="well login-box">
                <form action="<?php echo site_url('auth/login') ?>" method="POST">
                    <legend>Login</legend>
                    <div class="form-group">
                        <label for="username-email">E-mail or Username</label>
                        <input id="username-email" name="identity" placeholder="E-mail or Username" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input id="password" name="password"  placeholder="Password" type="password" class="form-control" />
                    </div>
                    <div class="form-group text-center">
                        <button class="btn btn-danger btn-cancel-action">Cancel</button>
                        <input type="submit" class="btn btn-success btn-login-submit" value="Login" />
                    </div>
                </form>
            </div>
            
        </div>
    </div>
</div>