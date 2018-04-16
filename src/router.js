import   React          from 'react'
import { BrowserRouter,
         Switch }         from 'react-router-dom'
import LoggedinRoute from 'containers/LoggedinRoute'
import NotLoggedinRoute from 'containers/NotLoggedinRoute'   
import LoginView from 'containers/LoginView'
import SignupView from 'containers/SignupView'
import UploadReceiptView from 'containers/UploadReceiptView'
import CreateExpensesView from 'containers/CreateExpensesView'
import ShowExpensesView from 'containers/ShowExpensesView'

const Router = ({location}) => (
    <BrowserRouter>
      <Switch location={location}>
        <NotLoggedinRoute
          exact
          path='/login'
          component={LoginView} />
        <NotLoggedinRoute
          exact
          path='/signup'
          component={SignupView} />

        <LoggedinRoute
          exact
          path='/'
          component={UploadReceiptView} />
        <LoggedinRoute
          exact
          path='/create-expenses'
          component={CreateExpensesView} />
        <LoggedinRoute
          exact
          path='/show-expenses'
          component={ShowExpensesView} />
      </Switch>
    </BrowserRouter>
)

export default Router