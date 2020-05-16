// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const entryPoint = document.querySelector('.topics');

// function Tabs() {
//     axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(response => {
//         const topicItems = response.data;
//         console.log(topicItem);

//         topicItems.forEach(item => {
//             const tab = document.createElement('div');
//             tab.textContent = item;
//             entryPoint.appendChild(tab);
//         });
//     })
//     .catch(err => {
//     console.log('Oh man, something is wrong here!');
//     });
    
//     tab.classList.add('tab');
    
//     entryPoint.appendChild(tab);
//     return tab;
// }

