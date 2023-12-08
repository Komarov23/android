import Realm from "realm";

class Nutrition extends Realm.Object {
  static schema = {
    name: 'Nutrition',
    properties: {
      _id: 'objectId',
      user_id: 'objectId',
      goal: 'string',
      kk: 'float'
    },
    primaryKey: '_id',
  };
}

export default Nutrition;
