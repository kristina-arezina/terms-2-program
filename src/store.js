// groups
export const groups = [
    "web basics", "software development terms", "languages", "frameworks", "libraries"
]

export const items = [
    {
        id: 'why learn web basics?',
        title: 'Why Learn Web Basics?',
        description: "If you wish to get into programming probably no one will come up to you and quiz you on these " +
            "terms. However, if you talk to other programmers or read / watch coding tutorials these terms will be " +
            "used constantly and freely. So, it is a good idea to get a general understanding of what these terms and " +
            "concepts mean. By no means do you need to memorize every nook and cranny of theses terms, all you need" +
            " is a working understanding of these concepts in order to be able to follow one's train of thought " +
            "without getting lost in a sea of unknown terms." ,
        groups: 'web basics',
    },
    {
        id: 'web server / web host / server',
        title: 'Web Server / Web Host / Server',
        description: "Web server, web host and server are terms used interchangeably to describe the same concept. " +
            "Every website that is viewed through one's computer is located on a separate computer called a web server. " +
            "This computer (the server) is always running and connected to the internet. When someone wants to access a " +
            "webpage through their digital device a copy of the webpage is downloaded from the server onto the user's " +
            "machine to be displayed to the person.",
        groups: 'web basics',
        resourse:"Here are some resources that can help you learn about this topic:"
    },
    {
        id: 'browsers',
        title: 'Browsers',
        description: 'Browsers “ask” for information and then show the information they get on your screen in a ' +
            'way that you can understand it. They can be thought of as interpreters of the web. Without them, it ' +
            'would be very hard to make sense of anything on your screen.',
        groups: 'web basics',
        resourse:"Here are some resources that can help you learn about this topic:"
    },
    {
        id: 'operating system',
        title: 'Operating System',
        description: 'Every computer needs an operating system. It can be thought of as an extremely powerful program ' +
            'that controls how the computer works. Operating systems are usually pre-loaded on the computer you buy. ' +
            'The most popular operating systems for personal computers are Microsoft Windows, macOS, and Linux. ' +
            'Mobile devices such as phones, tablet computers, work differently than personal computers so they use ' +
            'operating systems that are designed specifically for mobile devices. Apple iOS and Google Android are ' +
            'popular mobile operating systems.',
        groups: 'web basics',
        resourse:"Here are some resources that can help you learn about this topic:"

    },
    {
        id: 'software development',
        title: 'Software Development',
        description: 'The process in which someone makes the programs that make a computer do something of interest is ' +
            'called software development. People create software which is the set of instructions, programs or data ' +
            'used to make computers perform specific tasks.',
        groups: 'software development terms',
        resourse:"Here are some resources that can help you learn about this topic:"
    },
    {
        id: 'terminal',
        title: 'Terminal',
        description: 'Many of the tools that you need to use to develop software are run in the terminal. It is an ' +
            'important concept to understand as you can use a terminal on any computer. Please note that a terminal ' +
            'appears to be very intimidating to beginners. However, mastering using it can significantly increase your ' +
            'efficiency and effectiveness while programing.',
        groups: 'software development terms',
        resourse:"Here are some resources that can help you learn about this topic:"

    },
    {
        id: 'programing languages',
        title: 'Programing Languages',
        description: 'Software is developed is through writing a set of instructions that a computer can understand ' +
            'and use to perform specific tasks. These instructions can be written in many different ways and can use ' +
            'different styles. There are hundreds of programming languages that exits however there are a handful of ' +
            'very popular ones.',
        groups: 'software development terms',
        resourse:"This website is a great resource to help you learn about the different types of programming languages! " +
            "To get an overview of the types of programming languages that exist you can view these resources:",
    },
    {
        id: 'what-language-should-i-learn',
        title: 'What Programing Language Should I Learn?',
        description: 'Once you decide you want to learn to program the first question that comes up is what language ' +
            'should you learn. It is often an overwhelming question as there are hundreds of languages to chose from ' +
            'all capable of different things. Additionally, matters become more confusing as many sources have ' +
            'conflicting ideas of what the best programing language is to learn is. Many factors can contriube ' +
            'to your decision of what language to learn. ',
        groups: 'languages',
        resourse:"Hopefully, these resources can help you decide what language to learn:"

    },
    {
        id: 'python',
        title: 'Python',
        description: 'Python is one of the most popular programming languages in the world. It is considered to be a ' +
            'relatively easy programing language to learn as its syntax (the way it is written) is simple. The ' +
            'notion of simplicity is emphasized with one of the main mottos Python uses, "simple is better than complex".',
        description2:"Although Python is simple it is extremely powerful and versatile. These characteristics make many " +
            "tech giants use Python to develop their products. For example, Dropbox, which had 11.5 million paying " +
            "users in 2018, used Python to create many components of their product. Netflix, which is present in more " +
            "than 50% of U.S. households, uses Python for the bases for their recommendation algorithms and analytics " +
            "engine. ",
        resourse:"To find out more about what Python can do check out these resources:",
        groups: 'languages',
    },
    {
        id: 'java-script',
        title: 'JavaScript',
        description: 'Javascript is a popular programming language as it is extremely versatile. However, it is most ' +
            'commonly used as a part of web pages as it can update and change both HTML and CSS, allowing for ' +
            'interactive effects on web pages. Additionally, JavaScript can calculate, manipulate and validate data. ' +
            'Although javascript can be learned by anyone it is powerful and therefore used by many large companies ' +
            'such as PayPal, Uber, and eBay.',
        groups: 'languages',
        resourse:"Here are some resources that can help you learn about this topic:"

    },
    {
        id: 'java',
        title: 'Java',
        description: 'Java is an object-oriented programming (OOP) language that was created in 1995. It is popular as ' +
            'it is used in many devices and for multiple purposes. It can be used to power Android apps and web ' +
            'applications, perform big data analysis, make video games and much more. ',
        groups: 'languages',
        resourse:"Here are some resources that can help you learn about this topic:"

    },
    {
        id: 'what-is-a-framework?',
        title: 'What is a Framework?',
        description: 'Frameworks provide programmers with reusable abstractions of code wrapped in a well-defined ' +
            'Application programming interface (API). They can be used to simplify code as they contain prewritten code ' +
            'that you can use instead of having to write everything from scratch. The code from the framework can be ' +
            'selectively overridden or specialized by user code providing specific functionality. ',
        groups: 'frameworks',
        resourse:"Here are some resources that can help you learn about this topic:"

    },
    {
        id: 'angular',
        title: 'Angular',
        description: 'Angular is a javascript framework. It can be used to make dynamic single page dynamic web apps. ' +
            'Although Angular is a great tool to use it is advisable to learn the basics of JavaScript, HTML, and CSS. ',
        groups: 'frameworks',
        resourse:"Here are some resources that can help you learn about this topic:"

    },
    {
        id: 'vue',
        title: 'Vue',
        description: 'Vue.js is a javascript framework that allows you to build complex web apps. To get started with ' +
            'Vue it is recommended to have a basic understanding of JavaScript, HTML, and CSS. Since Vue has a large ' +
            'collection of libraries and set of tools facilitating development it is popular among javascript ' +
            'programmers. Additionally, Vue comes with its own DevTools which come in the form of a browser extension. ' +
            'These DevTools are useful as they simplify application debugging and checking the state and hierarchy of ' +
            'components. ',
        groups: 'frameworks',
        resourse:"Here are some resources that can help you learn about this topic:"

    },
    {
        id: 'what-is-a-library?',
        title: 'What is a Library?',
        description: 'In software development, a library is a collection of ready to use sections of programs that ' +
            'can be implemented and resued into your own code. Libraries can speed up the time it takes you to develop ' +
            'a product as they contain code that was previously written by someone else that you can make use of. ' +
            'Different programming languages have varying libraries.',
        groups: 'libraries',
        resourse:"Here are some resources that can help you learn about this topic:"

    },
    {
        id: 'react',
        title: 'React',
        description: 'React is a JavaScript library that can help you make user interfaces (UI\'s). It allows you to' +
            ' make the parts of a website / web application that you can see. React helps you create on-screen menus, ' +
            'search bars and buttons in an organized and simplified manner. React was developed by Facebook to improve ' +
            'UI development. So, naturally, Facebook uses React but other large companies such as Khan Academy, Yahoo, ' +
            'and Netflix also use React. ',
        groups: 'libraries',
        resourse:"Here are some resources that can help you learn about this topic:"

    },
    ]