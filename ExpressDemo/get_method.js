const Express = require('express');
const App = Express();
App.use(Express.json());

const Emp = [
    { id: 1, name: "shatakshi" },
    { id: 2, name: "Gayatri" },
    { id: 3, name: "kirthi" }
];

App.get('/Employee', (req, res) => {
    res.send(Emp);
});
App.get('/Employee/:id', (req, res) => {
    const record = Emp.find(c => c.id === parseInt(req.params.id));
    if (!record) res.status(404).send('such record not found');
    res.send(record);
});
App.listen(3000);