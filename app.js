// Quiz Data Structure
const quizData = {
	sections: [
		{
			id: 1,
			title: 'Brand Mission & Purpose',
			description:
				"Define your brand's core reason for existence and fundamental values",
			questions: [
				{
					id: 1,
					type: 'multiple-choice',
					question: "How clearly defined is your brand's mission statement?",
					options: [
						{
							value: 5,
							text: 'We have a clear, documented mission that guides all decisions',
						},
						{
							value: 4,
							text: 'We have a mission statement that most team members know',
						},
						{
							value: 3,
							text: "We have a general idea but it's not formally documented",
						},
						{ value: 2, text: 'Our mission is unclear or constantly changing' },
						{ value: 1, text: "We don't have a defined mission statement" },
					],
				},
				{
					id: 2,
					type: 'rating',
					question:
						'How well do your core values align with your business practices?',
					scale: {
						min: 1,
						max: 5,
						labels: ['Not at all', 'Poorly', 'Somewhat', 'Well', 'Perfectly'],
					},
				},
				{
					id: 3,
					type: 'multiple-choice',
					question: 'What primarily drives your business beyond profit?',
					options: [
						{
							value: 5,
							text: 'A clear purpose to solve specific problems or create positive impact',
						},
						{
							value: 4,
							text: 'Passion for our industry and serving customers well',
						},
						{
							value: 3,
							text: 'Providing quality products/services to the market',
						},
						{ value: 2, text: 'Meeting market demand and staying competitive' },
						{ value: 1, text: 'Primarily focused on generating revenue' },
					],
				},
				{
					id: 4,
					type: 'checkbox',
					question:
						'Which elements are included in your brand purpose? (Select all that apply)',
					options: [
						{ value: 1, text: 'Clear problem we solve for customers' },
						{ value: 1, text: 'Defined impact we want to make' },
						{ value: 1, text: 'Connection to larger societal values' },
						{ value: 1, text: 'Unique perspective or approach' },
						{ value: 1, text: 'Long-term vision for the future' },
					],
				},
				{
					id: 5,
					type: 'rating',
					question:
						'How authentic does your brand purpose feel to your team and customers?',
					scale: {
						min: 1,
						max: 5,
						labels: [
							'Forced',
							'Somewhat artificial',
							'Neutral',
							'Genuine',
							'Completely authentic',
						],
					},
				},
				{
					id: 6,
					type: 'multiple-choice',
					question:
						'How often do you reference your brand mission in business decisions?',
					options: [
						{
							value: 5,
							text: "Always - it's our primary decision-making filter",
						},
						{ value: 4, text: 'Frequently - for major decisions and strategy' },
						{ value: 3, text: 'Sometimes - when it seems relevant' },
						{ value: 2, text: 'Rarely - mostly for marketing purposes' },
						{ value: 1, text: "Never - it doesn't influence our operations" },
					],
				},
			],
		},
		{
			id: 2,
			title: 'Target Audience & Market',
			description:
				'Identify and understand your ideal customers and market position',
			questions: [
				{
					id: 7,
					type: 'multiple-choice',
					question:
						"How well do you understand your target audience's demographics?",
					options: [
						{
							value: 5,
							text: 'We have detailed demographic profiles with specific data',
						},
						{
							value: 4,
							text: 'We understand the basics like age, income, and location',
						},
						{ value: 3, text: 'We have general assumptions but limited data' },
						{
							value: 2,
							text: "We have some ideas but they're mostly guesswork",
						},
						{ value: 1, text: "We haven't defined our target demographics" },
					],
				},
				{
					id: 8,
					type: 'rating',
					question:
						"How well do you understand your customers' pain points and needs?",
					scale: {
						min: 1,
						max: 5,
						labels: [
							'Not at all',
							'Poorly',
							'Somewhat',
							'Well',
							'Extremely well',
						],
					},
				},
				{
					id: 9,
					type: 'checkbox',
					question:
						'Which research methods have you used to understand your audience? (Select all that apply)',
					options: [
						{ value: 1, text: 'Customer surveys and interviews' },
						{ value: 1, text: 'Market research and industry reports' },
						{ value: 1, text: 'Social media analytics and listening' },
						{ value: 1, text: 'Website and sales data analysis' },
						{ value: 1, text: 'Competitor audience analysis' },
					],
				},
				{
					id: 10,
					type: 'multiple-choice',
					question: 'How clearly defined are your customer personas?',
					options: [
						{
							value: 5,
							text: 'We have detailed personas with names, stories, and specific traits',
						},
						{
							value: 4,
							text: 'We have solid personas covering key characteristics',
						},
						{ value: 3, text: 'We have basic customer segments identified' },
						{
							value: 2,
							text: 'We have rough ideas about different customer types',
						},
						{ value: 1, text: "We haven't developed customer personas" },
					],
				},
				{
					id: 11,
					type: 'rating',
					question:
						'How well does your brand resonate with your target audience?',
					scale: {
						min: 1,
						max: 5,
						labels: [
							'Poorly',
							'Below average',
							'Average',
							'Well',
							'Extremely well',
						],
					},
				},
				{
					id: 12,
					type: 'multiple-choice',
					question:
						'How do you gather ongoing feedback from your target market?',
					options: [
						{
							value: 5,
							text: 'Multiple channels with regular, systematic feedback collection',
						},
						{ value: 4, text: 'Several methods used consistently' },
						{ value: 3, text: 'Occasional surveys or informal feedback' },
						{ value: 2, text: 'Limited feedback collection efforts' },
						{ value: 1, text: "We don't actively gather customer feedback" },
					],
				},
			],
		},
		{
			id: 3,
			title: 'Visual Identity Development',
			description:
				"Establish your brand's visual elements and design consistency",
			questions: [
				{
					id: 13,
					type: 'multiple-choice',
					question: 'How well does your logo represent your brand identity?',
					options: [
						{
							value: 5,
							text: 'Perfectly captures our essence and is professionally designed',
						},
						{ value: 4, text: 'Good representation with professional quality' },
						{ value: 3, text: 'Adequate but could be improved' },
						{ value: 2, text: "Outdated or doesn't reflect our brand well" },
						{ value: 1, text: 'No professional logo or very poor quality' },
					],
				},
				{
					id: 14,
					type: 'rating',
					question:
						'How consistent is your visual identity across all materials?',
					scale: {
						min: 1,
						max: 5,
						labels: [
							'Very inconsistent',
							'Somewhat inconsistent',
							'Neutral',
							'Mostly consistent',
							'Completely consistent',
						],
					},
				},
				{
					id: 15,
					type: 'checkbox',
					question:
						'Which visual brand elements do you have documented? (Select all that apply)',
					options: [
						{ value: 1, text: 'Logo variations and usage guidelines' },
						{ value: 1, text: 'Color palette with specific codes' },
						{ value: 1, text: 'Typography guidelines and font choices' },
						{ value: 1, text: 'Imagery style and photo guidelines' },
						{ value: 1, text: 'Layout and design principles' },
					],
				},
				{
					id: 16,
					type: 'multiple-choice',
					question: 'How strategic is your color palette choice?',
					options: [
						{
							value: 5,
							text: 'Colors chosen strategically to evoke specific emotions and differentiate',
						},
						{
							value: 4,
							text: 'Colors align with our brand personality and industry',
						},
						{
							value: 3,
							text: 'Colors look good together but limited strategic thinking',
						},
						{ value: 2, text: 'Colors chosen based on personal preference' },
						{
							value: 1,
							text: 'No defined color palette or random color usage',
						},
					],
				},
				{
					id: 17,
					type: 'rating',
					question:
						'How recognizable is your brand visually in the marketplace?',
					scale: {
						min: 1,
						max: 5,
						labels: [
							'Not recognizable',
							'Slightly recognizable',
							'Somewhat recognizable',
							'Easily recognizable',
							'Instantly recognizable',
						],
					},
				},
				{
					id: 18,
					type: 'multiple-choice',
					question:
						'How well do your visual elements work across different media?',
					options: [
						{
							value: 5,
							text: 'Excellent - works perfectly across print, digital, and merchandise',
						},
						{ value: 4, text: 'Good - works well in most applications' },
						{ value: 3, text: 'Adequate - some challenges in certain formats' },
						{
							value: 2,
							text: 'Poor - significant issues across different media',
						},
						{
							value: 1,
							text: "Very poor - doesn't translate well to different formats",
						},
					],
				},
			],
		},
		{
			id: 4,
			title: 'Brand Messaging & Voice',
			description: "Craft your brand's communication style and key messages",
			questions: [
				{
					id: 19,
					type: 'multiple-choice',
					question: 'How clearly defined is your brand voice and tone?',
					options: [
						{
							value: 5,
							text: 'Fully documented with specific guidelines and examples',
						},
						{
							value: 4,
							text: 'Well-defined with most team members understanding it',
						},
						{
							value: 3,
							text: 'Generally understood but not formally documented',
						},
						{
							value: 2,
							text: 'Inconsistent or unclear across different communications',
						},
						{ value: 1, text: 'No defined brand voice or communication style' },
					],
				},
				{
					id: 20,
					type: 'rating',
					question:
						'How consistent is your messaging across all communication channels?',
					scale: {
						min: 1,
						max: 5,
						labels: [
							'Very inconsistent',
							'Inconsistent',
							'Somewhat consistent',
							'Mostly consistent',
							'Completely consistent',
						],
					},
				},
				{
					id: 21,
					type: 'checkbox',
					question:
						'Which key messages do you consistently communicate? (Select all that apply)',
					options: [
						{ value: 1, text: 'Clear value proposition' },
						{ value: 1, text: 'Unique differentiators from competitors' },
						{ value: 1, text: 'Brand personality and values' },
						{ value: 1, text: 'Customer benefits and outcomes' },
						{ value: 1, text: 'Brand story and heritage' },
					],
				},
				{
					id: 22,
					type: 'multiple-choice',
					question:
						'How well does your brand storytelling engage your audience?',
					options: [
						{
							value: 5,
							text: 'Compelling stories that create strong emotional connections',
						},
						{ value: 4, text: 'Good stories that resonate with our audience' },
						{ value: 3, text: 'Basic storytelling with some engagement' },
						{
							value: 2,
							text: 'Limited storytelling or poor audience connection',
						},
						{ value: 1, text: 'No strategic storytelling approach' },
					],
				},
				{
					id: 23,
					type: 'rating',
					question:
						'How authentic does your brand voice feel to your audience?',
					scale: {
						min: 1,
						max: 5,
						labels: [
							'Very artificial',
							'Somewhat artificial',
							'Neutral',
							'Authentic',
							'Very authentic',
						],
					},
				},
				{
					id: 24,
					type: 'multiple-choice',
					question:
						'How well do your content and communications support your brand goals?',
					options: [
						{
							value: 5,
							text: 'All content strategically aligned with brand and business objectives',
						},
						{ value: 4, text: 'Most content supports our brand strategy' },
						{
							value: 3,
							text: 'Some content alignment but could be more strategic',
						},
						{
							value: 2,
							text: 'Limited connection between content and brand goals',
						},
						{
							value: 1,
							text: 'Content created without brand strategy consideration',
						},
					],
				},
			],
		},
		{
			id: 5,
			title: 'Brand Implementation & Maintenance',
			description:
				'Execute and maintain brand consistency across all touchpoints',
			questions: [
				{
					id: 25,
					type: 'multiple-choice',
					question: 'How comprehensive are your brand guidelines?',
					options: [
						{
							value: 5,
							text: 'Complete guidelines covering all brand elements and applications',
						},
						{
							value: 4,
							text: 'Good guidelines covering most important elements',
						},
						{ value: 3, text: 'Basic guidelines with key brand elements' },
						{ value: 2, text: 'Limited or outdated brand guidelines' },
						{ value: 1, text: 'No formal brand guidelines exist' },
					],
				},
				{
					id: 26,
					type: 'rating',
					question: 'How well trained is your team on brand implementation?',
					scale: {
						min: 1,
						max: 5,
						labels: [
							'Not trained',
							'Poorly trained',
							'Somewhat trained',
							'Well trained',
							'Expert level',
						],
					},
				},
				{
					id: 27,
					type: 'checkbox',
					question:
						'Which touchpoints consistently reflect your brand? (Select all that apply)',
					options: [
						{ value: 1, text: 'Website and digital presence' },
						{ value: 1, text: 'Marketing materials and advertising' },
						{ value: 1, text: 'Customer service interactions' },
						{ value: 1, text: 'Physical locations or packaging' },
						{ value: 1, text: 'Employee communications and culture' },
					],
				},
				{
					id: 28,
					type: 'multiple-choice',
					question: 'How do you monitor and maintain brand consistency?',
					options: [
						{
							value: 5,
							text: 'Systematic monitoring with regular audits and feedback loops',
						},
						{
							value: 4,
							text: 'Regular checks and updates to maintain consistency',
						},
						{ value: 3, text: 'Occasional reviews when issues are noticed' },
						{ value: 2, text: 'Limited monitoring with reactive fixes' },
						{ value: 1, text: 'No formal monitoring or maintenance process' },
					],
				},
				{
					id: 29,
					type: 'rating',
					question:
						'How well does your brand adapt to new channels and opportunities?',
					scale: {
						min: 1,
						max: 5,
						labels: [
							'Very poorly',
							'Poorly',
							'Adequately',
							'Well',
							'Extremely well',
						],
					},
				},
				{
					id: 30,
					type: 'multiple-choice',
					question: 'How do you handle brand evolution and updates?',
					options: [
						{
							value: 5,
							text: 'Strategic, planned evolution with stakeholder input and testing',
						},
						{
							value: 4,
							text: 'Thoughtful updates when needed with team consultation',
						},
						{ value: 3, text: 'Occasional updates based on business needs' },
						{ value: 2, text: 'Ad-hoc changes without much planning' },
						{ value: 1, text: 'No process for brand evolution or updates' },
					],
				},
			],
		},
	],
};

