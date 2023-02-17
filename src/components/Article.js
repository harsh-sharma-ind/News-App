import React from "react";

import { useLocation } from "react-router-dom";

function Article() {
  const location = useLocation();
  const item = location.state;

  

  return (
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img src={item.jetpack_featured_media_url} class="card-img-top" alt="..."/>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{item.slug}</h5>
        <p class="card-text">{item.title.rendered}</p>
        
      </div>
    </div>
  </div>
</div>
  );
}

export default Article;
