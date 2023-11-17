import DB from "../utils/db";

class Crypto {
    static getCrypto (id) {
        
    }

    static getCryptos (setCallback) {
        const db = DB.getConnection()
        db.transaction(async tx => {
            tx.executeSql(
                'SELECT * FROM cryptos',
                [],
                (_, resultSet) => {
                    setCallback(resultSet.rows._array);
                },
                (_, error) => console.error('Error selecting data: ', error)
            );
        });
    }
}

export default Crypto;
