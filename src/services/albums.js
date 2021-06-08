import albumJson from './albums.json';
import { mockFetchHelper } from './mock_api';

const getAll = async () => {
    const data = await mockFetchHelper(albumJson);
    return data;
};

export default { getAll };