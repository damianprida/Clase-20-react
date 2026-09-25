import React, { useContext, useEffect, useState } from 'react'
import './global.css'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import NotFoundScreen from './Screens/NorFoundScreen/NotFoundScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import { ThemeContext, ThemeContextProvider } from './context/ThemeContext'
import { LangContext } from './Context/LangContext'
import ProductsScreen from './Screens/ProductsScreen/ProductsScreen'
import NewProductScreen from './Screens/NewProductScreen/NewProductScreen'
import { ProductContextProvider } from './Context/ProductContext'
import { ContactContextProvider } from './Context/ContactContext'


export default function App() {  

  return (    
    <div>
      <PostList/>
    </div>
  )
}