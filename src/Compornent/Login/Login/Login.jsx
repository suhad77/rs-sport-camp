import Lottie from 'lottie-react';
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import reg from '../../../assets/register.json';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("")
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                reset();
                Swal.fire(
                    'Login success !!!',
                    'You clicked the button!',
                    'success'
                )
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const githubUser = result.user;

                console.log(githubUser);
                const saveUser = { name: githubUser.displayName, email: githubUser.email, photo: githubUser.photoURL }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire(
                            'Login success !!!',
                            'You clicked the button!',
                            'success'
                        )
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='px-3 md:lg:px-0'>
            <div className="hero bg-image rounded-lg my-12">
                <div className="hero-content flex flex-col md:flex-row lg:flex-row w-full my-10">
                    <div>
                        <Lottie animationData={reg} className='w-full'></Lottie>
                    </div>
                    <div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Please Login!!!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email*</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password*</span>
                                    </label>
                                    <div>
                                        <div className='w-full h-12 relative' >
                                            <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])/,
                                                pattern1: /(?=.*[!@#$&*])/
                                            })} placeholder="Password" className="input input-bordered border-[#d2d4d7] w-full h-full bg-transparent" />
                                            {showPassword ? <FaEyeSlash className='text-sky-600 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer' onClick={toggleShowPassword} /> : <FaEye className='text-sky-600 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer' onClick={toggleShowPassword} />}
                                        </div>
                                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase</p>}
                                        {errors.password?.type === 'pattern1' && <p className="text-red-600">Password must have one Special Character</p>}
                                        <p className="text-red-600">{error}</p>
                                    </div>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-primary">Login</button>
                                </div>
                                <label className="label">
                                    <p>Do not Have an Account? <Link to="/register" className='text-blue-600 underline'>Register</Link></p>
                                </label>
                            </form>
                        </div>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <div className='px-8 mt-8 mx-auto'>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full mb-4 gap-2"><FaGoogle></FaGoogle> Login with Google</button>
                                <button onClick={handleGithubSignIn} className="btn btn-outline w-full mb-8 gap-2"><FaGithub></FaGithub> Login with GitHub</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;