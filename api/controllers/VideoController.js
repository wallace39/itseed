/**
 * VideoController
 *
 * @描述 : 影音專區
 * @文件 : See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	//回傳給前台欲顯示的影片Array
	find: function(req, res){
		Video.find()
		.where({ visible: true })
		.sort({ order: 'asc' })
		.exec(function(err, videos){
			if(err)
				res.end(JSON.stringify(err));
			else{
				if(videos.length == 0){
					res.end("還沒有影片啦");
				}
				else{
					return res.view("frontend/pages/video", {
						videos: videos
					});
				}
			}
		});
    },
    //新增影片
    create: function(req, res){
    	if(req.session.type=="admin"){
    		var sid;

/*    		ThreadStatistics.create()
    		.exec(function(err, data){
    			if(err){
    				res.end(JSON.stringify(err));
    			}
    			else{
    				var newThread = {
    					poster: req.session.userid,
    					forum: req.body.fid,
    					title: title,
    					content: content,
    					statistics: data.id
    				}
    				ForumThread.create(newThread)
    				.exec(function(err, data){
    					if(err){
    						res.end(JSON.stringify(err));
    					}
    					else{
    						return res.redirect("back");  
    					} 
    				});
    			}
    		});*/
    	}
    	else{
    		return res.view("redirect", {
    			message: "請先登入",
    			url: "/forum?id="+req.body.fid
    		});
    	}
    },

    update: function(req, res){
    },

    destroy: function(req, res){
    },
};


/*Video.findOne({
	id: "1"
})
.exec(function(err, videos){
	if(err)
		res.end("err");
	else{
		if(!videos){
			res.end("empty");
		}
		else{
			res.end("something");
		}
	}
});*/
