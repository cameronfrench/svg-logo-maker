module.exports = [
    {
        message: 'What text would you like on your logo? (Only a max of 3 characters)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color do you want the text to be?',
        name: 'textColor',
        
    },
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        name: 'shapeName',
        choices: [ 'Square', 'Triangle', 'Circle' ],
    },
    {
        type: 'input',
        message: 'What color do you want the shape to be?',
        name: 'shapeColor',
        
    },
];