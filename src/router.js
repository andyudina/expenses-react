import   React          from 'react'
import { BrowserRouter,
         Switch }         from 'react-router-dom'
import LoggedinRoute from 'containers/LoggedinRoute'
import NotLoggedinRoute from 'containers/NotLoggedinRoute'   
import LoginView from 'containers/not-logged-in/LoginView'
import SignupView from 'containers/not-logged-in/SignupView'
import UploadReceiptView from 'containers/logged-in/upload-receipts/UploadReceiptView'
import CreateExpensesView from 'containers/logged-in/create-expenses/CreateExpensesView'
import ShowExpensesView from 'containers/logged-in/show-expenses/ShowExpensesView'

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