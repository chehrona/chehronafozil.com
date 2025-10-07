export const tech = [
    { icon: 'devicon-react-original', title: 'React' },
    { icon: 'devicon-react-original', title: 'React Native' },
    { icon: 'devicon-typescript-plain', title: 'TypeScript' },
    { icon: 'devicon-javascript-plain', title: 'JavaScript' },
    { icon: 'devicon-html5-plain', title: 'HTML5' },
    { icon: 'devicon-css3-plain', title: 'CSS3' },
    { icon: 'devicon-jquery-plain', title: 'jQuery' },

    // Backend
    { icon: 'devicon-nodejs-plain', title: 'Node.js' },
    { icon: 'devicon-express-original', title: 'Express.js' },
    { icon: 'devicon-django-plain', title: 'Django' },
    { icon: 'devicon-python-plain', title: 'Python' },
    { icon: 'fa-solid fa-cogs', title: 'RESTful API' },
    { icon: 'devicon-docker-plain', title: 'Docker' },

    // Database
    { icon: 'devicon-mongodb-plain', title: 'MongoDB' },
    { icon: 'devicon-mysql-plain', title: 'MySQL' },
    { icon: 'devicon-firebase-plain', title: 'Firebase' },

    // Extra
    { icon: 'devicon-git-plain', title: 'Git' },
    { icon: 'devicon-github-plain', title: 'GitHub' },
    { icon: 'devicon-jira-plain', title: 'Jira' },
    { icon: 'devicon-figma-plain', title: 'Figma' },
];

