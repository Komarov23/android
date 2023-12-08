import { useRealm } from "../context/realm.context";
import { useDispatch } from "react-redux";
import Realm from "realm";
import { addMeal, setMeals } from "../features/meal/meal.slice";

const useMeal = () => {
  const realm = useRealm();
  const dispatch = useDispatch()

  const create = ({ _id: nutrition_id, kk, name, description }) => new Promise((resolve, reject) => {
    try {
      const _id = new Realm.BSON.ObjectID();
      const date = new Date();
      realm.write(() => {
        const meal = realm.create('Meal', {
          _id,
          nutrition_id,
          kk: parseFloat(kk.toFixed(2)),
          name,
          description,
          createdAt: date.valueOf(),
          date: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
        })

        console.info(meal);
        resolve(meal)
      })
    } catch (e) {
      console.error(e);
      reject(e);
    }
  })

  const find = ({ _id: nutrition_id }) => new Promise((resolve, reject) => {
    try {
      const meals = realm.objects('Meal')
        .filtered('nutrition_id == $0', nutrition_id);

      dispatch(setMeals(meals));
      resolve(meals)
      console.info(meals);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  })

  return { create, find };
}

export default useMeal;
