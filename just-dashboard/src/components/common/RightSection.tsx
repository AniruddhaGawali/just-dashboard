import { BroadcastIcon, BugBeetleIcon, UserIcon } from '@phosphor-icons/react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

function RightSection() {
  const notificationData = [
    {
      title: 'You have a bug that needs to be fixed',
      time: 'Just now',
      icon: <BugBeetleIcon size={16} />,
    },
    {
      title: 'New user register',
      time: '59 minutes ago',
      icon: <UserIcon size={16} />,
    },
    {
      title: 'You have a bug that needs to be fixed',
      time: '12 hours ago',
      icon: <BugBeetleIcon size={16} />,
    },
    {
      title: 'Andi Lane subscribed to you',
      time: '3 days ago',
      icon: <BroadcastIcon size={16} />,
    },
  ];

  const activitiesData = [
    {
      title: 'You have a bug that needs to be fixed',
      time: 'Just now',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      title: 'New user register',
      time: '59 minutes ago',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      title: 'You have a bug that needs to be fixed',
      time: '12 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      title: 'Andi Lane subscribed to you',
      time: '3 days ago',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
  ];

  const contactsData = [
    {
      name: 'Natali Craig',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Drew Cano',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      name: 'Orlando Diggs',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Andi Lane',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    {
      name: 'Kate Morrison',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: 'Koray Okumus',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
  ];

  return (
    <section className='border-border h-full w-fit overflow-x-hidden overflow-y-scroll border-l p-8'>
      <div>
        <h3 className='flex items-center text-base font-semibold'>
          Notification
        </h3>
        <div className='scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-border scrollbar-track-transparent mt-6 flex max-h-[400px] flex-col gap-4 overflow-y-auto'>
          {notificationData.map((notification, index) => (
            <div key={index} className='border-border flex items-center gap-3'>
              <div className='bg-primary text-primary-foreground rounded-lg p-2'>
                {notification.icon}
              </div>
              <div>
                <p className='w-[90%] truncate overflow-hidden font-medium whitespace-nowrap'>
                  {notification.title}
                </p>
                <p className='text-muted-foreground text-sm'>
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='flex items-center text-base font-semibold'>
          Activities
        </h3>

        <div className='scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-border scrollbar-track-transparent mt-4 flex max-h-[400px] flex-col gap-1 overflow-x-hidden overflow-y-auto'>
          {activitiesData.map((activity, index) => (
            <div key={index} className='space-y-2'>
              <div className='border-border flex items-center gap-3'>
                <Avatar>
                  <AvatarImage
                    src={activity.avatar}
                    alt={activity.title}
                    className='h-10 w-10 rounded-full'
                  />
                  <AvatarFallback className='bg-muted text-muted-foreground flex h-10 w-10 items-center justify-center rounded-full font-bold'>
                    {activity.title.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className='w-fit'>
                  <p className='w-[20ch] truncate overflow-hidden font-medium whitespace-nowrap'>
                    {activity.title}
                  </p>
                  <p className='text-muted-foreground w-fit text-sm'>
                    {activity.time}
                  </p>
                </div>
              </div>
              <Separator
                orientation='vertical'
                className={`ml-5 !h-[20px] ${index == activitiesData.length - 1 ? 'hidden' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='flex items-center text-base font-semibold'>Contacts</h3>

        <div className='scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-border scrollbar-track-transparent mt-4 flex max-h-[400px] flex-col gap-4 overflow-y-auto'>
          {contactsData.map((contact, index) => (
            <div key={index} className='flex items-center gap-3'>
              <Avatar>
                <AvatarImage
                  src={contact.avatar}
                  alt={contact.name}
                  className='h-10 w-10 rounded-full'
                />
                <AvatarFallback className='bg-muted text-muted-foreground flex h-10 w-10 items-center justify-center rounded-full font-bold'>
                  {contact.name.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className='font-medium'>{contact.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightSection;
