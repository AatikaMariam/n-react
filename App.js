// <div id="parent">
//     <div id="child">
//        <h1>I'm h1 tag</h1>
//     </div
// </div>
//
// ReactElement(object) => HTML(Browser Understands)
//
//
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
