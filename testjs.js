function parseScores(scoresString) {
   return scoresString.split(" ");// TODO: Compete the function
}

function buildDistributionArray(scoresArray) {
   let distribution = [0, 0, 0, 0, 0];
   if (scoresArray==0){
      return distribution;
   }

   for (i=0; scoresArray.length > i; i++){
      if (scoresArray[i] >= 90){
         distribution[0]++;
      } else if (89 >= scoresArray[i] && 80 <= scoresArray[i]){
         distribution[1]++;
      } else if (79 >= scoresArray[i] && 70 <= scoresArray[i]) {
         distribution[2]++;
      } else if (69 >= scoresArray[i] && 60 <= scoresArray[i]) {
         distribution[3]++;
      } else if (59 >= scoresArray[i]) {
         distribution[4]++;
      }
   }
}
   
   // TODO: Compete the function
}

function setTableContent(userInput) {
   let scores = parseScores(userInput);
   let scoreDistribution = buildDistributionArray(scores);
   let firstRow = document.getElementById("first-row");
   let secondRow = document.getElementById("second-row");
   let thirdRow = document.getElementById("third-row");





   let occurrences = '';
   scoreDistribution.forEach((total) => {occurrences += total});
   return secondRow.innerHTML = "<td>" + 7 + "</td>"
}

// TODO: Change the arguments for testing purposes
setTableContent("45 78 98 83 86 99 90 59");


console.log(parseScores("45 78 98 83 86 99 90 59"))