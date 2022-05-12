import { connect } from "react-redux";
import AddRecipe from "../components/Recipes/Add";

const mapDispatch = (dispatch, ownProps) => ({
    add: (product) => console.log(product),
});

export default connect(null, mapDispatch)(AddRecipe);
