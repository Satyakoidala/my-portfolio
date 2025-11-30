Act as an expert Web Developer and UI/UX Designer specializing in design systems. Your task is to transform the provided design system documentation into a comprehensive, single-page HTML website. This webpage must not only document the system but also serve as a living example of it, explaining its core principles and demonstrating its direct impact on the user interface for a target audience of `[Specify Target Audience: e.g., Developers, Designers, Product Managers]`.

The generated webpage should be a single, self-contained HTML file using inline CSS for portability. It must be structured semantically and logically as follows:

1.  **Header & Mission Statement:**

    -   Create a hero section with the Design System's name.
    -   Write a concise mission statement explaining the system's purpose and the value it provides (e.g., ensuring consistency, accelerating development, improving user experience).

2.  **Core Principles:**

    -   Synthesize the core philosophy behind the design system (e.g., "Clarity over decoration," "Accessibility first," "Mobile-centric"). Present these as 3-5 key principles, each with a short, impactful description.

3.  **Foundations (Design Tokens):**

    -   For each foundational element (Colors, Typography, Spacing, Grid, Iconography), create a dedicated section.
    -   **Colors:** Display the color palette. For each color swatch, provide its name, HEX/RGB value, and a description of its intended semantic use (e.g., "Primary Action," "Error State," "Background-Subtle"). Explain how the color system reinforces brand identity and aids user navigation.
    -   **Typography:** Detail the typographic scale. For each style (e.g., Heading 1, Body, Caption), display a sample text, specify its font family, size, weight, and line height. Explain how the typography hierarchy creates clarity and guides the user's focus.
    -   **Spacing & Grid:** Explain the spacing unit/scale (e.g., 8pt grid system) and the layout grid principles. Use simple visual diagrams made with styled `<div>` elements to illustrate concepts like margins, padding, and column layouts. Describe how this structured space creates rhythm and visual harmony.

4.  **Component Library:**

    -   From the document, identify key UI components (e.g., Button, Card, Input Field, Modal).
    -   For each component, generate a self-contained module that includes:
        -   **Title:** The component's name.
        -   **Description:** Its purpose and role in the UI.
        -   **Visual Demonstration:** A live, styled HTML example of the component in its default state, plus its primary variants and states (e.g., hover, disabled, active) using the system's own styles.
        -   **Usage Guidelines:** Clear "Do" and "Don't" rules for its implementation.
        -   **Code Snippet:** A clean, copy-paste-ready code block (using `<pre><code>`) showing how to implement the component in `[Specify Framework: e.g., React, Vue, HTML/CSS]`.

5.  **Accessibility (A11y):**
    -   Create a dedicated section explaining how the design system inherently supports accessibility.
    -   Reference specific examples from the foundations and components (e.g., color contrast ratios, focus state visibility, semantic HTML in component snippets, ARIA attribute usage). Explain how following the system helps developers build WCAG-compliant interfaces.

---

**DOCUMENT TO TRANSFORM:**

