import React, { useEffect } from "react";
import Logout from "./logout";
import api from "./Services/Api"

const Home = () => {

  // useEffect(() => {
  //     api.get("AdminDetails")
  // },[])
  return (
    <div>
     <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam adipisci
      doloremque aliquid similique repudiandae odit maxime non, amet dicta
      commodi quas culpa, dolores error voluptatum aspernatur pariatur!
      Doloribus assumenda animi minus qui! Molestiae consequuntur, tempora qui
      illum sunt asperiores rerum eligendi deleniti dicta recusandae quas, totam
      nobis vero porro vitae reiciendis nostrum quae voluptatem est odio nam
      minus. Ipsum necessitatibus adipisci veniam. Provident labore totam
      accusamus eos iure exercitationem odio id, inventore sit quia dolor nisi
      assumenda non placeat nemo ab voluptas quasi officiis perferendis! Fuga
      iure temporibus eum, repellendus rerum molestias nesciunt earum corrupti
      sed? Praesentium ut fugiat illo.
     </p>
    <Logout/>
    <button>get</button>
    </div>
  );
};

export default Home;
