export default function appSrc(express, bodyParser, createReadStream, crypto, http) {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.all('/login/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
    });
    res.send('vitaly_solntsev');
  })
  
  app.all('/code/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
    });

    const readStream = createReadStream(import.meta.url.substring(7));

    readStream.on('open', function () {
      readStream.pipe(res);
    });
  })

  app.all('/sha1/:input/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
    });
    
    res.send(crypto.createHmac('sha1', req.params['input']).digest('hex'));
  })

  app.get('/req/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
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
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
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

  app.all('/*/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
    });
    
    res.end('vitaly_solntsev')
  })
  
  return app;
}
