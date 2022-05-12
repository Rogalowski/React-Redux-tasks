import { connect } from "react-redux";
import Add from "../components/Products/Add";
import { addProduct } from "../redux/actions/products";

const mapDispatch = (dispatch, ownProps) => ({
    addNewProduct: (product) => dispatch(addProduct(product, ownProps.history)),
});

export default connect(null, mapDispatch)(Add);
