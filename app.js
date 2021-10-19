export default function appSrc(express, bodyParser, createReadStream, crypto, http) {
  const app = express()
  app.use(bodyParser.text())
  
  app.all('/login/', (req, res) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
    });
    res.send('vitaly_solntsev');
})
  
  return app;
}
