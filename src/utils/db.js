import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const tableName = 'todoData';

/// Model : id (data sub forma de string de preferat) , name (string) , date (string) , startingTime (string) , endingTime (string) , remindMe (bool) , tags (array of strings)

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'todo-data.db', location: 'default' });
};

export const createTable = async (db) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
		id INTEGER PRIMARY KEY AUTOINCREMENT , name TEXT NOT NULL , date TEXT , startingTime TEXT , endingTime TEXT , remindMe BOOL NOT NULL , tags TEXT
    );`;

  await db.executeSql(query);
};

export const getTodoItems = async (db) => {
  try {
    const todoItems = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index))
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const saveTodoItems = async (db, todoItems) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName} values` +
    todoItems.map(i => `(${i.id}, ${i.name} , ${i.date} , ${i.startingTime} , ${i.endingTime} , ${i.remindMe} , ${i.tags.toString()} )`).join(',');

  return db.executeSql(insertQuery);
};

export const deleteTodoItem = async (db, id) => {
  const deleteQuery = `DELETE from ${tableName} where id = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};