// Application State
let currentState = {
	currentScreen: 'welcome', // 'welcome', 'quiz', 'results'
	currentSectionIndex: 0,
	currentQuestionIndex: 0,
	answers: {},
	totalScore: 0,
	sectionScores: {},
};

// Scoring levels from the application data
const scoringLevels = {
	excellent: {
		min: 120,
		max: 150,
		label: 'Brand Excellence',
		description: 'Your brand strategy is well-developed and comprehensive',
	},
	good: {
		min: 90,
		max: 119,
		label: 'Strong Foundation',
		description: 'Your brand has solid fundamentals with room for refinement',
	},
	developing: {
		min: 60,
		max: 89,
		label: 'Developing Brand',
		description: 'Your brand is taking shape but needs strategic focus',
	},
	early: {
		min: 0,
		max: 59,
		label: 'Early Stage',
		description: 'Your brand needs foundational development across key areas',
	},
};

// DOM Elements
let startQuizBtn, prevBtn, nextBtn, retakeQuizBtn, downloadResultsBtn;
let progressContainer, progressFill, progressText;
let sectionBadge,
	sectionTitle,
	sectionDescription,
	questionContainer,
	questionIndicator;
let welcomeScreen, quizScreen, resultsScreen;

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
	initializeElements();
	setupEventListeners();
	showScreen('welcome');
});

