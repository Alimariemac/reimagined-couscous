import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
body {
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans:700|Zilla+Slab&display=swap");
  background-color: #FFF8F8;
  color:#5926E3;
}

h1{
font-family: 'Noto Sans', sans-serif;
font-size:4rem ;
@media (max-width: 400px) {
  font-size: 2rem;
}
}

h2{
font-family: 'Noto Sans', sans-serif;
font-size:3rem ;
@media (max-width: 400px) {
  font-size: 1.5rem;
}
}

h3{
font-family: 'Noto Sans', sans-serif;
font-size:2rem ;
line-height: 2rem;
@media (max-width: 400px) {
  font-size: 1.3rem;
}
}

h4{
font-family: 'Noto Sans', sans-serif;
font-size:1.3rem ;
line-height: 1.4rem;
@media (max-width: 400px) {
  font-size: 1.1rem;
}
}

p{
  font-family: 'Zilla Slab', serif;
  font-size:1.2rem;
  @media (max-width: 400px) {
    font-size: 1rem;
  }
}

.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 50s linear infinite;
}

.marquee2 span {
  animation-delay: 25s;
}

@keyframes marquee {
  0% {
    transform: translate(0%, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

a{
color:#5926E3;
}

a:hover{
  color:#FC4A96;
}
`
export { GlobalStyle }
