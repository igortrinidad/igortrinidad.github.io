<template>
  <div class="align-center">
    <span class="terminal-header-backdrop" />
    <div class="terminal-window">
      <span class="terminal-header">
        <img class="ball-0 m-l-10" src="/img/balls/ball_red_0.svg">
        <img @click="menuIsOpen = false" class="ball-1 m-l-10" src="/img/balls/ball_red_1.svg">
        <img class="ball-0 m-l-5" src="/img/balls/ball_yellow_0.svg">
        <img @click="menuIsOpen = false" class="ball-1 m-l-5" src="/img/balls/ball_yellow_1.svg">
        <img class="ball-0 m-l-5" src="/img/balls/ball_green_0.svg">
        <img @click="menuIsOpen = true" class="ball-1 m-l-5" src="/img/balls/ball_green_1.svg">
      </span>

      <div @click="openMenu()" class="terminal-content">
        <div :class="{'terminal-open' : menuIsOpen}" class="terminal-body">
          <ul v-if="menuIsOpen" class="terminal-items">
            <li @click="startTyping('menu open')">
              Available commands <span class="helper">#menu open</span>
            </li>

            <li @click="startTyping('cd /')">
              Home <span class="helper">#cd /</span>
            </li>

            <li @click.prevent="startTyping('cd projects')">
              Projects <span class="helper">#cd projects</span>
            </li>

            <li @click.prevent="startTyping('cd stories')">
              Stories <span class="helper">#cd stories</span>
            </li>

            <li @click.prevent="startTyping('cd contact')">
              Contact <span class="helper">#cd contact</span>
            </li>

            <li @click.prevent="startTyping('cat igortrindade')">
              About-me <span class="helper">#cat igortrindade</span>
            </li>

            <li @click.prevent="startTyping('menu close')">
              Close menu <span class="helper">#menu close</span>
            </li>
            <li @click.prevent="startTyping('back')">
              Back <span class="helper">#back</span>
            </li>
          </ul>
        </div>

        <span class="terminal-messages">{{ terminalMessages }}</span>
        <span class="terminal-typed">
          <span class="terminal-user">igortrindade</span>{{ terminalPath }}$
          <span class="terminal-cursor" />
          <input
            id="terminal-input"
            v-model="typed"
            @keydown.enter="handleEnter()"
            @keydown.up="getLastActionsUp()"
            @keydown.down="getLastActionsDown()"
            class="terminal-input"
            type="text"
            spellcheck="false"
            autocapitalize="none"
          >
        </span>
      </div>
    </div>

    <audio id="typing-audio" src="/audio/typing.mp3" controls style="display: none;" />
    <audio id="typing-audio-short" src="/audio/typing_short.mp3" controls style="display: none;" />
    <audio id="typing-audio-enter" src="/audio/typing_enter.mp3" controls style="display: none;" />
  </div>
</template>

<script>

import bus from '@/assets/js/event-bus'

