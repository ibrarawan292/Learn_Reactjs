import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Square from "./Square";
import ColorInput from "./ColorInput";
import { BrowserRouter as Router,useRoutes } from "react-router-dom";
import Login from "./login";
import Home from "./Home";
import MyComponent from "./MyComponent";


function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/',element:<Login/>},
      {path:'/MyComponent',element:<MyComponent/>},
      // {path:'/home',element:<Home/>},
      
    ]
  )
  return routes;
}

function App() {


  // const [items, setItems] = useState(
  //  )
  // ;
  // const [newItem, setNewItem] = useState("");
  // const [search, setSearch] = useState("");
  // const [colorValue, setColorValue] = useState("");
  // const [isDarkText, setIsDarked] = useState(true)
  // const [hexValue, setHexValue] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("shoppinglist", JSON.stringify(items));
  // }, [items])


  // const addItem = (item) => {
  //   const id = items.length ? items[items.length - 1].id + 1 : 1;
  //   const myNewItem = { id, checked: false, item };
  //   const listItems = [...items, myNewItem];
  //   setItems(listItems);
  // };

  // const handleCheck = (id) => {
  //   const listItems = items.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setItems(listItems);
  //   localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  // };

  // const handleDelete = (id) => {
  //   const listItems = items.filter((item) => item.id !== id);
  //   setItems(listItems);
  //   localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!newItem) return;
  //   addItem(newItem);
  //   setNewItem("");
  // };

  return (
    <div className="App row">
      <Router>
          <AppRoutes />
        </Router>
      {/* <div className="col-md-6">
        <Header title="Grocery List" />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchItem search={search} setSearch={setSearch} />
        <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
      <div className="col-md-6">
        <Square 
        colorValue={colorValue}
        isDarkText={isDarkText}
        hexValue={hexValue}
        
        />
        <ColorInput 
         colorValue={colorValue}
         setColorValue={setColorValue}
         isDarkText={isDarkText}
         setIsDarked={setIsDarked}
         setHexValue={setHexValue}
         />
      </div> */}
    </div>
  );
}

export default App;
