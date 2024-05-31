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
import {
  RegisterBody,
  RegisterBodyType,
} from '@/schemaValidations/auth.schema';
import envConfig from '@/config';
import axios from 'axios';
import Link from 'next/link';

export default function RegisterForm() {
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: RegisterBodyType) {
    // await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`, {
    //   body: JSON.stringify(values),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    // }).then((res) => res.json());

    try {
      const response = await axios.post(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`,
        values,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(response);

      return response.data; // Assuming the response contains registration data
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Input your username" {...field} />
                </FormControl>
                <FormDescription>Ex: Harry VN</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
                  <Input
                    placeholder="Input your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Ex: harry12#$vn</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Re-input your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Ex: harry12#$vn</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full !mt-4">
            Sign up
          </Button>
        </form>
      </Form>
      <p className="text-orange-400">
        Already have an account?{' '}
        <Link href={'login'} className="underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
