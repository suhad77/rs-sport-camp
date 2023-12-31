import  { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import reg from '../../../assets/register.json';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [notMatch, setNotMatch] = useState('')

    const from = location.state?.from?.pathname || "/";

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirm = () => {
        setShowConfirm(!showConfirm);
    };


    


    const onSubmit = data => {
        if (data.password !== data.confirm) {
            setNotMatch('Passwords do not match');
            return;
        }

        const email = data.email;
        const password = data.password;
        createUser(email, password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo: data.photoURL }
                        console.log(saveUser);
                        fetch('https://rs-sport-camp-server-suhad77.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire(
                                        'Register success !!!',
                                        'You clicked the button!',
                                        'success'
                                    )
                                    navigate(from, { replace: true });
                                    console.log(data);
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <div className='px-3 md:lg:px-0'>
            <div className="hero bg-image rounded-lg my-12">
                <div className="hero-content flex flex-col md:flex-row lg:flex-row w-full my-10">
                    <div>
                        <Lottie animationData={reg} className='w-full'></Lottie>
                    </div>
                    <div className='w-1/2'>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Please Register!!!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name*</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL*</span>
                                    </label>
                                    <input type="url" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>
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
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password*</span>
                                    </label>
                                    <div>
                                        <div className='w-full h-12 relative' >
                                            <input type={showConfirm ? 'text' : 'password'} {...register("confirm", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])/,
                                                pattern1: /(?=.*[!@#$&*])/,
                                                pattern2: /(?=.*[a-z])/,
                                            })} placeholder="Confirm Password" className="input input-bordered border-[#d2d4d7] w-full h-full bg-transparent" required />
                                            {showConfirm ? <FaEyeSlash className='text-sky-600 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer' onClick={toggleShowConfirm} /> : <FaEye className='text-sky-600 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer' onClick={toggleShowConfirm} />}
                                        </div>
                                        {errors.confirm?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                        {errors.confirm?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                        {errors.confirm?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                        {errors.confirm?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase</p>}
                                        {errors.confirm?.type === 'pattern1' && <p className="text-red-600">Password must have one Special Character</p>}
                                        {errors.confirm?.type === 'pattern2' && <p className="text-red-600">Password must have one Lowercase</p>}
                                        <p className="text-red-600">{notMatch}</p>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-primary">Register</button>
                                </div>
                                <label className="label">
                                    <p>Already have an Account? <Link to="/login" className='text-blue-600 underline'>Login</Link></p>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;