import "../index.css";
import { useState } from "react";
import AddFriend from "./AddFriend";
import BillSplit from "./BillSplit";
import Button from "./Button";
import FriendsList from "./FriendsList";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");

  const [chosenFriend, setChosenFriend] = useState(null);

  const [initialFriends, setInitialFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  function handleShowAddFriend() {
    setIsOpen((show) => !show);
  }

  function handleAddFriend(e) {
    e.preventDefault();

    // console.log(e.target.value);

    const newFriend = {
      id: Date.now(),
      name: newName,
      image: newImage,
      balance: 0,
    };
    setInitialFriends([...initialFriends, newFriend]);
    setIsOpen(false);
    setNewName("");
    setNewImage("");
    console.log(newFriend);
  }

  function handleSubmitName(e) {
    // console.log(e.target.value);
    setNewName(() => e.target.value);
  }

  function handleSubmitImage(e) {
    // console.log(e.target.value);
    setNewImage(() => e.target.value);
  }

  return (
    <>
      <h2 style={{ textAlign: "center", paddingBottom: "27px" }}>
        Eat-n-Split
      </h2>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            newName={newName}
            newImage={newImage}
            friends={initialFriends}
            onChosenFriend={setChosenFriend}
            chosenFriend={chosenFriend}
            onIsOpen={setIsOpen}
          />
          <AddFriend
            onSubmitName={handleSubmitName}
            onSubmitImage={handleSubmitImage}
            isOpen={isOpen}
            onAddFriend={handleAddFriend}
            newName={newName}
            newImage={newImage}
          />
          {!isOpen ? (
            <Button onclick={handleShowAddFriend}>Add Friend</Button>
          ) : (
            <Button onclick={handleShowAddFriend}>Close</Button>
          )}
        </div>
        <BillSplit chosenFriend={chosenFriend} />
      </div>
    </>
  );
}
