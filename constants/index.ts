export const sidebarLinks = [
   {
      label: 'Home',
      imgUrl: '/icons/Home.svg',
      route: '/',
   },
   {
      label: 'Upcoming',
      imgUrl: '/icons/upcoming.svg',
      route: '/upcoming',
   },
   {
      label: 'Previous',
      imgUrl: '/icons/previous.svg',
      route: '/previous',
   },
   {
      label: 'Recordings',
      imgUrl: '/icons/Video.svg',
      route: '/recordings',
   },
   {
      label: 'Personal Room',
      imgUrl: '/icons/add-personal.svg',
      route: '/personal-room',
   },
];

/* Formated current time and date */

const now: Date = new Date();

const dateOptions: Intl.DateTimeFormatOptions = {
   weekday: 'long',
   year: 'numeric',
   month: 'long',
   day: 'numeric'
};

const timeOptions: Intl.DateTimeFormatOptions = {
   hour: 'numeric',
   minute: 'numeric',
   hour12: true,
};

const formattedTime: string = now.toLocaleTimeString('en-Us', timeOptions);
const formattedDate: string = now.toLocaleDateString('en-US', dateOptions);

export const timeDate = {
   time: `${formattedTime}`,
   date: `${formattedDate}`,
};
