import albumJson from './albums.json';
import { mockFetchHelper } from './mock_api';

const getAlbums = async () => {
    const data = await mockFetchHelper(albumJson);
    return data['albums'];
};


const serviceFunctions = { getAlbums };

export default serviceFunctions;
