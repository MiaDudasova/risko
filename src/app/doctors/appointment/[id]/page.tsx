import { DoctorAppointment } from '../../../../components/DoctorAppointment'
import { Appoitnmets } from '../../../../components/DoctorAppointmentList'

type DoctorAppointmentPageProps = {
  params: {
    id: string
  }
}

export default async function DoctorAppointmentPage({ params }: DoctorAppointmentPageProps) {
  const doctorId = parseInt(params.id)

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center p-24">
        <DoctorAppointment id={doctorId} />
        <p>Appointments :</p>
        <Appoitnmets id={doctorId} />
      </div>
    </main>
  )
}
