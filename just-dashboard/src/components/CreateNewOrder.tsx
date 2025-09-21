import {
  useCreateOrderMutation,
  useGetAllUsersQuery,
} from '@/redux/slice/orderApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { z } from 'zod';

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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { CalendarIcon } from '@phosphor-icons/react';
import { Button } from './ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LoadingSpinner } from './ui/spinner';

enum OrderStatus {
  InProgress = 'In Progress',
  Complete = 'Complete',
  Approved = 'Approved',
  Rejected = 'Rejected',
  Pending = 'Pending',
}

const createOrderFormSchema = z.object({
  userId: z.number({
    error: 'User is required',
  }),
  project: z.string().min(1, 'Project name is required'),
  address: z.string().min(1, 'Address is required'),
  date: z.date({
    error: 'Date is required',
  }),
  status: z.number({
    error: 'Status is required',
  }),
});

function AddNewOrder({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { data: allUsers, isLoading } = useGetAllUsersQuery();
  const [createNewOrder, { isLoading: isCreating, isError, error }] =
    useCreateOrderMutation();

  const form = useForm<z.infer<typeof createOrderFormSchema>>({
    resolver: zodResolver(createOrderFormSchema),
    defaultValues: {
      address: '',
      date: new Date(),
      project: '',
      status: 0,
      userId: undefined,
    },
  });

  const statuses = [
    { label: 'Pending', value: 0 },
    { label: 'Approved', value: 1 },
    { label: 'In Progress', value: 2 },
    { label: 'Completed', value: 3 },
    { label: 'Rejected', value: 4 },
  ];

  const users = allUsers
    ? allUsers.map((user) => ({
        label: {
          name: user.name,
          avatar: user.avatar_url,
        },
        value: user.id,
      }))
    : [];

  function onSubmit(values: z.infer<typeof createOrderFormSchema>) {
    const orderData = {
      ...values,
      userId: String(values.userId), // Convert userId to string
    };
    createNewOrder(orderData)
      .unwrap()
      .then(() => {
        form.reset();
        onOpenChange(false);
      })
      .catch((error) => {
        console.error('Failed to create order:', error);
      });
  }

  return (
    <Dialog defaultOpen={false} open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Order</DialogTitle>
          <DialogDescription>
            Add all the necessary information to create a new order.
          </DialogDescription>
        </DialogHeader>

        <div>
          <div>
            {isError && (
              <div className='bg-destructive/20 text-destructive-foreground my-4 flex items-center gap-2 rounded-md p-2 text-sm font-semibold'>
                Error creating order:{' '}
                {error && 'error' in error ? error.error : 'Unknown error'}
              </div>
            )}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='address'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder='Address' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the address of the order.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='project'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project</FormLabel>
                    <FormControl>
                      <Input placeholder='Project Name' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the name of the project.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex items-center justify-between'>
                <FormField
                  control={form.control}
                  name='date'
                  render={({ field }) => (
                    <FormItem className='flex flex-col'>
                      <FormLabel>Order Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            captionLayout='dropdown'
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        This is the date of the order.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='status'
                  render={({ field }) => (
                    <FormItem className='flex flex-col'>
                      <FormLabel>Status</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant='outline'
                              role='combobox'
                              className={cn(
                                'w-[200px] justify-between',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value >= 0
                                ? statuses.find(
                                    (status) => status.value === field.value
                                  )?.label
                                : 'Select Status'}
                              <ChevronsUpDown className='opacity-50' />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-[200px] p-0'>
                          <Command>
                            <CommandList>
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {statuses.map((status) => (
                                  <CommandItem
                                    value={status.label}
                                    key={status.value}
                                    onSelect={() => {
                                      form.setValue('status', status.value);
                                    }}
                                  >
                                    {status.label}
                                    <Check
                                      className={cn(
                                        'ml-auto',
                                        status.value === field.value
                                          ? 'opacity-100'
                                          : 'opacity-0'
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Select the status of the order.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='userId'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel>User</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant='outline'
                            role='combobox'
                            className={cn(
                              'w-[200px] justify-between',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            <Avatar>
                              <AvatarImage
                                src={
                                  users.find(
                                    (user) => user.value === field.value
                                  )?.label.avatar
                                }
                                alt={
                                  users.find(
                                    (user) => user.value === field.value
                                  )?.label.name
                                }
                                sizes='20px'
                              />
                              <AvatarFallback>
                                {users
                                  .find((user) => user.value === field.value)
                                  ?.label.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            {field.value
                              ? users.find((user) => user.value === field.value)
                                  ?.label.name
                              : 'Select User'}
                            <ChevronsUpDown className='opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-[200px] p-0'>
                        <Command>
                          <CommandInput
                            placeholder='Search framework...'
                            className='h-9'
                          />
                          <CommandList>
                            <CommandEmpty className='flex items-center justify-center'>
                              {isLoading ? (
                                <LoadingSpinner />
                              ) : (
                                'No user found.'
                              )}
                            </CommandEmpty>
                            <CommandGroup>
                              {users.map((user) => (
                                <CommandItem
                                  value={user.label.name}
                                  key={user.value}
                                  onSelect={() => {
                                    form.setValue('userId', user.value);
                                  }}
                                >
                                  <Avatar>
                                    <AvatarImage
                                      src={user.label.avatar}
                                      alt={user.label.name}
                                      sizes='20px'
                                    />
                                    <AvatarFallback>
                                      {user.label.name.charAt(0)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className='ml-2'>
                                    {user.label.name}
                                  </span>
                                  <Check
                                    className={cn(
                                      'ml-auto',
                                      user.value === field.value
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      This is the language that will be used in the dashboard.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className='w-full'
                disabled={isCreating || isLoading}
                type='submit'
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewOrder;
