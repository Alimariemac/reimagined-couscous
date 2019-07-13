import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
body {
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans:700|Zilla+Slab&display=swap");
  background-color: #FFF8F8;
  color:#5926E3;
}

h1{
font-family: 'Noto Sans', sans-serif;
font-size:4.5rem ;
}

h2{
font-family: 'Noto Sans', sans-serif;
font-size:4rem ;
}

h3{
font-family: 'Noto Sans', sans-serif;
font-size:1.3rem ;
line-height: 2.3rem;
@media (max-width: 400px) {
  font-size: 1.2rem;
}
}

p{
  font-family: 'Zilla Slab', serif;
  font-size:1.5rem;

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
}

a{
color:#5926E3;
text-decoration: underline;
}
`
export { GlobalStyle }
