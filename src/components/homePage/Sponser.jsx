import Image from 'next/image';
import React from 'react';

const Sponser = () => {
    return (
        <div className="bg-[#000000]">
            <div className="container mx-auto px-3 md:px-10">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-x-4 md:gap-x-20 py-5">
                    <Image alt='' height={100} width={200} src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726066105/Vector_2_yohmr0.png" />
                    <Image alt='' height={100} width={200} src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726066086/Vector_3_rbh7dt.png" />
                    <Image alt='' height={100} width={200} src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726066105/Vector_2_yohmr0.png" />
                    <Image alt='' height={100} width={200}
                        className="ml-16 md:ml-0 pt-5 md:pt-0"
                        src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726067245/Group_su3wb2.png"
                    />
                    <Image alt='' height={100} width={200}
                        className="md:block ml-16 md:ml-0 pt-5 md:pt-0"
                        src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726066072/Vector_4_juxa8g.png"
                    />
                    <Image alt='' height={100} width={200}
                        className="hidden"
                        src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726066072/Vector_4_juxa8g.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sponser;