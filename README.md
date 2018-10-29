# Cross Rive CC
This is a graph application that shows loans by year

## Getting Started

### Prerequisites
Version require
```
nodejs - v8.11.3
npm - v6.4.1
```
What things you need to install the software and how to install them

```
$ npm install
```
## Config
Highcharts has a bug in their source file

Here is how you fix it

1. Go to directory node_modules/highcharts-react-official/src/HighchartsReact.js

2. Remove from line 63

    ```
        moudle.exports - HighchartsReact;
    ```
3. Put export infront of class HighchartsReact

    ```
        export default class HighchartsReact
    ```

4. Save