export default {
  name: 'LayoutHeader',
  data () {
    return {
      typed: '',
      terminalMessages: "Welcome to Igor Trindade's terminal! Type commands like cd projects or click here",
      terminalPath: '',
      menuIsOpen: false,
      isTyping: false,
      actionsAvailable: [
        'menu open',
        'menu close',
        'cd home',
        'cd contact',
        'cd projects',
        'cd stories',
        'cd ../',
        'cd /',
        'cat igortrindade',
        'cat projects',
        'back'
      ],
      lastActions: [],
      lastActionsSelected: 0,
      screenWidth: 0
    }
  },

  mounted () {
    const that = this
    bus.$on('start-typing', (action) => {
      that.startTyping(action)
    })

    const storedLastActions = localStorage.getItem('lastActions')
    if (storedLastActions) {
      this.lastActions = JSON.parse(storedLastActions)
    }
    that.screenWidth = window.innerWidth

    document.body.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('btn') || evt.target.classList.contains('click-enter')) {
            document.getElementById('typing-audio-enter').play()
            setTimeout( () =>  document.getElementById('typing-audio-enter').pause(), 400)
        }
    }, false);
  },

  beforeDestroy () {
    bus.$off('start-typing')
  },
  methods: {

    getLastActionsUp () {
      if (this.lastActionsSelected >= this.lastActions.length - 1) {
        return false
      }
      if (this.lastActions.length) {
        this.typed = this.lastActions[this.lastActionsSelected]
      }

      this.lastActionsSelected++
    },

    getLastActionsDown () {
      if (this.lastActionsSelected === 0) {
        return false
      }
      if (this.lastActions.length) {
        this.typed = this.lastActions[this.lastActionsSelected]
      }

      this.lastActionsSelected--
    },

    addLastActionsItem (action) {
      this.lastActions.unshift(action)
      if (this.lastActions.length > 10) {
        this.lastActions.splice(this.lastActions.length - 1, 1)
      }
      localStorage.setItem('lastActions', JSON.stringify(this.lastActions))
    },

    openMenu () {
      if (!this.menuIsOpen) {
        this.startTyping('menu open')
      }

      if (this.screenWidth > 600) {
        document.getElementById('terminal-input').focus()
      }
    },

    startTyping (action) {
      const that = this

      if (that.isTyping) {
        return false
      }

      let counter = 0
      that.isTyping = true
      that.typed = ''
      that.terminalMessages = ''

      const interval = setInterval(() => {
        if (counter === action.length) {
          clearInterval(interval)

          setTimeout(() => {
            that.makeAction(action)
          }, (action === 'menu close') ? 100 : 1200)

          that.isTyping = false
        } else {
          that.typed += action.charAt(counter)
          counter++
        }
      }, 50)

      if (action.length <= 6) {
        document.getElementById('typing-audio-short').play()
      } else {
        document.getElementById('typing-audio').play()
      }
    },

    makeAction (action) {
      const that = this

      that.addLastActionsItem(that.typed)
      that.lastActionsSelected = 0

      that.isTyping = false
      that.typed = ''

      if (action === 'menu open') {
        if (that.menuIsOpen) {
          that.terminalMessages = 'Looks like the menu is already opened ¯\\_(ツ)_/¯'
          return
        }
        that.menuIsOpen = true
        return
      }

      if (action === 'menu close') {
        if (!that.menuIsOpen) {
          that.terminalMessages = "You're leaving so soon :("
          return
        }
        that.menuIsOpen = false
        return
      }

      if (action === 'back') {
        that.terminalMessages = ''
        window.history.back()
        that.menuIsOpen = false
        return
      }

      if (action === 'cat igortrindade') {
        that.terminalMessages = 'Nice to meet you ;)'
        that.typed = ''
        that.menuIsOpen = false
        document.getElementById('main-div').scrollTo({
          top: document.getElementById('hi-there').offsetTop - 150,
          left: 0,
          behavior: 'smooth'
        })
        return false
      }

      if (action === 'cat projects') {
        that.terminalMessages = 'Show me your codes \\o/'
        that.typed = ''
        that.menuIsOpen = false
        document.getElementById('main-div').scrollTo({
          top: document.getElementById('projects').offsetTop - 150,
          left: 0,
          behavior: 'smooth'
        })
        return false
      }

      if (action === 'cd /') {
        that.$router.push({ path: '/' })
        that.terminalPath = ''
      }

      if (action === 'cd contact') {
        that.$router.push({ path: '/contact' })
        that.terminalPath = ''
      }

      if (action === 'cd ../') {
        if (that.$route.path === '/') {
          that.terminalMessages = 'You should not leave that way'
          return false
        }
        window.history.back()
        that.terminalPath = ''
      }

      if (action === 'cd home') {
        that.$router.push({ path: '/home' })
        that.terminalPath = ':home'
      }

      if (action === 'cd projects') {
        that.$router.push({ path: '/projects' })
        that.terminalPath = ':projects'
      }

      if (action === 'cd stories') {
        that.$router.push({ path: '/stories' })
        that.terminalPath = ':stories'
      }

      if (that.menuIsOpen) {
        that.startTyping('menu close')
      }
    },

    handleEnter () {
      const that = this

      if (!that.typed.length) {
        that.terminalMessages = 'try to type commands like: cd projects or menu close'
        return false
      }

      if (that.typed === 'clear') {
        that.terminalMessages = ''
        that.typed = ''
        return false
      }

      if (that.typed === 'help') {
        that.terminalMessages = "uh oh! i'm sorry to hear that you need help to use my terminal :("
        that.typed = ''
        return false
      }

      const index = that.actionsAvailable.indexOf(that.typed)

      if (that.typed.match('cd') && index < 0) {
        that.terminalMessages = '-bash: ' + that.typed + ': no such file or directory'
        that.typed = ''
        return false
      }

      if (index < 0) {
        that.terminalMessages = '-bash: ' + that.typed + ': command not found'
        that.typed = ''
        return false
      }

      that.terminalMessages = ''
      that.makeAction(that.typed)
    }
  }
}
</script>

