const blocks = { // object contains all of the information that will be pulled into various reviews
    nameArr : ['Sport','Slugger','Champ'],
    subjects : ['clients','peers','other managers','the board'],
    goodBehaviours : ['great focus','fantastic relationship building','ability to think on your feet'],
    badBehaviours : ['poor attention to detail','standoff-ish manner','inability to accept constructive feedback'],
    projects : ['critical client requests','key strategic deliverables','leveraging synergies across our key parts of our tech stack to deliver efficiency through best practice'],
    projectFeedbackGood : ['quick turnaround times','focus on quick delivery','great project management'],
    projectFeedbackBad : ['sloppy testing approach','failure to hit deadlines','lack of value-add contributions'],
    overallGood : ['you are exactly the type of person that will drive this company\'s growth','keep doing the great stuff that you\'re doing','we really value your contribution'],
    overallBad : ['you need to seriously consider your position in this organisation','we\'re very disappointed in your work','we need you to step it up'],
  }
  
  
  function fillName (name) { //checks if the name is known or blank
    if (name === undefined || name === '???') { // name === '???' allows definintion off good/bad reviews even if you don't know the reviwee's name
      name = blocks.nameArr[Math.floor(Math.random() * blocks.nameArr.length)]
    }
    return name
  }
  function fillRating (rating) { // checks for a good or bad rating and randomly assigns one if it doesnt exist, or has been incorrectly filled
    if (rating === undefined) {
      rating = 'unknown'
    }
    switch (rating.toLowerCase()) {
      case 'good' :
      return 'good';
      case 'bad' :
      return 'bad';
      default :
      return Math.floor(Math.random() * 2) === 0 ? 'good' : 'bad';
    }
  }
  function assembleGoodReview () { //pulls a selection of text items into a review string
    const behaviourSubject = blocks.subjects[Math.floor(Math.random() * blocks.subjects.length)];
    const behaviour = blocks.goodBehaviours[Math.floor(Math.random() * blocks.goodBehaviours.length)];
    const projSubject = blocks.subjects[Math.floor(Math.random() * blocks.subjects.length)];
    const project = blocks.projects[Math.floor(Math.random() * blocks.projects.length)];
    const projFB = blocks.projectFeedbackGood[Math.floor(Math.random() * blocks.projectFeedbackGood.length)];
    const overallFB = blocks.overallGood[Math.floor(Math.random() * blocks.overallGood.length)];
    const review = `After careful examination of your performance, including conversations with stakeholders across the organisation, a number of pieces of feedback have stood out. In particular, ${behaviourSubject} noted your ${behaviour} throughout the quarter. With regards to specific work; whilst working on ${project}, ${projSubject} called out your ${projFB}. Overall; ${overallFB}.`
    return review;
  }
  function assembleBadReview () { //pulls a selection of text items into a review string
    const behaviourSubject = blocks.subjects[Math.floor(Math.random() * blocks.subjects.length)];
    const behaviour = blocks.badBehaviours[Math.floor(Math.random() * blocks.badBehaviours.length)];
    const projSubject = blocks.subjects[Math.floor(Math.random() * blocks.subjects.length)];
    const project = blocks.projects[Math.floor(Math.random() * blocks.projects.length)];
    const projFB = blocks.projectFeedbackBad[Math.floor(Math.random() * blocks.projectFeedbackBad.length)];
    const overallFB = blocks.overallBad[Math.floor(Math.random() * blocks.overallGood.length)];
    const reviewBody = `After careful examination of your performance, including conversations with stakeholders across the organisation, a number of pieces of feedback have stood out. In particular, ${behaviourSubject} noted your ${behaviour} throughout the quarter. With regards to specific work; whilst working on ${project}, ${projSubject} called out your ${projFB}. Overall; ${overallFB}.`
    return reviewBody;
  }
  
  function fullReview(name,rating) { // main function
    let revName = fillName(name);
    let revRate = fillRating(rating) //chooses either a good or bad review
    const review = { //stores the review as an object
      reviewText : '',
      reviewGrade : 0,
    }
    if (revRate === 'good') { //chooses and fills the review
      review.reviewText = `Howdy ${revName}. ${assembleGoodReview()}`
      review.reviewGrade = `${Math.floor(Math.random() * 2) + 4} / 5` //assign a grade out of 5 (either 4 or 5)
    } else {
      review.reviewText = `Howdy ${revName}. ${assembleBadReview()}`
      review.reviewGrade = `${Math.floor(Math.random() * 2) + 1} / 5` //assign a grade out of 5 (either 1 or 2)
    }
    return review;
  }
  
  
  
  //Run code below this line
  
  console.log(fullReview(process.argv[2],process.argv[3]))