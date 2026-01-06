function encrypt(text, n) {
  if (n <= 0 || text == null || text.length == 0) {
    return text;
  }
  let myarr = [];
  let spText = text.split("");
  for (let i = 0; i < spText.length; i++) {
    if (i % 2 != 0) {
      myarr.push(spText[i]);
      spText[i] = "";
    }
  }
  return encrypt(myarr.join("") + spText.join(""), n - 1);
}

function decrypt(encryptedText, n) {
  if (n <= 0 || text == null || encryptedText.length == 0) {
    return encryptedText;
  }
  let myT =
    encryptedText.length % 2 == 0
      ? encryptedText.slice(-encryptedText.length / 2).split("")
      : encryptedText.slice(-(encryptedText.length + 1) / 2).split("");
  let myarr = [];
  let half = Math.floor(encryptedText.length / 2);
  let encArr = encryptedText.slice(0, half).split("");
  for (let i = 0; i < encryptedText.length; i++) {
    if (i % 2 == 0) {
      myarr.push(myT[0]);
      myT.shift();
    } else {
      myarr.push(encArr[0]);
      encArr.shift();
    }
  }
  return decrypt(myarr.join(""), n - 1);
}

// =>  "01234"
// ->  "01234"

// encrypt("01234", 3);
// // =>  "13024"
// // ->  "32104"
// // ->  "20314"
// decrypt("012345", 1);
// // =>  "135024"

// decrypt("012345", 2);
// // =>  "135024"
// // ->  "304152"
// decrypt("012345", 3);
// // =>  "135024"
// // ->  "304152"
// // ->  "012345"