function initializeElements() {
	// Buttons
	startQuizBtn = document.getElementById('startQuizBtn');
	prevBtn = document.getElementById('prevBtn');
	nextBtn = document.getElementById('nextBtn');
	retakeQuizBtn = document.getElementById('retakeQuizBtn');
	downloadResultsBtn = document.getElementById('downloadResultsBtn');

	// Progress elements
	progressContainer = document.getElementById('progressContainer');
	progressFill = document.getElementById('progressFill');
	progressText = document.getElementById('progressText');

	// Quiz elements
	sectionBadge = document.getElementById('sectionBadge');
	sectionTitle = document.getElementById('sectionTitle');
	sectionDescription = document.getElementById('sectionDescription');
	questionContainer = document.getElementById('questionContainer');
	questionIndicator = document.getElementById('questionIndicator');

	// Screens
	welcomeScreen = document.getElementById('welcomeScreen');
	quizScreen = document.getElementById('quizScreen');
	resultsScreen = document.getElementById('resultsScreen');
}

function setupEventListeners() {
	startQuizBtn.addEventListener('click', startQuiz);
	prevBtn.addEventListener('click', previousQuestion);
	nextBtn.addEventListener('click', nextQuestion);
	retakeQuizBtn.addEventListener('click', retakeQuiz);
	downloadResultsBtn.addEventListener('click', downloadResults);
}

