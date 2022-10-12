import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

html,
body {
  min-height: 100vh;
}

body {
  line-height: 1.5;
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-family: "Manrope", sans-serif;
  background-color: silver;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}

//footer styling - icons
.socialIcons {
margin-right: 25px;
margin-top: 2px;
user-select: none;
cursor:pointer;
text-decoration: none;
}

.select-globe {
  position: relative;
  top: 40px;
  left: 12px;
  scale: 2;

}
.select-caret {
  position: relative;
  top: 30px;
  left: 130px;
  scale: 2;
}

// keeps the footer at the bottom.
.members-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

// container for the My List-page: aligns the content directly below the navbar and keeps the footer at the bottom.
.mylist-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 4.1rem;

  @media (min-width: 950px) {
   padding-top: 6.8rem;
  }
}

`;
