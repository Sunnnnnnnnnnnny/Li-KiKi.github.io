var PageHead = function PageHead() {
  return React.createElement(
    "div",
    { "class": "pageHead" },
    "\u6B63\u5B97\u524D\u7AEFCV\u5DE5\u7A0B\u5E08"
  );
};
var PageBody = function PageBody() {
  return React.createElement(
    "div",
    { "class": "pageBody" },
    React.createElement(
      "div",
      { "class": "pageLeft" },
      "s"
    ),
    React.createElement(
      "div",
      { "class": "pageCenter" },
      "s"
    ),
    React.createElement(
      "div",
      { "class": "pageRight" },
      "s"
    )
  );
};
var PageFoot = function PageFoot() {
  return React.createElement(
    "div",
    { "class": "pageFoot" },
    "31\u5E74\u575A\u6301\u9762\u5411\u767E\u5EA6\u5F00\u53D1"
  );
};
var App = function App() {
  return React.createElement(
    "div",
    { "class": "app" },
    React.createElement(PageHead, null),
    React.createElement(PageBody, null),
    React.createElement(PageFoot, null)
  );
};
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(
  React.StrictMode,
  null,
  React.createElement(App, null)
));