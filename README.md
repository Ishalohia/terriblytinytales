Here is the detailed explaination of all the components which are made to complete the given task and also a hosted link for the application is added at the bottom of the page.

According to the task provided, on first load, there should be submit button

<img width="941" alt="Screenshot 2023-05-15 at 7 29 59 PM" src="https://github.com/Ishalohia/terriblytinytales/assets/104261885/86ba111f-15e8-4edb-a9b9-0585730062ce">

This component is for the submitButton.
In line:1, This line imports the React library which is needed to define React components.

In line:2, This line imports the CSS styles from a local CSS module file called 'SubmitButton.module.css'. The 'styles' object will contain all the class names defined in that CSS file. CSS modules allow us to scope styles to specific components, preventing them from leaking into other parts of the application.

In line:4, This line defines a React functional component called 'SubmitButton'. It takes in a single argument 'props', which is an object containing all the properties passed to this component.

In line:5-13, These line contains JSX code that will be rendered when the component is used. It defines a div element that wraps around a button element. The button element has two CSS classes applied to it, 'custom-btn' and 'btn-submit', which are defined in the imported CSS module. When the button element is clicked, it will trigger the onSubmit function that is passed as a prop to this component.

In line:14, This line exports the 'SubmitButton' component as the default export of this module, which means that it can be imported and used in other parts of the codebase.

After this for creating the Histogram by fetching the data from the provided link that will parse the content and find the 20 most occurring words and plot a Histrogram for it.

<img width="683" alt="Screenshot 2023-05-15 at 7 47 28 PM" src="https://github.com/Ishalohia/terriblytinytales/assets/104261885/14d93175-3aa7-473d-95bd-600e53606232">

This component is for Histogram
In line:1&3 These lines import React and a CSS module file called 'Histogram.module.css.

In line:2 This line of code imports all of the functions and modules from the D3.js (Data-Driven Documents) library and binds them to the object named 'd3'. D3 is a popular JavaScript library used for data visualization and manipulation.
D3 provides a set of powerful tools for manipulating the Document Object Model (DOM) of web pages, enabling the creation of dynamic, interactive data visualizations and charts.

In line:4 This line declares a React component called "Histogram" which takes a single prop called "data".

In line:6-7 These lines use the useState and useRef hooks to create state variables and a reference to a DOM element.
"useState" hook is a function provided by the React library that allows functional components to have stateful logic.
"useRef" hook is a built-in React hook that allows functional components to hold references to mutable values that persist across re-renders.

In line:9-19 These line of code uses the useEffect hook which is  called with a callback function that sets up a handleResize function to be called whenever the component is rendered or the window is resized. The second argument to useEffect is an empty array "[]". This tells React to run the effect only once, when the component mounts. The "useEffect" hook is a built-in React hook that allows functional components to perform side effects, such as fetching data, setting up event listeners, or updating the DOM, after each render.

In line:21-23 This set of code defines the chart margins and dimensions based on the width of the chart container.
By defining these variables, the chart can be properly scaled and positioned within the container, ensuring that the chart elements do not overflow outside the container or overlap with the margins.

In line:24-27 In this set of code, 'x' is a D3 scale function of the type "Band scale" which maps discrete values to a continuous output range. The "domain" of the scale is set to an array of the words in the input data, extracted using the "map" function and destructuring. The "range" is set to an array of the pixel positions for the bands, based on the available width and the "padding" property to create some space between each band.

In line:28-31 'y' is a D3 scale function of the type "Linear scale" which maps continuous input values to a continuous output range. The "domain" is set to an array with the minimum and maximum count values of the input data, extracted using the max function and destructuring. The "nice" method is used to ensure the axis includes nice round values. The "range" is set to an array of the pixel positions for the bars.

In line:32 This line has  "xAxis" which is a D3 axis generator function that is configured to display the 'x' scale as a bottom axis.

