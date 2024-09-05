import React from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <MenuItem as={NavLink} to="/products"
          name='products'

        />
        <MenuItem as={NavLink} to="/product/add"
          name='product add'

        />
      </Menu>
    </div>
  )
}
