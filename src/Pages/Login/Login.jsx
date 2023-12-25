import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import authentication from "../../assets/others/authentication.png"
import authentication2 from "../../assets/others/authentication2.png"
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {

    const [disable, setDisable] = useState(true);
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                if (result && result.user) {
                    const user = result.user;
                    console.log(user);
                    Swal.fire({
                        title: "User login successful",
                        showClass: {
                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                    });
                    navigate(from, { replace: true });
                } else {
                    // Handle the case where result or result.user is undefined
                    console.error("Login failed. User not found.");
                }
            })
            .catch(error => {
                // Handle any potential error during sign-in
                console.error("Login error:", error);
            });
    }


    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        }

        else {
            setDisable(true);
        }

    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>

            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <img src={authentication} alt="" />
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">

                        <img src={authentication2} alt="" />
                    </div>
                    <div className="card md:w-1/2  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-2xl font-bold text-center">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required />


                            </div>
                            <div className="form-control mt-6">

                                <input disabled={disable} className="btn btn-primary text-white bg-[bg-[#D1A054B2]]" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="pl-2 pb-2"><small>New Here? <Link to="/signUp"><span className='text-[#D1A054B2] font-bold' >Create an account here</span></Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Login;