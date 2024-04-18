'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { z } from 'zod';
import { axios } from '@/lib/utils';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export default function Login() {
  return (
    <div className='flex w-full flex-wrap content-center'>
      <div className='mx-auto grid h-fit w-[350px] gap-3'>
        <div className='grid gap-1'>
          <h1 className='text-2xl font-semibold tracking-tight'>
            Accede a tu cuenta
          </h1>
          <p className='text-sm text-muted-foreground'>
            Rellena los campos de abajo para iniciar sesión.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/login', data);
    } catch (error) {
      // Handle login error response
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-3'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <div className='flex'>
                <FormLabel>Contraseña</FormLabel>
                <Link
                  href='#'
                  className='ml-auto inline-block text-sm underline'
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <FormControl>
                <Input type='password' placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          Enviar
        </Button>
      </form>
    </Form>
  );
}
