import { FC } from "react"
import { Route, Navigate, Routes as RoutesDom } from "react-router-dom"
import AppLayout from "../components/Layout/Layout"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"

const Routes: FC = () => {
    return (
      <>
        <RoutesDom>
          <Route element={<AppLayout />}>
            
            <Route path='/home' element={<HomePage/>} />
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='*' element={<Navigate to='/error/404' />} />
          </Route>
        </RoutesDom>
      </>
    )
  }
  
  export {Routes}