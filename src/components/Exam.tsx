"use client"

import { FC } from "react"

interface examProps {
  exam: {
    name: string
    description: string
    preparation: string | null
    type: "image" | "laboratory" | "other"
    tags: string[]
    category: string
    laterality: string | null
    contrast: boolean | null
  }
}

const Exam: FC<examProps> = ({ exam }) => {
  if (!exam.preparation) exam.preparation = "No requiere preparación"
  if (!exam.laterality) exam.laterality = "No aplica"
  let tipo = ""
  if (exam.type === "image") tipo = "Imagen"
  if (exam.type === "laboratory") tipo = "Laboratorio"
  return (
    <div className='flex flex-col items-start justify-center space-y-4 p-6'>
      <h1 className='text-4xl font-bold'>{exam.name}</h1>
      <p className='text-xl'>
        <strong>Descripción:</strong> {exam.description}
      </p>
      <p className='text-xl'>
        <strong>Preparación:</strong> {exam.preparation}
      </p>
      <p className='text-xl'>
        <strong>Tipo:</strong> {tipo}
      </p>
      <p className='text-xl'>
        <strong>Categoría:</strong> {exam.category}
      </p>
      <p className='text-xl'>
        <strong>Tags</strong> {exam.tags}
      </p>
      <p className='text-xl'>
        <strong>Lateralidad:</strong> {exam.laterality}
      </p>
      <p className='text-xl'>
        <strong>Contraste:</strong> {exam.contrast ? "Yes" : "No"}
      </p>
    </div>
  )
}

export default Exam
