import NewButton from '@/app/button'
import NewTextBox from '@/app/textbox'

export default function Page() {
  return (
    <>
    <p>Execute Query</p>
    <NewTextBox Placeholder={"Test Placeholder"}/><br></br>
    <NewButton ButtonContent={"This is a damn button"}/><br></br>
    </>
  )
}