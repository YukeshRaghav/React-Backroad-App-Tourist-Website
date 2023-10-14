import tour1 from'./images/tour-1.jpeg'
import tour2 from'./images/tour-2.jpeg'
import tour3 from'./images/tour-3.jpeg'
import tour4 from'./images/tour-4.jpeg'

export const pageLinks=[
    {id:1,href:'#home', text: 'home'},
    {id:2,href:'#about', text: 'about'},
    {id:3,href:'#service', text: 'service'},
    {id:4,href:'#tours', text: 'tours'}, 
];

export const socialLinks=[
    { id:1,href:"https://www.facebook.com/",icon:'fab fa-facebook'},
    { id:2,href:"https://www.twitter.com/",icon:'fab fa-twitter'},
    { id:3,href:"https://www.squarespace.com/websites-start/?channel=pbr&subchannel=go&campaign=pbr-go-us-en-core_squarespacealone-e&subcampaign=(squarespace-alone_squarespace_e)&&cid=15698980512&aid=130361054086&tid=aud-295956616929:kwd-1988643730&mt=e&eid=&loc_p_ms=9060089&loc_i_ms=&nw=g&d=c&adid=571893406301&channel2=pbr&subchannel2=go&gad=1&gclid=Cj0KCQjw1aOpBhCOARIsACXYv-fyPpkRZGue4gmwZNoCJQ5_XNPsIRNzMA6cR5mZo1GL2o51LbNpyQoaAsZoEALw_wcB&gclsrc=aw.ds",icon:'fab fa-squarespace'},

];
export const services=[
    {id:1,icon:'fas fa-wallet fa-fw',title:'saving money',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:2,icon:'fas fa-tree fa-fw',title:'endless hiking',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:3,icon:'fas fa-socks fa-fw',title:'amazing comfort',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
  
];
export const tours=[
    {id:1,image:tour1, date:'October 26, 2023',title:'Tibet Adventure',text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
location:'china',
duration:'6 days',
cost:2100,},
    {id:2,image:tour2,date:'October 27, 2023',title:'best of java',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.',
location:'indonesia',
duration:'12 days',
cost:1900,},
    {id:3,image:tour3,date:'October 28, 2023',title:'Bali',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
location:'bali',
duration:'5 days',
cost:1500,},
{id:4,image:tour4,date:'October 29, 2023',title:'India',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
location:'India',
duration:'5 days',
cost:1500,},

];