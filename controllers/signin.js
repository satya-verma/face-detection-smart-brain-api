const signinHandler = (req, res, db, bcrypt) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json("incorrect form submission");
    } else {
        db.select('email', 'hash').from('login').where({ email })
            .then(data => {
                const isValid = bcrypt.compareSync(password, data[0].hash);
                if (isValid) {
                    db.select('*').from('users').where({ email }).then(user => {
                        res.json(user[0]);
                    })
                }
                else {
                    res.status(400).json('invalid credentials');
                }
            })
            .catch(err => res.status(400).json('invalid credentials'));
    }
}

module.exports = { signinHandler };