```
Design System Specification: "Catalyst"
This document outlines the foundational design tokens and component specifications for the Catalyst Design System. It serves as the single source of truth for designers and developers to ensure a consistent, high-quality user experience.

1. Color Palette Tokens
Our color system is built on a foundation of core brand colors, extended into a 10-step scale (50-900) to provide flexibility for UI states, depth, and accessibility.

Primary Scale (Blue)
Used for interactive elements, active states, and primary calls-to-action. The base is $color-primary-500.

Token   HEX Example Usage
$color-primary-50   #EFF6FF Subtle backgrounds, hover states
$color-primary-100  #DBEAFE Light backgrounds, highlights
$color-primary-200  #BFDBFE Disabled elements, borders
$color-primary-300  #93C5FD Low-emphasis interactive elements
$color-primary-400  #60A5FA Icons, secondary text
$color-primary-500  #3B82F6 Primary buttons, links, focus rings
$color-primary-600  #2563EB Hover states for primary elements
$color-primary-700  #1D4ED8 Active/pressed states
$color-primary-800  #1E40AF Dark-mode interactive elements
$color-primary-900  #1E3A8A Dark-mode hover states
Secondary Scale (Gray)
Used for text, borders, backgrounds, and disabled states to create a clear visual hierarchy. The base is $color-secondary-500.

Token   HEX Example Usage
$color-secondary-50 #F9FAFB Main page background
$color-secondary-100    #F3F4F6 Subtle backgrounds, dividers
$color-secondary-200    #E5E7EB Borders, disabled backgrounds
$color-secondary-300    #D1D5DB Subtle borders, disabled text
$color-secondary-400    #9CA3AF Helper text, placeholder text
$color-secondary-500    #6B7280 Body text, secondary icons
$color-secondary-600    #4B5563 Sub-headings
$color-secondary-700    #374151 Primary headings
$color-secondary-800    #1F2937 High-emphasis text
$color-secondary-900    #111827 Dark-mode surface color
Semantic & Surface Colors
These colors communicate specific meanings (e.g., success, error) or define core layout surfaces.

Token   HEX Usage
$color-success  #10B981 Success messages, confirmation
$color-warning  #F59E0B Warnings, non-blocking alerts
$color-error    #EF4444 Error messages, destructive actions
$color-background   #F9FAFB Page background color
$color-surface  #FFFFFF Card, modal, and panel backgrounds
$color-text-primary $color-secondary-800    Default text color
$color-text-secondary   $color-secondary-500    Secondary text color
$color-border-default   $color-secondary-200    Default border color


2. Typography Scale
Our typography is designed for clarity, readability, and hierarchy. The base font size is 16px (1rem).

Font Families
Primary (UI & Body): Inter
Secondary (Display & Headings): Lora
Type Scale
Token   Size (rem)  Size (px)   Recommended Usage   Font Family
$font-size-xs   0.75rem 12px    Legal text, tags, captions  Primary
$font-size-sm   0.875rem    14px    Helper text, labels Primary
$font-size-base 1rem    16px    Body copy, paragraphs   Primary
$font-size-lg   1.25rem 20px    Sub-headings (H4)   Primary
$font-size-xl   1.875rem    30px    Headings (H2, H3)   Secondary
$font-size-xxl  2.5rem  40px    Page titles (H1)    Secondary
Line Height & Letter Spacing
Token   Value   Usage
$line-height-tight  1.25    Headings
$line-height-normal 1.5 Body copy
$line-height-loose  1.75    Long-form readable content
$letter-spacing-tight   -0.025em    Large headings ($font-size-xl, xxl)
$letter-spacing-normal  0em Body copy
$letter-spacing-wide    0.05em  Uppercase labels, tags


3. Spacing Scale (The 8pt Grid)
All spacing and layout dimensions are based on a modular 8pt grid to ensure rhythm and consistency. Use these tokens for margin, padding, gap, and positioning.

Token   Value (rem) Value (px)
$space-0.5  0.25rem 4px
$space-1    0.5rem  8px
$space-2    1rem    16px
$space-3    1.5rem  24px
$space-4    2rem    32px
$space-5    2.5rem  40px
$space-6    3rem    48px
$space-8    4rem    64px
$space-12   6rem    96px


4. Shadows & Elevation
Elevation is used to communicate hierarchy and bring focus to elements like modals and dropdowns. Shadows should be subtle and layered.

Token   CSS box-shadow Value    Usage
$shadow-sm  0 1px 2px 0 rgba(0, 0, 0, 0.05) Subtle lift for buttons, inputs
$shadow-md  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)    Cards, default elevation
$shadow-lg  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)  Modals, dropdowns, popovers


5. Example Component: Primary Button
The Primary Button is a key call-to-action component, designed to be prominent and clear. It uses tokens from across the system.

Default State
background-color: $color-primary-500
color: $color-surface
padding: $space-2 $space-4 (16px 32px)
border-radius: $space-1 (8px)
border: none
font-size: $font-size-base
font-weight: 600 (SemiBold)
box-shadow: $shadow-sm
transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out
Hover State
background-color: $color-primary-600
box-shadow: $shadow-md
cursor: pointer
Disabled State
background-color: $color-secondary-200
color: $color-secondary-400
box-shadow: none
cursor: not-allowed
```
