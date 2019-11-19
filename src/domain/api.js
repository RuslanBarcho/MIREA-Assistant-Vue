import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://mirea.feed4rz.ru/api',
});

const scheduleApi = {
    getSchedule: async (groupData) => {
        return await axiosInstance.post('/schedule/get', groupData);
    },
    getGroups: async () => {
        return await axiosInstance.post('/group/get/all');
    },
};

export const api = {
    ...scheduleApi,
}