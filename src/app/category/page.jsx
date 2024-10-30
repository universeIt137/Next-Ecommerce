"use client"
import React from 'react';
import Swal from 'sweetalert2';
import { AiTwotoneControl } from "react-icons/ai";
import { FaAngleRight, FaAngleUp } from "react-icons/fa6";
import Image from 'next/image';

const data = [
  {
    "id": 1,
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726513893/image_8_mbv2pr.png",
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
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726501600/image_9-removebg-preview_wziy6b_elaqg0.png",

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
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726501551/image_8__1_-removebg-preview_zv14lr_ajpz8w.png",

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
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726514840/image_10_ukjhnv.png",

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
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726515278/image_7_1_oeq9uh.png",

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
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726518699/71pqrVLTbKL._US500_-removebg-preview_qjuy9q.png",

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
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726516344/image_9_v1ihcs.png",

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
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726516948/weekend-mode-on_cswzbd.jpg",

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
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726562682/blue-300x300-removebg-preview_cjrxvu.png",

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
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726559265/image_7-removebg-preview_yzhicn_msamuy_1_-removebg-preview_mcfold.png",

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
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726559688/images__8_-removebg-preview_vkhssv.png",

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
    "product_images": "https://res.cloudinary.com/dvp64j4a3/image/upload/v1726561153/0a2031911e6a6172d7aa00f0d655c1d3.jpg_720x720q80-removebg-preview_um91rc.png",

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
]

const category = () => {
    
    return (
        <div className="container mx-auto px-3 lg:px-0">
      <div className="breadcrumbs text-sm px-5 py-5">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Casual</a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5 h-max justify-center lg:justify-start">
        {/* leftSide */}
        <div className="col-span-1 hidden lg:block lg:col-span-4 border-2 border-[#F0EEED] rounded-xl px-8 py-5 space-y-4">
          {/* filters */}
          <div className="text-3xl flex items-center justify-between ">
            <h2 className="font-bold">Filters</h2>
            <AiTwotoneControl />
          </div>
          <hr />
          <div className="text-xl opacity-80 space-y-2">
            <div className="flex justify-between items-center">
              <h2>T-shirts</h2>
              <FaAngleRight />
            </div>
            <div className="flex justify-between items-center">
              <h2>Shorts</h2>
              <FaAngleRight />
            </div>
            <div className="flex justify-between items-center">
              <h2>Shirts</h2>
              <FaAngleRight />
            </div>
            <div className="flex justify-between items-center">
              <h2>Hoodie</h2>
              <FaAngleRight />
            </div>
            <div className="flex justify-between items-center">
              <h2>Jeans</h2>
              <FaAngleRight />
            </div>
          </div>
          <hr />
          {/* price */}
          <div className="">
            <div className="text-xl flex justify-between items-center">
              <h2 className="text-3xl font-bold">Price</h2>
              <FaAngleUp />
            </div>
            <input type="range" name="" id="" className="w-full mt-3" />
          </div>
          <hr />

          {/* color */}
          <div>
            <div className="text-xl flex justify-between items-center">
              <h2 className="text-3xl font-bold">Color</h2>
              <FaAngleUp />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <input
                type="color"
                name=""
                id=""
                value={`#00C12B`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#EF4444`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#F5DD06`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#F57906`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#06CAF5`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#063AF5`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#7D06F5`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#F506A4`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#FFFFFF`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#000000`}
                className=" "
              />
            </div>
          </div>
          <hr />

          {/* size */}
          <div>
            <div className="text-xl flex justify-between items-center">
              <h2 className="text-3xl font-bold">Price</h2>
              <FaAngleUp />
            </div>
            <div className="flex  flex-wrap gap-3 mt-5 ">
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                XX-Small
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                X-Small
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                Small
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                Medium
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                Large
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                X-Large
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                Xx-Large
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                3X-Large
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                4X-Large
              </button>
            </div>
          </div>
          <hr />

          {/* dress */}
          <div>
            <div className="text-xl flex justify-between items-center">
              <h2 className="text-3xl font-bold">Dress Style</h2>
              <FaAngleUp />
            </div>

            <div className="text-xl opacity-80 space-y-2 mt-5">
              <div className="flex justify-between items-center">
                <h2>Causal</h2>
                <FaAngleRight />
              </div>
              <div className="flex justify-between items-center">
                <h2>Formal</h2>
                <FaAngleRight />
              </div>
              <div className="flex justify-between items-center">
                <h2>Party</h2>
                <FaAngleRight />
              </div>
              <div className="flex justify-between items-center">
                <h2>Gym</h2>
                <FaAngleRight />
              </div>
            </div>

            <button className="bg-black text-white w-full py-2.5 mt-3 rounded-[40px] text-2xl">
              Apply Filter
            </button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Causal</h2>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort By
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Price</a>
                </li>
                <li>
                  <a>Rating</a>
                </li>
              </ul>
            </div>
          </div>
          <hr  className="my-3"/>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-5">
                {
                  data.map(product => (
                    <div key={product.id}>
                        <div className="bg-[#F0EEED] rounded-xl p-8 lg:p-0">
                            <Image height={350} width={350} src={product.product_images} className="rounded-xl mx-auto h-[300px]" alt="" />
                        </div>
                        <h2 className="text-xl font-bold mt-2">{product.product_title}</h2>
                        <div className="rating rating-md">
                             
                          <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                          <p className="text-xl">{product.product_rating}/5</p>
                        </div>
                        <div className="flex gap-5 items-center">
                             <h2 className="text-xl font-bold">${product.product_price}</h2>
                             <h2 className="text-xl font-bold opacity-70 line-through">${product.product_discount_price}</h2>
                             <button className=" py-2.5 px-4 bg-[#FFEBEB] text-red-500 mt-3 rounded-[40px] ">-{product.product_discount_percent}%</button>
                        </div>

                    </div>
                  ))
                }
                 
            </div>
        </div>
      </div>
    </div>
    );
};

export default category;