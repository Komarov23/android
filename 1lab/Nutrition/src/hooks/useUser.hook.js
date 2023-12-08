import { useRealm } from "../context/realm.context";
import Realm from "realm";
import { useDispatch } from "react-redux";
import { login as localLogin } from "../features/user/user.slice";

const useUser = () => {
  const realm = useRealm();
  const dispatch = useDispatch();

  const register = ({ name, email, password }) => new Promise((resolve, reject) => {
    try {
      const _id = new Realm.BSON.ObjectID();
      realm.write(() => {
        realm.create('User', {
          _id,
          name,
          email,
          password
        });
      });
      login({ email, password })
    } catch (e) {
      console.error(e);
      reject(e)
    }
  })

  const login = ({ email, password }) => new Promise((resolve, reject) => {
    try {
      const user = realm.objects('User')
        .filtered('email == $0', email)
        .filtered('password == $0', password)[0]

      console.info('USER LOGGED IN', user);
      dispatch(localLogin(user));
      resolve(user);
    } catch (e) {
      console.error(e);
      reject(e)
    }
  });

  const isUserFull = ({ gender, goal, weight, height, age }) => gender && goal && weight && height && age;

  const update = ({
    _id,
    name,
    gender,
    goal,
    weight,
    height,
    age
  }) => new Promise((resolve, reject) => {
    try {
      realm.write(() => {
        const user = realm.create(
          "User",
          {
            _id,
            name,
            gender,
            goal,
            weight,
            height,
            age
          },
          "modified");

        dispatch(localLogin(user));
        resolve(user);
      })
    } catch (e) {
      console.error(e);
      reject(e);
    }
  })

  const validateEmail = (email) => new Promise((resolve, reject) => {
    try {
      const isExists = !realm.objects('User').filtered('email == $0', email).length
      resolve(isExists)
    } catch (e) {
      console.error(e);
      reject(e)
    }
  })

  return { register, login, update, validateEmail, isUserFull };
}

export default useUser
