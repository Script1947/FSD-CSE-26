function Book(props) {
    const image = React.createElement(
        "img",
        {
            src: props.image,
            width: "100px",
            height: "100px"
        },
        null
    );

    const title = React.createElement(
        "h2",
        { style: { color: "red" } },
        "Title : " + props.title
    );

    const price = React.createElement(
        "h2",
        { style: { color: "green" } },
        "Price : " + props.price + "/-"
    );

    const btn = React.createElement(
        "button",
        { style: { color: "blue" } },
        "Add to Cart"
    );

    const div = React.createElement(
        "div",
        { className: "book" },
        [image, title, price, btn]
    );

    return div;
}

const bookdata = [
    { image: "book1.jpg", title: "ReactJS", price: 455 },
    { image: "book2.jpg", title: "JavaScript", price: 500 },
    { image: "book3.jpg", title: "HTML", price: 300 },
    { image: "book1.jpg", title: "ReactJS", price: 455 },
    { image: "book2.jpg", title: "JavaScript", price: 500 },
    { image: "book2.jpg", title: "JavaScript", price: 500 },

    { image: "book3.jpg", title: "HTML", price: 300 }
];

function App() {

    const bookstore = bookdata.map((i) => {
        return Book(i);
    });

    const div = React.createElement(
        "div",
        { className: "bookstore" },
        bookstore
    );

    return div;
}

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);

root.render(App());