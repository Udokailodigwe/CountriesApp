import React from 'react'

import { HeaderProps } from '../../types'

import { TableHead, TableRow, TableCell } from '@mui/material'

export default function Header({ tableHeaders }: HeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {tableHeaders.map((header) => (
          <TableCell
            key={header.label}
            onClick={header.action}
            style={{
              cursor: header.isClickable ? 'pointer' : 'initial',
            }}
          >
            {header.label.toUpperCase()}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
