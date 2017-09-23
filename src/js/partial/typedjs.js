/**
 * Essential JS for Typed JS
 */
import Typed from 'typed.js' // eslint-disable-line
/* eslint-disable */
{
  const typedWord = document.querySelector('.c-typed__word')

  if (typedWord !== null) {
    const typedWords = Array.from(document.querySelectorAll('.c-typed__word'))
    if (typedWords) {
      typedWords.forEach((typedWord) => {
        const ty = new Typed(typedWord, {
          strings: typedWord.getAttribute('data-words').split(','),
          typeSpeed: parseInt(typedWord.getAttribute('data-speed')),
          loop: true
        })
      })
    }
  }
}

