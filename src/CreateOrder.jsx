import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function CreateOrder() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
    },
    validate: (values) => {
      let error = {};

      if (values.name == "") {
        error.name = "Please Enter the Food name";
      }

      if (values.price == "") {
        error.price = "Please enter the price";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
       
        await axios.post(
          "https://food-backend-taupe.vercel.app/user",
          values,
          
        );
        navigate("/user");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row m-5">
          <h1 className="mb-3 text-primary">Create Order</h1>
          <div className="col-lg-12">
            <label className="mb-2">Food Name</label>
            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              type="text"
              className="form-control w-50"
            />
            <span className="text-danger">{formik.errors.name}</span>
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
            <span className="text-danger">{formik.errors.price}</span>
          </div>
          <div className="col-lg-6 mt-4">
            <input type="submit" value={"Submit"} className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
