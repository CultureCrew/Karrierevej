// ** EKSPERT VERSION ** Med vægtede tags og dealbreaker-spørgsmål
document.addEventListener('DOMContentLoaded', function() {

    // --- JOB-DATABASE MED VÆGTEDE TAGS ---
    // Hvert job har nu et objekt af tags, hvor tallet angiver vægten (point)
    // 3 = Kerne-tag, 1 = Støtte-tag
    const jobs = [
        // Support
        { title: "Support Associate", team: "Support", description: "Du er i frontlinjen og hjælper kunder direkte med deres problemer via chat og mail.", tags: { empati: 3, problemløsning: 3, kundekontakt: 1, struktur: 1, kommunikation: 1 } },
        { title: "Tier 3 Support Specialist", team: "Support", description: "Du løser de mest komplekse og tekniske support-sager, som andre ikke kan løse.", tags: { problemløsning: 3, teknisk: 3, analyse: 1, struktur: 1 } },
        { title: "Merchant Support", team: "Support", description: "Du yder teknisk og praktisk support til partner-restauranter, ofte i pressede situationer.", tags: { partnerpleje: 3, problemløsning: 3, teknisk: 1, stresstolerance: 1 } },
        { title: "Support Shift Lead", team: "Support", description: "Du er den daglige 'go-to'-person på et specifikt arbejdsskift i supporten og sikrer driften.", tags: { drift: 3, ledelse: 3, problemløsning: 1, stresstolerance: 1 } },
        { title: "Support Team Lead", team: "Support", description: "Du er personaleleder for et team og fokuserer på deres langsigtede udvikling og performance.", tags: { ledelse: 3, pædagogisk: 3, menneskekontakt: 1, strategi: 1, resultater: 1 } },
        { title: "Support Manager", team: "Support", description: "Du har ansvar for flere teams og arbejder overordnet med supportafdelingens strategi og performance.", tags: { ledelse: 3, strategi: 3, ansvar: 1, drift: 1, data: 1 } },
        { title: "Head of Support", team: "Support", description: "Du er den øverste leder for hele supportafdelingen og sætter den overordnede strategiske retning.", tags: { ledelse: 3, strategi: 3, ansvar: 3, drift: 1, data: 1 } },
        { title: "Quality Development Specialist", team: "Support", description: "Du analyserer kvaliteten af support-sager og udvikler initiativer til at forbedre den.", tags: { analyse: 3, proces: 3, optimering: 1, struktur: 1 } },
        { title: "Support Development Lead", team: "Support", description: "Du udvikler selve support-funktionen ved at forbedre processer, værktøjer og træning.", tags: { strategi: 3, optimering: 3, proces: 1, pædagogisk: 1, projektledelse: 1 } },
        
        // People & Talent
        { title: "WKS (Welcome Buddy)", team: "People & Talent", description: "Du er den 'buddy', der sikrer en tryg og god start for nye medarbejdere i Support-teamet.", tags: { onboarding: 3, pædagogisk: 3, empati: 1, menneskekontakt: 1 } },
        { title: "People & Culture (HR) Specialist", team: "People & Talent", description: "Du arbejder med HR-opgaver som trivsel, udvikling og processer for medarbejderne.", tags: { menneskekontakt: 3, empati: 3, proces: 1, struktur: 1 } },
        { title: "Training Specialist", team: "People & Talent / Support", description: "Du er ekspert i at oplære nye og eksisterende medarbejdere.", tags: { pædagogisk: 3, onboarding: 3, kommunikation: 1, struktur: 1 } },
        { title: "Culture Crew / Employee Representative", team: "People & Talent", description: "Du er en del af det interne kultur-team, der styrker fællesskabet og trivslen blandt kolleger.", tags: { kultur: 3, empati: 3, menneskekontakt: 1, kommunikation: 1, ansvar: 1 } },

        // Operations & Co.
        { title: "Work place coordinator", team: "Administration / People & Talent", description: "Du er kontorets omdrejningspunkt, der sørger for alt det praktiske og skaber et godt kontormiljø.", tags: { praktisk: 3, service: 3, drift: 1, struktur: 1 } },
        { title: "Work force manager", team: "Operations / Support", description: "Du planlægger vagtplaner og sikrer, at bemandingen altid matcher behovet.", tags: { struktur: 3, data: 3, analyse: 1, optimering: 1 } },
        { title: "SuPi (Supply Chain Planner)", team: "Procurement & Inventory Management / Operations", description: "Du overvåger og sikrer den daglige drift og logistik, så leveringer kører problemfrit.", tags: { drift: 3, proces: 3, analyse: 1, problemløsning: 1 } },
        { title: "Operations Associate, Courier Community", team: "Operations", description: "Du kommunikerer direkte til kurérpartnerne om nyheder, ændringer og vigtig information.", tags: { kommunikation: 3, partnerpleje: 3, drift: 1, eksekvering: 1 } },
        { title: "Operations Team Lead, Courier Community", team: "Operations", description: "Du leder teamet, der håndterer kommunikationen og relationen til kurérpartnerne.", tags: { ledelse: 3, partnerpleje: 3, kommunikation: 1, drift: 1 } },

        // Sales & Merchant
        { title: "Sales Development Representative - Wolt Ads", team: "Sales & Merchant Operations", description: "Du er en 'hunter', der aktivt opsøger og sælger annonce-løsninger til nye kunder.", tags: { salg: 3, resultater: 3, proaktiv: 1, stresstolerance: 1 } },
        { title: "Account Manager – Wolt B2B Wholesale", team: "Sales & Merchant Operations", description: "Du plejer og udvikler relationer med store B2B-kunder for at sikre deres loyalitet og vækst.", tags: { salg: 3, partnerpleje: 3, resultater: 1, analyse: 1 } },
        { title: "Merchant Operations Associate", team: "Sales & Merchant Operations", description: "Du udfører de daglige opgaver, der holder partnerne kørende, f.eks. menu-opdateringer.", tags: { eksekvering: 3, proces: 3, drift: 1, struktur: 1 } },
        { title: "Merchant Success Lead", team: "Sales & Merchant Operations", description: "Du leder et team, der udvikler strategier for at øge partnernes succes og engagement.", tags: { ledelse: 3, strategi: 3, partnerpleje: 1, data: 1, resultater: 1 } },

        // Andre specialister
        { title: "Data Analyst", team: "Analytics & Data Science", description: "Du dykker ned i data for at finde indsigter, der kan hjælpe forretningen med at træffe bedre beslutninger.", tags: { data: 3, analyse: 3, teknisk: 1, problemløsning: 1 } },
        { title: "Project & Development Specialist", team: "Strategy / Support", description: "Du driver interne projekter, ofte med fokus på udvikling, kultur og nye processer.", tags: { projektledelse: 3, strategi: 3, struktur: 1, kommunikation: 1, kultur: 1 } },
        { title: "Communication manager", team: "PR & Communications", description: "Du er ansvarlig for virksomhedens eksterne kommunikation og PR, potentielt med nordisk ansvar.", tags: { kommunikation: 3, strategi: 3, kreativ: 1, ansvar: 1 } },
        { title: "Content Specialist (Support)", team: "Support / Communications", description: "Du skriver og vedligeholder al intern kommunikation og viden til Support-teamet.", tags: { kommunikation: 3, pædagogisk: 3, kreativ: 1, struktur: 1 } },
        { title: "Marketing Specialist", team: "Marketing", description: "Du udvikler og udfører kreative kampagner for at tiltrække og fastholde kunder.", tags: { kreativ: 3, strategi: 3, data: 1, resultater: 1 } },
    ];


    // --- DEALBREAKER SPØRGSMÅL ---
    const dealbreakerQuestions = [{
        question: "Har du lyst til at have direkte personaleansvar (coaching, 1-on-1s, performance)?",
        filterTag: 'ledelse' // Et "Nej" fjerner jobs med dette tag
    }, {
        question: "Finder du energi i opsøgende salg og performance-mål?",
        filterTag: 'salg' // Et "Nej" fjerner jobs med dette tag
    }, {
        question: "Trives du med at arbejde dybdegående og analytisk med data og tal?",
        filterTag: 'data' // Et "Nej" fjerner jobs med dette tag
    }];


    // --- ALMINDELIGE QUIZ-SPØRGSMÅL ---
    const quizQuestions = [{
        question: "Hvilken type opgave giver dig mest arbejdsglæde?",
        answers: [{ text: "At løse et presserende problem for en kunde her og nu.", tag: "kundekontakt" }, { text: "At analysere tal for at finde et mønster, andre har overset.", tag: "analyse" }, { text: "At optimere en proces, så den bliver 10% mere effektiv.", tag: "optimering" }, { text: "At hjælpe en ny kollega med at føle sig tryg i sit job.", tag: "pædagogisk" }, ]
    }, {
        question: "Hvordan foretrækker du at gribe en stor udfordring an?",
        answers: [{ text: "Jeg lægger en detaljeret, langsigtet plan for, hvordan vi når målet.", tag: "strategi" }, { text: "Jeg opdeler den i mindre, konkrete opgaver og begynder at løse dem med det samme.", tag: "eksekvering" }, { text: "Jeg tager ansvaret for at drive projektet sikkert i havn.", tag: "projektledelse" }, { text: "Jeg taler med de berørte parter for at forstå deres behov og bekymringer.", tag: "empati" }, ]
    }, {
        question: "I en presset situation er din største styrke, at du...",
        answers: [{ text: "bevarer roen og yder en venlig service.", tag: "stresstolerance" }, { text: "holder fast i den aftalte plan og struktur.", tag: "struktur" }, { text: "tænker kreativt og finder en utraditionel løsning.", tag: "kreativ" }, { text: "kan håndtere den praktiske drift og holde hjulene i gang.", tag: "praktisk" }, ]
    }, {
        question: "Hvad motiverer dig mest?",
        answers: [{ text: "At se konkrete tal og nå et ambitiøst mål.", tag: "resultater" }, { text: "At modtage positiv feedback fra en forretningspartner, du har hjulpet.", tag: "partnerpleje" }, { text: "At levere et fejlfrit stykke arbejde, hvor alle detaljer er perfekte.", tag: "proces" }, { text: "At vide, at jeg har det overordnede ansvar for et område.", tag: "ansvar" }, ]
    }, {
        question: "Hvilket arbejdsmiljø trives du bedst i?",
        answers: [{ text: "Et dynamisk miljø med fokus på opsøgende kontakt og nye relationer.", tag: "proaktiv" }, { text: "Et fordybende miljø, hvor jeg kan koncentrere mig om komplekse, tekniske opgaver.", tag: "teknisk" }, { text: "Et socialt miljø, hvor vi løfter i flok og prioriterer trivsel højt.", tag: "menneskekontakt" }, { text: "Et travlt, operationelt miljø, hvor det handler om at holde hjulene i gang.", tag: "drift" }, ]
    }, {
        question: "Hvilken sætning beskriver dig bedst?",
        answers: [{ text: "Jeg er god til at bygge og vedligeholde langvarige relationer.", tag: "partnerpleje" }, { text: "Jeg er den, der byder nye velkommen og sikrer en god start.", tag: "onboarding" }, { text: "Jeg er den, der formidler klare budskaber til en bred målgruppe.", tag: "kommunikation" }, { text: "Jeg er den, der løser de sværeste problemer, andre giver op på.", tag: "problemløsning" }, ]
    }, {
        question: "Hvad er vigtigst i et team?",
        answers: [{ text: "At alle har klare roller og følger de samme processer.", tag: "struktur" }, { text: "At vi har et stærkt socialt sammenhold og stoler på hinanden.", tag: "kultur" }, { text: "At lederen sætter en klar retning og motiverer os.", tag: "ledelse" }, { text: "At vi konstant udfordrer hinanden og forbedrer vores resultater.", tag: "resultater" }, ]
    }];

    // --- FUNKTIONALITET (Total ombygget) ---
    const dealbreakerSection = document.getElementById('dealbreaker-section');
    const quizForm = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result-container');
    const mainQuizDivider = document.getElementById('main-quiz-divider');

    function renderDealbreakers() {
        let html = dealbreakerSection.querySelector('h3').outerHTML;
        dealbreakerQuestions.forEach((q, index) => {
            html += `<div class="question-block">`;
            html += `<h3>${q.question}</h3>`;
            html += `
                <label class="answer-option"><input type="radio" name="dealbreaker${index}" value="yes"> Ja</label>
                <label class="answer-option"><input type="radio" name="dealbreaker${index}" value="no"> Nej</label>
            `;
            html += `</div>`;
        });
        dealbreakerSection.innerHTML = html;
    }

    function renderMainQuiz() {
        let html = '';
        quizQuestions.forEach((q, index) => {
            html += `<div class="question-block">`;
            html += `<h3>${index + 1}. ${q.question}</h3>`;
            q.answers.forEach(answer => {
                html += `
              <label class="answer-option">
                <input type="radio" name="question${index}" value="${answer.tag}">
                ${answer.text}
              </label>
            `;
            });
            html += `</div>`;
        });
        quizForm.innerHTML = html;
        mainQuizDivider.style.display = 'block';
    }

    function showResult() {
        // Validering
        const selectedDealbreakers = document.querySelectorAll('#dealbreaker-section input[type="radio"]:checked');
        const selectedAnswers = document.querySelectorAll('#quiz-form input[type="radio"]:checked');
        if (selectedDealbreakers.length < dealbreakerQuestions.length || selectedAnswers.length < quizQuestions.length) {
            alert("Husk at svare på alle spørgsmål, før du kan se dit resultat.");
            return;
        }

        // Trin 1: Filtrer jobs baseret på dealbreakers
        let filteredJobs = [...jobs];
        selectedDealbreakers.forEach((answer, index) => {
            if (answer.value === 'no') {
                const filterTag = dealbreakerQuestions[index].filterTag;
                filteredJobs = filteredJobs.filter(job => !job.tags.hasOwnProperty(filterTag));
            }
        });
        
        if (filteredJobs.length === 0) {
            resultContainer.innerHTML = '<h1>Ingen jobs matcher</h1><p>Baseret på dine indledende svar, er der desværre ingen af de nuværende roller, der ser ut til at være et oplagt match. Prøv eventuelt igen med andre svar.</p>';
            resultContainer.classList.remove('hidden');
            submitBtn.style.display = 'none';
            resultContainer.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        // Trin 2: Beregn score for de resterende jobs
        const jobScores = {};
        const matchedTagsByJob = {};
        let maxScore = 0;

        filteredJobs.forEach(job => {
            jobScores[job.title] = 0;
            matchedTagsByJob[job.title] = [];
            
            // Beregn max score for hvert job
            let currentMax = 0;
            for (const tag in job.tags) {
                currentMax += job.tags[tag];
            }
            job.maxScore = currentMax; // Gem max score på jobbet
        });

        selectedAnswers.forEach(answer => {
            const selectedTag = answer.value;
            filteredJobs.forEach(job => {
                if (job.tags.hasOwnProperty(selectedTag)) {
                    jobScores[job.title] += job.tags[selectedTag]; // Tilføj vægtet point
                    if (!matchedTagsByJob[job.title].includes(selectedTag)) {
                        matchedTagsByJob[job.title].push(selectedTag);
                    }
                }
            });
        });

        // Trin 3: Sorter og vis resultater
        const sortedJobs = filteredJobs.sort((a, b) => jobScores[b.title] - jobScores[a.title]);

        let resultHTML = '<h1>Dine top-resultater</h1>';
        for (let i = 0; i < Math.min(3, sortedJobs.length); i++) {
            const jobData = sortedJobs[i];
            const score = jobScores[jobData.title];
            const matchPercentage = Math.round((score / jobData.maxScore) * 100);

            resultHTML += `
            <div class="result-job">
              <div class="result-header">
                <h2>${i + 1}. ${jobData.title}</h2>
                <span class="match-percentage">${matchPercentage}% Match</span>
              </div>
              <span class="team-name">Team: ${jobData.team}</span>
              <p class="job-description">${jobData.description}</p>
              <p class="match-reason"><strong>Match baseret på:</strong> ${matchedTagsByJob[jobData.title].join(', ')}.</p>
            </div>
          `;
        }

        resultContainer.innerHTML = resultHTML;
        resultContainer.classList.remove('hidden');
        submitBtn.style.display = 'none';
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }

    renderDealbreakers();
    renderMainQuiz();
    submitBtn.addEventListener('click', showResult);
});
