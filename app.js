export default function appSrc(express, bodyParser, createReadStream, crypto, http, m, User) {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.all('/login/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE'
    });
    res.send('vitaly_solntsev');
  })
  
  app.all('/code/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE'
    });

    const readStream = createReadStream(import.meta.url.substring(7));

    readStream.on('open', function () {
      readStream.pipe(res);
    });
  })

  app.all('/sha1/:input/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE'
    });
    res.send(res.send(crypto.createHash('sha1').update(req.params['input']).digest('hex')));
  })

  app.get('/req/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE',
      'Content-type': 'text/html'
    });
    
    let promise = new Promise((resolve, reject) => {
      http.get(req.query.addr, function(res){
        res.on('data', function (chunk) {
          resolve(chunk);
        });
      })
    })

    promise.then((value) => {
      res.end(value);
    });

  })

  app.post('/req/', (req, res) => {

    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE'
    });

    let promise = new Promise((resolve, reject) => {
      http.get(req.body['addr'], function(res){
        res.on('data', function (chunk) {
          resolve(chunk);
        });
      })
    })

    promise.then((value) => {
      res.end(value);
    });

  })

  app.post('/insert/', async (req, res) => {
    
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE'
    });
    
    await m.connect(req.body['URL'], { useNewUrlParser: true, useUnifiedTopology: true});
    const login = req.body['login'];
    const password = req.body['password'];
    const newUser = new User({login, password});
    res.json(await newUser.save());
  })

  app.all('/*/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE'
    });

    res.end('vitaly_solntsev')
  })
  
  return app;
}
