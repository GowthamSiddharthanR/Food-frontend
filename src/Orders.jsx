import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Orders() {
  const [users, setUsers] = useState([]);
  let getData = async () => {
    try {
      const userResp = await axios.get("https://food-backend-o25i.onrender.com/orders");
      setUsers(userResp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let deleteOrder = async (id) => {
    let yesno = confirm("Are you sure do you want to delete this order?");
    if (yesno) {
      await axios.delete(`https://food-backend-o25i.onrender.com/order/${id}`);
      getData();
    }
  };
  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-lg-12">
          <h1 className="text-primary">
            CREATED ORDERS{"   "} <br />
            <Link to={"/user-create"} className="btn btn-info">
              Create Order
            </Link>
          </h1>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th className="text-primary-emphasis" scope="col">
                  Item.No
                </th>
                <th className="text-primary-emphasis" scope="col">
                  ItemName
                </th>
                <th className="text-primary-emphasis" scope="col">
                  Price
                </th>
                <th className="text-primary-emphasis" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.price}</td>
                    <td >
                      <Link to={`/user/${user._id}`} className="btn btn-info">
                        View Order
                      </Link>{" "}
                      <Link to={`/edit/${user._id}`} className="btn btn-info ms-3">
                        Edit Order
                      </Link>{" "}
                      <button
                        onClick={() => {
                          deleteOrder(user._id);
                        }}
                        className="btn btn-danger ms-3"
                      >
                        Delete Order
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
