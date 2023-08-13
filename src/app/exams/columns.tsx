"use client"

import { ExamModel, TagModel } from "@/server/db/schema"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"

// new model merging exam model id, name, and tag
export interface ExamTagModel extends ExamModel {
  tag: TagModel["name"]
}

export const columns: ColumnDef<Pick<ExamTagModel, "id" | "name" | "tag">>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-left'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => {
      const { name } = row.original
      return <div className='text-left'> {name}</div>
    },
  },
  {
    accessorKey: "tag",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-right'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Categoría
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => {
      const { tag } = row.original
      return <div className='text-right'> {tag}</div>
    },
  },
]
