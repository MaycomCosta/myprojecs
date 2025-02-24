import React, { useState } from 'react'

import * as C from './styles'

export const Projects = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories including "All"
  const categories = ['All', ...new Set(items.map((item) => item.cat))]

  // Filter items based on the selected category
  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.cat === selectedCategory)

  return (
    <C.ContainerMain>
      {/* Category Filter Buttons */}
      <C.CategoryContainer>
        {categories.map((category, index) => (
          <C.CategoryButton
            key={index}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </C.CategoryButton>
        ))}
      </C.CategoryContainer>

      {/* Project Items */}
      <C.SectionCenter>
        {filteredItems.map((menuItem) => {
          const { id, title, img, src, cat } = menuItem
          return (
            <C.DivLInk key={id} href={src} target="_blank">
              <C.MenuItem>
                <img src={img} alt={title} />
                <C.Header>
                  <h4>{title}</h4>
                  <p>{cat}</p>
                </C.Header>
              </C.MenuItem>
            </C.DivLInk>
          )
        })}
      </C.SectionCenter>
    </C.ContainerMain>
  )
}
