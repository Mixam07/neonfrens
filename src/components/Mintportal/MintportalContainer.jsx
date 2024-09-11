import { compose } from "redux";
import withTypeRedirect from "../HOC/withTypeRedirect";
import Mintportal from "./Mintportal";
import { connect } from 'react-redux';

global.Buffer = global.Buffer || require('buffer').Buffer;


const mapStateToProps = (state) => ({
    socialNetworks: state.settingsReducer.socialNetworks,
    times: state.settingsReducer.times,
    typeMintPortal: state.settingsReducer.typeMintPortal,
    costInOpenType: state.settingsReducer.costInOpenType,
    walletList: state.settingsReducer.walletList
})

export default compose(
    connect(mapStateToProps, {}),
    withTypeRedirect
)(Mintportal)