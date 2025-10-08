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
    { icon: 'api', title: 'RESTful API' },
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
        desc: 'A digital corner for all things Tajik, from history to language quirks, and everything in between. I’m a self-confessed history and language nerd, so I built this site to tag along with my Instagram page (with a whopping 1000+ followers!) and give my obsession with Tajik culture a proper home.<br><br>▹ Hosted on AWS EC2 with Docker.',
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
            { name: 'Meilisearch', icon: 'meili' },
            { name: 'RESTful API', icon: 'api' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
            { name: 'Docker', icon: 'devicon-docker-plain' },
            { name: 'Caddy', icon: 'caddy' },
            { name: 'AWS', icon: 'aws' },
        ],
        buttons: [
            {
                link: 'https://www.thetajikheritage.com/',
                icon: 'web',
                name: 'Visit',
            }
        ],
        image: {
            side: true,
            src: '/1.png',
        },
    },
    {
        title: 'Farhang Dictionary',
        desc: 'I came across many Reddit posts from people looking for a good electronic Tajik dictionary, so I jumped on the opportunity to build one. Now it’s a full platform, accessible on the web and through an iOS app, where users can sign in, favorite words, and play vocabulary games.<br><br>▹ The Android app is currently in testing.',
        tech: [
            { name: 'React Native', icon: 'devicon-react-original' },
            { name: 'React Navigation', icon: 'reactnav' },
            {
                name: 'Next.js',
                icon: 'devicon-nextjs-original',
            },
            { name: 'Django', icon: 'devicon-django-plain' },
            { name: 'MySQL', icon: 'devicon-mysql-plain' },
            { name: 'RESTful API', icon: 'api' },
            { name: 'Docker', icon: 'devicon-docker-plain' },
            { name: 'Caddy', icon: 'caddy' },
            { name: 'AWS', icon: 'aws' },
        ],
        buttons: [
            {
                link: 'https://apps.apple.com/us/app/farhang/id6747536754',
                icon: 'ios',
                name: 'iOS',
            },
            // {
            //     link: 'https://apps.apple.com/us/app/farhang/id6747536754',
            //     icon: 'devicon-android-plain',
            //     name: 'Android',
            // },
            {
                link: 'https://farhang.thetajikheritage.com/en',
                icon: 'web',
                name: 'Visit',
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
                icon: 'web',
                name: 'Visit',
            },
            {
                link: 'https://github.com/chehrona/RPS-Multiplayer',
                icon: 'github',
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
        name: 'Scientific Computing with Python - ',
        link: 'https://www.freecodecamp.org/certification/chehrona/scientific-computing-with-python-v7',
    },
    {
        name: 'Data Analysis with Python - ',
        link: 'https://www.freecodecamp.org/certification/chehrona/data-analysis-with-python-v7',
    },
    {
        name: 'JavaScript Algorithms & Data Structures - ',
        link: 'https://www.freecodecamp.org/certification/chehrona/javascript-algorithms-and-data-structures',
    },
    {
        name: 'Responsive Web Design - ',
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
            'Design and implement mobile-first architecture using <b>React Native (TypeScript)</b> and <b>Django (Python)</b> for a wellness-related app',
            'Integrate <b>SQL</b>-based relational databases, secure authentication providers and responsive UI',
            'Build and optimize RESTful APIs for scalable client-server communication, leveraging <b>Docker</b> containers and CI/CD pipelines for cloud-ready deployments',
            'Lead Agile sprint planning, creating and tracking development tasks in Jira for a four-person team',
        ],
    },
    {
        dates: '2022 - 2023',
        title: 'Full Stack Developer',
        place: 'nference, Inc.',
        city: 'Toronto, ON',
        desc: [
            'Developed and scaled an in-house onboarding framework by extending <b>Shepherd.js</b> with custom interactivity and persistent state across multiple URLs',
            'Built a no-code CMS for onboarding creation, enabling a team of <b>10+ UI/UX designers</b> to design and launch flows independently, reducing engineering overhead',
            'Automated data preprocessing for ML pipelines with Python RegEx filters, streamlining QC workflows and pathology slide analysis',
            'Deployed centralized error reporting and a dynamic troubleshooting guide across <b>10 Mayo Clinic Health Systems scanners</b>, improving visibility and reducing downtime',
        ],
    },
    {
        dates: '2020 - 2022',
        title: 'Research Technician',
        place: 'University Health Network',
        city: 'Toronto, ON',
        desc: [
            'Established new protocols for gene engineering and flow cytometry',
            'Managed the mice facility and systematized DNA screening procedures',
            'Co-authored two scientific papers',
        ],
    }
];