function showScreen(screenName) {
	currentState.currentScreen = screenName;

	// Hide all screens
	welcomeScreen.style.display = 'none';
	quizScreen.style.display = 'none';
	resultsScreen.style.display = 'none';

	// Show target screen
	switch (screenName) {
		case 'welcome':
			welcomeScreen.style.display = 'block';
			progressContainer.style.display = 'none';
			break;
		case 'quiz':
			quizScreen.style.display = 'block';
			progressContainer.style.display = 'flex';
			updateQuizDisplay();
			break;
		case 'results':
			resultsScreen.style.display = 'block';
			progressContainer.style.display = 'none';
			displayResults();
			break;
	}
}

function startQuiz() {
	currentState.currentSectionIndex = 0;
	currentState.currentQuestionIndex = 0;
	currentState.answers = {};
	showScreen('quiz');
}

function updateQuizDisplay() {
	const currentSection = quizData.sections[currentState.currentSectionIndex];
	const currentQuestion =
		currentSection.questions[currentState.currentQuestionIndex];

	// Update section header
	sectionBadge.textContent = `Section ${
		currentState.currentSectionIndex + 1
	} of 5`;
	sectionTitle.textContent = currentSection.title;
	sectionDescription.textContent = currentSection.description;

	// Update question indicator
	questionIndicator.textContent = `Question ${
		currentState.currentQuestionIndex + 1
	} of ${currentSection.questions.length}`;

	// Update progress
	const totalQuestions = 30;
	const completedQuestions =
		currentState.currentSectionIndex * 6 + currentState.currentQuestionIndex;
	const progressPercentage = (completedQuestions / totalQuestions) * 100;
	progressFill.style.width = `${progressPercentage}%`;
	progressText.textContent = `${completedQuestions} of ${totalQuestions} questions`;

	// Render question
	renderQuestion(currentQuestion);

	// Update navigation buttons
	prevBtn.disabled =
		currentState.currentSectionIndex === 0 &&
		currentState.currentQuestionIndex === 0;

	// Check if this is the last question
	const isLastSection =
		currentState.currentSectionIndex === quizData.sections.length - 1;
	const isLastQuestion =
		currentState.currentQuestionIndex === currentSection.questions.length - 1;

	if (isLastSection && isLastQuestion) {
		nextBtn.textContent = 'View Results';
	} else if (
		currentState.currentQuestionIndex ===
		currentSection.questions.length - 1
	) {
		nextBtn.textContent = 'Next Section';
	} else {
		nextBtn.textContent = 'Next';
	}
}

