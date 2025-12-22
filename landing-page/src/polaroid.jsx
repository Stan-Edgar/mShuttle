import PropTypes from "prop-types";

export default function Polaroid({pic, caption}) {
    return(
        <div className='relative font-sans font-medium text-2xl'>
            <div className="
            relative
            flex justify-center
            before:absolute
            before:-top-6
            before:left-1/2
            before:-translate-x-1/2
            before:z-20
            before:w-20
            before:h-20
            before:bg-no-repeat
            before:bg-contain
            before:content-['']
            before:bg-[url('./assets/PushPin.png')]">
            </div>
            
            <div className='flex flex-col items-center gap-10 bg-[#E7DFEE] w-81.25 h-110 px-8 pt-15 shadow-[100px_78px_51px_rgba(0,0,0,0.04),56px_44px_43px_rgba(0,0,0,0.13),25px_20px_32px_rgba(0,0,0,0.22),6px_5px_17px_rgba(0,0,0,0.26)]'>
                <img src={pic} alt={caption} className="w-full h-65 overflow-clip" />
                <p>{caption}</p>
            </div>
        </div>
    );
}