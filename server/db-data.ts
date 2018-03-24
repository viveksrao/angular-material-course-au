export const COURSES: any = {

  1: {
      id: 1,
      description: "Angular for Beginners",
      iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
      courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
      longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
      category: 'BEGINNER',
      lessonsCount: 10
  },
  2: {
      id: 2,
      description: 'Angular Security Course - Web Security Fundamentals',
      longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
      courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
      category: 'ADVANCED',
      lessonsCount: 11
  },
  3: {
      id: 3,
      description: 'Angular PWA - Progressive Web Apps Course',
      longDescription: "<p class='course-description'>Learn Angular Progressive Web Applications, build the future of the Web Today.",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
      courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/alien.png',
      category: 'ADVANCED',
      lessonsCount: 8
  },
  4: {
      id: 4,
      description: 'Angular NgRx Store Reactive Extensions Architecture Course',
      longDescription: "Learn how to the Angular NgRx Reactive Extensions and its Tooling to build a complete application.",
      iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/ngrx-angular.png',
      courseListIcon: 'https://angular-academy.s3.amazonaws.com/thumbnails/ngrx-small.png',
      category: 'ADVANCED'
  },
  5: {
      id: 5,
      description: 'Angular Advanced Library Laboratory: Build Your Own Library',
      longDescription: "Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm",
      iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
      courseListIcon: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular-advanced-lesson-icon.png',
      category: 'ADVANCED'
  },
  6: {
      id: 6,
      description: 'The Complete Typescript Course',
      longDescription: "Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.",
      iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
      courseListIcon: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-lesson.png',
      category: 'BEGINNER'
  },
  7: {
      id: 7,
      description: 'Rxjs and Reactive Patterns Angular Architecture Course',
      longDescription: "Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
      courseListIcon: 'https://angular-academy.s3.amazonaws.com/course-logos/observables_rxjs.png',
      category: 'BEGINNER'
  },
  8: {
      id:8,
      description: "Angular Material Course",
      iconUrl: "https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png",
      longDescription: "Build Applications with the official Angular Widget Library",
      category: 'ADVANCED'
  },
  9: {
    id:9,
    description: "Angular Component Communication",
		iconUrl: "https://pluralsight.imgix.net/course-images/audience/software-development.jpg",
		courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
    longDescription: "For real-world Angular applications, you need effective solutions for tracking and sharing state and sending notifications between components. This course teaches you numerous communication techniques and, more importantly, which to use when.",
		category: 'BEGINNER',
		lessonsCount: 11
    },
	10:{
		id:10,
    description: "This Is Bootstrap 4",
		iconUrl: "https://thumbsplus.tutsplus.com/uploads/users/71/courses/1163/preview_image/This_is_Bootstrap_4_400x277px.jpg",
		courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
    longDescription: "Bootstrap is one of the most popular front-end frameworks for web designers, and its eagerly awaited version 4 just launched! In this course, which was originally recorded as a live stream, Adi Purdila will build a responsive landing page while discussing what’s new, what’s improved, and how to get things up and running. He'll also answer some questions from the viewers along the way.",
		category: 'BEGINNER',
		lessonsCount: 6
  },
  11:{
    id: 11,
    description: "Building Web Applications with Node.js and Express",
    iconUrl: "https://pluralsight.imgix.net/course-images/nodejs-express-web-applications-update-v2.png",
    courseListIcon: "https://pluralsight-res.cloudinary.com/image/upload/w_380/pluralsight-static/course-images/play-by-play-packaging-deploying-real-world-asp-dont-net-core-app-v1.jpg",
    longDescription: "Node.js is a simple and powerful tool for backend JavaScript development. In this course, Building Web Applications with Node.js and Express 4.0, you will learn everything you need to know to get started in web development with Node.js. First, you will cover the basics of Node.js and how to select an IDE. Second, you will explore template engines and how to render in HTML out of Express. Next, you will learn all aspects of routing, including express middleware. Finally, you will work with multiple databases and backend APIs and will cover local security with Passport.js. By the end of this course, you will have all of the tools you need to build a full-stack web application with Node.js and Express. ",
    category: 'ADVANCED',
    lessonsCount: 9
  },
};


