'use client';

import { Button } from '@/components/ui/button';
import {
  ArrowsDownUpIcon,
  CalendarBlankIcon,
  CommandIcon,
  DotOutlineIcon,
  FunnelSimpleIcon,
  PlusIcon,
} from '@phosphor-icons/react';
import {
  ArrowUpDownIcon,
  ChevronLeft,
  ChevronRight,
  MoreHorizontalIcon,
  Search,
} from 'lucide-react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { AvatarFallback, AvatarImage, Avatar } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { DOTS, usePagination } from '@/hooks/use-pagination';
TimeAgo.addDefaultLocale(en);

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const orderData: Order[] = [
  {
    id: 'CM9801',
    user: {
      name: 'Natali Craig',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
    },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: Date.now().toString(),
    status: 'In Progress',
  },
  {
    id: 'CM9802',
    user: {
      name: 'Kate Morrison',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: Date.now().toString(),
    status: 'Complete',
  },
  {
    id: 'CM9803',
    user: {
      name: 'Drew Cano',
      avatarUrl: 'https://i.pravatar.cc/150?img=4',
    },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: Date.now().toString(),
    status: 'Pending',
  },
  {
    id: 'CM9804',
    user: {
      name: 'Orlando Diggs',
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
    },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: Date.now().toString(),
    status: 'Approved',
  },
  {
    id: 'CM9805',
    user: {
      name: 'Andi Lane',
      avatarUrl: 'https://i.pravatar.cc/150?img=6',
    },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected',
  },
  {
    id: 'CM9801',
    user: {
      name: 'Natali Craig',
      avatarUrl: 'https://i.pravatar.cc/150?img=7',
    },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: Date.now().toString(),
    status: 'In Progress',
  },
  {
    id: 'CM9802',
    user: {
      name: 'Kate Morrison',
      avatarUrl: 'https://i.pravatar.cc/150?img=8',
    },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: Date.now().toString(),
    status: 'Complete',
  },
  {
    id: 'CM9803',
    user: {
      name: 'Drew Cano',
      avatarUrl: 'https://i.pravatar.cc/150?img=9',
    },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: Date.now().toString(),
    status: 'Pending',
  },
  {
    id: 'CM9804',
    user: {
      name: 'Orlando Diggs',
      avatarUrl: 'https://i.pravatar.cc/150?img=10',
    },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: Date.now().toString(),
    status: 'Approved',
  },
  {
    id: 'CM9805',
    user: {
      name: 'Andi Lane',
      avatarUrl: 'https://i.pravatar.cc/150?img=11',
    },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected',
  },
];
const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'id',
    header: ({ table }) => (
      <div className='flex items-center gap-2'>
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
        />
        User ID
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className='flex items-center gap-2'>
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label='Select all'
          />
          <span>#{row.original.id}</span>
        </div>
      );
    },
  },

  {
    accessorKey: 'user',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          User
          <ArrowUpDownIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original.user;
      return (
        <div className='flex items-center'>
          <Avatar>
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className='ml-2'>{user.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'project',
    header: 'Project',
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => {
      return <span>{row.original.address}</span>;
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      const date = new Date(row.original.date);
      const timeAgo = new TimeAgo('en-US');
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      return (
        <div className='flex items-center gap-1'>
          <CalendarBlankIcon size={20} />
          {date > oneWeekAgo ? (
            <span>{timeAgo.format(date)}</span>
          ) : (
            <span>
              {date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;
      let statusColor = '';
      switch (status) {
        case 'In Progress':
          statusColor = 'text-[#8A8CD9]';
          break;
        case 'Complete':
          statusColor = 'text-[#4AA785]';
          break;
        case 'Approved':
          statusColor = 'text-[#FFC555]';
          break;
        case 'Rejected':
          statusColor = 'text-gray-500/80';
          break;
        case 'Pending':
          statusColor = 'text-[#59A8D4]';
          break;
        default:
          statusColor = '';
      }
      return (
        <span
          className={`flex items-center rounded-full px-2 py-1 text-sm font-medium ${statusColor}`}
        >
          <DotOutlineIcon size={32} weight='fill' className={statusColor} />
          {status}
        </span>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(data.id)}
            >
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View order details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      pagination,
    },
    onPaginationChange: setPagination,
  });

  const paginationRange = usePagination({
    currentPage: pagination.pageIndex + 1, // hook uses 1-based index
    totalPageCount: table.getPageCount(),
    siblingCount: 1,
  });

  return (
    <div className='overflow-hidden rounded-md'>
      <Table className='border-none'>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className='text-muted-foreground'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft />
        </Button>

        {paginationRange?.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <span key={index} className='px-2 py-1'>
                &#8230;
              </span>
            );
          }

          // Render our Page Pills
          return (
            <Button
              key={index}
              variant={
                typeof pageNumber === 'number' &&
                pageNumber - 1 === table.getState().pagination.pageIndex
                  ? 'default'
                  : 'outline'
              }
              size='sm'
              onClick={() =>
                typeof pageNumber === 'number' &&
                table.setPageIndex(pageNumber - 1)
              }
            >
              {pageNumber}
            </Button>
          );
        })}

        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

function OrderPage() {
  return (
    <section className='h-full w-full flex-1 overflow-y-scroll p-8 pb-20'>
      <h2 className='text-xl font-semibold'>Order List</h2>

      <div className='bg-card mt-4 flex items-center justify-between rounded-lg p-1'>
        <div className='flex items-center rounded-md px-2 py-1'>
          <Button size={'icon'} variant={'ghost'}>
            <PlusIcon size={20} />
          </Button>
          <Button size={'icon'} variant={'ghost'}>
            <FunnelSimpleIcon size={20} />
          </Button>
          <Button size={'icon'} variant={'ghost'}>
            <ArrowsDownUpIcon size={20} />
          </Button>
        </div>

        <div className='text-foreground/50 mr-2 flex w-[220px] items-center justify-center rounded-md bg-black/20 px-2 py-1'>
          <Search size={20} className='mr-1' />
          <input
            type='text'
            placeholder='Search'
            className='placeholder:text-secondary-foreground/30 rounded-md border-0 text-sm shadow-none ring-0 outline-none focus:ring-0'
          />
          <CommandIcon className='text-lg' />
          <span>/</span>
        </div>
      </div>

      <div className='mt-4 rounded-lg'>
        <DataTable columns={columns} data={orderData} />
      </div>
    </section>
  );
}

export default OrderPage;
