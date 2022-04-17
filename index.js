var PageHead = function PageHead() {
    return React.createElement(
        'div',
        null,
        'head'
    );
};
var PageBody = function PageBody() {
    return React.createElement(
        'div',
        null,
        'body'
    );
};
var PageFoot = function PageFoot() {
    return React.createElement(
        'div',
        null,
        'foot'
    );
};
var App = function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(PageHead, null),
        React.createElement(PageBody, null),
        React.createElement(PageFoot, null)
    );
};
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
));