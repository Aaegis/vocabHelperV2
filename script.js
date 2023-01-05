wordList = ["Alliteration", "Allusion", "Amplification", "Analogy", "Anaphora",
"Antanagoge", "Antimetabole", "Antiphrasis", "Appositive", "Enumeratio",
"Epanalepsis", "Epithet", "Epizeuxis", "Hyperbole", "Litotes",
"Metanoia", "Metaphor", "Metonymy", "Onomatopoeia", "Oxymoron",
"Parallelism", "Simile"];

document.getElementById('randomizeButton').onclick = function() {
    var selectedValue = wordList.length, randomValue;
    while (selectedValue != 0) {
        randomValue = Math.floor(Math.random() * selectedValue);
        selectedValue = selectedValue - 1;
        [wordList[selectedValue], wordList[randomValue]] = [wordList[randomValue], wordList[selectedValue]];
    }
    console.log("test");
    document.getElementById('wordTextArea').innerHTML = wordList.join('\n');
};
