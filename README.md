# 🎯 Prompt Framework Picker

An interactive web application that helps you choose and customize prompt frameworks for better AI interactions. Select from 12 powerful frameworks, each designed for specific use cases, and generate customized prompts with color-coded examples.

![Prompt Framework Picker](https://img.shields.io/badge/React-18+-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6.svg)

## ✨ Features

- **12 Comprehensive Frameworks**: From basic prompts to complex strategic analysis
- **Color-Coded Examples**: Visual highlighting shows how each framework component works
- **Interactive Editor**: Edit and customize prompt templates in real-time
- **Copy to Clipboard**: One-click copying of your customized prompts
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Clean UI**: Professional design with shadcn/ui components

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd prompt-framework-picker
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev

   # Or using yarn
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📂 Project Structure

```
├── App.tsx                    # Main application component
├── components/
│   ├── FrameworkCard.tsx      # Individual framework display card
│   ├── PromptEditor.tsx       # Editable prompt template area
│   └── ui/                    # shadcn/ui component library
├── data/
│   └── frameworks.ts          # Framework definitions and examples
├── styles/
│   └── globals.css           # Tailwind CSS configuration
└── README.md                 # This file
```

## 🎨 Available Frameworks

The application includes 12 powerful prompt frameworks:

1. **Standard Prompt** - General-purpose interactions
2. **Reasoning Prompt** - Complex problem-solving
3. **RACE** - Role, Action, Context, Explanation
4. **CARE** - Context, Action, Result, Example
5. **APE** - Action, Purpose, Execution
6. **CREATE** - Character, Request, Examples, Adjustments, Type, Extras
7. **TAG** - Task, Action, Goal
8. **CREO** - Context, Request, Explanation, Outcome
9. **RISE** - Role, Input, Steps, Execution
10. **PAIN** - Problem, Action, Information, Next Steps
11. **COAST** - Context, Objective, Actions, Scenario, Task
12. **ROSES** - Role, Objective, Scenario, Expected Solution, Steps

## 🛠️ Technologies Used

- **React 18+** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icons
- **Sonner** - Toast notifications
- **Vite** - Fast build tool and development server

## 📖 Usage

1. **Browse Frameworks**: Scroll through the available frameworks on the left panel
2. **Select a Framework**: Click on any framework card to see it highlighted
3. **Edit the Prompt**: The template will appear in the right panel for editing
4. **Customize**: Replace placeholders in [brackets] with your specific needs
5. **Copy**: Click the copy button to copy your customized prompt to clipboard

### Understanding Color Coding

Each framework example uses color-coded highlighting that matches the acronym breakdown:
- Framework letters (like R-A-C-E) have specific colors
- Example text is highlighted with matching colors to show how each component appears in practice
- This visual connection helps you understand how to apply each framework element

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Adding New Frameworks

To add a new framework:

1. Open `data/frameworks.ts`
2. Add a new framework object following the existing pattern:
   ```typescript
   {
     id: 'your-framework-id',
     title: 'Your Framework Name',
     blurb: 'Brief description...',
     bestFor: ['Use case 1', 'Use case 2'],
     acronym: [
       { letter: 'Y', meaning: 'Your', description: '...', color: 'bg-blue-100 text-blue-800' }
     ],
     examples: [
       {
         segments: [
           { text: 'Example text', color: 'bg-blue-100 text-blue-800' }
         ],
         backgroundColor: 'bg-blue-50 border-blue-200'
       }
     ],
     template: 'Your template with [placeholders]'
   }
   ```

### Customizing Styles

The application uses Tailwind CSS v4 with custom design tokens defined in `styles/globals.css`. You can modify colors, spacing, and typography by updating the CSS custom properties.

## 🚨 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

**Node version issues**
```bash
# Check your Node version
node --version
# Should be 18 or higher
```

**Dependencies not installing**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-framework`)
3. Commit your changes (`git commit -am 'Add new framework'`)
4. Push to the branch (`git push origin feature/new-framework`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Search existing issues on GitHub
3. Create a new issue with detailed information about your problem

---

Made with ❤️ for better AI interactions