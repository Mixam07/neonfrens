import { getSettings } from "../../api/api";

const SET_SETTINGS = "SET-SETTINGS"

const initialState = {
    type: 1,
    socialNetworks: {
        opensea: {
            isActive: false,
            href: "#"
        },
        twitter: {
            isActive: false,
            href: "#"
        },
        discord: {
            isActive: false,
            href: "#"
        },
        etherscan: {
            isActive: false,
            href: "#"
        }
    },
    walletList: {
        OGlist: [],
        Frenslist: []
    },
    times: {
        OGlist: "April X @ X:XX-X:XX pm UTC.",
        Frenslist: "April X @ X:XX-X:XX pm UTC.",
        Publick: "April X @ X:XX pm UTC. Live until minted out."
    },
    typeMintPortal: "OG LIST",//OG LIST,PUBLICK
    costInOpenType: 0.01
}

const settingsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SETTINGS:
            return {
                ...action.settings,
                walletList: {
                    OGlist: action.settings.walletList.OGlist.split(" "),
                    Frenslist: action.settings.walletList.Frenslist.split(" ")
                }
            }
        default:
            return state;
    }
}

export const setSettings = (settings) => ({type: SET_SETTINGS, settings});

export const getSettingsThunkCreator = () => async (dispatch) => {
    dispatch(setSettings(await getSettings()))
}

export default settingsReducer;