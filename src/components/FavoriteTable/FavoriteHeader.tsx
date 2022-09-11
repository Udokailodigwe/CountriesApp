import React from 'react'

import { TableCell, TableHead, TableRow } from '@mui/material'

export type HeadersProps = {
  headers: {
    label: string
  }[]
}

export default function FavoriteHeader({ headers }: HeadersProps) {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header.label}>{header.label.toUpperCase()}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
