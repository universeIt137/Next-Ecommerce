"use client"
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import ProductReview from './ProductReview';
import Product from './Product';
const products = [
    {
        "id": 1,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726513893/image_8_mbv2pr.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726513843/images_axuntg.jpg",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726513830/0062376_040_a_syilev.jpg"
        ],
        "product_title": "Slim Fit Chinos",
        "product_price": 120.0,
        "product_discount_price": 140.0,
        "product_rating": 4.5,
        "product_discount_percent": 27,
        "product_description": "Comfortable slim-fit chinos that are versatile for both casual and semi-formal occasions. Made from soft, durable fabric.",
        "product_size": ["small", "medium", "large", "x-large"],
        "product_review": [
            {
                "author": "Laura Evans",
                "description": "Great fit and comfortable. Perfect for work and casual outings.",
                "posted_date": "2024-09-01"
            },
            {
                "author": "John Smith",
                "description": "Nice chinos, but they wrinkle easily.",
                "posted_date": "2024-09-03"
            },
            {
                "author": "Emily Johnson",
                "description": "The size runs slightly small. Recommend ordering a size up.",
                "posted_date": "2024-09-05"
            },
            {
                "author": "Michael Brown",
                "description": "Stylish and comfortable. Good value for the price.",
                "posted_date": "2024-09-07"
            },
            {
                "author": "Sophia Lee",
                "description": "I love the color and fit. Definitely would buy again.",
                "posted_date": "2024-09-10"
            },
            {
                "author": "Daniel Harris",
                "description": "The fabric is nice but the stitching could be better.",
                "posted_date": "2024-09-12"
            }
        ]
    },
    {
        "id": 2,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726501600/image_9-removebg-preview_wziy6b_elaqg0.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726514517/images_2_ysdmwx.jpg",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726514519/images_1_jvvch8.jpg"
        ],
        "product_title": "Classic Button-Down Shirt",
        "product_price": 70.0,
        "product_discount_price": 100.0,
        "product_rating": 4.6,
        "product_discount_percent": 23,
        "product_description": "A timeless button-down shirt made from high-quality cotton. Ideal for formal and casual settings.",
        "product_size": ["small", "medium", "large", "x-large"],
        "product_review": [
            {
                "author": "Olivia Martinez",
                "description": "Perfect shirt for both office and casual wear. Very comfortable.",
                "posted_date": "2024-09-02"
            },
            {
                "author": "Ethan Clark",
                "description": "The fabric is soft but the fit was a bit tight.",
                "posted_date": "2024-09-04"
            },
            {
                "author": "Ava Rodriguez",
                "description": "Great quality shirt. The color is exactly as shown.",
                "posted_date": "2024-09-06"
            },
            {
                "author": "Liam Green",
                "description": "Nice shirt but it creases easily. Needs regular ironing.",
                "posted_date": "2024-09-08"
            },
            {
                "author": "Mia Anderson",
                "description": "Excellent shirt with a classic design. Worth the price.",
                "posted_date": "2024-09-09"
            },
            {
                "author": "Noah Wilson",
                "description": "Good shirt overall but it shrank slightly after washing.",
                "posted_date": "2024-09-11"
            }
        ]
    },
    {
        "id": 3,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726501551/image_8__1_-removebg-preview_zv14lr_ajpz8w.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726501560/image_7-removebg-preview_yzhicn_msamuy.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726511359/Frame_33_yevjec.png"
        ],
        "product_title": "Graphic T-Shirt",
        "product_price": 230.0,
        "product_discount_price": 270.0,
        "product_rating": 4.2,
        "product_discount_percent": 17,
        "product_description": "Trendy graphic t-shirt made from soft cotton. Features a unique design that stands out.",
        "product_size": ["small", "medium", "large", "x-large"],
        "product_review": [
            {
                "author": "Ethan Harris",
                "description": "Cool design and comfy. A great addition to my wardrobe.",
                "posted_date": "2024-09-01"
            },
            {
                "author": "Sophia Lewis",
                "description": "The print is great but the shirt shrunk after the first wash.",
                "posted_date": "2024-09-03"
            },
            {
                "author": "Mia Johnson",
                "description": "Very comfortable and fits well. Love the graphic!",
                "posted_date": "2024-09-05"
            },
            {
                "author": "Jacob Scott",
                "description": "Good quality for the price. The graphic is vibrant.",
                "posted_date": "2024-09-07"
            },
            {
                "author": "Olivia Martinez",
                "description": "Nice shirt but a little thin. Perfect for summer.",
                "posted_date": "2024-09-09"
            },
            {
                "author": "Daniel Evans",
                "description": "The shirt is good but it took a while to arrive.",
                "posted_date": "2024-09-12"
            }
        ]
    },
    {
        "id": 4,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726514840/image_10_ukjhnv.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726562124/images__9_-removebg-preview_htvvsb.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726514989/images_4_jvykvy.jpg"
        ],
        "product_title": "Distressed Jeans",
        "product_price": 75.0,
        "product_discount_price": 160.0,
        "product_rating": 4.4,
        "product_discount_percent": 220,
        "product_description": "Fashionable distressed jeans with a modern fit. Made from durable denim and designed for casual wear.",
        "product_size": ["small", "medium", "large", "x-large"],
        "product_review": [
            {
                "author": "Emma Brown",
                "description": "Love these jeans! They fit perfectly and look great.",
                "posted_date": "2024-09-02"
            },
            {
                "author": "James White",
                "description": "The jeans are stylish but the distressing is a bit excessive.",
                "posted_date": "2024-09-04"
            },
            {
                "author": "Ava Smith",
                "description": "Good quality denim. They’re a bit snug at first but loosen up.",
                "posted_date": "2024-09-06"
            },
            {
                "author": "Michael Johnson",
                "description": "Great jeans with a trendy look. Worth the discount price.",
                "posted_date": "2024-09-08"
            },
            {
                "author": "Sophia Lee",
                "description": "Nice jeans but they arrived with a small tear.",
                "posted_date": "2024-09-10"
            },
            {
                "author": "Daniel Green",
                "description": "Comfortable and stylish. Perfect for casual outings.",
                "posted_date": "2024-09-11"
            }
        ]
    },
    {
        "id": 5,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726515278/image_7_1_oeq9uh.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726515575/images_5_kxwdam.jpg",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726515758/download_1_fp4x9r.jpg"
        ],
        "product_title": "Vertical Striped Shirt",
        "product_price": 65.0,
        "product_discount_price": 80.0,
        "product_rating": 4.3,
        "product_discount_percent": 22,
        "product_description": "A classic polo shirt made from soft cotton with a comfortable fit. Suitable for both casual and semi-formal wear.",
        "product_size": ["small", "medium", "large", "x-large"],
        "product_review": [
            {
                "author": "Olivia Carter",
                "description": "Great polo shirt. Comfortable and fits well.",
                "posted_date": "2024-09-01"
            },
            {
                "author": "Noah Lee",
                "description": "The shirt is nice but the color was slightly off.",
                "posted_date": "2024-09-03"
            },
            {
                "author": "Isabella Wilson",
                "description": "Good quality and very comfortable. Perfect for casual wear.",
                "posted_date": "2024-09-05"
            },
            {
                "author": "Liam Adams",
                "description": "The shirt is good but it shrank a bit after washing.",
                "posted_date": "2024-09-07"
            },
            {
                "author": "Emma Moore",
                "description": "Nice polo with a classic look. Worth the discount.",
                "posted_date": "2024-09-09"
            },
            {
                "author": "Daniel Scott",
                "description": "Comfortable and stylish. Perfect for a casual day out.",
                "posted_date": "2024-09-12"
            }
        ]
    },
    {
        "id": 6,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726518699/71pqrVLTbKL._US500_-removebg-preview_qjuy9q.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726516018/8978xHEATHERSKYBLUExPrimary_67360126_bf57ex.jpg",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726515972/download_2_w7wc62.jpg"
        ],
        "product_title": "Tailored Dress Shirt",
        "product_price": 85.0,
        "product_discount_price": 115.0,
        "product_rating": 4.7,
        "product_discount_percent": 24,
        "product_description": "Elegant tailored dress shirt with a perfect fit for formal occasions. Made from premium fabric for comfort and durability.",
        "product_size": ["small", "medium", "large", "x-large"],
        "product_review": [
            {
                "author": "David Miller",
                "description": "Excellent quality shirt. Fits perfectly and feels great.",
                "posted_date": "2024-09-02"
            },
            {
                "author": "Sophia Harris",
                "description": "The fit is very flattering. Perfect for business meetings.",
                "posted_date": "2024-09-04"
            },
            {
                "author": "Ethan Walker",
                "description": "The fabric is high-quality but the shirt needs ironing.",
                "posted_date": "2024-09-06"
            },
            {
                "author": "Mia Thomas",
                "description": "Beautiful shirt, worth every penny. The fit is superb.",
                "posted_date": "2024-09-08"
            },
            {
                "author": "Olivia Wright",
                "description": "A bit pricey, but the quality justifies it.",
                "posted_date": "2024-09-10"
            },
            {
                "author": "Daniel Lewis",
                "description": "Great shirt overall. Just wish it came in more colors.",
                "posted_date": "2024-09-11"
            }
        ]
    },
    {
        "id": 7,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726516344/image_9_v1ihcs.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726516436/pepe-jeans-bermudas-loose-dobby-pm801083-3082642-f_wnbljq.jpg",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726516448/images_6_qthytz.jpg"
        ],
        "product_title": "Loose Fit Bermuda Shorts",
        "product_price": 240.0,
        "product_discount_price": 280.0,
        "product_rating": 4.1,
        "product_discount_percent": 25,
        "product_description": "Breathable athletic shorts designed for comfort during workouts. Features an adjustable waistband and quick-dry fabric.",
        "product_size": ["small", "medium", "large", "x-large"],
        "product_review": [
            {
                "author": "Jackson Davis",
                "description": "Comfortable shorts, ideal for running or gym workouts.",
                "posted_date": "2024-09-01"
            },
            {
                "author": "Emily Martinez",
                "description": "The waistband is a bit tight but overall great shorts.",
                "posted_date": "2024-09-03"
            },
            {
                "author": "Liam Wilson",
                "description": "Good quality and the fabric is really breathable.",
                "posted_date": "2024-09-05"
            },
            {
                "author": "Ava Robinson",
                "description": "Perfect for my daily jogs. The fit is true to size.",
                "posted_date": "2024-09-07"
            },
            {
                "author": "Sophia Adams",
                "description": "Great shorts, but they took a while to arrive.",
                "posted_date": "2024-09-09"
            },
            {
                "author": "Daniel Clark",
                "description": "Very comfortable and functional. Will buy another pair.",
                "posted_date": "2024-09-11"
            }
        ]
    },
    {
        "id": 8,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726516948/weekend-mode-on_cswzbd.jpg",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726516959/download_3_s30m7p.jpg",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726516965/images_7_nj76rm.jpg"
        ],
        "product_title": "Weekend Hoodie",
        "product_price": 200.0,
        "product_discount_price": 245.0,
        "product_rating": 4.5,
        "product_discount_percent": 25,
        "product_description": "Cozy hoodie perfect for relaxed weekends. Made from soft fleece with a comfortable fit and adjustable hood.",
        "product_size": ["small", "medium", "large", "x-large"],
        "product_review": [
            {
                "author": "Isabella White",
                "description": "Super comfy and warm. Perfect for lounging at home.",
                "posted_date": "2024-09-01"
            },
            {
                "author": "Noah Harris",
                "description": "Love the hoodie but it’s a bit larger than expected.",
                "posted_date": "2024-09-03"
            },
            {
                "author": "Olivia Adams",
                "description": "Great quality and very cozy. Good value for the price.",
                "posted_date": "2024-09-05"
            },
            {
                "author": "Liam Carter",
                "description": "Nice hoodie but the color was not as expected.",
                "posted_date": "2024-09-07"
            },
            {
                "author": "Emma Lee",
                "description": "Soft and comfortable. Great for cool evenings.",
                "posted_date": "2024-09-09"
            },
            {
                "author": "Daniel Taylor",
                "description": "Good hoodie but it took a bit longer to ship.",
                "posted_date": "2024-09-11"
            }
        ]
    },

    {
        "id": 9,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726562682/blue-300x300-removebg-preview_cjrxvu.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726560109/41zB5QDUesL._AC_SX385_-removebg-preview_x9wfrp.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726560219/41qYZ0HeHDL._AC_UY1000_-removebg-preview_n6mwwi.png"
        ],
        "product_title": "Trendy Sneakers Shirt",
        "product_price": 150.0,
        "product_discount_price": 180.0,
        "product_rating": 4.3,
        "product_discount_percent": 16.7,
        "product_description": "Stylish sneakers designed for comfort and durability. Features a cushioned sole and modern design.",
        "product_size": ["6", "7", "8", "9", "10"],
        "product_review": [
            {
                "author": "Lily Anderson",
                "description": "Very comfortable and stylish. Great for everyday wear.",
                "posted_date": "2024-09-02"
            },
            {
                "author": "Jack Wilson",
                "description": "The sneakers look good, but they felt a bit tight at first.",
                "posted_date": "2024-09-04"
            },
            {
                "author": "Charlotte Brown",
                "description": "Nice quality and design, though the color was slightly off from the pictures.",
                "posted_date": "2024-09-06"
            },
            {
                "author": "Aiden Lee",
                "description": "Good sneakers overall, but the sole started wearing out quicker than expected.",
                "posted_date": "2024-09-08"
            },
            {
                "author": "Mia Martinez",
                "description": "Comfortable and trendy. Perfect for both casual and semi-formal occasions.",
                "posted_date": "2024-09-10"
            },
            {
                "author": "Noah Harris",
                "description": "Great sneakers for the price. Delivery was a bit delayed, though.",
                "posted_date": "2024-09-12"
            }
        ]
    },

    {
        "id": 10,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726559265/image_7-removebg-preview_yzhicn_msamuy_1_-removebg-preview_mcfold.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726560390/aaf25481a8ff059572d33a7ae6305c98.jpg_720x720q80-removebg-preview_hcxa6d.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726559292/Frame_32_yzi1mo_1_-removebg-preview_unp3sf.png"
        ],
        "product_title": "Summer Vibes T-Shirt",
        "product_price": 150.0,
        "product_discount_price": 180.0,
        "product_rating": 4.7,
        "product_discount_percent": 20,
        "product_description": "Lightweight and breathable t-shirt ideal for hot summer days. Made from premium cotton with a relaxed fit and vibrant prints.",
        "product_size": ["small", "medium", "large", "x-large", "xx-large"],
        "product_review": [
            {
                "author": "Sophia Johnson",
                "description": "The perfect t-shirt for summer! Soft and the colors are vibrant.",
                "posted_date": "2024-09-02"
            },
            {
                "author": "James Smith",
                "description": "Nice shirt but it shrank a bit after the first wash.",
                "posted_date": "2024-09-04"
            },
            {
                "author": "Ava Brown",
                "description": "Love the design and fit. Very comfortable for hot days.",
                "posted_date": "2024-09-06"
            },
            {
                "author": "Ethan Davis",
                "description": "Great shirt, though the sizing is slightly off. Ordered a size up.",
                "posted_date": "2024-09-08"
            },
            {
                "author": "Mia Wilson",
                "description": "Soft material and cool print. Perfect for casual outings.",
                "posted_date": "2024-09-10"
            },
            {
                "author": "Lucas Martinez",
                "description": "Good quality but delivery was delayed.",
                "posted_date": "2024-09-12"
            }
        ]
    },

    {
        "id": 11,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726559688/images__8_-removebg-preview_vkhssv.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726559326/images_7_nj76rm_1_-removebg-preview_zuwoyo.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726561315/download_3_s30m7p_1_-removebg-preview_se7cah.png"
        ],
        "product_title": "Classic Leather Jacket",
        "product_price": 350.0,
        "product_discount_price": 400.0,
        "product_rating": 4.8,
        "product_discount_percent": 12.5,
        "product_description": "Timeless leather jacket made from genuine leather. Features a stylish design with multiple pockets and a sleek finish.",
        "product_size": ["small", "medium", "large", "x-large"],
        "product_review": [
            {
                "author": "John Doe",
                "description": "Absolutely love this jacket. Quality leather and great fit.",
                "posted_date": "2024-09-03"
            },
            {
                "author": "Emma Brown",
                "description": "The leather is top-notch, but the jacket is a bit stiff at first.",
                "posted_date": "2024-09-06"
            },
            {
                "author": "Michael Smith",
                "description": "Stylish and durable. Worth every penny.",
                "posted_date": "2024-09-08"
            },
            {
                "author": "Sophia Lee",
                "description": "Great quality but the sizing runs a bit small.",
                "posted_date": "2024-09-10"
            },
            {
                "author": "Liam Johnson",
                "description": "Nice jacket overall, but it took longer to arrive than expected.",
                "posted_date": "2024-09-12"
            }
        ]
    },

    {
        "id": 12,
        "product_images": [
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726561153/0a2031911e6a6172d7aa00f0d655c1d3.jpg_720x720q80-removebg-preview_um91rc.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726561153/0a2031911e6a6172d7aa00f0d655c1d3.jpg_720x720q80-removebg-preview_um91rc.png",
            "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726561661/download__6_-removebg-preview_d07ouo.png"
        ],
        "product_title": "Vintage Denim Jeans",
        "product_price": 85.0,
        "product_discount_price": 100.0,
        "product_rating": 4.6,
        "product_discount_percent": 15,
        "product_description": "Classic vintage-style denim jeans with a relaxed fit and distressed detailing. Made from durable cotton with a touch of stretch.",
        "product_size": ["28", "30", "32", "34", "36"],
        "product_review": [
            {
                "author": "Mia Williams",
                "description": "Love the vintage look and feel. Very comfortable to wear.",
                "posted_date": "2024-09-01"
            },
            {
                "author": "Lucas Johnson",
                "description": "Great jeans, but the fit was a little snug around the thighs.",
                "posted_date": "2024-09-03"
            },
            {
                "author": "Olivia Martinez",
                "description": "Perfect for casual wear. The quality of the denim is excellent.",
                "posted_date": "2024-09-05"
            },
            {
                "author": "Noah Lee",
                "description": "Nice jeans but the color faded slightly after washing.",
                "posted_date": "2024-09-07"
            },
            {
                "author": "Sophia Davis",
                "description": "Good value for the price. The distressed details are stylish.",
                "posted_date": "2024-09-10"
            }
        ]
    }
];
const page = () => {



    const product = products.find((pro) => pro.id === +3);
    const {
        product_title,
        product_price,
        product_images,
        product_discount_price,
        product_rating,
        product_discount_percent,
        product_review,
      } = product;

    return (
        <div className="container mx-auto md:px-10 my-12">


            <div className="grid grid-cols-1 lg:grid-cols-9 gap-5  ">
                <div className="space-y-4 *:w-full *:h-[142px] ">
                    <Image alt='' height={200} width={200} className="bg-[#F0EEED] rounded-xl" src={product_images[0]} />
                    <Image alt='' height={200} width={200} className="bg-[#F0EEED] rounded-xl" src={product_images[1]} />
                    <Image alt='' height={200} width={200} className="bg-[#F0EEED] rounded-xl" src={product_images[2]} />
                    {/* <Image alt='' height={200} width={200} src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726511359/Frame_33_yevjec.png" /> */}
                </div>

                <div className="col-span-3 bg-[#F0EEED] rounded-xl flex items-center justify-center">
                    <Image alt='' height={200} width={200} src={product_images[0]} />
                </div>

                <div className="col-span-5 ml-4">
                    <h2 className="text-5xl font-bold mb-2">{product_title}</h2>
                    <div className="rating rating-sm">
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked
                        />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                        />
                    </div>
                    <span className="ml-2">{product_rating}/5</span>
                    <h2 className="text-2xl space-x-3 font-bold my-2">
                        {product_price}
                        <span className="line-through ml-1 text-[#0000004D]">
                            ${product_discount_price}
                        </span>
                        <span className="bg-[#FF33331A] rounded-full px-2 text-[16px]">
                            -{product_discount_percent}%
                        </span>
                    </h2>

                    <p>
                        This graphic t-shirt which is perfect for any occasion. Crafted from
                        a soft and breathable fabric, it offers superior comfort and style.
                    </p>

                    <div className=" border-y p-3 my-4 pl-0">
                        <p className="mb-3">Select Colors</p>
                        <div className="flex gap-2">
                            <FaCircleCheck className="text-[27px]" />
                            <p className="bg-[#314F4A] rounded-full h-7 w-7"></p>
                            <p className="bg-[#314F4A] rounded-full h-7 w-7"></p>
                        </div>
                    </div>

                    <div className="*:mr-3 border-b  px-3 pb-4 my-2 pl-0">
                        <h1 className="mb-3">Choose Size</h1>
                        <span className="bg-[#FF33331A] rounded-full px-3 py-1 text-[16px]">
                            Small
                        </span>
                        <span className="bg-[#FF33331A] rounded-full px-3 py-1 text-[16px]">
                            Medium
                        </span>
                        <span className="bg-[#000000] text-white rounded-full px-3 py-1 text-[16px]">
                            Large
                        </span>
                        <span className="bg-[#FF33331A] rounded-full px-3 py-1 text-[16px]">
                            X-Large
                        </span>
                    </div>

                    <div className=" p-4 my-3 pl-0 *:mr-3">
                        <span className="bg-[#FF33331A] font-bold rounded-full px-3 py-1 text-[16px]">
                            - <span className="mx-7">1</span>+
                        </span>
                        <button className="bg-[#000000] text-white rounded-full px-32 py-1 text-[16px]">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* revew and rating */}
            <div>
                <div className=" text-xl font-medium my-10 border-b pb-2 text-center grid col-span-1 md:grid-cols-2 lg:grid-cols-3">
                    <h2>Product Details</h2>
                    <h2>Rating & Reviews</h2>
                    <h2>FAQs</h2>
                </div>

                <div className="flex justify-between items-center">
                    <h2>
                        <span className="text-[24px] font-bold mr-1">All Reviews</span> (
                        {product_review.length})
                    </h2>
                    <div className="flex items-center">
                        <h2>
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <details className="z-30">
                                        <summary>Shope</summary>
                                        <ul>
                                            <li>
                                                <a>t-Shirt</a>
                                            </li>
                                            <li>
                                                <a>Shirts</a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </h2>
                        <button className="bg-[#000000] text-white rounded-full px-5 py-1 text-[16px]">
                            Write a Review
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {product_review.map((review, index) => (
                        <ProductReview key={index} review={review}></ProductReview>
                    ))}
                </div>

                <div className="text-center my-6">
                    <button className="border py-2 px-6 rounded-full shadow-sm ">
                        Load More Reviews
                    </button>
                </div>
            </div>

            {/* You might also like section */}

            <div className="my-16">
                <h2 className="text-center text-5xl font-bold">YOU MIGHT ALSO LIKE</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 lg:px-0">
                    {products?.slice(5, 9).map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;