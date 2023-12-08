import Realm from "realm";

class Meal extends Realm.Object {
  static schema = {
    name: 'Meal',
    properties: {
      _id: 'objectId',
      nutrition_id: 'objectId',
      kk: 'float',
      name: 'string',
      description: 'string?',
      createdAt: 'int',
      date: 'string'
    },
    primaryKey: '_id',
  };
}

export default Meal;
