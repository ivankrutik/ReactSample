import React from 'react'
import { useEffect, useState } from 'react'
import IsBusy from '../../Layout/IsBusy'

const API_CATEGORIES_URL =
  'https://app.ecwid.com/api/v3/58958138/categories?responseFields=items(id,orderBy,seoTitle,productCount)'
const TOKEN = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'

const Categories = ({ chooseCategories }) => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function getCategoriesFromServer() {
    fetch(API_CATEGORIES_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        parsingCategoriesData(json)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    setIsLoading(true)
    getCategoriesFromServer()
  }, [])

  function parsingCategoriesData(json) {
    setCategories(
      [
        ...json.items,
        { id: -1, orderBy: -1, seoTitle: 'Все', productCount: null },
      ].sort((a, b) => {
        return a.orderBy - b.orderBy
      })
    )
  }

  function chooseCategoriesHandler(categorieId) {
    chooseCategories(categorieId)
  }

  if (isLoading) {
    return <IsBusy></IsBusy>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  if (categories.length === 0) {
    return <h1>No data found</h1>
  }

  return (
    <div className="categories">
      {categories.map((categorie) => {
        return (
          <div
            className="text-light  bg-dark "
            key={categorie.id}
            onClick={() => {
              chooseCategoriesHandler(categorie.id)
            }}
          >
            {categorie.seoTitle}
          </div>
        )
      })}
    </div>
  )
}

export default Categories
