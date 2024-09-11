import { compose } from "redux";
import { connect } from 'react-redux';
import Frenslistchecker from "./Frenslistchecker";

const mapStateToProps = (state) => ({
    walletList: state.settingsReducer.walletList
})

export default compose(
    connect(mapStateToProps, {}),
)(Frenslistchecker)