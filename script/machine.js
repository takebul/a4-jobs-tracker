// else if ( event.target.closest('.delete-btn') ){
//         const card = event.target.closest('.company-card')
//         // console.log(card);

//         if (card){
//             console.log(card);
            
//              const companyName = card.querySelector('.company-name').innerText ;
//             card.remove();

//            const interviewLists = interviewList.filter( item => item.companyName != companyName);
//             rejectedList = rejectedList.filter( item => item.companyName != companyName);
//             calculate();  
//             console.log(currentStatus);
//             console.log(interviewLists);
//             console.log(rejectedList);
//             console.log(companyName);
            
            
            
                    
//             if ( currentStatus === 'interview-btn' ){
//                 renderInterview ();     
//             }
//             else if ( currentStatus === 'interview-btn' ){
//                 renderRejected();               
//             }
//         }  
//     }

// Programming-Hero Instructors
// 17:00
// else if (event.target.closest('.delete-btn')) {

//     const card = event.target.closest('.company-card');
//     if (!card) return;

//     const companyName = card.querySelector('.company-name').innerText;

//     card.remove();

//     interviewList = interviewList.filter(
//         item => item.companyName !== companyName
//     );

//     rejectedList = rejectedList.filter(
//         item => item.companyName !== companyName
//     );

//     calculate();

//     if (currentStatus === 'interview-btn') {
//         renderInterview();
//     }
//     else if (currentStatus === 'reject-btn') {
//         renderRejected();
//     }
// }

// Programming-Hero Instructors
// 17:34
// https://codeshare.io/5ox1bY

// Programming-Hero Instructors
// 17:44
// noJobSection.classList.remove('hidden');
// if (id == 'interview-filter-btn') {
//         allCardSection.classList.add('hidden');
//     		noJobSection.classList.remove('hidden');
//         if(interviewList.length <= 0){
//           noJobSection.classList.add('hidden');
        
//         }
//         renderInterview();
    
//     }