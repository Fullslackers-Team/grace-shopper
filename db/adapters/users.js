const client = require("../client");

const bcrypt = require("bcrypt");
const saltRounds = 10;

async function createUser(username, password) {
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  const {
    rows: [user],
  } = await client.query(
    `
        INSERT INTO users("username", "password") 
        VALUES($1, $2) 
        RETURNING *;
      `,
    [username, hashedPassword]
  );
  return user;
}

// Think about renaming? getUserByUsernameAndPassword
async function authUser(username, password) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE username=$1;
      `,
      [username]
    );

    const res = bcrypt.compareSync(password, user.password);

    if (res) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE id=$1;
      `,
      [id]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE username=$1;
      `,
      [username]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  authUser,
  getUserById,
  getUserByUsername,
};
