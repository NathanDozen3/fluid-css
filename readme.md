# Fluid CSS Framework

A modern, accessible, and highly customizable CSS framework. Built for maintainability, scalability, and best practices.

## Features
- Centralized CSS custom properties (design tokens) for color, spacing, typography, breakpoints, and more
- Utility-first classes for rapid prototyping and consistent design
- Modular partials for grid, flexbox, spacing, layout, typography, buttons, forms, colors, animations, accessibility, and print
- Accessibility (a11y) helpers and reduced motion support
- WordPress block and core class support
- Print and dark mode support

## File Structure
```
css/
  _a11y.css           # Accessibility helpers
  _animations.css     # Animation and transition utilities
  _buttons.css        # Button styles
  _colors.css         # Color utilities
  _container.css      # Container utilities
  _flex.css           # Flexbox utilities
  _forms.css          # Form styles
  _grid.css           # Grid system and utilities
  _layout.css         # Width, height, display utilities
  _print.css          # Print styles
  _reset.css          # Reset and base styles
  _spacing.css        # Margin, padding, gap utilities
  _typography.css     # Typography utilities
  _utilities.css      # General utility classes
  _variables.css      # Design tokens (colors, spacing, typography, etc.)
fluid.css             # Main compiled CSS (imports all partials)
```

## Usage
1. Import `fluid.css` in your theme or project for the full framework.
2. Use utility classes in your markup for rapid styling.
3. Customize design tokens in `_variables.css` to match your brand.

## Contributing
- Please follow the existing file structure and naming conventions.
- Document new utilities and components with clear comments and usage examples.
- Test for accessibility and responsive behavior.

## License
MIT
