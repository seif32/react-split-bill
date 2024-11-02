import Button from "./Button";

export default function FriendsList({
  friends,
  onChosenFriend,
  chosenFriend,
  onIsOpen,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          id={friend.id}
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
          key={friend.id}
          onChosenFriend={onChosenFriend}
          chosenFriend={chosenFriend}
          onIsOpen={onIsOpen}
        />
      ))}
    </ul>
  );
}

function Friend({
  id,
  name,
  image,
  balance,
  onChosenFriend,
  chosenFriend,
  onIsOpen,
}) {
  const selectedOne = name === chosenFriend;

  function handleSplit(name) {
    onChosenFriend((curr) => (curr === name ? null : name));
    onIsOpen(false);
  }

  return (
    <li className={selectedOne ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      <p className={balance > 0 ? "green" : balance < 0 ? "red" : ""}>
        {balance > 0 && `${name} owes you ${balance}$`}
        {balance < 0 && `You owes ${name} ${Math.abs(balance)}$`}
        {balance === 0 && `You and ${name} are even`}
      </p>
      <Button onclick={() => handleSplit(name)}>
        {selectedOne ? "Close" : "Select"}
      </Button>
    </li>
  );
}
