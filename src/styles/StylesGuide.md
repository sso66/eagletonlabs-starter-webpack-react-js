## Sass (Syntactically Awesome Style Sheets) Guides and Patterns 
*What topics to look for React-Redux-Node index.sass/App.sass/View.sass/Component.sass?*
### Basic characteristics and unit of measurements:
### Rules: Cascade | Specificity | Inheritance 
### Flexbox Module Specifications

**A. Layout:** 
  - Shape: rect | round-rect | circle
  - Size: small | medium | large
  - Position: static | absolute | relative | fixed
  - Orientation: landscape | portriat
   
 **B. Typography:**
  - Text Models : rtl | ltr
  - Color Models: rgb | rgba | hsl 
  - Typeface and Fonts: SVG fonts | @font-face
 
**C. Imagery**
  - Background: .jpg
  - Foreground: .jpg 
  
**D. Iconography**
  - Icon: .jpg | png | .svg

**E. UI/UX States:**
  - Transformations
  - Transitions
  - Translations
  - Animations:
    - Frame-by-Frame
    - Motion Tweens
  
**F. Content**
  - Text
  - Image
  - Graphics
  - Rich Media
    - Video
    - Audio
    - Canvas
  - Data
 
**G. Media Queries - basic scenarios/solutions**
  - The concept of CSS2 **@media** query: to change what is displayed based on the device
  on which the content is being rendered.
  
  - Various media attributes such as *print*, *handheld*, or *tv* can be used to define 
  different property va@lues, such as font sizes, depending on the medium used to view the page.
  
  - The main flaw of **media** tag in CSS is that it can't be nested for defining selector scope.
  
  - To resolve and balance, use Sass to add in another declaration specially for one type of
  media, and compile into a whole new selector when the style sheet is made.
  
  - For mobile web, the *handheld* attribute should alter the page if it's being viewed on
  handheld device. However, current lack of commom support on the relationship between the 
  device and the screen, the solution to this scenario can be remedy by use of a maximum
  screen width measurement.
  
  - We know that the maximum width of the iPhone 5 screen in default portrait mode is 320px. 
  Add this measurement to end of the **@media** declaration. For example, using it in a 
  nested style allows us to say that the font should appear larger only when the screen is 
  at a maximum of 320px wide. As to landscape mode, can choose a minimum width of 321px and a 
  maximum width of 480px wide.
  
**H. CSS3/CSS4 Properties/Modules at Work**

