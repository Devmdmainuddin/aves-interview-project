import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
const AllProperty = ({ propertyType, status, handlefilter, deleteProperty, handleStatus, handleByNew, handleByOld, item }) => {
    return (
        <div className="mt-10">

            <h2 className='text-[22px]  font-josefin font-semibold  capitalize p-3 border-l-2 border-[#0B8632]'>all Properties</h2>
            <Tabs>
                <TabList className=" flex gap-6  items-center justify-between  flex-wrap text-xl py-6 border-b ">
                    <div className='flex gap-6  flex-wrap items-center'>
                        {propertyType?.map((item, idx) => <Tab key={idx} onClick={() => handlefilter(item)} className=' text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 capitalize'>{item}</Tab>)}
                    </div>
                    <div className='flex  items-center gap-4'>
                        <div className='flex  items-center gap-4'>
                            <p>Status:</p>
                            <select name="" id="" onChange={(e) => handleStatus(e.target.value)} className="text-[#737373] text-[16px] font-normal border border-[#e8e8e8] py-1 px-5">
                                {status?.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
                            </select>
                        </div>
                        <div className='flex  items-center gap-4'>
                            <p>Sort by:</p>
                            <select
                                onChange={(e) => {
                                    // Log the selected value to check if the event is firing
                                    if (e.target.value === "new") {
                                        handleByNew();
                                    } else if (e.target.value === "old") {
                                        handleByOld();
                                    }
                                }}
                                name="sort"
                                id="sort"
                                className="text-[#737373] text-[16px] font-normal border border-[#e8e8e8] py-1 px-5"
                            >
                                <option value="new">New</option>
                                <option value="old">Old</option>
                            </select>
                        </div>
                    </div>


                </TabList>

                <TabPanel className='mt-[50px]'>
                    <div className="flex flex-wrap gap-6">
                        {item?.map((property, index) =>
                            // <PropertyCard key={index} property={property} deleteProperty={deleteProperty}></PropertyCard>
                            <div className="w-[362px] rounded-lg shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
                                <div className="rounded-lg w-full h-72  relative overflow-hidden flex justify-center items-center">
                                    <span className="z-10 absolute top-3 left-3 py-2 px-3 text-white bg-orange-500 rounded-lg capitalize"> {property.status}</span>
                                    <div className="w-full h-[242px]">
                                        <img
                                            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 "
                                            src={property.image}
                                            alt='alt'
                                        />
                                    </div>

                                </div>
                                <div className="text py-3 px-4 ">
                                    <h3 className="text-primery text-2xl font-semibold hover:text-hover capitalize transition-all duration-300">
                                        {property.title}
                                    </h3>
                                    <p className="text-primery text-lg font-semibold my-2 capitalize">{property.location}</p>
                                    <p className="text-primery text-lg font-semibold text-[#669900]">$ {property.price}</p>
                                    <div className="flex items-center justify-between mt-4 mb-2">
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">type</h5>
                                            <h3>{property.status}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">Date</h5>
                                            <h3>{property.createAt}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">area</h5>
                                            <h3 className="text-[16px] font-semibold capitalize">{property.area}</h3>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <button onClick={() => deleteProperty(index)} className="w-full bg-[#6df0d6] py-2">Delete</button>
                                        <Link > <button className="w-full bg-[#6df0d6] py-2">show details</button></Link>
                                    </div>



                                </div>
                            </div>
                        )}
                    </div>
                </TabPanel>
                <TabPanel className='mt-[50px]'>
                    <div className="flex flex-wrap gap-6">
                        {item?.map((property, index) =>
                            // <PropertyCard key={index} property={property} deleteProperty={deleteProperty}></PropertyCard>
                            <div className="w-[362px] rounded-lg shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
                                <div className="rounded-lg w-full h-72  relative overflow-hidden flex justify-center items-center">
                                    <span className="z-10 absolute top-3 left-3 py-2 px-3 text-white bg-orange-500 rounded-lg capitalize"> {property.status}</span>
                                    <div className="w-full h-[242px]">
                                        <img
                                            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 "
                                            src={property.image}
                                            alt='alt'
                                        />
                                    </div>

                                </div>
                                <div className="text py-3 px-4 ">
                                    <h3 className="text-primery text-2xl font-semibold hover:text-hover capitalize transition-all duration-300">
                                        {property.title}
                                    </h3>
                                    <p className="text-primery text-lg font-semibold my-2 capitalize">{property.location}</p>
                                    <p className="text-primery text-lg font-semibold text-[#669900]">$ {property.price}</p>
                                    <div className="flex items-center justify-between mt-4 mb-2">
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">type</h5>
                                            <h3>{property.status}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">Date</h5>
                                            <h3>{property.createAt}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">area</h5>
                                            <h3 className="text-[16px] font-semibold capitalize">{property.area}</h3>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <button onClick={() => deleteProperty(index)} className="w-full bg-[#6df0d6] py-2">Delete</button>
                                        <Link > <button className="w-full bg-[#6df0d6] py-2">show details</button></Link>
                                    </div>



                                </div>
                            </div>
                        )}
                    </div>
                </TabPanel>
                <TabPanel className='mt-[50px]'>
                    <div className="flex flex-wrap gap-6">
                        {item?.map((property, index) =>
                            // <PropertyCard key={index} property={property} deleteProperty={deleteProperty}></PropertyCard>
                            <div className="w-[362px] rounded-lg shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
                                <div className="rounded-lg w-full h-72  relative overflow-hidden flex justify-center items-center">
                                    <span className="z-10 absolute top-3 left-3 py-2 px-3 text-white bg-orange-500 rounded-lg capitalize"> {property.status}</span>
                                    <div className="w-full h-[242px]">
                                        <img
                                            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 "
                                            src={property.image}
                                            alt='alt'
                                        />
                                    </div>

                                </div>
                                <div className="text py-3 px-4 ">
                                    <h3 className="text-primery text-2xl font-semibold hover:text-hover capitalize transition-all duration-300">
                                        {property.title}
                                    </h3>
                                    <p className="text-primery text-lg font-semibold my-2 capitalize">{property.location}</p>
                                    <p className="text-primery text-lg font-semibold text-[#669900]">$ {property.price}</p>
                                    <div className="flex items-center justify-between mt-4 mb-2">
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">type</h5>
                                            <h3>{property.status}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">Date</h5>
                                            <h3>{property.createAt}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">area</h5>
                                            <h3 className="text-[16px] font-semibold capitalize">{property.area}</h3>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <button onClick={() => deleteProperty(index)} className="w-full bg-[#6df0d6] py-2">Delete</button>
                                        <Link > <button className="w-full bg-[#6df0d6] py-2">show details</button></Link>
                                    </div>



                                </div>
                            </div>
                        )}
                    </div>
                </TabPanel>
                <TabPanel className='mt-[50px]'>
                    <div className="flex flex-wrap gap-6">
                        {item?.map((property, index) =>
                            // <PropertyCard key={index} property={property} deleteProperty={deleteProperty}></PropertyCard>
                            <div className="w-[362px] rounded-lg shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
                                <div className="rounded-lg w-full h-72  relative overflow-hidden flex justify-center items-center">
                                    <span className="z-10 absolute top-3 left-3 py-2 px-3 text-white bg-orange-500 rounded-lg capitalize"> {property.status}</span>
                                    <div className="w-full h-[242px]">
                                        <img
                                            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 "
                                            src={property.image}
                                            alt='alt'
                                        />
                                    </div>

                                </div>
                                <div className="text py-3 px-4 ">
                                    <h3 className="text-primery text-2xl font-semibold hover:text-hover capitalize transition-all duration-300">
                                        {property.title}
                                    </h3>
                                    <p className="text-primery text-lg font-semibold my-2 capitalize">{property.location}</p>
                                    <p className="text-primery text-lg font-semibold text-[#669900]">$ {property.price}</p>
                                    <div className="flex items-center justify-between mt-4 mb-2">
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">type</h5>
                                            <h3>{property.status}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">Date</h5>
                                            <h3>{property.createAt}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">area</h5>
                                            <h3 className="text-[16px] font-semibold capitalize">{property.area}</h3>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <button onClick={() => deleteProperty(index)} className="w-full bg-[#6df0d6] py-2">Delete</button>
                                        <Link > <button className="w-full bg-[#6df0d6] py-2">show details</button></Link>
                                    </div>



                                </div>
                            </div>
                        )}
                    </div>
                </TabPanel>
                <TabPanel className='mt-[50px]'>
                    <div className="flex flex-wrap gap-6">
                        {item?.map((property, index) =>
                            // <PropertyCard key={index} index={index} property={property} deleteProperty={deleteProperty}></PropertyCard>
                            <div className="w-[362px] rounded-lg shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
                                <div className="rounded-lg w-full h-72  relative overflow-hidden flex justify-center items-center">
                                    <span className="z-10 absolute top-3 left-3 py-2 px-3 text-white bg-orange-500 rounded-lg capitalize"> {property.status}</span>
                                    <div className="w-full h-[242px]">
                                        <img
                                            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 "
                                            src={property.image}
                                            alt='alt'
                                        />
                                    </div>

                                </div>
                                <div className="text py-3 px-4 ">
                                    <h3 className="text-primery text-2xl font-semibold hover:text-hover capitalize transition-all duration-300">
                                        {property.title}
                                    </h3>
                                    <p className="text-primery text-lg font-semibold my-2 capitalize">{property.location}</p>
                                    <p className="text-primery text-lg font-semibold text-[#669900]">$ {property.price}</p>
                                    <div className="flex items-center justify-between mt-4 mb-2">
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">type</h5>
                                            <h3>{property.status}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">Date</h5>
                                            <h3>{property.createAt}</h3>
                                        </div>
                                        <div>
                                            <h5 className="text-[#999999] text-[13px]">area</h5>
                                            <h3 className="text-[16px] font-semibold capitalize">{property.area}</h3>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <button onClick={() => deleteProperty(index)} className="w-full bg-[#6df0d6] py-2">Delete</button>
                                        <Link > <button className="w-full bg-[#6df0d6] py-2">show details</button></Link>
                                    </div>



                                </div>
                            </div>
                        )}
                    </div>
                </TabPanel>


            </Tabs>



        </div>
    );
};

export default AllProperty;