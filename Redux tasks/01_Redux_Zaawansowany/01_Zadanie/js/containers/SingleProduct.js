import { connect } from "react-redux";
import SingleProduct from "../components/Recipes/SingleProduct";

const mapState = ({ products }, ownProps) => {
    const id = +ownProps.match.params.id;
    return {
        id: id,
        index: products.findIndex((el) => el.id === id),
        number: id,
        products,
    };
};

const mapDispatch = (dispatch, ownProps) => ({
    onChange: () => {},
    onClose: () => {
        ownProps.history.push("/");
    },
});

export default connect(mapState, mapDispatch)(SingleProduct);
// id, index, number, onChange, onClose
