import { CalendarDays, Clock, TrendingUp, Trophy, Users } from 'lucide-react'

import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default async function DashboardPage() {
  const session = await auth()

  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8'>
        Bienvenido, {session?.user?.name}
      </h1>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Próximas Reservas
            </CardTitle>
            <CalendarDays className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>3</div>
            <p className='text-xs text-muted-foreground'>
              Próxima: Hoy a las 18:00
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Tiempo Total de Juego
            </CardTitle>
            <Clock className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>24h 30m</div>
            <p className='text-xs text-muted-foreground'>Últimos 30 días</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Compañeros Favoritos
            </CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>5</div>
            <p className='text-xs text-muted-foreground'>
              Jugado recientemente
            </p>
          </CardContent>
        </Card>
      </div>

      <div className='grid gap-6 md:grid-cols-2 mb-8'>
        <Card>
          <CardHeader>
            <CardTitle>Partidos Recientes</CardTitle>
            <CardDescription>Tus últimos 5 partidos</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2'>
              {[
                { date: '15/05/2023', result: 'Victoria', score: '6-4, 7-5' },
                { date: '12/05/2023', result: 'Derrota', score: '3-6, 4-6' },
                { date: '08/05/2023', result: 'Victoria', score: '6-3, 6-2' },
                { date: '05/05/2023', result: 'Victoria', score: '7-6, 6-4' },
                { date: '01/05/2023', result: 'Derrota', score: '5-7, 6-7' },
              ].map((match, index) => (
                <li key={index} className='flex justify-between items-center'>
                  <span>{match.date}</span>
                  <span
                    className={
                      match.result === 'Victoria'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }
                  >
                    {match.result}
                  </span>
                  <span>{match.score}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tus Estadísticas</CardTitle>
            <CardDescription>Resumen de rendimiento</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex justify-between items-center'>
              <span className='flex items-center'>
                <Trophy className='h-4 w-4 mr-2 text-yellow-500' />
                Tasa de Victorias
              </span>
              <span className='font-bold'>65%</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='flex items-center'>
                <TrendingUp className='h-4 w-4 mr-2 text-blue-500' />
                Nivel de Habilidad
              </span>
              <span className='font-bold'>Intermedio</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='flex items-center'>
                <Users className='h-4 w-4 mr-2 text-green-500' />
                Preferencia Dobles
              </span>
              <span className='font-bold'>75%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Estado de la Cuenta</CardTitle>
          <CardDescription>Información de tu membresía actual</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex justify-between'>
            <span className='font-medium'>Tipo de Membresía:</span>
            <span>Premium</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-medium'>Estado:</span>
            <span className='text-green-600'>Activa</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-medium'>Fecha de Renovación:</span>
            <span>1 de Enero, 2025</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-medium'>Beneficios:</span>
            <span>Reserva Prioritaria, Alquiler de Equipo Gratis</span>
          </div>
          <Button className='w-full mt-4'>Gestionar Membresía</Button>
        </CardContent>
      </Card>
    </div>
  )
}
