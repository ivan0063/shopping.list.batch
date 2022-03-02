const Todoist = require('todoist').v8;
const todoist = Todoist(process.env.apiToken);

const getProjects = async () => {
    await todoist.sync();
    return todoist.projects.get();
};

const getItems = async () => {
    await todoist.sync();
    return todoist.items.get();
};

const addItemsToInbox = async (items) => {
    await todoist.sync();
    let yourDate = new Date()
    items.forEach(item => {
        todoist.items.add({
            content: item,
            due: {
                date: yourDate.toISOString().split('T')[0]
            }
        });
    });
}

module.exports = {
    getProjects,
    getItems,
    addItemsToInbox
}