export const LESSONS = {

  1: {
      id: 1,
      "description": "Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step",
      "duration": "4:17",
      "seqNo": 1,
      courseId: 1
  },
  2: {
      id: 2,
      "description": "Building Your First  Component - Component Composition",
      "duration": "2:07",
      "seqNo": 2,
      courseId: 1
  },
  3: {
      id: 3,
      "description": "Component @Input - How To Pass Input Data To an  Component",
      "duration": "2:33",
      "seqNo": 3,
      courseId: 1
  },
  4: {
      id: 4,
      "description": " Component Events - Using @Output to create custom events",
      "duration": "4:44",
      "seqNo": 4,
      courseId: 1
  },
  5: {
      id: 5,
      "description": " Component Templates - Inline Vs External",
      "duration": "2:55",
      "seqNo": 5,
      courseId: 1
  },
  6: {
      id: 6,
      "description": "Styling  Components - Learn About Component Style Isolation",
      "duration": "3:27",
      "seqNo": 6,
      courseId: 1
  },
  7: {
      id: 7,
      "description": " Component Interaction - Extended Components Example",
      "duration": "9:22",
      "seqNo": 7,
      courseId: 1
  },
  8: {
      id: 8,
      "description": " Components Tutorial For Beginners - Components Exercise !",
      "duration": "1:26",
      "seqNo": 8,
      courseId: 1
  },
  9: {
      id: 9,
      "description": " Components Tutorial For Beginners - Components Exercise Solution Inside",
      "duration": "2:08",
      "seqNo": 9,
      courseId: 1
  },
  10: {
      id: 10,
      "description": " Directives - Inputs, Output Event Emitters and How To Export Template References",
      "duration": "4:01",
      "seqNo": 10,
      courseId: 1
  },


  // Security Course
  11: {
      id: 11,
      "description": "Course Helicopter View",
      "duration": "08:19",
      "seqNo": 1,
      courseId: 2
  },

  12: {
      id: 12,
      "description": "Installing Git, Node, NPM and Choosing an IDE",
      "duration": "04:17",
      "seqNo": 2,
      courseId: 2
  },

  13: {
      id: 13,
      "description": "Installing The Lessons Code - Learn Why Its Essential To Use NPM 5",
      "duration": "06:05",
      "seqNo": 3,
      courseId: 2
  },

  14: {
      id: 14,
      "description": "How To Run Node In TypeScript With Hot Reloading",
      "duration": "03:57",
      "seqNo": 4,
      courseId: 2
  },

  15: {
      id: 15,
      "description": "Guided Tour Of The Sample Application",
      "duration": "06:00",
      "seqNo": 5,
      courseId: 2
  },
  16: {
      id: 16,
      "description": "Client Side Authentication Service - API Design",
      "duration": "04:53",
      "seqNo": 6,
      courseId: 2
  },
  17: {
      id: 17,
      "description": "Client Authentication Service - Design and Implementation",
      "duration": "09:14",
      "seqNo": 7,
      courseId: 2
  },
  18: {
      id: 18,
      "description": "The New Angular HTTP Client - Doing a POST Call To The Server",
      "duration": "06:08",
      "seqNo": 8,
      courseId: 2
  },
  19: {
      id: 19,
      "description": "User Sign Up Server-Side Implementation in Express",
      "duration": "08:50",
      "seqNo": 9,
      courseId: 2
  },
  20: {
      id: 20,
      "description": "Introduction To Cryptographic Hashes - A Running Demo",
      "duration": "05:46",
      "seqNo": 10,
      courseId: 2
  },
  21: {
      id: 21,
      "description": "Some Interesting Properties Of Hashing Functions - Validating Passwords",
      "duration": "06:31",
      "seqNo": 11,
      courseId: 2
  },


  // PWA course

  22: {
      id: 22,
      "description": "Course Kick-Off - Install Node, NPM, IDE And Service Workers Section Code",
      "duration": "07:19",
      "seqNo": 1,
      courseId: 3
  },
  23: {
      id: 23,
      "description": "Service Workers In a Nutshell - Service Worker Registration",
      "duration": "6:59",
      "seqNo": 2,
      courseId: 3
  },
  24: {
      id: 24,
      "description": "Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools",
      "duration": "7:28",
      "seqNo": 3,
      courseId: 3
  },
  25: {
      id: 25,
      "description": "Service Workers and Application Versioning - Install & Activate Lifecycle Phases",
      "duration": "10:17",
      "seqNo": 4,
      courseId: 3
  },

  26: {
      id: 26,
      "description": "Downloading The Offline Page - The Service Worker Installation Phase",
      "duration": "09:50",
      "seqNo": 5,
      courseId: 3
  },
  27: {
      id: 27,
      "description": "Introduction to the Cache Storage PWA API",
      "duration": "04:44",
      "seqNo": 6,
      courseId: 3
  },
  28: {
      id: 28,
      "description": "View Service Workers HTTP Interception Features In Action",
      "duration": "06:07",
      "seqNo": 7,
      courseId: 3
  },
  29: {
      id: 29,
      "description": "Service Workers Error Handling - Serving The Offline Page",
      "duration": "5:38",
      "seqNo": 8,
      courseId: 3
	},
	// Angular Component Communication
	30: {
		id: 30,
		"description": "Course Overview",
		"duration": "1:27",
		"seqNo": 1,
		courseId: 9
	},
	31: {
		id: 31,
		"description": "Introduction",
		"duration": "8:48",
		"seqNo": 2,
		courseId: 9
	},
	32: {
		id: 32,
		"description": "Communicating with a Template",
		"duration": "20:35",
		"seqNo": 3,
		courseId: 9
	},
	33: {
		id: 33,
		"description": "ViewChild and ViewChildren",
		"duration": "33:9",
		"seqNo": 4,
		courseId: 9
	},
	34: {
		id: 34,
		"description": "Communicating with a Child Component",
		"duration": "34:48",
		"seqNo": 5,
		courseId: 9
	},
	35: {
		id: 35,
		"description": "Communicating with a Parent Component",
		"duration": "10:29",
		"seqNo": 6,
		courseId: 9
	},
	36: {
		id: 36,
		"description": "Communicating Through a Service",
		"duration": "25:16",
		"seqNo": 7,
		courseId: 9
	},
	37: {
		id: 37,
		"description": "Communicating Through a State Management Service",
		"duration": "38:54",
		"seqNo": 8,
		courseId: 9
	},
	38: {
		id: 38,
		"description": "Communicating Through Service Notifications",
		"duration": "28:7",
		"seqNo": 9,
		courseId: 9
	},
	39: {
		id: 39,
		"description": "Communicating Using the Router",
		"duration": "12:58",
		"seqNo": 10,
		courseId: 9
	},
	40: {
		id: 40,
		"description": "Final Words",
		"duration": "5:22",
		"seqNo": 11,
		courseId: 9
	},
	// This Is Bootstrap 4
	41: {
		id: 41,
		"description": "Welcome to the Course",
		"duration": "00:38",
		"seqNo": 1,
		courseId: 10
	},
	42: {
		id: 42,
		"description": "Setting Things Up",
		"duration": "15:45",
		"seqNo": 2,
		courseId: 10
	},
	43: {
		id: 43,
		"description": "Features, Secondary CTA, and Pricing",
		"duration": "14:16",
		"seqNo": 3,
		courseId: 10
	},
	44: {
		id: 44,
		"description": "Testimonials, Bottom CTA, and Footer",
		"duration": "12:19",
		"seqNo": 4,
		courseId: 10
	},
	45: {
		id: 45,
		"description": "Create Better Element Spacing",
		"duration": "19:27",
		"seqNo": 5,
		courseId: 10
	},
	46: {
		id: 46,
		"description": "Responsive Check, Custom Styling, and Finishing Touches",
		"duration": "20:41",
		"seqNo": 6,
		courseId: 10
  },
  47: {
		id: 47,
		"description": "Course Overview",
		"duration": "1:43",
		"seqNo": 1,
		courseId: 11
  },
  48: {
		id: 48,
		"description": "Getting Started",
		"duration": "34:12",
		"seqNo": 2,
		courseId: 11
  },
  49: {
		id: 49,
		"description": "First Page",
		"duration": "38:24",
		"seqNo": 3,
		courseId: 11
  },
  50: {
		id: 50,
		"description": "Setting up Tooling",
		"duration": "35:54",
		"seqNo": 4,
		courseId: 11
  },
  51: {
		id: 51,
		"description": "Templating Engines",
		"duration": "25:9",
		"seqNo": 5,
		courseId: 11
  },
  52: {
		id: 52,
		"description": "Routing",
		"duration": "31:57",
		"seqNo": 6,
		courseId: 11
  },
  53: {
		id: 53,
		"description": "Databases",
		"duration": "60:5",
		"seqNo": 7,
		courseId: 11
  },
  54: {
		id: 54,
		"description": "Authentication",
		"duration": "52:58",
		"seqNo": 8,
		courseId: 11
  },
  55: {
		id: 55,
		"description": "Structure and Third-party APIs",
		"duration": "26:58",
		"seqNo": 9,
		courseId: 11
	},
};

export function findCourseById(courseId:number) {
  return COURSES[courseId];
}

export function findLessonsForCourse(courseId:number) {
  return Object.values(LESSONS).filter(lesson => lesson.courseId == courseId);
}

