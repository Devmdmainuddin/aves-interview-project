import { Link } from "react-router-dom";

const PropertyCard = ({ property, index, deleteProperty }) => {
    const { title, image, price, location, status, area, createAt } = property;
    console.log(index);
    return (
        <div className="w-[362px] rounded-lg shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
            <div className="rounded-lg w-full h-72  relative overflow-hidden flex justify-center items-center">
                <span className="z-10 absolute top-3 left-3 py-2 px-3 text-white bg-orange-500 rounded-lg capitalize"> {status}</span>
                <div className="w-full h-[242px]">
                    <img
                        className="w-full h-full object-cover hover:scale-110 transition-all duration-500 "
                        src={image}
                        alt='alt'
                    />
                </div>

            </div>
            <div className="text py-3 px-4 ">
                <h3 className="text-primery text-2xl font-semibold hover:text-hover capitalize transition-all duration-300">
                    {title}
                </h3>
                <p className="text-primery text-lg font-semibold my-2 capitalize">{location}</p>
                <p className="text-primery text-lg font-semibold text-[#669900]">$ {price}</p>
                <div className="flex items-center justify-between mt-4 mb-2">
                    <div>
                        <h5 className="text-[#999999] text-[13px]">type</h5>
                        <h3>{status}</h3>
                    </div>
                    <div>
                        <h5 className="text-[#999999] text-[13px]">Date</h5>
                        <h3>{createAt}</h3>
                    </div>
                    <div>
                        <h5 className="text-[#999999] text-[13px]">area</h5>
                        <h3 className="text-[16px] font-semibold capitalize">{area}</h3>
                    </div>
                </div>
                <div className="flex ">
                    <button onClick={() => deleteProperty(index)} className="w-full bg-[#6df0d6] py-2">Delete</button>
                    <Link > <button className="w-full bg-[#6df0d6] py-2">show details</button></Link>
                </div>



            </div>
        </div>
    );
};

export default PropertyCard;