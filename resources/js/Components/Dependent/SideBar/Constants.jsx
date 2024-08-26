import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CheckIcon from '@/Components/SVGIcons/Home/CheckIcon';
import EditIcon from '@/Components/SVGIcons/Home/EditIcon';
import DeleteIcon from '@/Components/SVGIcons/Home/DeleteIcon';
import Testimonial from '@/Components/SVGIcons/Home/Testimonials';

const AdminmenuItem = [
  { id: 1, label: 'Dashboard', icon: <DashboardOutlinedIcon />, link: '/admin/dashboard' },
  {
    id: 2,
    label: 'Companies',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
        />
      </svg>
    ),
    subItems: [
      { id: 1, label: 'To Review', link: '/admin/company/list' },
      { id: 2, label: 'Partial Matched', link: '/admin/partial-matched' },
      { id: 3, label: 'Matched', link: '/admin/matched' },
    ],
  },
  { id: 3, label: 'Mentors', icon: <PeopleAltOutlinedIcon />, link: '/admin/mentor/list' },
  {id : 4, label : "Testimonials", icon : <Testimonial />, link : '/admin/testimonial/list' },
  {id : 5, label : "Press", icon : <Testimonial />, link : '/admin/press/list' },
  {id : 6, label : "Declined Emails",
   icon : (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10.2892 21.9609H9.39111C6.14261 21.9609 4.51836 21.9609 3.50918 20.9358C2.5 19.9106 2.5 18.2607 2.5 14.9609V9.96093C2.5 6.6611 2.5 5.01119 3.50918 3.98607C4.51836 2.96094 6.14261 2.96094 9.39111 2.96094H12.3444C15.5929 2.96094 17.4907 3.01612 18.5 4.04125C19.5092 5.06637 19.5 6.6611 19.5 9.96093V11.1473" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 15H11M7 10H15" stroke="#757575" strokeWidth="2" strokeLinecap="round"/>
        <path opacity="0.93" d="M20.7598 14.8785C19.8544 13.8641 19.3112 13.9245 18.7076 14.1056C18.2851 14.166 16.8365 15.8568 16.2329 16.3952C15.2419 17.3743 14.2464 18.3823 14.1807 18.5138C13.9931 18.8188 13.8186 19.3592 13.7341 19.963C13.5771 20.8688 13.3507 21.8885 13.6375 21.9759C13.9242 22.0632 14.7239 21.8954 15.6293 21.7625C16.2329 21.6538 16.6554 21.533 16.9572 21.3519C17.3797 21.0983 18.1644 20.2046 19.5164 18.8761C20.3644 17.9833 21.1823 17.3664 21.4238 16.7626C21.6652 15.8568 21.3031 15.3737 20.7598 14.8785Z" stroke="#757575" strokeWidth="2"/>
    </svg>
  ), link : '/declined-mails' },
  {id : 6, label : "Match-end Emails",
  icon : (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
       <path d="M10.2892 21.9609H9.39111C6.14261 21.9609 4.51836 21.9609 3.50918 20.9358C2.5 19.9106 2.5 18.2607 2.5 14.9609V9.96093C2.5 6.6611 2.5 5.01119 3.50918 3.98607C4.51836 2.96094 6.14261 2.96094 9.39111 2.96094H12.3444C15.5929 2.96094 17.4907 3.01612 18.5 4.04125C19.5092 5.06637 19.5 6.6611 19.5 9.96093V11.1473" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
       <path d="M7 15H11M7 10H15" stroke="#757575" strokeWidth="2" strokeLinecap="round"/>
       <path opacity="0.93" d="M20.7598 14.8785C19.8544 13.8641 19.3112 13.9245 18.7076 14.1056C18.2851 14.166 16.8365 15.8568 16.2329 16.3952C15.2419 17.3743 14.2464 18.3823 14.1807 18.5138C13.9931 18.8188 13.8186 19.3592 13.7341 19.963C13.5771 20.8688 13.3507 21.8885 13.6375 21.9759C13.9242 22.0632 14.7239 21.8954 15.6293 21.7625C16.2329 21.6538 16.6554 21.533 16.9572 21.3519C17.3797 21.0983 18.1644 20.2046 19.5164 18.8761C20.3644 17.9833 21.1823 17.3664 21.4238 16.7626C21.6652 15.8568 21.3031 15.3737 20.7598 14.8785Z" stroke="#757575" strokeWidth="2"/>
   </svg>
 ), link : '/match-end-mails' },
  {
    id: 7,
    label: 'Content',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10.2892 21.9609H9.39111C6.14261 21.9609 4.51836 21.9609 3.50918 20.9358C2.5 19.9106 2.5 18.2607 2.5 14.9609V9.96093C2.5 6.6611 2.5 5.01119 3.50918 3.98607C4.51836 2.96094 6.14261 2.96094 9.39111 2.96094H12.3444C15.5929 2.96094 17.4907 3.01612 18.5 4.04125C19.5092 5.06637 19.5 6.6611 19.5 9.96093V11.1473" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 15H11M7 10H15" stroke="#757575" strokeWidth="2" strokeLinecap="round"/>
          <path opacity="0.93" d="M20.7598 14.8785C19.8544 13.8641 19.3112 13.9245 18.7076 14.1056C18.2851 14.166 16.8365 15.8568 16.2329 16.3952C15.2419 17.3743 14.2464 18.3823 14.1807 18.5138C13.9931 18.8188 13.8186 19.3592 13.7341 19.963C13.5771 20.8688 13.3507 21.8885 13.6375 21.9759C13.9242 22.0632 14.7239 21.8954 15.6293 21.7625C16.2329 21.6538 16.6554 21.533 16.9572 21.3519C17.3797 21.0983 18.1644 20.2046 19.5164 18.8761C20.3644 17.9833 21.1823 17.3664 21.4238 16.7626C21.6652 15.8568 21.3031 15.3737 20.7598 14.8785Z" stroke="#757575" strokeWidth="2"/>
      </svg>
    ),
    subItems: [
      { id: 1, label: 'Section 1', link: '/admin/section-one' },
      { id: 2, label: 'Section 2', link: '/admin/section-two' },
      { id: 3, label: 'Section 3', link: '/admin/section-three' },
    ],
  },
  {
    id: 8,
    label: 'Settings',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
    subItems: [
      // { id: 1, label: 'Profile Settings', link: '/admin/profile-setting' },
      { id: 2, label: 'Account Settings', link: '/admin/account-setting' },
    ],
  },
];

const MentorMenuItem = [
    { id: 1, label: 'My Account', icon: <DashboardOutlinedIcon />, link: '' },
]

const icons = [
  { id: 1, icon: <CheckIcon /> },
  { id: 2, icon: <EditIcon /> },
  { id: 3, icon: <DeleteIcon /> },
];

const Constants = { MentorMenuItem, AdminmenuItem, icons };

export default Constants;

