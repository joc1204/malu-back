

module.exports = {
 /* development: {
    database: "malu",
    username:"",
    password:"",
    dialect: "sqlite",
    params:{
      storage: "../malu.db",
      define:{
        underscore: true
      },
      operatorsAliases: false
    }
  },
  test: {
    database: "malu",
    username:"",
    password:"",
    dialect: "sqlite",
    params:{
      storage: "../malu.db",
      define:{
        underscore: true
      },
      operatorsAliases: false
    }
  },*/
  production: {
    database: "malu",
    username:"",
    password:"",
    dialect: "sqlite",
    storage: "./database/malu.sqlite",
    params:{
      define:{
        underscore: true
      },
      operatorsAliases: false
    }
  }
}
