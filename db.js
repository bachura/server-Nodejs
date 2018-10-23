const { MongoClient } = require("mongodb");
const uri = 'mongodb://Alexey:qwerty12345@ds139193.mlab.com:39193/users';  

(async function(){
    try {
      const dbName = 'users';
      const client = await MongoClient.connect(uri,{ useNewUrlParser: true });
      const db = client.db(dbName);
      const collection = db.collection('user');
      client.close();
  
    } catch(e) {
      console.error(e)
    }
  })()