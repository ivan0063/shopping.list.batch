const { getProjects, getItems, addItemsToInbox } = require('./service/todoist.service');

(async ()=>{
    try {
        const projects = await getProjects();

        const idShoppingList = projects
            .filter(project => project.name === 'Lista de compras de Alexa')
            .map(project => project.id)
            .pop()

        const itemsTodoist = await getItems();
        const items = itemsTodoist
            .filter(item => item.project_id === idShoppingList)
            .map(item => item.content);

        await addItemsToInbox(items);

        console.log("Done");
    } catch (err) {
        console.error("Error");
    }
})()