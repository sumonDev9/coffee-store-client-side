import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log('delete', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });

                console.log('delete confirmed')
            }
          });
          
    }
    return (
        <div className="card bg-[#F5F4F1] card-side">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full items-center pr-10">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="join join-vertical gap-3">
                    <button className="btn join-item bg-[#D2B48C]"><FaEye className="text-white text-xl" /></button>
                    <button className="btn join-item bg-[#3C393B]"><FaPen className="text-white text-xl" /></button>
                    <button 
                    onClick={() => handleDelete(_id)}
                    className="btn join-item bg-[#EA4744]"><MdDelete className="text-white text-xl" /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;