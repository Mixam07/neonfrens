import { compose } from "redux";
import { connect } from 'react-redux';
import Home from "./Home";

const mapStateToProps = (state) => ({
    type: state.settingsReducer.type,
    socialNetworks: state.settingsReducer.socialNetworks
})

export default compose(
    connect(mapStateToProps, {}),
)(Home)