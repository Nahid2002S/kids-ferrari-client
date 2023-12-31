import React, { useEffect, useState } from 'react';
import SingleCatagory from '../singlecatagory/SingleCatagory';

const ShopByCatagory = () => {

  const [toyCatagory, setToyCatagory] = useState([]);
  const [activeTab, setActiveTab] = useState("Car");

  useEffect(()=>{
      fetch('https://assignment-11-server-nahid2002s.vercel.app/toy')
      .then(res => res.json())
      .then(data => {
        setToyCatagory(data)
      })
  },[activeTab]);

  const CarCatagory = toyCatagory?.filter(toy => toy.catagory === "Car");
  const TruckCatagory = toyCatagory?.filter(toy => toy.catagory === "Truck");
  const BusCatagory = toyCatagory?.filter(toy => toy.catagory === "Bus");

  const handleCarCatagory = () =>{
    setActiveTab("Car")
  }

  const handleTruckCatagory = () =>{
    setActiveTab("Truck")
  }
  const handleBusCatagory = () =>{
    setActiveTab("Bus")
  }

    return (
        <div className='lg:px-12 px-2 mb-6 mt-12'>
            <h1 className='text-3xl font-extrabold text-center'>Shop By Catagory</h1>
            <div>
            <div className="tabs flex justify-center m-4">
            <a onClick={handleCarCatagory} className={`tab tab-lifted ${activeTab === "Car" ? 'tab-active' : ""}`}>Car</a> 
            <a onClick={handleTruckCatagory} className={`tab tab-lifted ${activeTab === "Truck" ? 'tab-active' : ""}`}>Truck</a> 
            <a onClick={handleBusCatagory} className={`tab tab-lifted ${activeTab === "Bus" ? 'tab-active' : ""}`}>Bus</a>
           </div>
           <div className='lg:grid grid-cols-3 gap-4'>
           {
              activeTab === "Car" ? CarCatagory.map(toys => <SingleCatagory toys={toys} key={toys._id}></SingleCatagory>) : "" || activeTab === "Truck" ? TruckCatagory.map(toys => <SingleCatagory toys={toys} key={toys._id}></SingleCatagory>) : "" || activeTab === "Bus" ? BusCatagory.map(toys => <SingleCatagory toys={toys} key={toys._id}></SingleCatagory>) : ""
           }
           </div>
          </div>
      <div>

   </div>
</div>
    );
};

export default ShopByCatagory;