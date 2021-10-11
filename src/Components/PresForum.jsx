import '../Assets/css/PresForum.css';
import forumimg from '../Assets/images/forumimg.jpg'


export default function PresForum(){
    return(
        <div class="presForumContainer">
           <div class="img_container">
              <img class="imggg" src={forumimg}/>
              <div class="t_text"> LE FORUM DE L'ENSI JUNIOR ENTREPRISE </div>           
           </div>  
           <div class="event_text">
             <div class="line"></div> <br/> 
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, blanditiis corrupti molestias obcaecati eius repudiandae consectetur cumque excepturi beatae assumenda voluptas laboriosam officiis aperiam eaque fuga eligendi non impedit, unde, debitis possimus ipsum placeat! Est exercitationem accusamus, doloribus voluptatem laudantium dignissimos dolorem nesciunt eligendi! Possimus facere natus aperiam, nostrum amet ad at dolorem earum id minus temporibus nisi quis nemo, fuga tempore dicta tenetur aut dolorum perferendis aspernatur, officiis animi?           </div>
           <div class="edition_text"> Dans sa 16ème édition </div> 
           </div>
  
    )
}