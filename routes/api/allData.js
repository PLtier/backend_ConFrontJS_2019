router
    .route('/')
    .get((req, res) => {
        try {
            let {sponsor} = res.locals;
            res.json(sponsor.competitions)
        } catch (err) {
            res.status(500).send(err.toString());
        }
    })
    .delete((req, res) => {
        try {
            let {sponsor} = res.locals;
            sponsor.competitions = [];
            sponsor.save();
            res.send('sponsor data cleared')
        } catch (err) {
            res.status(500).send(err.toString());
        }
    });
