import {createRealmContext} from '@realm/react';
import User from "../models/User";
import Nutrition from "../models/Nutrition";
import Meal from "../models/Meal";

const realmConfig = {
  schema: [User, Nutrition, Meal],
  schemaVersion: 5
};

export const {
  RealmProvider,
  useRealm,
  useObject,
  useQuery
} = createRealmContext(realmConfig);

export default RealmProvider;