function renderQuestion(question) {
	const questionHtml = `
    <div class="question-card">
      <h3 class="question-title">${question.question}</h3>
      ${renderQuestionInput(question)}
    </div>
  `;

	questionContainer.innerHTML = questionHtml;

	// Restore previous answer if exists
	const savedAnswer = currentState.answers[question.id];
	if (savedAnswer !== undefined) {
		restoreAnswer(question, savedAnswer);
	}
}

function renderQuestionInput(question) {
	switch (question.type) {
		case 'multiple-choice':
			return renderMultipleChoice(question);
		case 'rating':
			return renderRating(question);
		case 'checkbox':
			return renderCheckbox(question);
		case 'text':
			return renderTextInput(question);
		default:
			return '<p>Unknown question type</p>';
	}
}

function renderMultipleChoice(question) {
	const optionsHtml = question.options
		.map(
			(option, index) => `
    <div class="option-item" data-value="${option.value}">
      <input type="radio" name="question_${question.id}" value="${option.value}" id="option_${question.id}_${index}" class="option-input">
      <label for="option_${question.id}_${index}" class="option-label">${option.text}</label>
    </div>
  `
		)
		.join('');

	return `
    <div class="question-options">
      ${optionsHtml}
    </div>
  `;
}

function renderRating(question) {
	const scaleHtml = Array.from({ length: question.scale.max }, (_, i) => {
		const value = i + 1;
		const label = question.scale.labels[i] || value;
		return `
      <div class="rating-item" data-value="${value}">
        <div class="rating-circle">${value}</div>
        <div class="rating-label">${label}</div>
      </div>
    `;
	}).join('');

	return `
    <div class="rating-options">
      ${scaleHtml}
    </div>
  `;
}

