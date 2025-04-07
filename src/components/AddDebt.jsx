// components/AddDebtForm.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';

// Import Shadcn UI components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CalendarIcon, AlertCircle } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

// Define form validation schema with Zod
const formSchema = z.object({
  name: z.string().min(1, { message: 'Debt name is required' }),
  debtType: z.string().min(1, { message: 'Debt type is required' }),
  amount: z
    .string()
    .min(1, { message: 'Amount is required' })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: 'Please enter a valid positive amount',
    }),
  interestRate: z
    .string()
    .optional()
    .refine(
      (val) => !val || (!isNaN(parseFloat(val)) && parseFloat(val) >= 0),
      {
        message: 'Please enter a valid interest rate',
      },
    ),
  minimumPayment: z
    .string()
    .optional()
    .refine(
      (val) => !val || (!isNaN(parseFloat(val)) && parseFloat(val) >= 0),
      {
        message: 'Please enter a valid payment amount',
      },
    ),
  dueDate: z.date().optional(),
  lender: z.string().optional(),
  notes: z.string().optional(),
});

const debtTypes = [
  { id: 'credit_card', label: 'Credit Card' },
  { id: 'student_loan', label: 'Student Loan' },
  { id: 'mortgage', label: 'Mortgage' },
  { id: 'personal_loan', label: 'Personal Loan' },
  { id: 'auto_loan', label: 'Auto Loan' },
  { id: 'medical_debt', label: 'Medical Debt' },
  { id: 'other', label: 'Other' },
];

export default function AddDebtForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState('');

  // Initialize form with react-hook-form and zod resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      debtType: '',
      amount: '',
      interestRate: '',
      minimumPayment: '',
      dueDate: undefined,
      lender: '',
      notes: '',
    },
  });

  const onSubmit = async (data) => {
    setServerError('');
    try {
      // Format data for API
      const payload = {
        ...data,
        amount: parseFloat(data.amount),
        interestRate: data.interestRate ? parseFloat(data.interestRate) : 0,
        minimumPayment: data.minimumPayment
          ? parseFloat(data.minimumPayment)
          : 0,
        createdAt: new Date().toISOString(),
      };

      // Simulate API call (replace with actual API call)
      console.log('Submitting debt:', payload);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success - redirect
      router.push('/debts');
    } catch (error) {
      console.error('Error adding debt:', error);
      setServerError('Failed to add debt. Please try again.');
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Add New Debt</CardTitle>
          <CardDescription>
            Track a new debt in your financial portfolio
          </CardDescription>
        </CardHeader>

        <CardContent>
          {serverError && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                {/* Debt Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Debt Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Credit Card, Car Loan, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Debt Type */}
                <FormField
                  control={form.control}
                  name="debtType"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Debt Type *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select debt type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {debtTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Amount */}
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Amount *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
                            $
                          </span>
                          <Input
                            className="pl-6"
                            placeholder="0.00"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Interest Rate */}
                <FormField
                  control={form.control}
                  name="interestRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interest Rate (%)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="0.00" {...field} />
                          <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
                            %
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Minimum Payment */}
                <FormField
                  control={form.control}
                  name="minimumPayment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Minimum Payment</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
                            $
                          </span>
                          <Input
                            className="pl-6"
                            placeholder="0.00"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Due Date */}
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Due Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Lender */}
                <FormField
                  control={form.control}
                  name="lender"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Lender / Financial Institution</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Bank name, credit card company, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Notes */}
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Notes</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any additional information about this debt"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <CardFooter className="flex justify-end space-x-3 px-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Adding...' : 'Add Debt'}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
