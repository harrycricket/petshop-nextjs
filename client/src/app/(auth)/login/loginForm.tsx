'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoginBody, LoginBodyType } from '@/schemaValidations/auth.schema';
import envConfig from '@/config';
import axios from 'axios';
import Link from 'next/link';

export default function LoginForm() {
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: LoginBodyType) {
    await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, {
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then((res) => res.json());
  }

  return (
    <div className="w-96">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (error) => console.log(error))}
          className="space-y-2 mb-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Input your email" {...field} />
                </FormControl>
                <FormDescription>Ex: harryvn@gmail.com</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Input your password" type="password" {...field} />
                </FormControl>
                <FormDescription>Ex: harry12#$vn</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full !mt-4">
            Sign in
          </Button>
        </form>
      </Form>
      <p className="text-orange-400">
        Do not have account yet?{' '}
        <Link href={'register'} className="underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
