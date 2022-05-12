import LastRecipes from "../components/Home/LastRecipes";
import { connect } from "react-redux";

const mapState = ({ recipes }) => ({ recipes });

export default connect(mapState)(LastRecipes);
