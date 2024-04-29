import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import axios from 'axios';
import { ChevronsUpDown, Plus, Search, List, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

async function getData() {
  const { data } = await axios.get('http://localhost:80/api/medicines');
  return data;
}

export default async function Page() {
  const medicines = await getData();

  return (
    <div className='p-6 space-y-2'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Medicamentos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className={'flex justify-between'}>
        <div className={'lg:w-1/3 flex gap-2'}>
          <div className={'border flex-1 inline-flex gap-2 items-center px-4 rounded-md'}>
            <Search className={'w-5 h-5 text-muted-foreground'}/>
            <Input className={'border-none outline-0'} type={'text'} placeholder={'Buscar un medicamento...'}></Input>
          </div>
          <Button className={''}>Buscar</Button>
        </div>
        <div className={'flex gap-3'}>
          <Button variant={'outline'}><List/></Button>
          <Button variant={'outline'}><LayoutGrid/></Button>
          <Button className={'flex gap-2'}>
            <Plus className={'w-5 h-5'}/>
            Añadir
          </Button></div>
      </div>
      <div className='rounded-md border'>
        <div className='overlflow-hidden relative'>
          <Table className='w-full text-sm'>
            <TableHeader>
              <TableRow className='h-10 text-muted-foreground'>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Presentación</TableHead>
                <TableHead className='text-right'>Opciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medicines.map((medicine) => (
                <TableRow key={medicine.id} className='h-10'>
                  <TableCell>{medicine.id}</TableCell>
                  <TableCell>{medicine.name}</TableCell>
                  <TableCell>{medicine.quantity}</TableCell>
                  <TableCell>{medicine.presentation}</TableCell>
                  <TableCell className='text-right'>Placeholder</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
