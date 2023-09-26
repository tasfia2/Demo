import ServiceCards from "../Shared/ServiceCards";

function Services() {
  return (
    <div className="bg-[#FFFFFF] flex flex-wrap justify-center gap-4 p-4 py-10">
        <h1 className="text-[34px] font-bold mt-10"> <span className="text-[#111430]">Our Awesome</span> <span className="text-[#F63E7B]">Services</span> </h1>
        <ServiceCards></ServiceCards>

        <button className="bg-[#F63E7B] text-[#FFFFFF] px-4 py-2 rounded text-sm font-semibold hover:bg-pink-300 transition duration-300 ease-in-out">
           Explore more
          </button>

    </div>
  );
}

export default Services;
