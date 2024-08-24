const createElement = React.createElement('h1', {tabIndex:'0', 'aria-label':'heading'}, 'I love working with React.js');
    console.log("Created element", createElement);

const createParent = React.createElement('div', {id: 'parent'}, React.createElement('div', {id:'child'}, 
    [React.createElement('h1', {tabIndex: '0'}, 'I am veeresh'), React.createElement('h2', {tabIndex: '0'}, 'I love you Sharadha')]
));

    const rootElement = ReactDOM.createRoot(document.getElementById('root'));
    console.log("Root element", rootElement)

    rootElement.render(createParent);