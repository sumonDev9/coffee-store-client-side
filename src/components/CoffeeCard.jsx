import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
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
            // delete 
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
              })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        })
                        // ui theke delete hoye jabe ei code ta likhle 
                        const remaining = coffees.filter(cof => cof._id !== id);
                        setCoffees(remaining);
                    }
                })
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
                    <Link to={`updateCoffee/${_id}`}>
                    <button className="btn join-item bg-[#3C393B]"><FaPen className="text-white text-xl" /></button>
                    </Link>
                    <button 
                    onClick={() => handleDelete(_id)}
                    className="btn join-item bg-[#EA4744]"><MdDelete className="text-white text-xl" /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;