import { useRealm } from "../context/realm.context";
import { useDispatch } from "react-redux";
import Realm from "realm";
import User from "../models/User";
import { setNutrition } from "../features/nutrition/nutrition.slice";

const useNutrition = () => {
  const realm = useRealm();
  const dispatch = useDispatch()

  const create = ({ _id: user_id, goal, height, weight, gender, age }) => new Promise((resolve, reject) => {
    try {
      const _id = new Realm.BSON.ObjectID();
      realm.write(() => {
        const nutrition = realm.create('Nutrition', {
          _id,
          user_id,
          goal,
          kk: calcKK(goal, height, weight, gender, age)
        })

        dispatch(setNutrition(nutrition))
        console.info(nutrition);
      })
    } catch (e) {
      console.error(e);
      reject(e);
    }
  })

  const find = ({ _id: user_id }) => new Promise((resolve, reject) => {
    try {
      const nutrition = realm.objects('Nutrition')
        .filtered('user_id == $0', user_id)[0];

      if (!nutrition) return reject('Not found');

      dispatch(setNutrition(nutrition));
      resolve(nutrition)
      console.info(nutrition);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  })

  const calcKK = (goal, height, weight, gender, age) => {
    switch (gender) {
      case User.GENDERS.male: return 10 * weight + 6.25 * height - 5 * age + 5;
      case User.GENDERS.female: return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  }

  return { create, find };
}

export default useNutrition;
