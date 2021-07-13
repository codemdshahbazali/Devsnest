const generateRandomMemes = async () => {
  try {
    const response = await fetch('https://meme-api.herokuapp.com/gimme');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

document
  .getElementById('memeGeneratorButton')
  .addEventListener('click', async () => {
    const data = await generateRandomMemes();
    const divMemeContainer = document.getElementById('memeContainer');
    if (Array.from(divMemeContainer.children).length > 0) {
      Array.from(divMemeContainer.children).forEach((element) => {
        element.remove();
      });
    }
    const imgTag = document.createElement('img');
    imgTag.setAttribute('src', data.url);
    const title = document.createElement('h3');
    title.innerText = data.title;
    divMemeContainer.appendChild(title);
    divMemeContainer.appendChild(imgTag);
  });
