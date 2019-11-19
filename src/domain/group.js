const groupKey = 'group';

const functions = {
    getGroup: () => {
        return localStorage.getItem(groupKey);
    },
    saveGroup: (group) => {
        localStorage.setItem(groupKey, group);
    },
}

export const group = {
    ...functions,
}
