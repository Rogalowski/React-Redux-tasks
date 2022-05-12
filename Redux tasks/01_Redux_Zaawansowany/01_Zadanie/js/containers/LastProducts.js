import LastProducts from "../components/Home/LastProducts";
import { connect } from "react-redux";

const mapState = ({ products }) => ({ products });

export default connect(mapState)(LastProducts);
