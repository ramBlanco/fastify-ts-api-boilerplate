import App from './infrastructure/webserver/server'
import AuthRoute from './interface/routes/authRoute'
import StatusRoute from './interface/routes/statusRoute'

export const app = new App({
  routes: [new StatusRoute(), new AuthRoute()],
})

app.listen()
