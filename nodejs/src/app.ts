import express, { Request, Response, NextFunction } from 'express';
var app = express();
import bodyParser from 'body-parser';

import todoRoutes from './routes/todos';

app.use(bodyParser.json());
app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
})

var port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
})