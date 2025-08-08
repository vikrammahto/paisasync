'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

const signUpSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  password: z.string().min(8).max(100),
});

const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Sign up data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your name" />
              </FormControl>
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
                  placeholder="Keep it strong please"
                  type="password"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className={'w-full'}>
          Sign Up
        </Button>
      </form>
      <p className="mt-3 text-sm">
        Already have an account?{' '}
        <Link href="/auth/log-in" className="text-emerald-700">
          Log in
        </Link>
      </p>
    </Form>
  );
};

export default SignUp;
