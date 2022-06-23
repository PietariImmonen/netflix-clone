import React from 'react'
import './browseByLanguages.css'

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
        <form>
          <select
            value={mode}
            onChange={handleMode}
            name='mode'
          >
            <option value='original'>Original language</option>
            <option value='dubbed'>Dubbed</option>
            <option value='subtitles'>Subtitles</option>
          </select>

          <select
            value={language}
            onChange={handleLanguage}
            name='language'
          >
            <option value='english'>English</option>
            <option value='spanish'>Spanish</option>
            <option value='finnish'>Finnish</option>
          </select>

          <select
            value={filter}
            onChange={handleFilter}
            name='filter'
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