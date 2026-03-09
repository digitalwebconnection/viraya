import image1 from "../../assets/rera-649x348-removebg-preview.png"
import image2 from "../../assets/Ahmedabad_Realtors_Association-removebg-preview.png"
import image3 from "../../assets/National_Association_of_Realtors_-_USA-removebg-preview.png"

export default function Affiliations() {
  const affiliations = [
    {
 
      img:image1,
    },
    {
   
      img:image2,
    },
    {
      img:image3,
    },
  ];

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {affiliations.map((item, index) => {

            return (
              <div
                key={index}
               className=" items-center flex justify-center"
              >
    
                  <img src={item.img} alt="" className="  object-cover " />
            
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}