var module = (function(){
	var compareByField = "date";

	var postBlueprint = {
        id: 'String',
        description: 'String',
        createdAt: 'Date',
        author: 'String',
        photoLink: 'String',
        status: 'String'
    };

	var photoPosts = [
		{
			id:'1',
			description: 'Asics Gel-DS OG',
			createdAt: new Date('2018-02-20T09:00:00'),
			username: 'HighlyAkicktive',
			photoLink: 'https://i.ytimg.com/vi/QneRXSchgbQ/maxresdefault.jpg',
			tags: ["Asics","Gel"],
			likes: ["SneakerNews","Hypebeast"],
			status: "showing"
		},
		{
			id:'2',
			description: 'Adidas ClimaCool 2',
			createdAt: new Date('2018-02-21T10:00:00'),
			username: 'SneakerFreaker',
			photoLink: 'https://sneakerfreaker-cdn.s3-accelerate.amazonaws.com/image/adidas-climacool-2-colourways-2.jpg?mtime=20170807141036',
			tags: ["Adidas","ClimaCool"],
			likes: ["SneakerNews","Hypebeast"],
			status: "showing"
		},
		{
			id:'3',
			description: 'Nike Air Vapormax Plus',
			createdAt: new Date('2018-02-22T10:00:00'),
			username: 'SneakerNews',
			photoLink: 'https://seangoca.files.wordpress.com/2018/02/25031050357_3c087678fd_k.jpg',
			tags: ["Nike","Air"],
			likes: ["SneakerFreaker","Hypebeast"],
			status: "showing"
		},
		{
			id:'4',
			description: 'Puma Suede X Diamond Supply',
			createdAt: new Date('2018-02-24T23:00:00'),
			username: 'HighlyAkicktive',
			photoLink: 'https://i0.wp.com/s3.amazonaws.com/eukicks/wp-content/uploads/2016/12/09051431/puma-diamond-supply-on-feet-5.jpg?resize=1200%2C800',
			tags: ["Puma","Suede"],
			likes: ["SneakerFreaker","Hypebeast"],
			status: "showing"
		},
		{
			id:'5',
			description: 'Adidas x Pharrell Williams NMD Human Race Trail "Multi"',
			createdAt: new Date('2018-02-24T10:00:00'),
			username: 'SneakerNews',
			photoLink: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/11/Pharrell-x-adidas-NMD-Hu-Trail-Multicolor-3-1-681x504.png?x76107',
			tags: ["Adidas","NMD"],
			likes: ["HighlyAkicktive","Hypebeast"],
			status: "showing"
		},
		{
			id:'6',
			description: 'Saucony Shadow 6000 Easter Egg Purple',
			createdAt: new Date('2018-02-25T10:00:00'),
			username: 'Hypebeast',
			photoLink: 'https://asphaltgold.de/media/catalog/product/cache/1/image/930x669/9df78eab33525d08d6e5fb8d27136e95/s/a/saucony-shadow-6000-egg-hunt-pack---purple-1.jpg',
			tags: ["Saucony","Shadow"],
			likes: ["SneakerNews","SneakerNews"],
			status: "showing"
		},
		{
			id:'7',
			description: 'Asics Gel-DS',
			createdAt: new Date('2018-02-25T09:00:00'),
			username: 'HighlyAkicktive',
			photoLink: 'https://www.sneakerfiles.com/wp-content/uploads/2017/01/asics-gel-ds-trainer-og-retro.jpg',
			tags: ["Asics","Gel"],
			likes: ["SneakerNews","Hypebeast"],
			status: "showing"
		},
		{
			id:'8',
			description: 'Adidas ClimaCool 2',
			createdAt: new Date('2018-02-24T10:00:00'),
			username: 'SneakerFreaker',
			photoLink: 'https://www.afew-store.com/media/catalog/product/cache/2/image/17f82f742ffe127f42dca9de82fb58b1/9/8/98288_0x0/afew-store-sneaker-adidas-climacool-2-r-white-rwhite-greyone-f17-350.jpg',
			tags: ["Adidas","ClimaCool"],
			likes: ["SneakerNews","Hypebeast"],
			status: "showing"
		},
		{
			id:'9',
			description: 'Nike Air Vapormax',
			createdAt: new Date('2018-02-21T10:00:00'),
			username: 'SneakerNews',
			photoLink: 'https://cdn.thesolesupplier.co.uk/2017/09/Nike-Air-Vapormax-Flyknit-Black-849557-011-03.png',
			tags: ["Nike","Air"],
			likes: ["SneakerFreaker","Hypebeast"],
			status: "showing"
		},
		{
			id:'10',
			description: 'Puma Suede',
			createdAt: new Date('2018-02-26T23:00:00'),
			username: 'HighlyAkicktive',
			photoLink: 'https://i0.wp.com/s3.amazonaws.com/eukicks/wp-content/uploads/2016/12/09051431/puma-diamond-supply-on-feet-5.jpg?resize=1200%2C800',
			tags: ["Puma","Suede"],
			likes: ["SneakerFreaker","Hypebeast"],
			status: "showing"
		},
		{
			id:'11',
			description: 'Adidas x Pharrell Williams NMD Human Race',
			createdAt: new Date('2018-02-28T10:00:00'),
			username: 'SneakerNews',
			photoLink: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/11/Pharrell-x-adidas-NMD-Hu-Trail-Multicolor-3-1-681x504.png?x76107',
			tags: ["Adidas","NMD"],
			likes: ["HighlyAkicktive","Hypebeast"],
			status: "showing"
		},
		{
			id:'12',
			description: 'Saucony Shadow 6000 Turquoise',
			createdAt: new Date('2018-02-20T10:00:00'),
			username: 'Hypebeast',
			photoLink: 'https://avatars.mds.yandex.net/get-pdb/231404/569cde1c-4429-4e39-bbda-0e4a5c8b1efb/s800',
			tags: ["Saucony","Shadow"],
			likes: ["SneakerNews","SneakerNews"],
			status: "showing"
		},
		{
			id:'13',
			description: 'Saucony Shadow 6000 Easter Egg Purple',
			createdAt: new Date('2018-02-25T10:00:00'),
			username: 'Hypebeast',
			photoLink: 'https://asphaltgold.de/media/catalog/product/cache/1/image/930x669/9df78eab33525d08d6e5fb8d27136e95/s/a/saucony-shadow-6000-egg-hunt-pack---purple-1.jpg',
			tags: ["Saucony","Shadow"],
			likes: ["SneakerNews","SneakerNews"],
			status: "showing"
		},
		{
			id:'14',
			description: 'Asics Gel-Lyte V',
			createdAt: new Date('2018-02-25T09:00:00'),
			username: 'HighlyAkicktive',
			photoLink: 'http://moresneakers.com/wp-content/uploads/2015/08/ASICS-Mamba-Gel-5-Red_Red-Toebox.jpg',
			tags: ["Asics","Gel"],
			likes: ["SneakerNews","Hypebeast"],
			status: "showing"
		},
		{
			id:'15',
			description: 'Adidas ClimaCool 1',
			createdAt: new Date('2018-02-28T10:00:00'),
			username: 'SneakerFreaker',
			photoLink: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/07/adidas-ClimaCool-1.jpg?x76107',
			tags: ["Adidas","ClimaCool"],
			likes: ["SneakerNews","Hypebeast"],
			status: "showing"
		},
		{
			id:'16',
			description: 'Nike Air Foamposite',
			createdAt: new Date('2018-02-21T10:00:00'),
			username: 'SneakerNews',
			photoLink: 'https://images.solecollector.com/complex/images/c_crop,h_1125,w_2000,x_0,y_562/c_fill,f_auto,fl_lossy,q_auto,w_800/o1kxl6tcolaq9yvhb3c5/nike-air-foamposite-one-galay-2-ar3771-800-pair',
			tags: ["Nike","Air"],
			likes: ["SneakerFreaker","Hypebeast"],
			status: "showing"
		},
		{
			id:'17',
			description: 'Air Jordan 8 Retro',
			createdAt: new Date('2018-02-26T23:00:00'),
			username: 'HighlyAkicktive',
			photoLink: 'https://www.flightclub.com/media/catalog/product/0/1/012330_1.jpg',
			tags: ["Jordan","Air"],
			likes: ["SneakerFreaker","Hypebeast"],
			status: "showing"
		},
		{
			id:'18',
			description: 'Adidas ClimaCool 02/17',
			createdAt: new Date('2018-02-24T10:00:00'),
			username: 'SneakerFreaker',
			photoLink: 'https://hypb.imgix.net/image/2017/08/adidas-climacool-02-17-white-black-on-feet-1.jpg?q=75&w=1000&fit=max&auto=compress%2Cformat',
			tags: ["Adidas","ClimaCool"],
			likes: ["SneakerNews","Hypebeast"],
			status: "showing"
		},
		{
			id:'19',
			description: 'Nike Air Vapormax Plus',
			createdAt: new Date('2018-02-21T10:00:00'),
			username: 'SneakerNews',
			photoLink: 'https://asphaltgold.de/media/catalog/product/cache/5/image/930x669/0f396e8a55728e79b48334e699243c07/n/i/nike-wmns-air-vapormax-plus-hyper-voilet-ao4550-001-1_1.jpg',
			tags: ["Nike","Air"],
			likes: ["SneakerFreaker","Hypebeast"],
			status: "showing"
		},
		{
			id:'20',
			description: 'Puma Suede',
			createdAt: new Date('2018-02-26T23:00:00'),
			username: 'HighlyAkicktive',
			photoLink: 'https://sneakernews.com/wp-content/uploads/2017/11/puma-suede-b-boy-capsule-2.jpg',
			tags: ["Puma","Suede"],
			likes: ["SneakerFreaker","Hypebeast"],
			status: "showing"
		}
	]

	function setCompareField(comparer){
		if(comparer === "date" || comparer === "likes"){
			compareByField = comparer;
		}
	}

	function compareByDate(post1,post2){
		return post1.createdAt < post2.createdAt;
	}

	function compareByLikes(post1,post2){
		return post1.likes.length < post2.likes.length;
	}

	function comparePosts(post1,post2){
		if(compareByField === "date"){
			return compareByDate(post1,post2);
		}
		else if(compareByField === "likes"){
			return compareByLikes(post1,post2);
		}
	}

	function getPostById(id){
		return photoPosts.find(function(post){
			return post.id === id;
		});
	}

	function deletePost(id){
		for(let i = 0 ; i < photoPosts.lenght; i++){
			if(photoPosts[i].status === "showing"){
				display = "deleted";
				console.log("Post " + photoPosts[i].id + " deleted");
				return true;
			}
		}
		console.log("Unable to delete post " + photoPosts[i].id);
		return false;
	}

	function addPost(postToAdd){
		if(validatePost(postToAdd)){
			photoPosts.push(postToAdd);
			console.log("Post " + postToAdd.id + " added");
			return true;
		}
		else return false;
	}

	function editPost(id,editedPost){
		var postToEdit = getPost(id);
		if(post != null){
			Object.assign(postToEdit, editedPost);
			return true;
		}
		else return false;
	}

	function validatePost(postToValidate){
        for(var item in postBlueprint){
            if(!postToValidate.hasOwnProperty(item)){
            	console.log("post " + postToValidate.id + " is invalid");
                return false;
            }
            if(postToValidate[item].constructor.name !== postBlueprint[item]){
            	console.log("post " + postToValidate.id + " is invalid");
                return false;
            }
        }
        console.log("post " + postToValidate.id + " is valid");
        return true;
    }

    console.log(getPosts(0,photoPosts.length,{createdAt: new Date('2018-02-20T09:00:00')}));

    function getPosts(skip, top, filterConfig) {
        var postsToShow = [];
        for(var i = 0; i < photoPosts.length; i++) {
            if(photoPosts[i].status !== 'deleted') {
                postsToShow.push(photoPosts[i]);
            }
        }
        console.log("Skip: " + skip + " Top: " + top);
        console.log(filterConfig);
        if(filterConfig.createdAt != null){
            postsToShow = postsToShow.filter(function (obj) {
                return (obj.createdAt.getTime() === filterConfig.createdAt.getTime() && obj.createdAt.getDate() === filterConfig.createdAt.getDate()); });
        }
        if(filterConfig.tags != null) {
            postsToShow = postsToShow.filter(function (obj) {
                for(var i = 0 ; i < filterConfig.tags.length; i++) {
                    if(obj.tags.indexOf(filterConfig.tags[i]) === -1) {
                        return false;
                    }
                }
                return true;
            });
        }
        if(filterConfig.authors) {
            postsToShow = topostsToShowShow.filter(function (obj) {
                if(filterConfig.authors.length === 0) {
                     return true;
                }
                for(var i = 0; i < filterConfig.authors.length; i++) {
                    if(obj.author === filterConfig.authors[i]) {
                        return true;
                    }
                }
                return false;
            });
        }
        postsToShow.sort(comparePosts);
        return postsToShow.slice(skip, skip + top);
    }

    return {
    	setCompareField: setCompareField,
    	getPostById: getPostById,
        deletePost: deletePost,
        addPost: addPost,
        editPost: editPost,
        validatePost: validatePost,
        getPosts: getPosts
    }

}());