# Phones Catalog

This is a React app that helps you to choose your new smartphone! 📱  You can consult the features and price of each smartphone.

This app is made with React, Redux and Sass for the styles. It works with a small backend running NodeJS with Express. It also includes tests, using Jest and Enzyme.

### 🚀 &nbsp; Run the project the traditional way
First of all, clone or download this repository.

##### ⚙️ &nbsp; Run API
1. Inside the ***server*** folder, create a new ***.env*** file with this content:
    ```
    PORT=4000
    ENV=development
    ```
2. In your terminal, go to the ***server*** folder and run ***npm i*** in order to install all required dependencies.

3. Finally, run ***npm run dev*** from the ***server*** folder. The API will be running at `https://localhost:4000`.

##### 🎨 &nbsp; Run Frontend
1. Inside the ***client*** folder, create a new ***.env*** file with this content:
    ```
    REACT_APP_API_URL=http://localhost:4000
    ```
2. In your terminal, go to the ***client*** folder and run ***npm i*** in order to install all required dependencies.

3. Finally, run ***npm start*** from the ***client*** folder. This will open the React app in your browser, running at `http://localhost:3000`.

##### 🧪 &nbsp; Run the tests
In order to run the tests, open your terminal, go to ***client*** folder and enter ***npm test***.


### 🐳 &nbsp; Run the project with Docker
1. Download this repository.
2. In your terminal, go to the ***/*** folder of the project and execute ***docker-compose up***. 
3. Open you browser and go to `http://localhost:3000`.

---
**Arturo G. Bruno | June 2020**

