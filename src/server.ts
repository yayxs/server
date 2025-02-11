import { App } from './app';
import { AuthRoute } from './routes/auth.route';
import { UserRoute } from './routes/users.route';
import { CategoryRoute } from './routes/categories.route';

const app = new App([new UserRoute(), new AuthRoute(), new CategoryRoute()]);

app.listen(); 