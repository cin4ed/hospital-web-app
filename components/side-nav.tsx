import {
  Home,
  Users,
  Tablets,
  BookMarked,
  ClipboardList,
  FileBadge2,
  Package2,
  Bell,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SideNav() {
  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <Package2 className='h-6 w-6' />
            <span>Hospital</span>
          </Link>
          <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
            <Bell className='h-4 w-4' />
            <span className='sr-only'>Toggle notifications</span>
          </Button>
        </div>
        <div className='flex-1'>
          <nav className='grid items-start px-4 text-sm font-medium'>
            <SideNavItem href='/'>
              <Home className='h-4 w-4' />
              Inicio
            </SideNavItem>
            <SideNavItem href='/appointments'>
              <BookMarked className='h-4 w-4' />
              Citas
            </SideNavItem>
            <SideNavItem href='/patients'>
              <Users className='h-4 w-4' />
              Pacientes
            </SideNavItem>
            <SideNavItem href='/medical-certificates'>
              <FileBadge2 className='h-4 w-4' />
              Certificados
            </SideNavItem>
            <SideNavItem href='/prescriptions'>
              <ClipboardList className='h-4 w-4' />
              Recetas Medicas
            </SideNavItem>
            <SideNavItem href='/medicines'>
              <Tablets className='h-4 w-4' />
              Medicamentos
            </SideNavItem>
          </nav>
        </div>
      </div>
    </div>
  );
}

function SideNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className='flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary'
    >
      {children}
    </Link>
  );
}
