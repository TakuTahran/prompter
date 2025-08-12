export interface Framework {
  id: string;
  title: string;
  blurb: string;
  bestFor: string[];
  acronym: {
    letter: string;
    meaning: string;
    description: string;
    color: string;
  }[];
  examples: {
    segments: {
      text: string;
      color?: string; // matches acronym color if highlighted
    }[];
    backgroundColor: string;
  }[];
  template: string;
}

export const frameworks: Framework[] = [
  {
    id: 'standard',
    title: 'Standard Prompt',
    blurb: 'A straightforward, clear prompt structure for general-purpose AI interactions. Best when you need direct, actionable responses.',
    bestFor: [
      'General questions and tasks',
      'Quick information requests',
      'Simple content generation',
      'Getting started with AI assistance'
    ],
    acronym: [
      { letter: 'S', meaning: 'Simple', description: 'Keep the request clear and direct', color: 'bg-blue-100 text-blue-800' },
      { letter: 'T', meaning: 'Targeted', description: 'Focus on specific outcomes', color: 'bg-green-100 text-green-800' },
      { letter: 'A', meaning: 'Actionable', description: 'Request concrete, usable results', color: 'bg-purple-100 text-purple-800' },
      { letter: 'N', meaning: 'Natural', description: 'Use conversational language', color: 'bg-orange-100 text-orange-800' },
      { letter: 'D', meaning: 'Direct', description: 'Get straight to the point', color: 'bg-red-100 text-red-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'Write a ', color: 'bg-orange-100 text-orange-800' },
          { text: 'professional email ', color: 'bg-blue-100 text-blue-800' },
          { text: 'declining a meeting invitation', color: 'bg-green-100 text-green-800' }
        ],
        backgroundColor: 'bg-blue-50 border-blue-200'
      },
      {
        segments: [
          { text: 'Explain quantum computing ', color: 'bg-blue-100 text-blue-800' },
          { text: 'in simple terms ', color: 'bg-orange-100 text-orange-800' },
          { text: 'for a high school student', color: 'bg-green-100 text-green-800' }
        ],
        backgroundColor: 'bg-green-50 border-green-200'
      },
      {
        segments: [
          { text: 'Create a list of ', color: 'bg-purple-100 text-purple-800' },
          { text: '10 healthy breakfast ideas ', color: 'bg-green-100 text-green-800' },
          { text: 'under 300 calories', color: 'bg-blue-100 text-blue-800' }
        ],
        backgroundColor: 'bg-purple-50 border-purple-200'
      }
    ],
    template: `Please [specific request/task].

[Optional: Any relevant context or constraints]

[Optional: Preferred format or style]`
  },
  {
    id: 'reasoning',
    title: 'Reasoning Prompt',
    blurb: 'Designed for complex problem-solving and analytical tasks. Encourages step-by-step thinking and logical reasoning processes.',
    bestFor: [
      'Complex problem-solving',
      'Mathematical reasoning',
      'Logical analysis',
      'Decision-making scenarios',
      'Research and investigation'
    ],
    acronym: [
      { letter: 'R', meaning: 'Rational', description: 'Apply logical thinking patterns', color: 'bg-indigo-100 text-indigo-800' },
      { letter: 'E', meaning: 'Evidence', description: 'Base conclusions on facts and data', color: 'bg-cyan-100 text-cyan-800' },
      { letter: 'A', meaning: 'Analysis', description: 'Break down complex problems', color: 'bg-emerald-100 text-emerald-800' },
      { letter: 'S', meaning: 'Step-by-step', description: 'Show the reasoning process', color: 'bg-yellow-100 text-yellow-800' },
      { letter: 'O', meaning: 'Objective', description: 'Maintain unbiased perspective', color: 'bg-rose-100 text-rose-800' },
      { letter: 'N', meaning: 'Nuanced', description: 'Consider multiple perspectives', color: 'bg-violet-100 text-violet-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'Analyze the pros and cons of ', color: 'bg-emerald-100 text-emerald-800' },
          { text: 'remote work vs office work, ', color: 'bg-indigo-100 text-indigo-800' },
          { text: 'considering productivity, collaboration, and employee satisfaction', color: 'bg-cyan-100 text-cyan-800' }
        ],
        backgroundColor: 'bg-indigo-50 border-indigo-200'
      },
      {
        segments: [
          { text: 'Walk me through solving ', color: 'bg-yellow-100 text-yellow-800' },
          { text: 'this math problem step-by-step: ', color: 'bg-emerald-100 text-emerald-800' },
          { text: 'If a train travels 120 miles in 2 hours, how long will it take to travel 300 miles?', color: 'bg-cyan-100 text-cyan-800' }
        ],
        backgroundColor: 'bg-cyan-50 border-cyan-200'
      },
      {
        segments: [
          { text: 'Evaluate whether ', color: 'bg-emerald-100 text-emerald-800' },
          { text: 'a startup should prioritize ', color: 'bg-rose-100 text-rose-800' },
          { text: 'user acquisition or revenue optimization ', color: 'bg-violet-100 text-violet-800' },
          { text: 'in their first year', color: 'bg-indigo-100 text-indigo-800' }
        ],
        backgroundColor: 'bg-emerald-50 border-emerald-200'
      }
    ],
    template: `I need help reasoning through: [problem/question]

Please:
1. Break down the problem into smaller components
2. Analyze each component systematically
3. Show your reasoning process step-by-step
4. Consider alternative perspectives
5. Provide a well-reasoned conclusion

Context: [any relevant background information]`
  },
  {
    id: 'race',
    title: 'RACE Prompt',
    blurb: 'Role-based framework that provides structured instructions with clear context and explanations. Perfect for detailed, professional responses.',
    bestFor: [
      'Professional advice and guidance',
      'Expert-level responses',
      'Educational content',
      'Detailed explanations',
      'Role-playing scenarios'
    ],
    acronym: [
      { letter: 'R', meaning: 'Role', description: 'Define the expert perspective needed', color: 'bg-blue-100 text-blue-800' },
      { letter: 'A', meaning: 'Action', description: 'Specify what needs to be done', color: 'bg-green-100 text-green-800' },
      { letter: 'C', meaning: 'Context', description: 'Provide relevant background information', color: 'bg-yellow-100 text-yellow-800' },
      { letter: 'E', meaning: 'Explanation', description: 'Request detailed reasoning', color: 'bg-purple-100 text-purple-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'As a financial advisor, ', color: 'bg-blue-100 text-blue-800' },
          { text: 'help me create a retirement plan ', color: 'bg-green-100 text-green-800' },
          { text: 'for someone earning $75k annually, with current age 35, ', color: 'bg-yellow-100 text-yellow-800' },
          { text: 'explaining investment strategies and risk management', color: 'bg-purple-100 text-purple-800' }
        ],
        backgroundColor: 'bg-blue-50 border-blue-200'
      },
      {
        segments: [
          { text: 'Acting as a marketing expert, ', color: 'bg-blue-100 text-blue-800' },
          { text: 'develop a social media strategy ', color: 'bg-green-100 text-green-800' },
          { text: 'for a new eco-friendly product launch, ', color: 'bg-yellow-100 text-yellow-800' },
          { text: 'considering target demographics and platform selection', color: 'bg-purple-100 text-purple-800' }
        ],
        backgroundColor: 'bg-green-50 border-green-200'
      },
      {
        segments: [
          { text: 'As a nutritionist, ', color: 'bg-blue-100 text-blue-800' },
          { text: 'create a meal plan ', color: 'bg-green-100 text-green-800' },
          { text: 'for an athlete training for a marathon, ', color: 'bg-yellow-100 text-yellow-800' },
          { text: 'explaining the nutritional reasoning behind each recommendation', color: 'bg-purple-100 text-purple-800' }
        ],
        backgroundColor: 'bg-yellow-50 border-yellow-200'
      }
    ],
    template: `Role: Act as a [specific expert/professional role]

Action: [What you want them to do]

Context: [Relevant background information, constraints, or situation details]

Please provide a detailed explanation of your reasoning and recommendations.`
  },
  {
    id: 'care',
    title: 'CARE Prompt',
    blurb: 'Focused on providing helpful, practical responses with real-world examples. Emphasizes actionable results and clear outcomes.',
    bestFor: [
      'Practical advice and solutions',
      'Real-world applications',
      'Learning new skills',
      'Implementation guidance',
      'Results-oriented tasks'
    ],
    acronym: [
      { letter: 'C', meaning: 'Context', description: 'Set the situation and background', color: 'bg-teal-100 text-teal-800' },
      { letter: 'A', meaning: 'Action', description: 'Define the specific task or goal', color: 'bg-orange-100 text-orange-800' },
      { letter: 'R', meaning: 'Result', description: 'Specify desired outcomes', color: 'bg-pink-100 text-pink-800' },
      { letter: 'E', meaning: 'Example', description: 'Request concrete examples', color: 'bg-lime-100 text-lime-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'Context: I\'m starting a small online business. ', color: 'bg-teal-100 text-teal-800' },
          { text: 'Action: Help me set up basic accounting. ', color: 'bg-orange-100 text-orange-800' },
          { text: 'Result: A simple system I can manage myself. ', color: 'bg-pink-100 text-pink-800' },
          { text: 'Example: Show me specific tools and a sample workflow', color: 'bg-lime-100 text-lime-800' }
        ],
        backgroundColor: 'bg-teal-50 border-teal-200'
      },
      {
        segments: [
          { text: 'Context: My team struggles with communication. ', color: 'bg-teal-100 text-teal-800' },
          { text: 'Action: Improve our meeting efficiency. ', color: 'bg-orange-100 text-orange-800' },
          { text: 'Result: Reduce meeting time by 30% while increasing productivity. ', color: 'bg-pink-100 text-pink-800' },
          { text: 'Example: Provide a meeting template and agenda structure', color: 'bg-lime-100 text-lime-800' }
        ],
        backgroundColor: 'bg-orange-50 border-orange-200'
      },
      {
        segments: [
          { text: 'Context: I want to learn cooking basics. ', color: 'bg-teal-100 text-teal-800' },
          { text: 'Action: Teach me fundamental techniques. ', color: 'bg-orange-100 text-orange-800' },
          { text: 'Result: Ability to cook 5 simple, healthy meals. ', color: 'bg-pink-100 text-pink-800' },
          { text: 'Example: Give me specific recipes with step-by-step instructions', color: 'bg-lime-100 text-lime-800' }
        ],
        backgroundColor: 'bg-pink-50 border-pink-200'
      }
    ],
    template: `Context: [Describe your current situation and background]

Action: [What specific help or guidance you need]

Result: [What you want to achieve or the desired outcome]

Example: Please provide concrete examples, templates, or step-by-step instructions to help me implement this.`
  },
  {
    id: 'ape',
    title: 'APE Prompt',
    blurb: 'Clear task execution framework with defined goals and outcomes. Perfect for when you need structured, goal-oriented responses.',
    bestFor: [
      'Project planning and execution',
      'Goal-oriented tasks',
      'Process optimization',
      'Clear deliverables',
      'Strategic planning'
    ],
    acronym: [
      { letter: 'A', meaning: 'Action', description: 'Define the specific task or activity', color: 'bg-red-100 text-red-800' },
      { letter: 'P', meaning: 'Purpose', description: 'Explain the goal and intended outcome', color: 'bg-blue-100 text-blue-800' },
      { letter: 'E', meaning: 'Execution', description: 'Detail how to accomplish the task', color: 'bg-green-100 text-green-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'Action: Create a content calendar for social media. ', color: 'bg-red-100 text-red-800' },
          { text: 'Purpose: Increase brand engagement by 40% over 3 months. ', color: 'bg-blue-100 text-blue-800' },
          { text: 'Execution: Provide a template, posting schedule, and content ideas for each platform', color: 'bg-green-100 text-green-800' }
        ],
        backgroundColor: 'bg-red-50 border-red-200'
      },
      {
        segments: [
          { text: 'Action: Develop a morning routine. ', color: 'bg-red-100 text-red-800' },
          { text: 'Purpose: Improve productivity and energy levels throughout the day. ', color: 'bg-blue-100 text-blue-800' },
          { text: 'Execution: Design a 30-minute routine with specific activities and timing', color: 'bg-green-100 text-green-800' }
        ],
        backgroundColor: 'bg-blue-50 border-blue-200'
      },
      {
        segments: [
          { text: 'Action: Organize a team building event. ', color: 'bg-red-100 text-red-800' },
          { text: 'Purpose: Strengthen collaboration and morale in a remote team. ', color: 'bg-blue-100 text-blue-800' },
          { text: 'Execution: Plan virtual activities, timeline, and engagement strategies', color: 'bg-green-100 text-green-800' }
        ],
        backgroundColor: 'bg-green-50 border-green-200'
      }
    ],
    template: `Action: [Specific task or activity you want to accomplish]

Purpose: [The goal, reason, or intended outcome]

Execution: Please provide detailed steps, methods, or instructions on how to accomplish this effectively.`
  },
  {
    id: 'create',
    title: 'CREATE Prompt',
    blurb: 'Comprehensive framework for clear, specific, and guided task execution. Provides detailed structure for complex creative or analytical tasks.',
    bestFor: [
      'Complex creative projects',
      'Detailed content creation',
      'Comprehensive planning',
      'Multi-step processes',
      'Customized solutions'
    ],
    acronym: [
      { letter: 'C', meaning: 'Character', description: 'Define the role or perspective', color: 'bg-purple-100 text-purple-800' },
      { letter: 'R', meaning: 'Request', description: 'State the specific ask clearly', color: 'bg-indigo-100 text-indigo-800' },
      { letter: 'E', meaning: 'Examples', description: 'Provide reference points or samples', color: 'bg-blue-100 text-blue-800' },
      { letter: 'A', meaning: 'Adjustments', description: 'Specify preferences or constraints', color: 'bg-teal-100 text-teal-800' },
      { letter: 'T', meaning: 'Type', description: 'Define format and structure', color: 'bg-green-100 text-green-800' },
      { letter: 'E', meaning: 'Extras', description: 'Add special requirements or considerations', color: 'bg-yellow-100 text-yellow-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'Character: Marketing copywriter. ', color: 'bg-purple-100 text-purple-800' },
          { text: 'Request: Write product descriptions for handmade jewelry. ', color: 'bg-indigo-100 text-indigo-800' },
          { text: 'Examples: Elegant, story-driven descriptions like "This vintage-inspired necklace tells a tale of timeless beauty." ', color: 'bg-blue-100 text-blue-800' },
          { text: 'Adjustments: Focus on emotional connection, avoid technical jargon. ', color: 'bg-teal-100 text-teal-800' },
          { text: 'Type: 2-3 sentence descriptions. ', color: 'bg-green-100 text-green-800' },
          { text: 'Extras: Include care instructions', color: 'bg-yellow-100 text-yellow-800' }
        ],
        backgroundColor: 'bg-purple-50 border-purple-200'
      },
      {
        segments: [
          { text: 'Character: UX researcher. ', color: 'bg-purple-100 text-purple-800' },
          { text: 'Request: Design a user survey for a food delivery app. ', color: 'bg-indigo-100 text-indigo-800' },
          { text: 'Examples: Questions like "How often do you order food online?" with multiple choice options. ', color: 'bg-blue-100 text-blue-800' },
          { text: 'Adjustments: Keep under 10 questions, mobile-friendly. ', color: 'bg-teal-100 text-teal-800' },
          { text: 'Type: Mix of multiple choice and rating scales. ', color: 'bg-green-100 text-green-800' },
          { text: 'Extras: Include demographic questions', color: 'bg-yellow-100 text-yellow-800' }
        ],
        backgroundColor: 'bg-indigo-50 border-indigo-200'
      },
      {
        segments: [
          { text: 'Character: Fitness coach. ', color: 'bg-purple-100 text-purple-800' },
          { text: 'Request: Create a beginner workout plan. ', color: 'bg-indigo-100 text-indigo-800' },
          { text: 'Examples: Simple exercises like push-ups, squats, planks. ', color: 'bg-blue-100 text-blue-800' },
          { text: 'Adjustments: No equipment needed, 20-30 minutes max. ', color: 'bg-teal-100 text-teal-800' },
          { text: 'Type: Weekly schedule with daily routines. ', color: 'bg-green-100 text-green-800' },
          { text: 'Extras: Include modification options for different fitness levels', color: 'bg-yellow-100 text-yellow-800' }
        ],
        backgroundColor: 'bg-blue-50 border-blue-200'
      }
    ],
    template: `Character: [Role or perspective you want me to take]

Request: [Specific task or deliverable you need]

Examples: [Reference points, samples, or style examples]

Adjustments: [Preferences, constraints, or specific requirements]

Type: [Format, structure, or output type you want]

Extras: [Additional considerations, special requirements, or bonus elements]`
  },
  {
    id: 'tag',
    title: 'TAG Prompt',
    blurb: 'Step-by-step framework aimed at achieving specific results. Perfect for process-oriented tasks and systematic approaches.',
    bestFor: [
      'Process improvement',
      'Step-by-step instructions',
      'Goal achievement',
      'Systematic approaches',
      'Learning new skills'
    ],
    acronym: [
      { letter: 'T', meaning: 'Task', description: 'Define what needs to be accomplished', color: 'bg-cyan-100 text-cyan-800' },
      { letter: 'A', meaning: 'Action', description: 'Outline the steps to take', color: 'bg-emerald-100 text-emerald-800' },
      { letter: 'G', meaning: 'Goal', description: 'Specify the desired end result', color: 'bg-amber-100 text-amber-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'Task: Learn to play guitar. ', color: 'bg-cyan-100 text-cyan-800' },
          { text: 'Action: Provide a structured 30-day practice plan with daily exercises and chord progressions. ', color: 'bg-emerald-100 text-emerald-800' },
          { text: 'Goal: Be able to play 3 simple songs confidently', color: 'bg-amber-100 text-amber-800' }
        ],
        backgroundColor: 'bg-cyan-50 border-cyan-200'
      },
      {
        segments: [
          { text: 'Task: Improve email productivity. ', color: 'bg-cyan-100 text-cyan-800' },
          { text: 'Action: Create a system for organizing, prioritizing, and responding to emails efficiently. ', color: 'bg-emerald-100 text-emerald-800' },
          { text: 'Goal: Reduce email processing time by 50% and achieve inbox zero daily', color: 'bg-amber-100 text-amber-800' }
        ],
        backgroundColor: 'bg-emerald-50 border-emerald-200'
      },
      {
        segments: [
          { text: 'Task: Start a vegetable garden. ', color: 'bg-cyan-100 text-cyan-800' },
          { text: 'Action: Plan the layout, choose appropriate plants, and create a maintenance schedule. ', color: 'bg-emerald-100 text-emerald-800' },
          { text: 'Goal: Harvest fresh vegetables within 90 days', color: 'bg-amber-100 text-amber-800' }
        ],
        backgroundColor: 'bg-amber-50 border-amber-200'
      }
    ],
    template: `Task: [What you want to accomplish or learn]

Action: Please provide step-by-step instructions, methods, or a systematic approach to achieve this.

Goal: [The specific result or outcome you want to reach]`
  },
  {
    id: 'creo',
    title: 'CREO Prompt',
    blurb: 'Structured framework for ideas, strategies, and problem-solving. Excellent for brainstorming and strategic thinking sessions.',
    bestFor: [
      'Strategic planning',
      'Problem-solving',
      'Brainstorming sessions',
      'Business strategy',
      'Creative ideation'
    ],
    acronym: [
      { letter: 'C', meaning: 'Context', description: 'Establish the situation and background', color: 'bg-rose-100 text-rose-800' },
      { letter: 'R', meaning: 'Request', description: 'State your specific need or question', color: 'bg-violet-100 text-violet-800' },
      { letter: 'E', meaning: 'Explanation', description: 'Provide reasoning and thought process', color: 'bg-fuchsia-100 text-fuchsia-800' },
      { letter: 'O', meaning: 'Outcome', description: 'Define the expected result or benefit', color: 'bg-sky-100 text-sky-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'Context: Our startup has limited marketing budget but needs to increase user acquisition. ', color: 'bg-rose-100 text-rose-800' },
          { text: 'Request: Develop cost-effective marketing strategies. ', color: 'bg-violet-100 text-violet-800' },
          { text: 'Explanation: We need creative approaches that maximize reach while minimizing spend, focusing on organic growth and partnerships. ', color: 'bg-fuchsia-100 text-fuchsia-800' },
          { text: 'Outcome: Double our monthly user signups within 6 months', color: 'bg-sky-100 text-sky-800' }
        ],
        backgroundColor: 'bg-rose-50 border-rose-200'
      },
      {
        segments: [
          { text: 'Context: Our team is experiencing communication breakdowns during remote work. ', color: 'bg-rose-100 text-rose-800' },
          { text: 'Request: Design a better collaboration framework. ', color: 'bg-violet-100 text-violet-800' },
          { text: 'Explanation: Current tools aren\'t working effectively, meetings are unproductive, and project timelines are slipping. ', color: 'bg-fuchsia-100 text-fuchsia-800' },
          { text: 'Outcome: Improve team efficiency by 30% and reduce project delays', color: 'bg-sky-100 text-sky-800' }
        ],
        backgroundColor: 'bg-violet-50 border-violet-200'
      },
      {
        segments: [
          { text: 'Context: I want to transition from employee to freelancer in web development. ', color: 'bg-rose-100 text-rose-800' },
          { text: 'Request: Create a transition strategy. ', color: 'bg-violet-100 text-violet-800' },
          { text: 'Explanation: I need to build a client base while maintaining income, develop a portfolio, and establish pricing. ', color: 'bg-fuchsia-100 text-fuchsia-800' },
          { text: 'Outcome: Successfully transition within 12 months with stable income', color: 'bg-sky-100 text-sky-800' }
        ],
        backgroundColor: 'bg-fuchsia-50 border-fuchsia-200'
      }
    ],
    template: `Context: [Current situation, background, or challenge you're facing]

Request: [What you need help with - strategy, solution, or guidance]

Explanation: [Why this matters, what you've tried, or additional details about the challenge]

Outcome: [What success looks like or the benefit you want to achieve]`
  },
  {
    id: 'rise',
    title: 'RISE Prompt',
    blurb: 'Guided, step-by-step framework perfect for learning flows and instructional design. Ideal for educational and training scenarios.',
    bestFor: [
      'Learning and education',
      'Training programs',
      'Skill development',
      'Instructional design',
      'Guided tutorials'
    ],
    acronym: [
      { letter: 'R', meaning: 'Role', description: 'Define who should be involved', color: 'bg-orange-100 text-orange-800' },
      { letter: 'I', meaning: 'Input', description: 'Specify what resources or information is needed', color: 'bg-lime-100 text-lime-800' },
      { letter: 'S', meaning: 'Steps', description: 'Outline the learning or process sequence', color: 'bg-pink-100 text-pink-800' },
      { letter: 'E', meaning: 'Execution', description: 'Detail how to implement or practice', color: 'bg-slate-100 text-slate-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'Role: New employee learning our project management system. ', color: 'bg-orange-100 text-orange-800' },
          { text: 'Input: Access to software, sample projects, basic computer skills. ', color: 'bg-lime-100 text-lime-800' },
          { text: 'Steps: Account setup, navigation tour, creating first project, collaboration features, reporting tools. ', color: 'bg-pink-100 text-pink-800' },
          { text: 'Execution: Daily practice with real projects, weekly check-ins, competency assessment after 2 weeks', color: 'bg-slate-100 text-slate-800' }
        ],
        backgroundColor: 'bg-orange-50 border-orange-200'
      },
      {
        segments: [
          { text: 'Role: Beginner learning to code in Python. ', color: 'bg-orange-100 text-orange-800' },
          { text: 'Input: Computer with Python installed, basic math knowledge, 1 hour daily study time. ', color: 'bg-lime-100 text-lime-800' },
          { text: 'Steps: Syntax basics, variables and data types, control structures, functions, simple projects. ', color: 'bg-pink-100 text-pink-800' },
          { text: 'Execution: Code-along tutorials, daily practice exercises, weekly mini-projects, peer review sessions', color: 'bg-slate-100 text-slate-800' }
        ],
        backgroundColor: 'bg-lime-50 border-lime-200'
      },
      {
        segments: [
          { text: 'Role: Small business owner learning digital marketing. ', color: 'bg-orange-100 text-orange-800' },
          { text: 'Input: Website, social media accounts, basic analytics access. ', color: 'bg-lime-100 text-lime-800' },
          { text: 'Steps: SEO fundamentals, content creation, social media strategy, email marketing, performance tracking. ', color: 'bg-pink-100 text-pink-800' },
          { text: 'Execution: Weekly content calendar, monthly campaign analysis, quarterly strategy reviews', color: 'bg-slate-100 text-slate-800' }
        ],
        backgroundColor: 'bg-pink-50 border-pink-200'
      }
    ],
    template: `Role: [Who is learning or being trained - their current level and background]

Input: [What resources, tools, or prerequisite knowledge is available or required]

Steps: [The sequential learning path or process stages they should follow]

Execution: [How to practice, implement, or apply what they're learning, including timelines and assessment methods]`
  },
  {
    id: 'pain',
    title: 'PAIN Prompt',
    blurb: 'Problem-focused framework for action-oriented solutions. Designed to tackle challenges head-on with practical next steps.',
    bestFor: [
      'Problem-solving',
      'Troubleshooting',
      'Crisis management',
      'Action planning',
      'Solution finding'
    ],
    acronym: [
      { letter: 'P', meaning: 'Problem', description: 'Clearly define the issue or challenge', color: 'bg-red-100 text-red-800' },
      { letter: 'A', meaning: 'Action', description: 'Specify what needs to be done', color: 'bg-orange-100 text-orange-800' },
      { letter: 'I', meaning: 'Information', description: 'Provide relevant data and context', color: 'bg-blue-100 text-blue-800' },
      { letter: 'N', meaning: 'Next Steps', description: 'Outline immediate actions to take', color: 'bg-green-100 text-green-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'Problem: Our website traffic dropped 40% last month. ', color: 'bg-red-100 text-red-800' },
          { text: 'Action: Identify the cause and develop a recovery plan. ', color: 'bg-orange-100 text-orange-800' },
          { text: 'Information: Recent Google algorithm update, competitors launched new campaigns, we changed our content strategy. ', color: 'bg-blue-100 text-blue-800' },
          { text: 'Next Steps: Provide specific actions to take this week to start recovery', color: 'bg-green-100 text-green-800' }
        ],
        backgroundColor: 'bg-red-50 border-red-200'
      },
      {
        segments: [
          { text: 'Problem: Team productivity has declined since switching to remote work. ', color: 'bg-red-100 text-red-800' },
          { text: 'Action: Improve team coordination and motivation. ', color: 'bg-orange-100 text-orange-800' },
          { text: 'Information: Communication feels scattered, unclear priorities, reduced collaboration, some team members struggling with home setup. ', color: 'bg-blue-100 text-blue-800' },
          { text: 'Next Steps: Give me 3 immediate changes to implement this week', color: 'bg-green-100 text-green-800' }
        ],
        backgroundColor: 'bg-orange-50 border-orange-200'
      },
      {
        segments: [
          { text: 'Problem: Customer complaints about product quality have increased 200%. ', color: 'bg-red-100 text-red-800' },
          { text: 'Action: Address quality issues and restore customer confidence. ', color: 'bg-orange-100 text-orange-800' },
          { text: 'Information: New supplier introduced last quarter, rushed production schedule, insufficient quality control checks. ', color: 'bg-blue-100 text-blue-800' },
          { text: 'Next Steps: Provide immediate damage control and long-term prevention strategies', color: 'bg-green-100 text-green-800' }
        ],
        backgroundColor: 'bg-blue-50 border-blue-200'
      }
    ],
    template: `Problem: [Clearly describe the specific issue or challenge you're facing]

Action: [What you want to accomplish or what kind of solution you need]

Information: [Relevant context, data, constraints, or factors contributing to the problem]

Next Steps: Please provide specific, actionable steps I can take immediately to start addressing this problem.`
  },
  {
    id: 'coast',
    title: 'COAST Prompt',
    blurb: 'Comprehensive framework for detailed workflows and process planning. Perfect for complex projects requiring thorough organization.',
    bestFor: [
      'Complex project planning',
      'Workflow design',
      'Process documentation',
      'Detailed procedures',
      'System implementation'
    ],
    acronym: [
      { letter: 'C', meaning: 'Context', description: 'Set the environment and background', color: 'bg-teal-100 text-teal-800' },
      { letter: 'O', meaning: 'Objective', description: 'Define the primary goal or purpose', color: 'bg-cyan-100 text-cyan-800' },
      { letter: 'A', meaning: 'Actions', description: 'List required steps and activities', color: 'bg-sky-100 text-sky-800' },
      { letter: 'S', meaning: 'Scenario', description: 'Consider different situations or variations', color: 'bg-indigo-100 text-indigo-800' },
      { letter: 'T', meaning: 'Task', description: 'Break down into specific deliverables', color: 'bg-purple-100 text-purple-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'Context: Launching a new e-commerce website for handmade crafts. ', color: 'bg-teal-100 text-teal-800' },
          { text: 'Objective: Create a complete launch process that ensures smooth rollout and customer satisfaction. ', color: 'bg-cyan-100 text-cyan-800' },
          { text: 'Actions: Website testing, inventory setup, payment processing, shipping logistics, customer service protocols. ', color: 'bg-sky-100 text-sky-800' },
          { text: 'Scenario: Consider soft launch vs full launch, different traffic volumes, potential technical issues. ', color: 'bg-indigo-100 text-indigo-800' },
          { text: 'Task: Provide detailed timeline with specific milestones and responsibilities', color: 'bg-purple-100 text-purple-800' }
        ],
        backgroundColor: 'bg-teal-50 border-teal-200'
      },
      {
        segments: [
          { text: 'Context: Implementing a new customer relationship management (CRM) system for a 50-person sales team. ', color: 'bg-teal-100 text-teal-800' },
          { text: 'Objective: Seamlessly transition from current system to new CRM with minimal disruption. ', color: 'bg-cyan-100 text-cyan-800' },
          { text: 'Actions: Data migration, user training, system configuration, integration setup, testing phases. ', color: 'bg-sky-100 text-sky-800' },
          { text: 'Scenario: Account for different user skill levels, potential resistance to change, data quality issues. ', color: 'bg-indigo-100 text-indigo-800' },
          { text: 'Task: Create implementation plan with phases, training schedules, and success metrics', color: 'bg-purple-100 text-purple-800' }
        ],
        backgroundColor: 'bg-cyan-50 border-cyan-200'
      },
      {
        segments: [
          { text: 'Context: Organizing a virtual conference for 500+ attendees across multiple time zones. ', color: 'bg-teal-100 text-teal-800' },
          { text: 'Objective: Deliver engaging, smooth conference experience with high attendance and satisfaction. ', color: 'bg-cyan-100 text-cyan-800' },
          { text: 'Actions: Platform selection, speaker coordination, registration management, technical rehearsals, engagement strategies. ', color: 'bg-sky-100 text-sky-800' },
          { text: 'Scenario: Handle different time zones, technical difficulties, varying engagement levels, speaker availability. ', color: 'bg-indigo-100 text-indigo-800' },
          { text: 'Task: Develop comprehensive event management timeline with contingency plans', color: 'bg-purple-100 text-purple-800' }
        ],
        backgroundColor: 'bg-sky-50 border-sky-200'
      }
    ],
    template: `Context: [The environment, situation, or background for your project/process]

Objective: [The main goal or outcome you want to achieve]

Actions: [Key activities, steps, or processes that need to happen]

Scenario: [Different situations, variations, or challenges you might encounter]

Task: Please provide a detailed workflow or process plan that addresses all these elements with specific timelines, responsibilities, and deliverables.`
  },
  {
    id: 'roses',
    title: 'ROSES Prompt',
    blurb: 'Analytical framework for scenario-based decision-making and strategic analysis. Excellent for evaluating options and planning approaches.',
    bestFor: [
      'Strategic decision-making',
      'Scenario analysis',
      'Business planning',
      'Risk assessment',
      'Comparative evaluation'
    ],
    acronym: [
      { letter: 'R', meaning: 'Role', description: 'Define perspective or stakeholder viewpoint', color: 'bg-rose-100 text-rose-800' },
      { letter: 'O', meaning: 'Objective', description: 'State the goal or desired outcome', color: 'bg-pink-100 text-pink-800' },
      { letter: 'S', meaning: 'Scenario', description: 'Describe the situation or context', color: 'bg-fuchsia-100 text-fuchsia-800' },
      { letter: 'E', meaning: 'Expected Solution', description: 'Outline what type of answer you need', color: 'bg-purple-100 text-purple-800' },
      { letter: 'S', meaning: 'Steps', description: 'Request systematic approach or methodology', color: 'bg-violet-100 text-violet-800' }
    ],
    examples: [
      {
        segments: [
          { text: 'Role: CEO of a mid-size tech company. ', color: 'bg-rose-100 text-rose-800' },
          { text: 'Objective: Decide whether to expand internationally or focus on domestic market growth. ', color: 'bg-pink-100 text-pink-800' },
          { text: 'Scenario: Strong domestic performance, emerging opportunities in EU market, limited resources, competitive pressure increasing. ', color: 'bg-fuchsia-100 text-fuchsia-800' },
          { text: 'Expected Solution: Strategic recommendation with risk analysis and resource requirements. ', color: 'bg-purple-100 text-purple-800' },
          { text: 'Steps: Provide framework for evaluating both options with key decision criteria', color: 'bg-violet-100 text-violet-800' }
        ],
        backgroundColor: 'bg-rose-50 border-rose-200'
      },
      {
        segments: [
          { text: 'Role: Product manager for a mobile app. ', color: 'bg-rose-100 text-rose-800' },
          { text: 'Objective: Choose between adding new features vs improving existing ones. ', color: 'bg-pink-100 text-pink-800' },
          { text: 'Scenario: User retention declining, competitors launching similar features, development team capacity limited, pressure from stakeholders for innovation. ', color: 'bg-fuchsia-100 text-fuchsia-800' },
          { text: 'Expected Solution: Data-driven decision framework with prioritization criteria. ', color: 'bg-purple-100 text-purple-800' },
          { text: 'Steps: Guide me through analysis process including user research, competitive analysis, and impact assessment', color: 'bg-violet-100 text-violet-800' }
        ],
        backgroundColor: 'bg-pink-50 border-pink-200'
      },
      {
        segments: [
          { text: 'Role: Marketing director for a B2B SaaS startup. ', color: 'bg-rose-100 text-rose-800' },
          { text: 'Objective: Determine optimal customer acquisition strategy for next year. ', color: 'bg-pink-100 text-pink-800' },
          { text: 'Scenario: Current paid ads expensive, organic growth slow, budget constraints, need to scale quickly, diverse target market segments. ', color: 'bg-fuchsia-100 text-fuchsia-800' },
          { text: 'Expected Solution: Multi-channel strategy with budget allocation and expected ROI. ', color: 'bg-purple-100 text-purple-800' },
          { text: 'Steps: Help me evaluate different channels and create testing framework for optimization', color: 'bg-violet-100 text-violet-800' }
        ],
        backgroundColor: 'bg-fuchsia-50 border-fuchsia-200'
      }
    ],
    template: `Role: [Your perspective, position, or the stakeholder viewpoint you're considering]

Objective: [What you want to achieve or the decision you need to make]

Scenario: [The current situation, context, constraints, and relevant factors]

Expected Solution: [What type of analysis, recommendation, or output you're looking for]

Steps: Please provide a systematic approach or methodology to analyze this situation and reach the best decision.`
  }
];