In line:33 This line has "yAxis" which is a D3 axis generator function that is configured to display the 'y' scale as a left axis. Here, the "tickFormat" method is used to format the tick labels as integers.

In line:35-37 This function is triggered when the mouse enters a bar of the histogram. It takes in the data associated with that bar and sets it as the currently hovered data in the state using the setHoveredData function.

In line:39-41 This function is triggered when the mouse leaves a bar of the histogram. It sets the currently hovered data to null, effectively removing any displayed hover text.

<img width="538" alt="Screenshot 2023-05-15 at 8 51 11 PM" src="https://github.com/Ishalohia/terriblytinytales/assets/104261885/4ececc56-c238-4615-96d5-6c9503fc6ad1">

This code is the JSX code that renders the bar chart using D3 and React.

In line:44 This line creates a container div for the entire histogram. This attaches the "containerRef" object created using the "useRef" hook to the div element. This allows us to access the DOM node that this div represents. The "styles.container" sets the CSS class name of the div element to 'container' which is defined in a CSS module. 

In line:45 This line creates an SVG element that will contain the histogram visualization. The width of the SVG is set to the current width of the container, which is stored in the width state variable. The height is fixed at 600 pixels.

In line:46 This line creates a group element that will contain all the visual elements of the histogram. It is translated by the margin values to leave space for the axes and labels.

In line:47 This line begins a map function that iterates over the data array. For each element of the array, it extracts the word and count values using destructuring and creates a rect element to represent the corresponding bar in the histogram.

In line:48-58 This set of code creates a rect element to represent a bar in the histogram.The key attribute is set to the word value of the data element to allow React to efficiently update the elements when the data changes. The x and y attributes are set using the scales previously defined to position the bar correctly in the SVG. The onMouseEnter and onMouseLeave events are set to trigger the handleMouseEnter and handleMouseLeave functions respectively, which control the display of the hover text.

In line:59 This line creates a group element that will contain the "x-axis" of the histogram. It is translated to the bottom of the visualization.

In line:60 This creates a group element that will contain the "x-axis" ticks and labels. It is assigned a reference using the "ref" attribute, which allows D3 to select the node and apply the 'x-axis' using the "call" method.

In line:61-66 This creates a text element that will label the x-axis. It is positioned at the center of the SVG and just below the bottom margin. The className is set to styles.xAxisLabel to apply the appropriate styling.

In line:68 This creates a group element that will contain the y-axis of the histogram. It is translated to the left of the visualization.

In line:69 This line is creating a group element and passing it to a function as a node argument using an arrow function. "select()" method is used to select the node and then the "call()" method is used to call the yAxis function. This sets up the y-axis ticks and labels on the left side of the chart.

In line:70-75 This code is creating a text element for the Y-axis label of the chart.The 'x' attribute sets the horizontal position of the text element, which is "-innerHeight / 2", meaning that the text will be positioned halfway across the left side of the chart. The 'y' attribute sets the vertical position of the text element, which is "-margin.left + 20", meaning that the text will be positioned at the top of the left margin of the chart with a 20 pixel offset.

In line:77-82 This block of code is rendering a text element that displays the word and count of the currently hovered data point. It is conditionally rendered using the logical "AND(&&)" operator to check if the "hoveredData" state variable is truthy. If "hoveredData" is truthy, the text element is rendered with an 'x' and 'y' position that corresponds to the position of the hovered data point on the chart, as determined by the 'x' and 'y' scales.

In line:89  This line exports the 'Histogram' component as the default export which means that it can be imported and used in other parts of the codebase.

Now,for building an "Export" button, which when clicked will download a CSV file of the histogram data. 

<img width="969" alt="Screenshot 2023-05-15 at 9 26 41 PM" src="https://github.com/Ishalohia/terriblytinytales/assets/104261885/962623a4-c9ab-42e3-b3d3-a10bc65c4fd5">

In line:1 This line imports the "React" library, which is necessary for creating React components.

In line:2 This line imports the "CSVLink" component from the "react-csv" library, which provides a way to create a link that downloads CSV data.

