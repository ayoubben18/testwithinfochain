import { FormEvent, useState } from "react";
import useItems from "../store/useStore";
import "./App.css";
import { Item } from "../store/types";

function App() {
  const { items, addItem } = useItems();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addToItems = (e: FormEvent) => {
    e.preventDefault();
    const newItem: Item = {
      id: parseInt(id),
      title: title,
      description: description,
    };
    addItem(newItem);
    setId("");
    setTitle("");
    setDescription("");
  };
  console.log(items);

  return (
    <div className=" flex flex-col gap-6">
      <form
        onSubmit={addToItems}
        className=" flex flex-col gap-3 items-center justify-center"
      >
        <input
          type="number"
          value={id}
          required
          onChange={(e) => setId(e.target.value)}
          placeholder="id"
          className="insert-box"
        />
        <input
          type="text"
          required
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="insert-box"
        />
        <input
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          className="insert-box"
        />
        <button
          type="submit"
          className=" bg-black text-white w-max text-xl font-semibold px-10 py-2 rounded-xl"
        >
          Add
        </button>
      </form>
      <div className=" flex flex-col gap-2 items-center justify-center">
        {items.map((i) => (
          <div
            key={i.id}
            className=" text-black flex gap-3 text-lg font-medium"
          >
            <div>{i.title}</div>
            <div>|</div>
            <div>{i.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