function renderCheckbox(question) {
	const optionsHtml = question.options
		.map(
			(option, index) => `
    <div class="checkbox-item" data-value="${option.value}">
      <input type="checkbox" name="question_${question.id}" value="${option.value}" id="checkbox_${question.id}_${index}" class="option-input">
      <label for="checkbox_${question.id}_${index}" class="option-label">${option.text}</label>
    </div>
  `
		)
		.join('');

	return `
    <div class="checkbox-options">
      ${optionsHtml}
    </div>
  `;
}

function renderTextInput(question) {
	return `
    <div class="form-group">
      <textarea class="form-control" id="text_${question.id}" rows="4" placeholder="Your answer..."></textarea>
    </div>
  `;
}

function restoreAnswer(question, savedAnswer) {
	switch (question.type) {
		case 'multiple-choice':
			const radioOption = document.querySelector(
				`input[name="question_${question.id}"][value="${savedAnswer}"]`
			);
			if (radioOption) {
				radioOption.checked = true;
				radioOption.closest('.option-item').classList.add('selected');
			}
			break;
		case 'rating':
			const ratingItem = document.querySelector(
				`.rating-item[data-value="${savedAnswer}"]`
			);
			if (ratingItem) {
				ratingItem.classList.add('selected');
			}
			break;
		case 'checkbox':
			if (Array.isArray(savedAnswer)) {
				savedAnswer.forEach((value) => {
					const checkboxOption = document.querySelector(
						`input[name="question_${question.id}"][value="${value}"]`
					);
					if (checkboxOption) {
						checkboxOption.checked = true;
						checkboxOption.closest('.checkbox-item').classList.add('selected');
					}
				});
			}
			break;
		case 'text':
			const textInput = document.getElementById(`text_${question.id}`);
			if (textInput) {
				textInput.value = savedAnswer;
			}
			break;
	}
}

// Event delegation for question interactions
document.addEventListener('click', function (e) {
	// Handle option selection
	if (e.target.closest('.option-item')) {
		const optionItem = e.target.closest('.option-item');
		const radioInput = optionItem.querySelector('input[type="radio"]');

		if (radioInput) {
			// Clear other selections
			optionItem.parentNode.querySelectorAll('.option-item').forEach((item) => {
				item.classList.remove('selected');
			});

			// Select this option
			optionItem.classList.add('selected');
			radioInput.checked = true;
			saveCurrentAnswer();
		}
	}

	// Handle rating selection
	if (e.target.closest('.rating-item')) {
		const ratingItem = e.target.closest('.rating-item');

		// Clear other selections
		ratingItem.parentNode.querySelectorAll('.rating-item').forEach((item) => {
			item.classList.remove('selected');
		});

		// Select this rating
		ratingItem.classList.add('selected');
		saveCurrentAnswer();
	}

	// Handle checkbox selection
	if (e.target.closest('.checkbox-item')) {
		const checkboxItem = e.target.closest('.checkbox-item');
		const checkboxInput = checkboxItem.querySelector('input[type="checkbox"]');

		if (checkboxInput) {
			checkboxInput.checked = !checkboxInput.checked;
			checkboxItem.classList.toggle('selected', checkboxInput.checked);
			saveCurrentAnswer();
		}
	}
});

// Handle text input changes
document.addEventListener('input', function (e) {
	if (e.target.matches('textarea.form-control')) {
		saveCurrentAnswer();
	}
});

