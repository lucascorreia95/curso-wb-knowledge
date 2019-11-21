const bodyParde = require('body-parser');
const cors = require('cors');

module.exports = app => {
    app.use(bodyParde.json())
    app.use(cors())
}