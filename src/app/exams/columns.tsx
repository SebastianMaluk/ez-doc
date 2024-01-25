"use client"

import { ExamModel } from "@/lib/db/schema/exams"
import { TagModel } from "@/lib/db/schema/tags"
import { CategoryModel } from "@/lib/db/schema/categories"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"

// new model merging exam model id, name, and tag
export interface ExamTagModel extends ExamModel {
  tag: TagModel["name"]
  category: CategoryModel["name"]
}

export const columns: ColumnDef<Pick<ExamTagModel, "id" | "name" | "category">>[] = [
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
    accessorKey: "category",
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
      const { category } = row.original
      return <div className='text-right'> {category}</div>
    },
  },
]