<style>

    *:focus {
        outline: none;
    }

    button:active,  button:focus{
        outline: none !important;
        border-radius: 5px !important;
    }

    .terminal-input{
        font-family: 'sf-mono-regular';
        border: none !important;
        width: auto;
        color: #484848;
        margin-left: -5px;
        background-color: transparent;
        font-size: 14px;
        font-weight: 500;
        margin-top: 5px;
        width: 260px;
    }

    @media (max-width: 420px) {

        .terminal-input{
            width: 150px;
        }

        .terminal-user{
            display:none;
        }
    }

    .terminal-input::-webkit-input-placeholder,
    .terminal-input::-webkit-input-placeholder {
        color: #484848;
        -webkit-text-fill-color: initial;
    }

    .terminal-window{
        z-index: 10;
        font-family: 'sf-mono-regular';
        position: fixed;
        top: 15px;
        left: 2%;
        display: block;
        width: 96%;
        height: auto;
        text-align: left;
        background-color: #fff;
        color: #262626;
        font-size: 14px;
        border-radius: 5px !important;
        border: 1px solid #A5A5A5;
        max-height: 100%;
        overflow-y: auto;
        overflow-x:hidden
    }

    .terminal-body{
        display: block;
        transform: translateY(-80vh);
        transition: all 0.6s ease-out;
        height: 0px;
    }

    .terminal-open{
        display: block;
        height: 60vh;
        transform: translateY(0vh);
        margin-top: 50px;
    }

    .terminal-header{
        position: absolute;
        z-index: 10;
        top: -2px;
        left: -1px;
        right: -1px;
        display: block;
        height: 30px;
        text-align: left;
        background-color: #f4f3f4;
        background-image: linear-gradient(180deg, #f4f3f4 12%, #dedcde 50%, #cfcdcf 100%);
        border: 1px solid #7E7E7E;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .terminal-header-backdrop{
        position: fixed;
        top: 0;
        left: -10px;
        right: 0;
        z-index: 10;
        display: block;
        width: 110%;
        margin-left: 5px;
        margin-right: 5px;
        height: 40px;
        margin-top: -20px;
        background-color: #1A3742;
    }

    .terminal-messages{
        display: block;
        max-width: 100%;
        margin-top: 50px;
        min-height: 25px;
    }

    .terminal-open ~ .terminal-messages{
        margin-top: 0px;
    }

    .terminal-content{
        padding: 0px 10px 10px 15px;
    }

    .ball-0{
        display: inline-block;
        margin-top: 7px;
        width: 15px;
        height: 15px;
    }

    .ball-1{
        display: none;
        margin-top: 7px;
        width: 15px;
        height: 15px;
    }

    .terminal-header:hover .ball-0{
        display: none;
    }

    .terminal-header:hover .ball-1{
        display: inline-block;
    }

    .terminal-cursor{
        animation: blinker 1.1s linear infinite;
    }

    @keyframes blinker {
        65% {
            opacity: 1;
        }
        80% {
            opacity: 0;
        }
    }

    .terminal-items{
        margin-top: 20px;
        max-height: 100%;
        overflow-y: scroll;
    }

    ul { list-style-position: inside; padding-left: 0;}

    ul li{
        cursor: pointer;
    }

    li{
        list-style: none;
        margin: 10px;
        background-color: #484848;
        color: #FFF;
        padding: 10px;
    }

    li .helper{
        color: #C3C3C3;
        text-decoration: italic;
    }

    .terminal-items::-webkit-scrollbar-button{ display: none; height: 13px; border-radius: 0px; background-color: #AAA; }
    .terminal-items::-webkit-scrollbar-button:hover{ background-color: #AAA; }
    .terminal-items::-webkit-scrollbar-thumb{ background-color: #CCC; }
    .terminal-items::-webkit-scrollbar-thumb:hover{ background-color: #CCC; }
    .terminal-items::-webkit-scrollbar-track{ background-color: #efefef; }
    .terminal-items::-webkit-scrollbar-track:hover{ background-color: #efefef; }
    .terminal-items::-webkit-scrollbar{ width: 13px; }

    .btn-back{
        position: absolute;
    }

</style>
