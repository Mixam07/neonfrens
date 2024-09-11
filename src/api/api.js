import axios from "axios";

export const getSettings = async () => {
    const response = await axios.get(process.env.PUBLIC_URL + '/settings.json');
    
    return response.data
}