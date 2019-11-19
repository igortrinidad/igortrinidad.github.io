
export const hobbies = [
  {
    name: 'skate',
    link: 'https://media.giphy.com/media/l0HlW11zuA8Kwuq1a/giphy.gif'
  },
  {
    name: 'beer',
    link: 'https://media.giphy.com/media/Ztw0p2RGR36E0/giphy.gif'
  },
  {
    name: 'code',
    link: 'https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif'
  },
  {
    name: 'burger',
    link: 'https://media.giphy.com/media/3o7buhm1O1bOJV4ZWM/giphy.gif'
  },
  {
    name: 'hike',
    link: 'https://media.giphy.com/media/42IAU2GyaTwXe/giphy.gif'
  },
  {
    name: 'workout',
    link: 'https://media.giphy.com/media/yBjUwriEYpFyE/giphy.gif'
  },
  {
    name: 'podcast',
    link: 'https://media.giphy.com/media/X9GfRIczaYMFEiOBxb/giphy.gif'
  },
  {
    name: 'book',
    link: 'https://media.giphy.com/media/eFAFV2ytLzBba/giphy.gif'
  }
]

export const hobbiesList = hobbies.map(hobby => hobby.name)

let hobbySelected = 0

export const getHobby = function () {
  if (hobbySelected === hobbies.length - 1) {
    hobbySelected = 0
  } else {
    hobbySelected++
  }

  return hobbies[hobbySelected]
}
