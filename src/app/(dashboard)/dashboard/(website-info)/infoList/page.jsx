"use client"
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { getApi } from '@/hooks/useFetchData';
import Image from 'next/image';
import React from 'react';
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
const data = [
    {
        id: "1",
        name: "Eranian",
        bkash: "+8801701069706",
        nogod: "+8801821111378",
        rocket: "+8801821111378",
        logo: "https://res.cloudinary.com/deifi77os/image/upload/v1729686549/rlc4nddslbjdqussi54w.jpg", // Replace with the actual logo URL
    },
];



const page = async () => {
    
    const data = await getApi('/web-info');
    console.log(data);
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                    <tr className="text-gray-700 bg-gray-200">
                        <th className="px-4 py-2 text-left border-b">ID</th>
                        <th className="px-4 py-2 text-left border-b">Name</th>
                        <th className="px-4 py-2 text-left border-b">Bkash Number</th>
                        <th className="px-4 py-2 text-left border-b">Nagad Number</th>
                        <th className="px-4 py-2 text-left border-b">Rocket Number</th>
                        <th className="px-4 py-2 text-left border-b">Logo</th>
                        <th className="px-4 py-2 text-left border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) => (
                        <tr key={item.id} className="border-b hover:bg-gray-100">
                            <td className="px-4 py-2">{item.id}</td>
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.bkash}</td>
                            <td className="px-4 py-2">{item.nogod}</td>
                            <td className="px-4 py-2">{item.rocket}</td>
                            <td className="px-4 py-2">
                                <Image width={100} height={100} src={item.logo} alt="Logo" className="w-10 h-10 object-contain" />
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex space-x-2 text-blue-500">
                                    <button aria-label="View">
                                        <FaEye />
                                    </button>
                                    <button aria-label="Edit">
                                        <FaEdit />
                                    </button>
                                    <button aria-label="Delete" className="text-red-500">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default page;