const clarifai = require('clarifai');

// Clarifai API KEY here.
const app = new Clarifai.App({
    apiKey: 'api key here'
});

const apiCallHandler = (req, res) => {
    app.models.predict('e15d0f873e66047e579f90cf82c9882z', req.body.input)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json("error calling API");
        })
}

const imageHandler = (req, res, db) => {
    const { id } = req.body;
    db('users').where({ id: id }).increment('entries', 1)
        .returning('entries')
        .then(count => {
            res.json(count[0])
        })
        .catch(err => res.status(400).json('unable to update'));
}

module.exports = { imageHandler, apiCallHandler };
