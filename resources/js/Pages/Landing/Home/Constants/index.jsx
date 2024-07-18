import imagecard1 from '../../../../Assets/Images/Frame 138.png'
import imagecard2 from '../../../../Assets/Images/Rectangle 29.png'
import imagecard3 from '../../../../Assets/Images/Rectangle 40.png'
import imagecard4 from '../../../../Assets/Images/Rectangle 41.png'
import feature1 from '../../../../Assets/Images/Organic-food.png'
import feature2 from '../../../../Assets/Images/Tech-wave.png'
import feature3 from '../../../../Assets/Images/Urban.png'
import User1 from '../../../../Assets/Images/Nguyen-Thi.png'
import User2 from '../../../../Assets/Images/Ravi-Kumar.png'
import User3 from '../../../../Assets/Images/Karen-Lee.png'
import Signup from '@/Components/SVGIcons/Home/Signup'
import Create from '@/Components/SVGIcons/Home/Create'
import Mentor from '@/Components/SVGIcons/Home/Mentor'
import ConnectSchedule from '@/Components/SVGIcons/Home/ConnectSchedule'
import Bulb from '@/Components/SVGIcons/Home/Bulb';


import TestMontialUser1 from '../../../../Assets/Images/Ellipse 1.png'
import TestMontialUser2 from '../../../../Assets/Images/Ellipse 2.png'
import TestMontialUser3 from '../../../../Assets/Images/Ellipse 3.png'

import { Avatar, Badge } from '@mui/material'
import Support from '@/Components/SVGIcons/Home/Support'
import Impact from '@/Components/SVGIcons/Home/Impact'
import Connection from '@/Components/SVGIcons/Home/Connection'

const ImageCard = [
    {
        img:imagecard2,
        name: 'Hana Kim',
        site: 'Digital Marketing',
        experience: '15 Years Experience',
        email: 'Lisapson@email.com',
    },
    {
        img:imagecard4,
        name: 'Amir Hassan',
        site: ' Strategic Investments',
        experience: '20 Years Experience',
        email: 'Michael@email.com',
    },
    {
        img:imagecard3,
        name: 'Hana Kim',
        site: 'Product Development',
        experience: '17 Years Experience',
        email: 'Leekaren@email.com',
    },
    {
        img:imagecard1,
        name: 'Raj Kumar',
        site: 'Scalable Solutions',
        experience: '12 Years Experience',
        email: 'Jmaeszs@email.com',
    }
];

const guide = [
    {
        icon: <Signup/>,
        counter: "01",
        title: 'Sign Up / Register',
        caption: 'Create your free account by providing your basic information and setting up a profile.',
    },
    {
        icon: <Create/>,
        counter: "02",
        title: 'Create Business Profile',
        caption: 'Fill in details about your business, including your industry, goals, and the challenges you face.',
    },
    {
        icon: <Mentor/>,
        counter: "03",
        title: 'Get Matched with a Mentor',
        caption: 'Our AI algorithm will match you with the best mentor based on your profile and needs. This ensures you get the most suitable guidance and support.',
    },
    {
        icon: <ConnectSchedule/>,
        counter: "04",
        title: 'Connect and Schedule',
        caption: 'Reach out to your chosen mentor and schedule a meeting or consultation session at a convenient time.',
    },
];

const FeatureCard = [
    {
        img:feature1,
        name: 'Organic Food Production',
        tittle: 'Organic Food Production',
        text: '1Discover how digital marketing strategies can propel your startup to new heights. Learn about SEO, social media, and content marketing techniques that drive traffic and increase conversions.',
        email: 'Lisapson@email.com',
        user:{
            img:User1,
            name:'Nguyen Thi',
            date:'Marc 16, 2024'
        }
    },
    {
        img:feature2,
        name: 'TechWave Solutions',
        tittle: ' IT Services and Software Development',
        text: 'A comprehensive guide to financial planning for small businesses. Understand the basics of budgeting, forecasting, and managing cash flow to ensure your business  financial health.',
        email: 'Michael@email.com',
        user:{
            img:User2,
            name:'Ravi Kumar',
            date:'Feb 25, 2024'
        }
    },
    {
        img:feature3,
        name: 'Urban Chic',
        tittle: 'Fashion Retail',
        text: 'Learn the steps involved in taking a product from concept to market. Karen shares her experience in product innovation and development, offering practical tips for entrepreneurs.',
        email: 'Leekaren@email.com',
        user:{
            img:User3,
            name:'Karen Lee',
            date:'Jan 6, 2024'
        }
    },
];

const Testimonials = [
    {
        description: `“Working with my mentor was a transformative experience.”`,
        user: `Joyce Lian`,
        img: TestMontialUser1,
    },
    {
        description: `The mentors guidance and insights have broadened my perspectives`,
        user: `Aaron Chen`,
        img: TestMontialUser2,
    },
    {
        description: `Their insights helped me grow both personally and professionally`,
        user: `Alex Lim`,
        img: TestMontialUser3,
    },
]

const Benefits  = [
    {
        icon : <Bulb />,
        title : 'Empowerment',
        description : 'We strive to empower entrepreneurs by offering them the tools, resources, and mentorship'
    },
    {
        icon : <Connection />,
        title : 'Connection',
        description : "Facilitate meaningful connections between mentors and mentees to foster collaboration and learning"
    },
    {
        icon : <Impact />,
        title : 'Impact',
        description : 'Drive positive change by enabling entrepreneurs to implement sustanable and impactful business practices'
    },
    {
        icon : <Support />,
        title : 'Support',
        description : 'Provide continuous support through a community of mentors who are commited to the success of their mentees'
    }
]

const Constants = {
    ImageCard,
    guide,
    FeatureCard,
    Testimonials,
    Benefits
};


export default Constants;
