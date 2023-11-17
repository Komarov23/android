import * as SQLite from 'expo-sqlite';
import {initiateCryptoTable} from "./crypto";

export default class DB {
    static db = SQLite.openDatabase('db.sqlite');

    static initiate () {
        initiateCryptoTable(this.db);
    }

    static getConnection () {
        return this.db;
    }
}