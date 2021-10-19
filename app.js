export default function appSrc(express, bodyParser, createReadStream, crypto, http) {
  const app = express()
  app.use(bodyParser.text())
  
  app.get('/', (req, res) => {
    res.send('Hello World!'); 
  });
  
  return app;
}
