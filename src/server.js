import { App } from './app.js'
import { AuthRoute } from './routes/auth.route.js'
import { UserRoute } from './routes/users.route.js'
import { CategoryRoute } from './routes/categories.route.js'
const app = new App([new UserRoute(), new AuthRoute(), new CategoryRoute()])

app.listen()
