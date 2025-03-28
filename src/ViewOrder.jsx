import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewOrder() {
  let params = useParams();
  let [user, setUser] = useState({});
  let getData = async () => {
    try {
      const userResp = await axios.get(
        `https://test-back-seven.vercel.app/order/${params.id}`,
       
      );
      setUser(userResp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return <div className="container">
    <div className="row">
        <div className="col-lg-12 m-5">
            <h1 className="text-info ">Name : {user.name}</h1>
            <br/>
            <h2 className="text-info">Price : {user.price}</h2>
        </div>
    </div>
  </div>;
}

export default ViewOrder;
