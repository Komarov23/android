export const initiateCryptoTable = (db) => {
    db.transaction(tx => {
        tx.executeSql(
            `DROP TABLE IF EXISTS cryptos;`,
            [],
            () => {
                console.info('Previous table dropped successfully');
                tx.executeSql(
                    `CREATE TABLE IF NOT EXISTS cryptos (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT UNIQUE,
                        fullName TEXT,
                        price REAL);
                    `,
                    [],
                    () => {
                        console.info('New table created successfully');
                        tx.executeSql(
                            `INSERT OR IGNORE INTO cryptos (name, fullName, price)
                                VALUES
                                ('BTC', 'Bitcoin', 36698.0),
                                ('ETH', 'Ethereum', 1908.9),
                                ('XRP', 'XRP', 0.6926),
                                ('DOGE', 'DogeCoin', 0.0753),
                                ('SOL', 'Solana', 46.43),
                                ('MATIC', 'MATIC Network', 0.8081),
                                ('LTC', 'Litecoin', 74.1),
                                ('BNB', 'Binance Coin', 248.9);
                            `,
                            [],
                            (_, resultSet) => {
                                if (resultSet.rowsAffected > 0) {
                                    console.info('Data inserted successfully');
                                } else {
                                    console.info('Data already exists');
                                }
                            },
                            (_, error) => console.error('Error inserting data: ', error)
                        );
                    },
                    (_, error) => console.error('Error creating new table: ', error)
                );
            },
            (_, error) => console.error('Error dropping previous table: ', error)
        );
    });
}
