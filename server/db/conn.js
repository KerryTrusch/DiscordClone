const { MongoClient } = require("mongodb");
const Db = provess.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (db)
            {
                _db = db.db("DiscordClone");
                console.log("Successfully connected to Mongo");
            }
            return callback(err);
        });
    },
    getDb: function() {
        return _db;
    },
};