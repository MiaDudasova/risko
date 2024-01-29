import { DoctorList } from '../../components/DoctorList'
export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center p-24">
        <div>Doctors List:</div>
        <DoctorList />
      </div>
    </main>
  )
}
