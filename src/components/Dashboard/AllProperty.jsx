import React from 'react';
import Container from '../Shared/Container';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropertyCard from '../Card/PropertyCard';
const AllProperty = ({propertyType,status,handlefilter,handleStatus,handleByNew,handleByOld,item}) => {
    return (
        <div>
            <Container>
            <div className="mt-10">
                <h3 className="text-[20px] font-semibold">all Properties</h3>
                <Tabs>
                    <TabList className=" flex gap-6  items-center justify-between  flex-wrap text-xl py-6 border-b ">
                        <div className='flex gap-6  flex-wrap items-center'>
                            {propertyType?.map((item, idx) => <Tab key={idx} onClick={() => handlefilter(item)} className=' text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 capitalize'>{item}</Tab>)}
                        </div>
                        <div className='flex  items-center gap-4'>
                            <div className='flex  items-center gap-4'>
                                <p>Status:</p>
                                <select name="" id="" onChange={(e) => handleStatus(e.target.value)}className="text-[#737373] text-[16px] font-normal border border-[#e8e8e8] py-1 px-5">
                                    {status?.map((item, idx) => <option  key={idx} value={item}>{item}</option>)}
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
                            {item?.map((property, index) => <PropertyCard key={index} property={property}></PropertyCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel className='mt-[50px]'>
                        <div className="flex flex-wrap gap-6">
                            {item?.map((property, index) => <PropertyCard key={index} property={property}></PropertyCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel className='mt-[50px]'>
                        <div className="flex flex-wrap gap-6">
                            {item?.map((property, index) => <PropertyCard key={index} property={property}></PropertyCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel className='mt-[50px]'>
                        <div className="flex flex-wrap gap-6">
                            {item?.map((property, index) => <PropertyCard key={index} property={property}></PropertyCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel className='mt-[50px]'>
                        <div className="flex flex-wrap gap-6">
                            {item?.map((property, index) => <PropertyCard key={index} property={property}></PropertyCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel className='mt-[50px]'>
                        <div className="flex flex-wrap gap-6">
                            {item?.map((property, index) => <PropertyCard key={index} property={property}></PropertyCard>)}
                        </div>
                    </TabPanel>


                </Tabs>



            </div>
            </Container>
        </div>
    );
};

export default AllProperty;