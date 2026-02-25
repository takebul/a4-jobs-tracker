let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let totalCount = document.getElementById('total-count');
let totalCountJob = document.getElementById('total-count-job');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

// -------------------------------------

let rejectsCount = document.getElementById('rejectedCount');
let interviewsCount = document.getElementById('interviewCount');
let ofText = document.getElementById('of-text');

// ---------------------------------------

const allCardSection = document.getElementById('all-cards');

const noJobSection = document.getElementById('no-job-section');
// const filterSection = document.getElementById('filtered-section');

const interviewSection = document.getElementById('interview-section');
const rejectedSection = document.getElementById('rejected-section');

const mainContainer = document.querySelector('main');

// ---------------------- btn -----------------------
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const deleteBtn = document.getElementById('delete-btn');


function calculateCount() {
    totalCount.innerText = allCardSection.children.length;
    totalCountJob.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

// -------------- toggle-button --------------

function toggleBtn(id) {

    allFilterBtn.classList.remove('btn-soft', 'btn-primary');
    interviewFilterBtn.classList.remove('btn-soft', 'btn-primary');
    rejectedFilterBtn.classList.remove('btn-soft', 'btn-primary');

    allFilterBtn.classList.add('btn-neutral', 'btn-outline', 'bg-blue-400');
    interviewFilterBtn.classList.add('btn-neutral', 'btn-outline', 'bg-blue-400');
    rejectedFilterBtn.classList.add('btn-neutral', 'btn-outline', 'bg-blue-400');

    console.log(id);

    const selected = document.getElementById(id);
    currentStatus = id;
    // console.log(selected);

    selected.classList.remove('btn-neutral', 'btn-outline', 'bg-blue-400');
    selected.classList.add('btn-soft', 'btn-primary', 'btn-outline');

    // ------------- filter-button -------------

    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        rejectedSection.classList.add('hidden');
        interviewSection.classList.remove('hidden');

        interviewsCount.classList.remove('hidden');
        ofText.classList.remove('hidden');
        calculateCount()
        rejectsCount.classList.add('hidden')
        interviewsCount.innerText = interviewCount.innerText;

        // if (interviewList.length <= 0) {
        //     noJobSection.classList.remove('hidden');

        // }
        renderInterview();

    }

    else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        noJobSection.classList.add('hidden');
        interviewSection.classList.add('hidden');
        rejectedSection.classList.add('hidden')

        interviewsCount.classList.add('hidden');
        rejectsCount.classList.add('hidden');
        ofText.classList.add('hidden');
    }

    else if (id == 'rejected-filter-btn') {
        // console.log(filterSection);
        interviewsCount.classList.add('hidden');
        ofText.classList.remove('hidden');
        allCardSection.classList.add('hidden');

         interviewSection.classList.add('hidden');
        rejectedSection.classList.remove('hidden');

        rejectsCount.classList.remove('hidden');
        calculateCount()
        document.getElementById('rejectedCount').innerText = rejectedCount.innerText;



        // if (rejectedList.length <= 0) {
        //     noJobSection.classList.remove('hidden');
        //     return;
        // }
        renderRejected();
    }

}

mainContainer.addEventListener('click', function (event) {

    // console.log(event.target.classList.contains('interview-btn'));

    if (event.target.classList.contains('interview-btn')) {
        // console.log(event.target.parentNode.parentNode);
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;
        const skills = parentNode.querySelector('.skills').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const statuS = parentNode.querySelector('.statuS').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.statuS').innerHTML = '<p class="text-green-500">interview</p>'

        const cardInfo = {
            companyName,
            skills,
            salary,
            statuS,
            notes
        }

        const companyMatching = interviewList.find(item => item.companyName == cardInfo.companyName);


        if (!companyMatching) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)

        if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }
        calculateCount();

    }

    else if (event.target.classList.contains('rejected-btn')) {
        // console.log(event.target.parentNode.parentNode);
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;
        const skills = parentNode.querySelector('.skills').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const statuS = parentNode.querySelector('.statuS').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.statuS').innerHTML = '<p class="text-red-500">Rejected</p>'

        const cardInfo = {
            companyName,
            skills,
            salary,
            statuS,
            notes
        }

        const companyMatching = rejectedList.find(item => item.companyName == cardInfo.companyName);


        if (!companyMatching) {
            rejectedList.push(cardInfo);
        }
        console.log(rejectedList);

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        }

        calculateCount();

    }

    // -------------------------------

    else if ( event.target.closest('.delete-btn') ){
        const card = event.target.closest('.company-card')
        // console.log(card);

        if (card){
            console.log(card);
            
             const companyName = card.querySelector('.company-name').innerText ;
            card.remove();

           const interviewLists = interviewList.filter( item => item.companyName != companyName);
            rejectedList = rejectedList.filter( item => item.companyName != companyName);
            calculateCount()  
            console.log(currentStatus);
            console.log(interviewLists);
            console.log(rejectedList);
            console.log(companyName);
            
            
            
                    
            if ( currentStatus === 'interview-btn' ){
                renderInterview ();     
            }
            else if ( currentStatus === 'interview-btn' ){
                renderRejected();               
            }
        }  
    }