export const projectList = [
    {
        title: 'thetajikheritage.com',
        desc: 'A digital corner for all things Tajik, from history to language quirks, and everything in between. I’m a self-confessed history and language nerd, so I built this site to tag along with my Instagram page (with a whopping 1000+ followers!) and give my obsession with Tajik culture a proper home.<br><br>* Hosted on AWS EC2 with Docker.',
        tech: [
            {
                name: 'Next.js',
                icon: 'devicon-nextjs-original',
            },
            { name: 'React.js', icon: 'devicon-react-original' },
            { name: 'TypeScript', icon: 'devicon-typescript-original' },
            { name: 'Material UI', icon: 'devicon-materialui-plain' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain' },
            { name: 'Express.js', icon: 'devicon-express-original' },
            { name: 'Meilisearch', icon: '/icons/meili.svg' },
            { name: 'RESTful API', icon: 'fa-solid fa-cogs' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
            { name: 'Docker', icon: 'devicon-docker-plain' },
            { name: 'Caddy', icon: '/icons/caddy.svg' },
            { name: 'AWS', icon: '/icons/aws.svg' },
        ],
        buttons: [
            {
                link: 'https://www.thetajikheritage.com/',
                icon: 'fa-solid fa-play',
                name: 'Run',
            }
        ],
        image: {
            side: true,
            src: '/1.png',
        },
    },
    {
        title: 'Farhang Dictionary',
        desc: 'I came across many Reddit posts from people looking for a good electronic Tajik dictionary, so I jumped on the opportunity to build one. Now it’s a full platform, accessible on the web and through an iOS app, where users can sign in, favorite words, and play language games.<br><br>* The Android app is currently in testing.',
        tech: [
            { name: 'React Native', icon: 'devicon-react-original' },
            { name: 'React Navigation', icon: '/icons/reactnavigation.svg' },
            {
                name: 'Next.js',
                icon: 'devicon-nextjs-original',
            },
            { name: 'Django', icon: 'devicon-django-plain' },
            { name: 'MySQL', icon: 'devicon-mysql-plain' },
            { name: 'RESTful API', icon: 'fa-solid fa-cogs' },
            { name: 'Docker', icon: 'devicon-docker-plain' },
            { name: 'Caddy', icon: '/icons/caddy.svg' },
            { name: 'AWS', icon: '/icons/aws.svg' },
        ],
        buttons: [
            {
                link: 'https://apps.apple.com/us/app/farhang/id6747536754',
                icon: 'fa-brands fa-apple',
                name: 'iOS',
            },
            // {
            //     link: 'https://apps.apple.com/us/app/farhang/id6747536754',
            //     icon: 'devicon-android-plain',
            //     name: 'Android',
            // },
            {
                link: 'https://farhang.thetajikheritage.com/en',
                icon: 'fa-solid fa-play',
                name: 'Web',
            },
            // {
            //     link: 'https://github.com/chehrona/RecipeManager-backend',
            //     icon: 'fa-brands fa-github',
            //     name: 'Backend',
            // },
        ],
        image: {
            side: false,
            src: '/2.png',
        },
    },
    {
        title: 'Multiplayer Rock-Paper-Scissors',
        desc: 'Chinese or Pizza? Enter your name and test your fate, put an end to that debate. The chat functionality allows for extra intimidation as the race for the win gets heated.',
        tech: [
            { name: 'HTML', icon: 'devicon-html5-plain' },
            { name: 'CSS', icon: 'devicon-css3-plain' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            // { name: 'Sass', icon: 'devicon-sass-original' },
            // { name: 'React', icon: 'devicon-react-plain' },
            // { name: 'TypeScript', icon: 'devicon-typescript-plain' },
            { name: 'Firebase', icon: 'devicon-firebase-plain' },
        ],
        buttons: [
            {
                link: 'https://chehrona.github.io/RPS-Multiplayer/',
                icon: 'fa-solid fa-play',
                name: 'Run',
            },
            {
                link: 'https://github.com/chehrona/RPS-Multiplayer',
                icon: 'fa-brands fa-github',
                name: 'Source',
            },
        ],
        image: {
            side: true,
            src: '/3.png',
        },
    },
];

export const educationList = [
    {
        title: 'Master of Science, Biochemistry',
        subtitle: '',
        uni: 'McGill University',
        buttons: {
            link: 'https://escholarship.mcgill.ca/concern/theses/gb19fb412',
            name: 'Thesis',
        },
    },
    {
        title: 'Bachelor of Science, Biochemistry',
        subtitle: 'Minor: Computer Science',
        uni: 'Maryville College',
    },
];

export const certificateList = [
    {
        name: '• Scientific Computing with Python - ',
        link: 'https://www.freecodecamp.org/certification/chehrona/scientific-computing-with-python-v7',
    },
    {
        name: '• Data Analysis with Python - ',
        link: 'https://www.freecodecamp.org/certification/chehrona/data-analysis-with-python-v7',
    },
    {
        name: '• JavaScript Algorithms & Data Structures - ',
        link: 'https://www.freecodecamp.org/certification/chehrona/javascript-algorithms-and-data-structures',
    },
    {
        name: '• Responsive Web Design - ',
        link: 'https://www.freecodecamp.org/certification/chehrona/responsive-web-design',
    },
];

export const experienceList = [
    {
        dates: '2024 - Pres.',
        title: 'Software Engineer',
        place: 'gloApp',
        city: 'Toronto, ON',
        desc: [
            '• Design and implement the mobile app architecture from the ground up using <b>React Native (TypeScript)</b> for frontend and <b>Django with SQL</b> for backend',
            '• Develop full-stack features based on Figma mockups, ensuring responsiveness and intuitive user experience',
            '• Build and optimize RESTful APIs to enable secure and efficient communication between the app and backend',
            '• Lead <b>Agile</b> sprint planning by creating, assigning, and tracking development tasks using <b>Jira</b>',
        ],
    },
    {
        dates: '2022 - 2023',
        title: 'Full Stack Developer',
        place: 'nference',
        city: 'Toronto, ON',
        desc: [
            '• Built a fea&shyture for on&shyboard&shying tours by in&shyteg&shyrat&shying in&shyte&shyract&shyive ele&shyments and mul&shyti-page ca&shypa&shybi&shyli&shyties by fork&shying the Shepherd.js lib&shyra&shyry',
            '• Stream&shylined tour crea&shytion/ mo&shydi&shyfi&shyca&shytion with a user-friend&shyly side&shybar, re&shyduc&shying reliance on developers',
            '• Au&shyto&shymated slide re&shynam&shying for QC by ex&shytract&shying vi&shytal da&shyta, such as case ID, from slide barcodes',
            '• De&shyve&shyloped scan&shyner hard&shyware error re&shyport&shying for im&shyproved issue track&shying, centralized knowledge base and operator in&shyfor&shyma&shytion shar&shying be&shytween shifts',
        ],
    },
    {
        dates: '2020 - 2022',
        title: 'Research Technician',
        place: 'University Health Network',
        city: 'Toronto, ON',
        desc: [
            '• Established new protocols for gene engineering and flow cytometry',
            '• Managed the mice facility and systematized DNA screening procedures',
            '• Co-authored two scientific papers',
        ],
    },
    {
        dates: '2018 - 2020',
        title: 'Graduate Teaching Assistant',
        place: 'McGill University',
        city: 'Montréal, QC',
        desc: [
            '• Provided review sessions (active learning approach)',
            '• Led problem solving lectures and monitored student responses (~400 students)',
            '• Graded exams and discussed marks during viewing sessions',
        ],
    },
];
