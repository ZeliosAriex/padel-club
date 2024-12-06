import { CalendarDays, Home, Settings, User } from 'lucide-react'
import Link from 'next/link'

import { auth, signOut } from '@/auth'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='border-b'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <Link href='/dashboard' className='text-2xl font-bold'>
            Club de Pádel
          </Link>
          <div className='flex items-center space-x-4'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='relative h-8 w-8 rounded-full'
                >
                  <Avatar className='h-8 w-8'>
                    {/*<AvatarImage
                      src={session?.user?.image || ''}
                      alt={session?.user?.name || ''}
                    />*/}
                    <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>
                      {session?.user?.name}
                    </p>
                    <p className='text-xs leading-none text-muted-foreground'>
                      {session?.user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className='mr-2 h-4 w-4' />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className='mr-2 h-4 w-4' />
                  <span>Configuración</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={async () => {
                    'use server'
                    await signOut()
                  }}
                >
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className='flex-1 flex'>
        <nav className='w-64 border-r p-4'>
          <ul className='space-y-2'>
            <li>
              <Link
                href='/dashboard'
                className='flex items-center space-x-2 p-2 rounded-lg hover:bg-accent'
              >
                <Home className='h-5 w-5' />
                <span>Panel Principal</span>
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/reservas'
                className='flex items-center space-x-2 p-2 rounded-lg hover:bg-accent'
              >
                <CalendarDays className='h-5 w-5' />
                <span>Mis Reservas</span>
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/perfil'
                className='flex items-center space-x-2 p-2 rounded-lg hover:bg-accent'
              >
                <User className='h-5 w-5' />
                <span>Perfil</span>
              </Link>
            </li>
          </ul>
        </nav>
        <main className='flex-1 p-8'>{children}</main>
      </div>
    </div>
  )
}
