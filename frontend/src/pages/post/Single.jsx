import React from "react";
import Edit from "../../img/edit.png";
import Delete from "../../img/delete.png"; 
import {Link} from "react-router-dom"
import Menu from "../../components/menu/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://www.wordzz.com/wp-content/uploads/ram/ramayan/ramayan-tv.jpeg" alt="" />

        <div className="user">
        <img src="https://www.wordzz.com/wp-content/uploads/ram/ramayan/ramayan-tv.jpeg" alt="" />
          <div className="info">
            <span>Rupam</span>
            <p> 2 days ago.</p>
          </div>
          <div className="edit">
          <Link to="/update">
            <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit illum eius commodi.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto minus aperiam corporis nobis laborum quae consequatur, eius ut optio cupiditate iste iusto. Facere dolores assumenda ipsum similique nemo sequi dolorem vitae est praesentium nesciunt nostrum atque omnis iste quidem itaque ipsa enim ex veniam voluptas numquam, iure eum doloribus porro. Eligendi debitis autem ex illo molestiae. Nobis deleniti culpa ut accusantium eveniet maxime quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perferendis cum doloremque dolor deserunt? Molestiae, delectus. Nesciunt quasi nam quae, voluptates voluptas ex quos ducimus, fugiat et molestiae voluptate quis doloribus totam blanditiis dignissimos incidunt suscipit. Iure possimus dignissimos temporibus perspiciatis vitae quas adipisci ipsa ullam dicta dolorum voluptate beatae ad nostrum voluptatibus illo, omnis, tenetur enim tempora reprehenderit facilis eaque, quis asperiores obcaecati. Ab, ducimus suscipit et similique qui aperiam sequi, laborum id accusantium, ad in commodi inventore quae facilis obcaecati omnis. Facilis saepe veniam, earum aut recusandae harum voluptates officiis quibusdam ullam odio explicabo debitis aspernatur fugit soluta provident consectetur natus! Nostrum reiciendis non esse id distinctio natus sapiente repellat doloribus tempora optio fuga aut eveniet et adipisci, aliquam, nisi unde debitis a rem. Corporis asperiores quis similique assumenda iste tenetur dignissimos placeat facere neque. Natus voluptatem id non, quae nulla quos laborum? Rerum illo nesciunt eligendi ea deleniti eius magnam, modi tenetur assumenda explicabo? Sunt corrupti est laudantium officiis aspernatur magni velit iste similique nemo ratione accusamus provident vel saepe illum doloribus harum, dolores optio vero libero. At, pariatur dolorum! Explicabo impedit blanditiis dicta id iure magni perferendis et pariatur itaque error iste nemo excepturi, repudiandae velit vero perspiciatis delectus voluptatem omnis a, atque sunt. Impedit itaque quae numquam?</p>
      </div>
      <div className="menu"> <Menu/></div>
    </div>
  );
};

export default Single;
