import SantaFeLogo from '../_images/santafe_logo.png';
import SantaCruzLogo from '../_images/santacruz_logo.png';
import EntreRiosLogo from '../_images/entrerios_logo.png';
import SanJuanLogo from '../_images/sanjuan_logo.png';


export const PrimaryTheme = {
    "id":"PrimaryTheme",
    logoSrc: SantaCruzLogo,
    button:{
        primary:'white',
    },
    "banco":"Santa Cruz",
    "primaryColor": "#0971ce"
}
export const SecondaryTheme = {
    "id":"SecondaryTheme",
    logoSrc: EntreRiosLogo,
    "banco":"Entre Rios",
    "primaryColor": "#e31d1a",
    button:{
        primary:'white',
    },
}
export const ThirdTheme = {
    "id":"ThirdTheme",
    logoSrc: SantaFeLogo,
    "banco":"Santa Fe",
    "primaryColor": "#00953a",
    button:{
        primary:'white',
    },
}
export const FourthTheme = {
    "id":"FourthTheme",
    logoSrc: SanJuanLogo,
    "banco":"San Juan",
    "primaryColor": "#fec525",
    button:{
        primary:'black',
    },
}

 

export const ThemeButtons = [{
    id : PrimaryTheme.id,
    background : "#0971ce",
    "color" : "white",
    "banco" : "SC"
},
{
    id : SecondaryTheme.id,
    background : "#e31d1a",
    "color" : "white",
    "banco" : "ER"
},
{
    id : ThirdTheme.id,
    background : "#00953a",
    "color" : "white",
    "banco" : "SF"
},
{
    id : FourthTheme.id,
    background : "#fec525",
    "color" : "white",
    "banco" : "SJ"

}
];


export const Themes=[PrimaryTheme,SecondaryTheme,ThirdTheme,FourthTheme];

