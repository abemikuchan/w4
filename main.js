const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は34度だったので、:insertx: は散歩に出かけました。 彼らが :inserty: にたどり着いたとき、彼らはしばらく恐怖で見つめ、それから :insertz: を見つめました。 Bobは全部見ましたが、驚きませんでした。:insertx: 体重は136キロで、暑い日でした。';
const insertX = ['パパ', 'ママ', 'ワンコ'];
const insertY = ['ユニバ', 'ディズニーランド', '国会議事堂'];
const insertZ = ['自然発火', '歩道の水たまりに溶ける様子', 'なめくじになって這い去る様子'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
