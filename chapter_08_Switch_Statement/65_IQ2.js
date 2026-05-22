let testscore = 80;

switch (true) {
    case (testscore >= 90):
        console.log("outstanding");
        break;
    case (testscore >= 80):
        console.log("excellent");
        break;
    case (testscore >= 70):
        console.log("good");
        break;
    default:
        console.log("Unsatisfactory");
        break;
}