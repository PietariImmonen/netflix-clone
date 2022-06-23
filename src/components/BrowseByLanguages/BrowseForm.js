import React from 'react'
import './browseForm.css'

const BrowseForm = ({handleMode,
                    handleLanguage,
                    handleFilter,
                    mode,
                    language,
                    filter
                    }) => {
  return (
    <div className='browse-container'>
        <h2 className='browse-h2'>Browse By Languages</h2>
        <form className='browse-form'>
          <select
            value={mode}
            onChange={handleMode}
            name='mode'
            className='browse-select first'
          >
            <option value='original'>Original language</option>
            <option value='dubbed'>Dubbed</option>
            <option value='subtitles'>Subtitles</option>
          </select>

          <select
            value={language}
            onChange={handleLanguage}
            name='language'
            className='browse-select second'
          >
            <option value='english'>English</option>
            <option value='spanish'>Spanish</option>
            <option value='finnish'>Finnish</option>
          </select>
          <h4 className='browse-form-h4'>Sort by</h4>
          <select
            value={filter}
            onChange={handleFilter}
            name='filter'
            className='browse-select third'
          >
            <option value='suggestion'>Suggestions For You</option>
            <option value='az'>A-Z</option>
            <option value='za'>Z-A</option>
          </select>
        </form>
      </div>
  )
}

export default BrowseForm