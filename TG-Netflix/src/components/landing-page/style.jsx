import style from 'styled-components';
import bgImage from '../../assets/landing-page/NetflixBg2.jpg';

// Variables for Netflix' color pallet
// https://www.color-hex.com/color-palette/22942

export const Container = style.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: rgb(0,0,0, 0.6);
    width: 100%;
    

    @media only screen and (max-width: 800px){
    background-color: black;
    }
`;

export const Background = style.div`
background-image: url(${bgImage}); 
background-repeat: no-repeat;
background-position: center;
background-size: cover;
min-width: 100%;
`;

export const Logo = style.div`
width:100%;
height: 90px;
padding: 2rem;
position: relative;
@media only screen and (max-width: 800px){
    margin: 0;
    padding: 1rem;
    top: 0;
}

svg {
    width: 250px;
    height: 50px;
    fill:  rgba(219,0,0);
}
`;

export const LoginCard = style.div`
background-color: rgb(0,0,0);
color: rgb(255,255,255);
border-radius: 2%;
max-width: 450px;
min-height: 350px;
margin: 0 auto;
margin-top: 15rem;
margin-bottom: 5rem;
padding-top: 5rem;
padding-bottom: 5rem;
text-align: center;
font-size: 1.7rem;

@media only screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
    margin: 0 auto;
    border-radius: 0;
    margin-top: 10rem;
    margin-bottom: 10rem;
}

h1, h2 {
    
    padding: 0.35rem;
    margin: 0.35rem;
    @media only screen and (max-width: 800px) {
        padding: 0.25rem;
        margin: 0.25rem;
    }
}
`;

export const WelcomeButton = style.div`
text-align: left;
display: flex;
flex-direction: column;
justify-content: center;
padding: 30px 40px 20px;
@media only screen and (max-width: 800px) {
    margin: auto;
    min-width: 90%;
    padding: 20px 30px 10px;
}

button {
    width: 100%;
    margin: 2rem 0 1rem;
    padding: 2rem 0;
    border-radius: 2%;
    border: none;
    background-color: rgba(219,0,0);
    color: rgb(255,255,255);
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
}
`;

// export const Input = style.div`
// label{
//     margin: 0.75rem 0;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// }

// input{
//     border: none;
//     border-radius: 4px;
//     width: 100%;
//     line-height: 50px;
//     padding: 5px 10px 0;
//     @media only screen and (max-width: 800px){
//     padding: 0.35rem;
//     margin: 0.20rem;
//     }

//     &:focus {
//         background-color: rgb(211,211,211);
//         outline: none;
//     }
// }
// `;

// export const Subform = style.div`
// display: flex;
// justify-content: space-between;
// flex-wrap: wrap;
// margin: 0.5rem;
// font-size: 1.25rem;

// input[type= checkbox]{
//     appearance: none;
//     position: relative;
//     width: 1.5rem;
//     height: 1.5rem;
//     margin-right: 0.35rem;
//     border: (255,255,255);
//     background-color: grey;
//     color: rgb(255,255,255);
//     vertical-align: -3px;

//     &: hover{
//         cursor: pointer;
//     }

//     &::before {
//         content: "";
//         visibility: hidden;
//         width: 1.5rem;
//         height: 1.5rem;
//         position: absolute;
//         font-size: 1.5rem;
//         right: -1px;
//         top: -1px;
//         background-color: rgba(219,0,0);
//         border: 1px solid rgba(255, 255, 255);
//       }

//      &:checked::before{
//         visibility: visible;
//      } 
// }
// `;

export const ExtraInfo = style.div`
text-align: left;
padding: 1rem 3rem;
margin: 1.5rem;
font-size: 1.10rem;
@media only screen and (max-width: 800px){
    padding: 0 2rem;
    margin: 0 1.5rem;
}

.landingpage-link {
    color: white;
}
`;

