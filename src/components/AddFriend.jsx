import Button from "./Button";

function AddFriend({ isOpen, onSubmitName, onSubmitImage, onAddFriend,newName, newImage }) {
  if (!isOpen) return null;

  return (
    <form onSubmit={onAddFriend} className="form-add-friend">
      <label>🤵 Friend's name</label>
      <input value={newName} onInput={onSubmitName} type="text" />

      <label>📷 Image URL</label>
      <input value={newImage} onInput={onSubmitImage} type="text" />

      <Button>Add</Button>
    </form>
  );
}

export default AddFriend;
