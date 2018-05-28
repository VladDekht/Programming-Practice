var initialize = (function(){
	var username = "SneakerFreaker";
	var skip = 0;
	var top = 10;

	function initHeader(){
		var title = document.getElementById("header-title");
		if(username){
			title.innerHTML += "| " + username;
			document.getElementById("new-post-container").style.display = "inline-flex";
			document.getElementById("menu-bar").style.display = "block";
		}
		else{
			document.getElementById("new-post-container").style.display = "none";
			document.getElementById("menu-bar").style.display = "none";
			document.getElementById("login-container").style.display = "inline-flex";
		}
	}

	function generatePost(post,i){
		var postContainer = document.createElement('div');
		postContainer.class="post-container";
		postContainer.id="post-" + i;

		var postHeaderContainer = document.createElement('div');
		postHeaderContainer.class="post-header-container";

		var postUserInfoContainer = document.createElement('div');
		postUserInfoContainer.class="user-info-container";

		var postImageContainer = document.createElement('div');
		postImageContainer.class="image-container";

		var img = document.createElement("img");
		//img.src= ;
		img.id="post-user-image-"+i;


		var pUsername = document.createElement("p");

		pUsername.class="username";
		

		postHeaderContainer.innerHTML +="<button class=\"share-button\"><img src=\"Images/share-button.png\" alt=\"\"></button>";
		postContainer.innerHTML +="<div class=\"post-image-container\"><img src=\"" + post.photoLink + "\" class=\"post-image\"></div>";
		postContainer.innerHTML += "<div class=\"post-footer-container>";
		postContainer.innerHTML += "<div class=\"like-container\">";
		postContainer.innerHTML += "<button class=\"like-button\"><img src=\"Images/Like.png\"></button>";
		postContainer.innerHTML += "</div>";
		postContainer.innerHTML += "<div class=\"post-info-container\">";
		
		var postTags = "";
		for(var str in post.tags){
			postTags += "#" + str + " ";
		}
		postContainer.innerHTML += "<p class=\"tag-textbox\">" + postTags + "</p>";
		postContainer.innerHTML += "<p class=\"date-textbox\">" + post.createdAt + "</p>";
		postContainer.innerHTML += "<p class=\"description-textbox\">" + post.description + "</p></div></div></div>";

		postImageContainer.appendChild(img);
		postUserInfoContainer.appendChild(postImageContainer);
		postUserInfoContainer.appendChild(pUsername);
		postContainer.appendChild(postHeaderContainer);
		postContainer.appendChild(postUserInfoContainer);

		//var pGeolocation = document.createElement("p"); 		Geolocation
		//pGeolocation.class="username";

		postContainer.appendChild(postHeaderContainer);
		return postContainer;
	}

	function clearContent() {
        var content = document.getElementsByClassName('body-container')[0];
        content.innerHTML = '';
        skip = 0;
    }

	function loadContent(posts){
		var rowOfThree;
		var bodyContainer = document.getElementsByClassName("body-container")[0];
		for(var i = 0; i < posts.length; i++){
			if(i%3 === 0){
				if(i>0){
					bodyContainer.appendChild(rowOfThree);
				}
				rowOfThree = document.createElement('div');
				rowOfThree.class = "row-of-three";
				rowOfThree.id = "row-" + i;
			}
			rowOfThree.appendChild(generatePost(posts[i],i));
		}
	}

	function deletePost(id){
		clearContent();
		module.deletePost(id);
		loadContent(module.getPosts(skip,top,{}));
	}

	initHeader();
	var photoPosts = module.getPosts(skip,top,{});
	//console.log(module.deletePost(1));
	deletePost(11);

});

document.addEventListener("DOMContentLoaded", initialize);