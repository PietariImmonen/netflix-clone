import React, { useState } from 'react'
import BrowseForm from './BrowseForm'
import BrowseItems from './BrowseItems'

const BrowseByLanguages = ({data}) => {
  const [mode, setMode] = useState('original')
  const [language, setLanguage] = useState('english')
  const [filter, setFilter] = useState('suggestion')

  const modeFilteredData = () => {
    if(mode==='dubbed') {
      return data.filter(item => item.dubbed)
    }
    if(mode==='subtitles') {
      return data.filter(item => item.subtitles)
    }
    return data
  }

  const newData = modeFilteredData()

  const languageFilteredData = newData.filter(item => item.language === language)

  const handleMode = (event) => {
    setMode(event.target.value)
  }

  const handleLanguage = (event) => {
    setLanguage(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className='browse-by-languages'>
      <BrowseForm 
      handleMode={handleMode}
      handleLanguage={handleLanguage}
      handleFilter={handleFilter}
      mode={mode}
      language={language}
      filter={filter}
      />
      <BrowseItems data={languageFilteredData}/>
    </div>
  )
}

export default BrowseByLanguages