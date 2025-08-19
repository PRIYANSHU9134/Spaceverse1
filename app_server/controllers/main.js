/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'SPACEVERSE' });
};

module.exports = {
    index
};
