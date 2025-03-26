import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditOrder() {
  const navigate = useNavigate();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
    },
    validate: (values) => {
      let error = {};

      if (values.name == "") {
        error.name = "Please Enter the name";
      }

      if (values.price == "") {
        error.price = "Please enter the price";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
      
        await axios.put(`https://food-backend-o25i.onrender.com/order/${params.id}`, values);
        navigate("/user");
      } catch (error) {
        console.log(error);
      }
    },
  });

  let getData = async () => {
    try {
      const userResp = await axios.get(
        `https://food-backend-o25i.onrender.com/order/${params.id}`
      );
      formik.setValues(userResp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row m-5">
          <h1 className="text-primary mb-3">Edit Order</h1>
          <div className="col-lg-12">
            <label className="mb-2">Food Name</label>
            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              type="text"
              className="form-control w-50"
            />
            <span>{formik.errors.name}</span>
          </div>
          <div className="col-lg-12">
            <label className="mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              className="form-control w-50"
            />
            <span>{formik.errors.price}</span>
          </div>
          <div className="col-lg-6 mt-4">
            <input type="submit" value={"Update"} className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditOrder;
