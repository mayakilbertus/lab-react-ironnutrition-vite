function FoodBox(props) {
  return (
    <div>
      <p>{props.food.name}</p>

      <img src={props.food.image} />

      <p>Calories: {props.food.calories} </p>
      <p>Servings {props.food.servings} </p>

      <p>
        <b>Total Calories:{props.food.calorie * props.food.servings} </b> kcal
      </p>

      <button
        onClick={() => {
          props.handleDelete(props.food.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default FoodBox;
