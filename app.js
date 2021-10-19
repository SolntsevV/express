export function appSrc(express, bodyParser, createReadStream, crypto, http) {
  const app = express()
  app.use(bodyParser.text())
  return app;
}
