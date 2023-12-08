class Crypto extends Realm.Object {
    static schema = {
      name: 'Crypto',
      properties: {
        _id: "objectId",
        name: "string",
        fullName: "string",
        price: "float"
      },
      primaryKey: '_id',
    };
}

export default Crypto;