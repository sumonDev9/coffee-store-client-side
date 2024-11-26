

const UpdateCoffee = () => {


const handlesubmit = e => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    console.log(name, quantity, supplier, taste, category, details, photo)
}

    return (
        <div className="w-11/12 mx-auto p-10">
            <h2 className="text-center text-[#374151] font-extrabold text-4xl">update coffee</h2>
            <div className="max-w-3xl mx-auto p-5">
            <form onSubmit={handlesubmit} className="space-y-5">
                {/* form name and quantity row */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Cooffee Name" className="input w-full input-bordered"  />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input w-full input-bordered"  />
                    </div>
                </div>
                {/* form Supplier and Taste row */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Supplier" className="input w-full input-bordered"  />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="Taste" className="input w-full input-bordered" />
                    </div>
                </div>
                {/* form Category and Details row */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Details" className="input w-full input-bordered" />
                    </div>
                 </div>
                  {/* photo url */}
                  <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input w-full input-bordered" />
                  </div>
                {/* button */}
                <input type="submit" className="btn btn-block bg-[#D2B48C] text-2xl text-[#331A15]" value="Add Coffee" />
            </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;