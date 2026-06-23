const careerData = {
    'MPC': {fullName: 'Maths, Physics, Chemistry', eligibility: '10th Pass with 55%+ marks', duration: '2 Years Intermediate', nextSteps: 'B.Tech, B.E, B.Sc, BCA, NDA', topExams: 'JEE Main, JEE Advanced, EAMCET', careerScope: 'Engineering, IT, Software, Defence', avgSalary: 'After B.Tech: 4-30 LPA'},
    'BiPC': {fullName: 'Biology, Physics, Chemistry', eligibility: '10th Pass with 50%+ marks', duration: '2 Years Intermediate', nextSteps: 'MBBS, BDS, BAMS, Nursing, Pharmacy', topExams: 'NEET, EAMCET', careerScope: 'Doctor, Dentist, Pharma, Research', avgSalary: 'MBBS Doctor: 6-50 LPA'},
    'MEC': {fullName: 'Maths, Economics, Commerce', eligibility: '10th Pass', duration: '2 Years Intermediate', nextSteps: 'B.Com, BBA, CA, CMA, CS', topExams: 'CUET, CA Foundation', careerScope: 'Accountant, Banker, Business Analyst', avgSalary: 'After CA: 8-25 LPA'},
    'CSE': {fullName: 'Computer Science Engineering', eligibility:'MPC Intermediate with 60%+', duration:'4 Years B.Tech', nextSteps: 'M.Tech, MS Abroad, MBA', topExams: 'JEE Main, EAMCET', careerScope: 'Software Developer, AI Engineer, Data Scientist', avgSalary: '6-40 LPA. Top: 20-60 LPA'},
    'IAS': {fullName: 'Indian Administrative Service', eligibility: 'Any Degree, Age 21-32', duration: 'Training: 2 Years', nextSteps: 'District Collector, Secretary', topExams: 'UPSC Civil Services Exam', careerScope: 'Top admin post in India', avgSalary: 'Starting: 56,100 per month + perks'}
};

function initCards() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    const sectors = {
        'Streams After 10th': ['MPC', 'BiPC', 'MEC'],
        'Streams After Intermediate': ['CSE'],
        'Government Jobs': ['IAS']
    };
    
    let html = '';
    let i = 1;
    for (let sectorName in sectors) {
        html += `
        <div class="sector">
            <div class="sector-header" onclick="toggleSector(this)">
                <span>${i}. ${sectorName}</span>
                <span class="icon">▼</span>
            </div>
            <div class="sector-content">
                <div class="cards-grid">
                    ${sectors[sectorName].map(key => {
                        const data = careerData[key];
                        return `
                        <div class="career-card" data-key="${key}">
                            <h3>${data.fullName}</h3>
                            <p>${data.careerScope.substring(0, 60)}...</p>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        </div>`;
        i++;
    }
    container.innerHTML = html;
    
    document.querySelectorAll('.career-card').forEach(card => {
        card.addEventListener('click', function() {
            showDetails(this.getAttribute('data-key'));
        });
    });
}

window.toggleSector = function(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.icon');
    content.classList.toggle('active');
    icon.classList.toggle('rotate');
}

window.showDetails = function(key) {
    const data = careerData[key];
    if (!data) return;
    document.getElementById('modalTitle').textContent = data.fullName;
    let bodyHTML = `
        <div class="detail-row"><div class="detail-label">📋 Eligibility</div><div class="detail-value">${data.eligibility}</div></div>
        <div class="detail-row"><div class="detail-label">⏱️ Duration</div><div class="detail-value">${data.duration}</div></div>
        <div class="detail-row"><div class="detail-label">🎯 Next Steps</div><div class="detail-value">${data.nextSteps}</div></div>
        <div class="detail-row"><div class="detail-label">📝 Top Exams</div><div class="detail-value">${data.topExams}</div></div>
        <div class="detail-row"><div class="detail-label">💼 Career Scope</div><div class="detail-value">${data.careerScope}</div></div>
        <div class="detail-row"><div class="detail-label">💰 Average Salary</div><div class="detail-value">${data.avgSalary}</div></div>
    `;
    document.getElementById('modalBody').innerHTML = bodyHTML;
    document.getElementById('detailModal').style.display = 'block';
}

window.closeModal = function() {
    document.getElementById('detailModal').style.display = 'none';
}

window.searchContent = function() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.career-card');
    const sectors = document.querySelectorAll('.sector');
    
    if (input === '') {
        cards.forEach(card => card.style.display = 'block');
        sectors.forEach(sector => sector.style.display = 'block');
        return;
    }

    sectors.forEach(sector => {
        let hasMatch = false;
        const sectorCards = sector.querySelectorAll('.career-card');
        sectorCards.forEach(card => {
            const key = card.getAttribute('data-key');
            const data = careerData[key];
            const text = (data.fullName + data.careerScope + data.topExams).toLowerCase();
            if (text.includes(input)) {
                card.style.display = 'block';
                hasMatch = true;
            } else {
                card.style.display = 'none';
            }
        });
        sector.style.display = hasMatch? 'block' : 'none';
        if (hasMatch) {
            sector.querySelector('.sector-content').classList.add('active');
            sector.querySelector('.icon').classList.add('rotate');
        }
    });
}

window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target == modal) closeModal();
}

document.addEventListener('DOMContentLoaded', initCards);