else if (event.target.closest('.delete-btn')) {

    const card = event.target.closest('.company-card');
    if (!card) return;

    const companyName = card.querySelector('.company-name').innerText;

    card.remove();

    interviewList = interviewList.filter(
        item => item.companyName !== companyName
    );

    rejectedList = rejectedList.filter(
        item => item.companyName !== companyName
    );

    calculate();

    if (currentStatus === 'interview-btn') {
        renderInterview();
    }
    else if (currentStatus === 'reject-btn') {
        renderRejected();
    }
}

    

})

// buji nah kamne korbo

// const noJobSection = document.getElementById('no-job-section')

// function checkEmptySection (){
//     if(filterSection.children.length === 1){
//         noJobSection.style.display = 'block';
//     } else{
//         noJobSection.style.display = 'none';
//     }
// }

// deleteBtn.addEventListener('click', function(){
//     allCardSection.remove();
// })


function renderInterview() {
    interviewSection.innerHTML = "";
    // filterSection.innerHTML = `
    // <div class="bg-base-100 justify-items-center py-20 space-y-1 rounded-sm">
    //             <img src="jobs.png" alt="">
    //             <h2 class="text-2xl font-medium">No jobs available</h2>
    //             <p>Check back soon for new job opportunities</p>
    //         </div>
    // `;

    if(interviewList.length === 0){
        // const noJobSection = document.getElementById('no-job-section');
        noJobSection.classList.remove('hidden');
        console.log(noJobSection);
        return;
    }

    for (let interview of interviewList) {
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'space-y-5 pb-6'
        div.innerHTML = `
        <div class="space-y-5 bg-base-100 p-6 rounded-md">

                <div class="flex justify-between items-center">
                    <div>
                        <h4 class="company-name font-semibold text-xl pb-1">${interview.companyName}</h4>
                        <p class="skills text-gray-500">${interview.skills}</p>
                    </div>
                    <div>
                        <button class="delete-btn btn btn-soft rounded-full"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>

                <div>
                    <p class="salary text-gray-500">${interview.salary}</p>
                </div>

                <div>
                    <button class="statuS btn btn-active"><p class="text-green-500">Interview</p></button>
                </div>

                <div>
                    <p class="notes text-gray-600">${interview.notes}</p>
                </div>

                <div class="flex gap-3">
                    <button class="interview-btn btn btn-outline btn-success">interview</button>
                    <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
                </div>

            </div>
        `
        interviewSection.appendChild(div);
    }
}


function renderRejected() {
    rejectedSection.innerHTML = "";

    if(rejectedList.length == 0){
        // const noJobSection = document.getElementById('no-job-section');
        noJobSection.classList.remove('hidden');
        return;
    }

    for (let rejected of rejectedList) {
        console.log(rejected);
        let div = document.createElement('div');
        div.className = 'space-y-5 pb-6'
        div.innerHTML = `
        <div class="space-y-5 bg-base-100 p-6 rounded-md">

                <div class="flex justify-between items-center">
                    <div>
                        <h4 class="company-name font-semibold text-xl pb-1">${rejected.companyName}</h4>
                        <p class="skills text-gray-500">${rejected.skills}</p>
                    </div>
                    <div>
                        <button class="delete-btn btn btn-soft rounded-full"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>

                <div>
                    <p class="salary text-gray-500">${rejected.salary}</p>
                </div>

                <div>
                    <button class="statuS btn btn-active"><p class="text-green-500">Rejected</p></button>
                </div>

                <div>
                    <p class="notes text-gray-600">${rejected.notes}</p>
                </div>

                <div class="flex gap-3">
                    <button class="interview-btn btn btn-outline btn-success">interview</button>
                    <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
                </div>

            </div>
        `
        rejectedSection.appendChild(div);
    }
}


