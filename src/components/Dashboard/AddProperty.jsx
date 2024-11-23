
const AddProperty = ({handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <h2 className='text-[22px]   font-josefin font-semibold  capitalize p-3 border-l-2 border-[#0B8632]'>Add a new property</h2>
                <div className="flex gap-6 items-center justify-between mt-[50px] flex-col md:flex-row">
                    <input name='title' type='text' placeholder='property title' className=" w-full py-[13px] px-[11px] border outline-0 mt-2" />
                    <input name='image' type='file' placeholder='property image ' className=" w-full py-[13px] px-[11px] border outline-0 mt-2" />
                </div>
                <div className="flex gap-6 items-center justify-between flex-col md:flex-row">
                    <input name='price' type='number' placeholder='property price ' className=" w-full py-[13px] px-[11px] border outline-0 mt-2" />
                    <input name='area' type='text' placeholder='property area ' className=" w-full py-[13px] px-[11px] border outline-0 mt-2" />
                </div>
                <div className="flex gap-6 items-center justify-between flex-col md:flex-row">
                    <input name='location' type='text' placeholder='property location ' className=" w-full py-[13px] px-[11px] border outline-0 mt-2" />
                    <select name="propertyType" id="" className="w-full py-[13px] px-[11px] border outline-0 mt-2">
                        <option value="">Select Property Type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="commercial">Commercial</option>
                        <option value="land">Land</option>
                        <option value="shop">Shop</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex gap-6 items-center justify-between flex-col md:flex-row">

                    <select name="status" id="" className="w-full py-[13px] px-[11px] border outline-0 mt-2">
                        <option value="">Select Property Status</option>
                        <option value="rented">Rented</option>
                        <option value="sold">Sold</option>
                        <option value="available">Available</option>
                        <option value="under_construction">Under Construction</option>
                        <option value="other">Other</option>
                    </select>
                    <select name="condition" id="" className="w-full py-[13px] px-[11px] border outline-0 mt-2">
                        <option value="">Select Property Condition</option>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                        <option value="renovated">Renovated</option>
                        <option value="other">Other</option>
                    </select>
                </div>



                <input name='description' type='text' placeholder='property description' className=" w-full h-[125px] py-[13px] px-[11px] border outline-0 mt-2" />

                <button type='submit' className="text-white bg-[#0B8632] font-josefin text-[14px] rounded-[3px] border border-[#0B8632] px-[20px] py-[10px] mt-6 uppercase" >submit</button>
            </form>

        </div>
    );
};

export default AddProperty;