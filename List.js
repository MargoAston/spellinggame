// spelling1stgrade

// This is 5 weeks of first grade spelling lists
const aList = {
  grade: "1st Grade",
    lists: [
      {
        spellingPattern: "a",
        word1: ["bat", "b", "t", "images/bat.png"],
        word2: ["flag", "fl", "g", "images/rsz_flag.png"],
        word3: ["mad", "m", "d", "images/rsz_mad.png"],
        word4: ["sam", "s", "m", "images/rsz_sam.png"],
        word5: ["pants", "p", "nts", "images/rsz_pants.png"],
        wordsCorrect: 0,
      },
      {
        spellingPattern: "i",
        word1: ["lid", "l", "d", "images/lid.png"],
        word2: ["pig", "p", "g", "images/pig.png"],
        word3: ["sit", "s", "t", "images/sit.png"],
        word4: ["drip", "dr", "p", "images/drip.png"],
        word5: ["grin", "gr", "n", "images/grin.png"],
        wordsCorrect: 0,
      }, 
      {
        spellingPattern: "e",
        word1: ["hen", "h", "n", "images/hen.png"],
        word2: ["pet", "p", "t", "images/pet.png"],
        word3: ["red", "r", "d", "images/red.png"],
        word4: ["end", "", "nd", "images/end.png"],
        word5: ["magnet", "magn", "t", "images/magnet.png"],
        wordsCorrect: 0,
      },
      {
        spellingPattern: "o",
        word1: ["box", "b", "x", "images/box.png"],
        word2: ["dog", "d", "g", "images/dog.png"],
        word3: ["frog", "fr", "g", "images/frog.png"],
        word4: ["mop", "m", "p", "images/mop.png"],
        word5: ["pot", "p", "t", "images/pot.png"],
        wordsCorrect: 0,
      },
      {
        spellingPattern: "u",
        word1: ["bug", "b", "g", "images/bug.png"],
        word2: ["gum", "g", "m", "images/gum.png"],
        word3: ["pup", "p", "p", "images/pup.png"],
        word4: ["nut", "n", "t", "images/nut.png"],
        word5: ["run", "r", "n", "images/run.png"],
        wordsCorrect: 0,
      },
    ],

    init(){
      setListInfo(this);
      
    },


    setList: function (spellingPattern) {
      // find the user selected list
      const listIndex = this.lists.findIndex((list => list.spellingPattern == spellingPattern));
      
      const currentList = this.lists[listIndex];
     
      return currentList;
    },

    setOptions: function() {
      const newArr = [];
      
      for (const item of this.lists) {
        newArr.push(item.spellingPattern);
      }
      
      return newArr;
    }

};


function setListInfo(list) {
    const listGrade = document.querySelector("#home-title");
    listGrade.textContent = list.grade;
}




export default aList;