function saveCurrentAnswer() {
	const currentQuestion =
		quizData.sections[currentState.currentSectionIndex].questions[
			currentState.currentQuestionIndex
		];
	let answer;

	switch (currentQuestion.type) {
		case 'multiple-choice':
			const selectedRadio = document.querySelector(
				`input[name="question_${currentQuestion.id}"]:checked`
			);
			answer = selectedRadio ? parseInt(selectedRadio.value) : undefined;
			break;
		case 'rating':
			const selectedRating = document.querySelector('.rating-item.selected');
			answer = selectedRating
				? parseInt(selectedRating.dataset.value)
				: undefined;
			break;
		case 'checkbox':
			const selectedCheckboxes = document.querySelectorAll(
				`input[name="question_${currentQuestion.id}"]:checked`
			);
			answer = Array.from(selectedCheckboxes).map((cb) => parseInt(cb.value));
			break;
		case 'text':
			const textInput = document.getElementById(`text_${currentQuestion.id}`);
			answer = textInput ? textInput.value.trim() : '';
			break;
	}

	if (answer !== undefined && answer !== '') {
		currentState.answers[currentQuestion.id] = answer;
	}
}

function previousQuestion() {
	if (currentState.currentQuestionIndex > 0) {
		currentState.currentQuestionIndex--;
	} else if (currentState.currentSectionIndex > 0) {
		currentState.currentSectionIndex--;
		currentState.currentQuestionIndex =
			quizData.sections[currentState.currentSectionIndex].questions.length - 1;
	}

	updateQuizDisplay();
}

function nextQuestion() {
	saveCurrentAnswer();

	const currentSection = quizData.sections[currentState.currentSectionIndex];
	const isLastQuestion =
		currentState.currentQuestionIndex === currentSection.questions.length - 1;
	const isLastSection =
		currentState.currentSectionIndex === quizData.sections.length - 1;

	if (isLastSection && isLastQuestion) {
		// Quiz complete - show results
		calculateScores();
		showScreen('results');
	} else if (isLastQuestion) {
		// Move to next section
		currentState.currentSectionIndex++;
		currentState.currentQuestionIndex = 0;
		updateQuizDisplay();
	} else {
		// Move to next question
		currentState.currentQuestionIndex++;
		updateQuizDisplay();
	}
}

function calculateScores() {
	currentState.totalScore = 0;
	currentState.sectionScores = {};

	quizData.sections.forEach((section) => {
		let sectionScore = 0;

		section.questions.forEach((question) => {
			const answer = currentState.answers[question.id];
			if (answer !== undefined) {
				if (Array.isArray(answer)) {
					// Checkbox questions - sum all selected values
					sectionScore += answer.reduce((sum, val) => sum + val, 0);
				} else {
					sectionScore += answer;
				}
			}
		});

		currentState.sectionScores[section.id] = sectionScore;
		currentState.totalScore += sectionScore;
	});
}

function getScoreLevel(score) {
	for (const [key, level] of Object.entries(scoringLevels)) {
		if (score >= level.min && score <= level.max) {
			return level;
		}
	}
	return scoringLevels.early;
}

function displayResults() {
	const scoreLevel = getScoreLevel(currentState.totalScore);

	// Update overall score display
	document.getElementById('scoreNumber').textContent = currentState.totalScore;
	document.getElementById('scoreLabel').textContent = scoreLevel.label;

	// Display results summary
	const summaryHtml = `
    <p class="summary-text">${scoreLevel.description}</p>
  `;
	document.getElementById('resultsSummary').innerHTML = summaryHtml;

	// Display section results
	const sectionResultsHtml = quizData.sections
		.map((section) => {
			const sectionScore = currentState.sectionScores[section.id];
			const maxSectionScore = 30; // 6 questions × 5 points max each
			const percentage = Math.round((sectionScore / maxSectionScore) * 100);

			return `
      <div class="section-result">
        <div class="section-result-header">
          <h4 class="section-result-title">${section.title}</h4>
          <div class="section-score">${sectionScore}/30 (${percentage}%)</div>
        </div>
        <p class="section-result-description">${section.description}</p>
      </div>
    `;
		})
		.join('');

	document.getElementById('sectionResults').innerHTML = sectionResultsHtml;

	// Display recommendations
	const recommendations = generateRecommendations(
		currentState.totalScore,
		currentState.sectionScores
	);
	const recommendationsHtml = `
    <h3>Recommendations for Improvement</h3>
    <ul class="recommendation-list">
      ${recommendations
				.map(
					(rec) => `
        <li class="recommendation-item">
          <div class="recommendation-icon"></div>
          <p class="recommendation-text">${rec}</p>
        </li>
      `
				)
				.join('')}
    </ul>
  `;

	document.getElementById('recommendations').innerHTML = recommendationsHtml;
}

