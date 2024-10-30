import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc'
import { IoMdLogIn } from 'react-icons/io'
const page = () => {
    return (
        <div>
        <div className="min-h-screen lg:flex">
            <div className="bg-black lg:w-3/5">
                <p className='text-white text-5xl font-bold p-4'>SHOP.CO</p>
                <div className=" flex justify-center items-center lg:mt-40">
                    <p className='text-white lg:text-7xl text-3xl text-center lg:text-start my-5  lg:w-3/4 font-bold'>You make the choice. We delivered it to you.</p>
                </div>
            </div>
            <div className="lg:w-2/5">
                <Link href={"/login"}>
                    <div className="text-center my-5">
                        <button className='btn bg-black text-white px-12 hover:bg-white hover:text-black text-lg'><IoMdLogIn />Sign in</button>
                    </div>
                </Link>

                <div className=" w-11/12 mx-auto  lg:mt-20 ">
                    <p className='font-bold'>Registration</p>
                    <p>Create your free account</p>

                    <form action=""  className=''>

                        {/* Name */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text font-bold">Name</span>
                            </div>
                            <input type="text" name='name' placeholder="Enter your full name" className="input input-bordered w-full max-w-xs" />
                        </label>

                        {/* email  */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text font-bold">E-mail Address</span>
                            </div>
                            <input type="email" name='email' placeholder="example@gmail.com" className="input input-bordered w-full max-w-xs" />
                        </label>

                        {/* password  */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text font-bold">Password</span>
                            </div>
                            <input type="password" name='password' placeholder="Enter 9 character or more" className="input input-bordered w-full max-w-xs" />
                        </label>

                        <div className="">
                            <button className='bg-black text-white btn mt-5'>Register</button>

                        </div>
                    </form>
                </div>
                <div className="divider">OR</div>
                <div className="text-center my-5">
                    <button  className='btn bg-theme_secondary text-black px-12 hover:bg-black hover:text-black text-lg'><FcGoogle />Google Sign in</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default page;