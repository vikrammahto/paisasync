'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(100),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Login data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="you@domain.com" type="email" />
              </FormControl>
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
                  {...field}
                  placeholder="Enter your password"
                  type="password"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className={'w-full'}>
          Login
        </Button>
      </form>
      <p className="mt-3 text-sm">
        Don't have an account?{' '}
        <Link href="/auth/sign-up" className="text-emerald-700">
          Sign up
        </Link>
      </p>
    </Form>
  );
};

export default Login;