function generateRecommendations(totalScore, sectionScores) {
	const recommendations = [];

	// Find weakest sections for targeted recommendations
	const sectionPerformance = Object.entries(sectionScores)
		.map(([id, score]) => ({
			id: parseInt(id),
			score,
			percentage: (score / 30) * 100,
		}))
		.sort((a, b) => a.percentage - b.percentage);

	const weakestSections = sectionPerformance.slice(0, 2);

	weakestSections.forEach((section) => {
		const sectionData = quizData.sections.find((s) => s.id === section.id);

		switch (section.id) {
			case 1:
				recommendations.push(
					'Develop a clear, documented mission statement that guides all business decisions'
				);
				break;
			case 2:
				recommendations.push(
					'Invest in market research to better understand your target audience and their needs'
				);
				break;
			case 3:
				recommendations.push(
					'Create comprehensive brand guidelines to ensure visual consistency across all touchpoints'
				);
				break;
			case 4:
				recommendations.push(
					'Define your brand voice and develop key messages that resonate with your audience'
				);
				break;
			case 5:
				recommendations.push(
					'Implement systematic brand monitoring and team training to maintain consistency'
				);
				break;
		}
	});

	// Add general recommendations based on overall score
	if (totalScore < 60) {
		recommendations.push(
			'Consider working with a brand strategist to develop a comprehensive brand foundation'
		);
		recommendations.push(
			'Start with the basics: mission, target audience, and visual identity before expanding'
		);
	} else if (totalScore < 90) {
		recommendations.push(
			'Focus on documentation and systematic implementation of your brand elements'
		);
		recommendations.push(
			'Develop training materials to ensure team alignment on brand standards'
		);
	} else if (totalScore < 120) {
		recommendations.push(
			'Fine-tune your brand implementation and explore advanced brand strategy techniques'
		);
		recommendations.push(
			'Consider brand audits to identify areas for optimization and growth'
		);
	}

	return recommendations.slice(0, 4); // Limit to 4 recommendations
}

function retakeQuiz() {
	currentState.currentSectionIndex = 0;
	currentState.currentQuestionIndex = 0;
	currentState.answers = {};
	currentState.totalScore = 0;
	currentState.sectionScores = {};
	showScreen('quiz');
}

function downloadResults() {
	const scoreLevel = getScoreLevel(currentState.totalScore);
	const recommendations = generateRecommendations(
		currentState.totalScore,
		currentState.sectionScores
	);

	let content = `BRAND EXPLORATION QUIZ RESULTS\n`;
	content += `================================\n\n`;
	content += `Overall Score: ${currentState.totalScore}/150\n`;
	content += `Brand Level: ${scoreLevel.label}\n`;
	content += `Description: ${scoreLevel.description}\n\n`;

	content += `SECTION BREAKDOWN\n`;
	content += `=================\n`;
	quizData.sections.forEach((section) => {
		const sectionScore = currentState.sectionScores[section.id];
		const percentage = Math.round((sectionScore / 30) * 100);
		content += `${section.title}: ${sectionScore}/30 (${percentage}%)\n`;
	});

	content += `\nRECOMMENDATIONS\n`;
	content += `===============\n`;
	recommendations.forEach((rec, index) => {
		content += `${index + 1}. ${rec}\n`;
	});

	const blob = new Blob([content], { type: 'text/plain' });
	const url = window.URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = 'brand-exploration-results.txt';
	document.body.appendChild(a);
	a.click();
	window.URL.revokeObjectURL(url);
	document.body.removeChild(a);
}
