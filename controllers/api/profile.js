const CONFIG = require('../../config/config');
const bcryptJS = require('bcryptjs');
const Profile = require('../../models/profile');

const ADMIN_PASSWORD = CONFIG.ADMIN_PASSWORD;
const INITIAL_PROFILE = {
  firstname: 'Naetirat',
  lastname: 'Songsomboon',
  phoneNumber: '000-000-0000',
  email: 'naetirat.s@gmail.com',
  aboutMe:
    'It is my dream to be part of a team that develops a technology that makes the world a better place. I am passionate about learning; I am very eager to learn and to develop new skills both regarding theoretical and practical knowledge. I always set the bar high: once a goal has been established, I will go beyond the limit to reach it. Nevertheless, asking for help when getting stuck with a problem. Other than spending time in learning programming, I enjoy using my free time reading books and listening to music',
  socials: [
    {
      socialName: 'LinkedIn',
      socialLink: 'https://www.linkedin.com/in/naetirat-songsomboon/'
    },
    {
      socialName: 'Github',
      socialLink: 'https://github.com/army2102'
    },
    {
      socialName: 'FreeCodeCamp',
      socialLink: 'https://www.freecodecamp.org/naetirat'
    }
  ],
  educations: [
    {
      educationName: 'Eastern Asia University',
      address: 'Faculty of Engineering, Pathum Thani, Thailand ',
      date: {
        from: 'June 2014',
        to: 'May 2018'
      },
      degree: 'Bachelor of Engineering in Computer Engineering',
      additionalInformation: [
        'Cumulative GPA of 3.91/4.00, First Honors',
        'President of Computer Engineering major'
      ]
    }
  ],
  skillGroups: [
    {
      skillGroupName: 'Technical Skills',
      subGroups: [
        {
          subGroupName: 'Front-End Development',
          skills: [
            { skillName: 'HTML' },
            { skillName: 'CSS' },
            { skillName: 'SASS' },
            { skillName: 'JavaScript' },
            { skillName: 'React' },
            { skillName: 'Redux' },
            { skillName: 'Redux-Thunk' }
          ]
        },
        {
          subGroupName: 'Back-End Development',
          skills: [
            { skillName: 'NodeJS' },
            { skillName: 'Express' },
            { skillName: 'MongoDB' },
            { skillName: 'Mongoose' },
            { skillName: 'MySQL' },
            { skillName: 'Sequelize' }
          ]
        },
        {
          subGroupName: 'Deployment',
          skills: [{ skillName: 'Heroku' }]
        },
        {
          subGroupName: 'Version Control',
          skills: [{ skillName: 'Git' }, { skillName: 'GitHub' }]
        },
        {
          subGroupName: 'Programming Languages',
          skills: [
            { skillName: 'JavaScript' },
            { skillName: 'JAVA' },
            { skillName: 'C++' }
          ]
        }
      ]
    },
    {
      skillGroupName: 'Language Skills',
      subGroups: [
        {
          subGroupName: 'English',
          skills: [
            {
              skillName: 'TOEFL',
              additionalInformation:
                '89/120 - 24/23/21/21 - Reading/Listening/Speaking/Writing',
              date: {
                from: 'March 2019'
              }
            }
          ]
        }
      ]
    }
  ],
  workExperiences: [
    {
      companyName: 'Arise Corporation Co., Ltd',
      address: 'Bangkok, Thailand',
      date: {
        from: 'May 2016',
        to: 'July 2016',
        present: false
      },
      position: 'Software Developer Intern',
      additionalInformation: [
        'Developed user interfaces, back-end APIs, and database queries with K2 platform according to the requirement given by senior developers'
      ]
    }
  ],
  personalProjects: [
    {
      projectName: 'Naetirat.com',
      date: {
        from: 'May 2019',
        present: false
      },
      description:
        'My personal website that inspired from my resume. The goal of this project is to create a website with all the technology that I have learned from the past few months',
      additionalInformation: [
        'Developed a website using MERN stack with MVC file structure and deployed with Heroku'
      ],
      skillSet: [
        'React',
        'Redux',
        'Redux-Thunk',
        'NodeJS',
        'Express',
        'MongoDB',
        'Mongoose',
        'Heroku'
      ],
      projectUrl: 'http://naetirat.com'
    },
    {
      projectName: 'FreeCodeCamp Responsive Web Design Projects',
      date: {
        from: 'May 2019',
        present: false
      },
      description:
        'As part of the FreeCodeCamp curriculum, in order to get “ Responsive Web Design ” certificate',
      additionalInformation: [
        'Developed five webpages according to the instruction given from FreeCodeCamp “ Introduction to the Responsive Web Design Projects ” section'
      ],
      skillSet: ['HTML', 'CSS', 'SASS'],
      projectUrl: 'https://codepen.io/collection/AQgrgy'
    },
    {
      projectName: 'Automatic Water Quality Control Via Smart Device',
      date: {
        from: 'April 2018',
        to: 'June 2018',
        present: false
      },
      description:
        'Measure water quality and automatically replacing water in a fish tank based on PH value and water temperature',
      additionalInformation: [
        'Controlled all the sensors through NodeMCU, and developed the application with C++ and Blynk',
        'Modify the range of PH value and water temperature to define the water quality through the application',
        'Monitor PH value, water temperature and all the sensors status through a mobile application',
        'A notification will be sent to the application when the water quality is not in the defined range and the system will automatically start the water replacing process'
      ],
      skillSet: ['NodeMCU', 'C++', 'Blynk']
    },
    {
      projectName: 'Market Supplier Reservation Applications',
      date: {
        from: 'July 2017',
        to: 'December 2017',
        present: false
      },
      description:
        'Marketplace area reservation and management through a mobile application, served as a MVP application for Digital Innovation Startup Apprentice Batch 2 program',
      additionalInformation: [
        'Developed a system and designed SQL database from the information gathered from three marketplaces',
        'Developed an Android application, Backend APIs and deployed with Heroku'
      ],
      skillSet: ['JAVA', 'NodeJS', 'MySQL', 'Heroku']
    }
  ],
  awards: [
    {
      awardName: 'Outstanding Person in Academic Activities',
      address: 'Eastern Asia University, Faculty of Engineering, Thailand',
      date: {
        from: 'April 2018'
      },
      additionalInformation: [
        'For a student who pursues knowledge and participates in academic activities outside of the university'
      ]
    },
    {
      awardName: 'Digital Innovation Startup Apprentice Batch 2 Award',
      address:
        'National Science and Technology Development Agency (NSTDA), Thailand',
      date: {
        from: 'August 2017'
      },
      additionalInformation: [
        'One of the three winning teams from Digital Innovation Startup Apprentice Batch 2 program, out of more than fifty teams that participated '
      ]
    }
  ],
  activities: [
    {
      activityName: 'React SeedCamp by Thinknet',
      position: 'participant',
      date: {
        from: 'May 2018'
      },
      additionalInformation: [
        'Received training in website development with a JavaScript framework called React '
      ]
    },
    {
      activityName: 'Young Innovation Creator',
      position: 'participant',
      date: {
        from: 'April 2018'
      },
      additionalInformation: [
        'Received training in an application development process start from ideas gathering to an MVP development'
      ]
    },
    {
      activityName: 'True Incube App Builder',
      position: 'participant',
      date: {
        from: 'August 2017',
        to: 'December 2017'
      },
      additionalInformation: [
        'Received training in Android application development'
      ]
    },
    {
      activityName: 'Digital Startup Apprentice Batch 2',
      position: 'participant',
      date: {
        from: 'June 2017',
        to: 'August 2017'
      },
      additionalInformation: [
        'Joined as one of the startup team called “JongTalad” to pitch a startup business idea'
      ]
    }
  ]
};

exports.getProfile = (req, res, next) => {
  Profile.find({ firstname: 'Naetirat' })
    .then(profile => {
      if (profile.length === 0) {
        throw 'There is no profile in the database';
      }
      res.status(200).json(profile);
    })
    .catch(err => res.status(404).json({ message: err }));
};

exports.updateProfile = (req, res, next) => {
  // TODO: Create update profile api
};

exports.initProfile = (req, res, next) => {
  Profile.findOne()
    .then(profile => {
      if (profile) {
        throw 'There is already one profile in the database';
      }
      return bcryptJS.hash(ADMIN_PASSWORD, 12);
    })
    .then(hashedPassword => {
      const newProfile = new Profile({
        ...INITIAL_PROFILE,
        password: hashedPassword
      });
      return newProfile.save();
    })
    .then(result => {
      res.status(201).json({ message: 'Profile created' });
    })
    .catch(err => {
      res.status(409).json({ message: 'Something bad happened' });
    });
};