In line:3 This line imports a CSS module named ExportButton.module.css, which contains styles that will be applied to the ExportButton component.

In line:5 This line defines a new React component called "ExportButton". It takes in a single parameter, 'props', which contains any properties that were passed in when the component was used.

In line:6-11 This set of code returns a CSVLink component, which is provided by the react-csv library. This component takes three props: 'className' which sets the CSS class of the link which are defined in the CSS module imported earlier. 'data' which is the data that will be exported as a CSV file. It is taken from the 'data' prop that was passed in when the "ExportButton" component was used. 'filename' which is the name of the exported file. It is taken from the filename prop that was also passed in when the "ExportButton" component was used.

In line:13 This line exports the "ExportButton" component as the default export of the module, which means that it can be imported and used in other files.

Now, In app.js file we are importing our all the component where we fetches text data from a URL, processes it, and generates a histogram of the top 20 most frequently occurring words.

<img width="777" alt="Screenshot 2023-05-15 at 9 32 45 PM" src="https://github.com/Ishalohia/terriblytinytales/assets/104261885/7bc386f9-7a1b-4e0f-8dc5-4076d2fbba0c">

in line:1-6 These lines is importing the React module along with the useState hook from the React library. The d3 module is also imported, which is a JavaScript library that provides various functions for data visualization. Also, the components are imported from their respective files. The "styles" object is imported from a CSS file (App.module.css) which contains CSS styles for the App component. 

In line:8 This line consist a function component named App that represents the main component of a React application. The "App" function doesn't take any arguments.

In line:9-10 These lines uses "useState" hooks to manage state: useState to manage the data and loading state, and setIsLoading and setData to update the state.

In line:11 Creating a function "handleSubmit" which is called when the user submits a request to fetch data from a text file hosted at provided link

In line:12 This line sets the isLoading state to true, indicating that data is being fetched

In line:13 This line fetch the text file from the specified URL

In line:14 Parse the response as text

In line:15-20 This set of code once have the retrived text, then it is split into an array of words using a regular expression. The array of words is then counted using the reduce() function to create a Map object where the keys are words and the values are their counts.

In line: 22 This line creates a new array from the 'words' Map object, mapping each key-value pair to an object with properties 'word' and 'count'

In line:23 This line sorts the array in descending order based on the 'count' property of each object.

In line:24 This line extracts the first 20 objects from the sorted array.

In line:25 This line sets the extracted "data" as the state of the component.

In line:26 This line sets the "isLoading" state variable to "false" after the data has been processed and set as the state.

In line:29-31 These lines execute in case of an "error", the error is logged to the console and the "isLoading" variable is also set to "false".

<img width="673" alt="Screenshot 2023-05-15 at 9 51 14 PM" src="https://github.com/Ishalohia/terriblytinytales/assets/104261885/0b51320d-d20a-4dba-91d6-609671718f44">

In line:36 This line creates a "div" element with a class name of "app", which is defined in the "App.module.css" stylesheet.

In line:37 This line creates another "div" element with a class name of "controls".
  
In line:38 This line renders a "SubmitButton" component with an "onSubmit" prop set to the "handleSubmit" function defined earlier. This button is used to trigger the data fetching and processing logic.
  
In line:39-44 These lines contains a conditional statement that checks if the data state contains any data. If it does, it renders an ExportButton component with two props: data and filename. 
 
In line:46-47 These lines has another conditional statement that checks if the isLoading state is true. If it is, it renders a loading message.
  
In line:48-63 These lines states if "isLoading" is 'false' and data has any length, it renders a "Histogram" component with various props for the size and layout of the histogram, as well as the scales for the 'x' and 'y' axis. If neither of the previous conditions are met, it renders 'null' (i.e., nothing).
  
In line:68 Exporting the app component.

You can visit the vercel hosted link for checking the output of the code:  https://terriblytinytales-isha.vercel.app/
