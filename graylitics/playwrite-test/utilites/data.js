const testData = [
    {
        name: 'akash kumar',
        email: 'test@gmail.com',
    },
    {
        name: '12345',
        email: 'test',
    },
    {
        name: 'akash kumar',
        email: 'test@',
    },
    {
        name: 'akash@123 #$',
        email: 'test@d.c',
    },
];

const uri = [{local:"http://localhost:4200/jobs"}];

module.exports = { testData, uri };