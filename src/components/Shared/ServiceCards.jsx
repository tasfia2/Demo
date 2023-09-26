
function ServiceCards() {
  return (
    <div className="bg-[#FFFFFF] flex flex-wrap justify-center gap-8 p-10">
      <div className="card w-[320px] hover:bg-[#FFFFFF] hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
        <figure className="px-10 pt-10">
          <img
            src="src/assets/icons/Group 1373.png"
            alt=""
            className="w-[72px] h-[72px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#111430]">Anti Age Face Treatment</h2>
          <h3 className="text-[#F63E7B]">$199</h3>
          <p className="text-[#000000B2] text-sm">
            We craft stunning and amazing <br /> web UI, using a well-drafted UX <br /> to fit your product.
          </p>
        </div>
      </div>

      <div className="card w-[320px] hover:bg-[#FFFFFF] hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
        <figure className="px-10 pt-10">
          <img
            src="src/assets/icons/Group 1372.png"
            alt=""
            className="w-[72px] h-[72px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#111430]">Hair Color & Styling</h2>
          <h3 className="text-[#F63E7B]">$99</h3>
          <p className="text-[#000000B2] text-sm">
            Amazing flyers, social media <br /> posts and brand representations <br /> that would make your brand <br /> stand out.
          </p>
        </div>
      </div>

      <div className="card w-[320px] hover:bg-[#FFFFFF] hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
        <figure className="px-10 pt-10">
          <img
            src="src/assets/icons/Group 1374.png"
            alt=""
            className="w-[72px] h-[72px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#111430]">Skin Care Treatment</h2>
          <h3 className="text-[#F63E7B]">$299</h3>
          <p className="text-[#000000B2] text-sm">
            With well-written codes, we <br /> build amazing apps for all <br /> platforms, mobile and web <br /> apps in general.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCards;
