import { useState } from "react";

const App = () => {
  /* Your states here */
  interface FormData {
    firstname: string;
    lastname: string;
    age: number;
    favoriteFoods: string[];
  }

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    age: 0,
    favoriteFoods: [],
  });

  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleShowMessage = () => {
    setIsDisplay(true);
  };

  const handleClearMessage = () => {
    setFormData({ firstname: "", lastname: "", age: 0, favoriteFoods: [] });
    setIsDisplay(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevState) => {
        const favoriteFoods = checked
          ? [...prevState.favoriteFoods, value]
          : prevState.favoriteFoods.filter((food) => food !== value);
        return { ...prevState, favoriteFoods };
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              value="Chicken"
              onChange={handleChange}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              value="Beef"
              onChange={handleChange}
            />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="vegetables"
              name="favoriteFoods"
              value="Vegetables"
              onChange={handleChange}
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dessert"
              name="favoriteFoods"
              value="Dessert"
              onChange={handleChange}
            />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pork"
              name="favoriteFoods"
              value="Pork"
              onChange={handleChange}
            />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button onClick={handleShowMessage}>Display User</button>
      <button onClick={handleClearMessage}>Clear</button>

      {isDisplay && (
        <div className="output">
          {`Hello ${formData.firstname} ${formData.lastname}!!! You are ${
            formData.age
          } years old and your favorite foods are: ${formData.favoriteFoods.join(
            ", "
          )}.`}
        </div>
      )}
    </div>
  );
};

export default App;
