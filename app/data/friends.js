// Create the array of friends to compare and provide the best match

var friendData = [
	{
		name: "Lion King ~And we are all connected in the great circle of life~",
		photo: "http://24.media.tumblr.com/f40d5873e89e5a801b68ef50683790d9/tumblr_mhcybvwsT91qgwqw9o1_250.gif",
		scores: [4, 5, 5, 4, 5, 3, 5, 2, 1, 5],
	},
	{
		name: "Alice in Wonderland",
		photo: "http://www.sharegif.com/wp-content/uploads/2014/03/Alice-in-Wonderland-quotes-.gif",
		scores: [5, 3, 4, 1, 4, 4, 4, 2, 2, 5],
	},
	{
		name: "Tinker Bell ~Think happy thoughts~",
		photo: "http://31.media.tumblr.com/d1bf8daa7aef0e0f89a3d4690ae51f6a/tumblr_n35k7xyY5K1tujxubo1_500.gif",
		scores: [5, 3, 4, 3, 3, 3, 3, 2, 1, 5],
	},
	{
		name: "Tinker Bell ~Faith, Trust and a little bit of Pixie Dust~",
		photo: "http://31.media.tumblr.com/08a1c18adc857f77d01e9962c57828c6/tumblr_ndcd47sbO51qlmhbeo1_250.gif",
		scores: [5, 2, 2, 2, 2, 2, 2, 2, 1, 5],
	},
	{
		name: "Bambi ~If you cannot say something nice, don’t say nothing at all~",
		photo: "http://24.media.tumblr.com/tumblr_m4164eBqHk1qm6oc3o1_500.gif",
		scores: [4, 2, 1, 1, 1, 1, 1, 2, 1, 5],
	},
	{
		name: "Sea Horse ~The seaweed is always greener in somebody else’s lake~",
		photo: "http://38.media.tumblr.com/tumblr_m2vqxyItGE1qm6oc3o1_500.gif",
		scores: [4, 4, 3, 3, 5, 3, 2, 2, 1, 5],
	},
	{
		name: "Blanche ~They say if you dream a thing more than once it’s sure to come true~",
		photo: "http://25.media.tumblr.com/08ac60ef60fdf416969f57b00e10e28d/tumblr_muz5f8RBuK1stx47ro1_250.gif",
		scores: [4, 4, 4, 1, 3, 4, 4, 2, 1, 5],
	},
	{
		name: "Tod, the Fox ~Darlin', forever is a long, long time, and time has a way of changing things~",
		photo: "http://33.media.tumblr.com/cba8742a3416fb9d1ad2f1cbcf4082fb/tumblr_n99ttxoF0n1qhry52o1_500.gif",
		scores: [3, 2, 2, 3, 3, 5, 3, 2, 1, 5],
	},
	{
		name: "Nemo ~Keep swimming~",
		photo: "http://25.media.tumblr.com/86e435f942711d62d64788cff7accb01/tumblr_n0jbokj4Yq1tqsa5wo1_500.gif",
		scores: [3, 4, 4, 2, 2, 1, 3, 2, 1, 5],
	}
];


// Note how we export the array. This makes it accessible to other files using require. 
module.exports = friendData; 