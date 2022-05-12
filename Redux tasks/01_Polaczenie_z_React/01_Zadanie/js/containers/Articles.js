// export default connect()(Articles);
import Articles from "../components/Articles";
import { connect } from "react-redux";
import { addArticle } from "../redux/actions";

const mapStateToProps = ({ users, articles }) => ({
    users,
    articles,
});

const mapDispatchToProps = (dispatch) => ({
    onAdd: (article) => dispatch(addArticle(article)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
