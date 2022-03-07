import React from 'react'
import ReactDOM from 'react-dom'
 import "../17sdg/sdgOption.css";
 function sdgOption() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>17 SDG Page</title>
          {/*Font awesome */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
          {/* Stylesheet*/}
          <link rel="stylesheet" href="sdgOptions.css" />
          <section>
            <h1>Choose which sustainable development goal you would like to see </h1>
            <div className="tile">
              <input type="checkbox" name="sdg" id="sdg1" />
              <label htmlFor="sdg1">
                <i className="fas fa-money-check-alt" />
                <h6>No Poverty</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg2" />
              <label htmlFor="sdg2">
                <i className="fas fa-utensils" />
                <h6>Zero Hunger</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg3" />
              <label htmlFor="sdg3">
                <i className="fas fa-heart" />
                <h6>Good Health &amp; Well-Being</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg4" />
              <label htmlFor="sdg4">
                <i className="fas fa-university" />
                <h6>Quality Education</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg5" />
              <label htmlFor="sdg5">
                <i className="fas fa-equals" />
                <h6>Gender Equality</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg6" />
              <label htmlFor="sdg6">
                <i className="fas fa-glass-whiskey" />
                <h6>Clean Water &amp; Sanitation</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg7" />
              <label htmlFor="sdg7">
                <i className="fas fa-sun" />
                <h6>Affordable &amp; Clean Energy</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg8" />
              <label htmlFor="sdg8">
                <i className="fas fa-briefcase" />
                <h6>Decent Work &amp; Economic Growth</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg9" />
              <label htmlFor="sdg9">
                <i className="fas fa-quidditch" />
                <h6>Industry Innovation &amp; Infrastructure</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg10" />
              <label htmlFor="sdg10">
                <i className="fas fa-not-equal" />
                <h6>Reduced Inequalites</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg11" />
              <label htmlFor="sdg11">
                <i className="fas fa-city" />
                <h6>Sustainable cities &amp; communities</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg12" />
              <label htmlFor="sdg12">
                <i className="fas fa-infinity" />
                <h6>Responsible consumption &amp; production</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg13" />
              <label htmlFor="sdg13">
                <i className="fas fa-cloud" />
                <h6>Climate action</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg14" />
              <label htmlFor="sdg14">
                <i className="fas fa-fish" />
                <h6>Life below water</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg15" />
              <label htmlFor="sdg15">
                <i className="fas fa-tree" />
                <h6>Life on Land</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg16" />
              <label htmlFor="sdg16">
                <i className="fas fa-balance-scale" />
                <h6>Peace justice &amp; strong institutions</h6>
              </label></div>
            <div className="tile"> 
              <input type="checkbox" name="sdg" id="sdg17" />
              <label htmlFor="sdg17">
                <i className="fas fa-handshake" />
                <h6>Partnerships for the goals</h6>
              </label></div>
            <button type="button" onclick="App()">Next!</button>
          </section>
        </div>
      );
    };
    export default sdgOption;