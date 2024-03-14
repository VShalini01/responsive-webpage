function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'about':
			contentDiv.innerHTML = `
            <h2>
					OUR MISSION
				</h2>
				<p>
					Our mission is to improve the health and lives of people affected by poverty or emergency situations by providing essential medical resources needed for their care and
                    to bring communities together to help families build strength, stability and self-reliance through shelter.”
				</p>
                <img src="http://www.clipartbest.com/cliparts/acq/egx/acqegxqzi.svg" style="width:300px;margin-left:450px;">
			`;
			break;
		case 'programs':
			contentDiv.innerHTML = `
				<h2>PROGRAMS</h2>
                <p>We work in programs like:</p>
				<p>
                1.Working for the Social Development
				</p>
				<p>
				2. Encouraging Healthcare Development and Health Promotion
				</p>
                <p>
                3. Social Integration and Personal Realization
                </p>
                <p>
                4. Endorsing Human Rights
                </p>
			`;
			break;
		case 'events':
			contentDiv.innerHTML = 
				`<h2>UPCOMING EVENTS</h2> 
				<p>
					Food donation to 100 people
                    - 21 March 2023</p>
                <p>Mental Health Session-20 April 2023</p>
                <br>
                <hr>
				<h2>PAST EVENTS</h2>
                <p> Donation of basic needs across 10 cities-01 March 2023</p>
                <p> Education and Skill Development - 02 Febuary 2023</p>
                `;
			break;
        case 'contact':
            contentDiv.innerHTML=
            `
            <h2> You can reach us out at</h2>
            <p>#102/22/D,ABC Street,Hyderabad
            Telangana<p>
            `;
            break;
		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}
