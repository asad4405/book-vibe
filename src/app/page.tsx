'use client';
import { toast } from "react-toastify";

export default function Home() {
    const handleCheckToastfy = () => {
        toast.success("Check Toastify");
    };

    return (
        <div className="p-8 space-y-4">
            <h3 className="text-xl font-bold">Hello Next Js</h3>
            <button 
                onClick={handleCheckToastfy} 
                className="btn btn-primary text-white"
            >
                Click
            </button>
        </div>
    );
}