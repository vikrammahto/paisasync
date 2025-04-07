// AddSavingGoal.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { CalendarIcon } from 'lucide-react';

// Zod schema for form validation
const savingsGoalSchema = z.object({
  goal_name: z
    .string()
    .min(3, 'Goal name must be at least 3 characters')
    .max(50, 'Goal name must not exceed 50 characters'),
  target_amount: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: 'Target amount must be a positive number',
    }),
  current_amount: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
      message: 'Current amount must be a non-negative number',
    })
    .optional(),
  deadline: z
    .date({
      required_error: 'Please select a deadline date',
    })
    .refine((date) => date > new Date(), {
      message: 'Deadline must be in the future',
    }),
  priority: z.enum(['low', 'medium', 'high'], {
    required_error: 'Please select a priority level',
  }),
});

export default function AddSavingGoal() {
  const form = useForm({
    resolver: zodResolver(savingsGoalSchema),
    defaultValues: {
      goal_name: '',
      target_amount: '',
      current_amount: '0',
      deadline: new Date(new Date().setMonth(new Date().getMonth() + 6)),
      priority: 'medium',
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Transform string amounts to numbers for database storage
      const formattedData = {
        ...data,
        target_amount: parseFloat(data.target_amount),
        current_amount: parseFloat(data.current_amount || '0'),
      };

      console.log('Submitting savings goal:', formattedData);

      // Here you would typically send this data to your backend API
      // await api.post('/savings-goals', formattedData);

      toast({
        title: 'Savings Goal Created',
        description: `Your savings goal "${data.goal_name}" has been created successfully.`,
      });

      form.reset();
    } catch (error) {
      console.error('Error creating savings goal:', error);
      toast({
        title: 'Error',
        description:
          'There was a problem creating your savings goal. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Create New Savings Goal</CardTitle>
        <CardDescription>
          Set up a new savings goal with a target amount and deadline.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="goal_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goal Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., New Car, Vacation, Emergency Fund"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Give your savings goal a clear, descriptive name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="target_amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="5000.00"
                      {...field}
                      onChange={(e) => {
                        // Allow only numbers and decimal points
                        const value = e.target.value.replace(/[^0-9.]/g, '');
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    How much do you need to save in total?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="current_amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="0.00"
                      {...field}
                      onChange={(e) => {
                        // Allow only numbers and decimal points
                        const value = e.target.value.replace(/[^0-9.]/g, '');
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    How much have you already saved? (Default: 0)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Deadline</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className="flex w-full justify-start text-left font-normal"
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
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    When do you want to achieve this savings goal?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Set the importance level of this savings goal.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Savings Goal'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
