const express = require('express');
const app =  express();

// Service
const fillInboxListService = require('./service/fillInboxList.service');

app.get('/todoist/load/inbox', (req, res) => {
    const authHeader = res.header("jimm-auth-accesses");

    if("259f2660-9f6d-11ec-b909-0242ac120002" !== authHeader) {
        return res.status(401).json({
            status: "Not authenticated"
        });
    }

    fillInboxListService.prepareEventsInbox()
    res.json({
        status: "done"
    })
});

app.listen(3000, ()=> {
    console.log('Running on port 3000');
})