import { compose } from "redux";
import { connect } from 'react-redux';
import App from "./App";
import { getSettingsThunkCreator } from "../../redux/reducers/settings-reducer";
import { useEffect } from "react";

const AppContainer = (props) => {
    useEffect(() => {
        props.getSettingsThunkCreator()
    }, [])

    return <App {...props} />
}

const mapStateToProps = (state) => ({
})

export default compose(
    connect(mapStateToProps, { getSettingsThunkCreator }),
)(AppContainer)