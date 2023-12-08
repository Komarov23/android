import Realm from "realm";
class User extends Realm.Object {
  static GOAL_TYPES = {
    gain: "gain",
    loose: "loose"
  }

  static GENDERS = {
    male: 'male',
    female: 'female'
  }

  static schema = {
    name: 'User',
    properties: {
      _id: 'objectId',
      name: 'string',
      gender: 'string?',

      email: 'string',
      password: 'string',

      goal: 'string?',
      weight: 'int?',
      height: 'int?',
      age: 'int?'
    },
    primaryKey: '_id',
  };
}

export default User;
