const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const getDatabaseName = () => process.env.DB_NAME

module.exports = {
    add,
    sub,
    getDatabaseName,
};