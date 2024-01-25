"use client"
import { PDFViewer } from "@react-pdf/renderer"
import PDF from "./pdf"

type PDFPageProps = {
  name: string
  exams: string[]
}

// export default function PDFPage({ name, exams }: PDFPageProps) {
export default function PDFPage() {
  const name = "Juan Richard"
  const exams = ["Hemograma", "Orina"]
  return (
    <div className='w-full h-screen flex items-start pt-5 justify-center'>
      <PDFViewer className='w-full h-4/5 overflow-auto'>
        <PDF name={name} exams={exams} />
      </PDFViewer>
    </div>
  )
}
