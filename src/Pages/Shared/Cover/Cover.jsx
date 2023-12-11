import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[600px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center  text-[#FFF] w-[900px] h-[300px] ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>

                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;