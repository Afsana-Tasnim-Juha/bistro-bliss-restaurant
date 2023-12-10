import chef from '../../../assets/home/chef.jpg';

const Banner2 = () => {
    return (
        <div className='my-12 relative'>
            <img className='h-[500px]' src={chef} alt='' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-[#FFF] p-8 w-[80%]'>
                <h2 className='uppercase text-2xl'>bistro boss</h2>
                <p>
                    Step into a world where taste meets warmth at Bistro Boss. Our home
                    page invites <br /> you to savor a fusion of traditional  and
                    contemporary  flavors in a cozy  setting. <br /> Explore our chef's
                    specialties and embark on a culinary journey that <br /> promises
                    satisfaction with every bite. Welcome to Bistro Boss, where every
                    meal is a masterpiece.
                </p>
            </div>
        </div>
    );
};

export default Banner2;
